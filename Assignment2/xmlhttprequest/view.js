const view = (window) => {
    const document = window.document
    const table_body = document.getElementById('WeatherData')

    const addweatherData = w => {
        const tr = table_body.appendChild(document.createElement('tr'))
        tr.insertCell().appendChild(document.createTextNode(w.value))
        tr.insertCell().appendChild(document.createTextNode(w.type))
        tr.insertCell().appendChild(document.createTextNode(w.unit))
        tr.insertCell().appendChild(document.createTextNode(w.time))
        tr.insertCell().appendChild(document.createTextNode(w.place))
        if (w.precipitation_type) tr.insertCell().appendChild(document.createTextNode(w.precipitation_type))
        if (w.direction) tr.insertCell().appendChild(document.createTextNode(w.direction))
    }

    const displayError = e => {
        const msg_board = document.getElementById('error message')
        msg_board.innerText = e
    }

    const update = model => {
        while(table_body.firstChild) table_body.removeChild(table_body.firstChild)
        model.weatherData().forEach(addweatherData)
    }

    const prompt = window.prompt.bind(window)

    return { addweatherData, update, prompt, displayError}
}