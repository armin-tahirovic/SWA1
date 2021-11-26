import './index.css';
import updateWarnings from './model.js'
import { reduce } from './reduce.js'
import { server_dispatch } from './dispatcher'
import { create_view } from './view'
import { Subject, merge } from 'rxjs'
import { webSocket } from "rxjs/webSocket";
import { map, scan } from 'rxjs/operators'

import ReactDOM from 'react-dom';

const ws = webSocket('ws://localhost:8090/warnings')

ws.onopen = () => {
  const message = JSON.stringify({ command: 'subscribe' })
  ws.send(message)
}

ws.onmessage = () => {
  console.log(ws.warnings)
}

const actions = new Subject()
const dispatch = action => actions.next(action)
const render = dom => ReactDOM.render(dom, document.getElementById('root'))
const view = create_view(dispatch)

actions
  .pipe(map(server_dispatch))
  .subscribe(command => ws.warnings.next(command))

merge(actions)
  .pipe(scan(reduce, updateWarnings(ws.warnings)))
  .pipe(map(view))
  .subscribe(render)