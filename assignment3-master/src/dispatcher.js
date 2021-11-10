// eslint-disable-next-line
export default store => async ({ type, ...params }) => {
    let forecast
    switch (type) {
        case 'copenhagenWeather':
            const weatherC = await fetch('http://localhost:8080/data/Copenhagen').then(res => res.json())
            store({ type, ...params, weatherC })
            break;

        case 'aarhusWeather':
            const weatherAa = await fetch('http://localhost:8080/data/Aarhus').then(res => res.json())
            store({ type, ...params, weatherAa })
            break;

        case 'horsensWeather':
            const weatherH = await fetch('http://localhost:8080/data/Horsens').then(res => res.json())
            store({ type, ...params, weatherH })
            break;

        case 'fromDateToDate':
            const weatherF = await fetch('http://localhost:8080/data').then(res => res.json())
            const weatherT = await fetch('http://localhost:8080/forecast').then(res => res.json())
            store({ type, ...params, weatherF, weatherT })
            break;

        // Forecast
        case 'copenhagenForecast':
            forecast = await fetch('http://localhost:8080/forecast/Copenhagen')
            store({ type, ...params, forecast })
            break;

        case 'aarhusForecast':
            forecast = await fetch('http://localhost:8080/forecast/Aarhus')
            store({ type, ...params, forecast })
            break;

        case 'horsensForecast':
            forecast = await fetch('http://localhost:8080/forecast/Horsens')
            store({ type, ...params, forecast })
            break;

        default:
    }
}