import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { model } from './model'
import { server_dispatch_rx } from './dispatcher'
import { store } from './store'
import { ajax } from 'rxjs/ajax'
import ReactDOM from 'react-dom';

ajax.getJSON('http://localhost:8080/warnings')
.subscribe(warnings => {
    const dispatch = action => actions.next(action)
    const render = dom => ReactDOM.render(dom, document.getElementById('root'))
    const view = create_view(dispatch)
    const init_state = model({warnings})

    render(view(init_state))

    actions
  .pipe(mergeMap(server_dispatch_rx))
  .pipe(scan(store, init_state))
  .pipe(map(view))
  .subscribe(render)
})
