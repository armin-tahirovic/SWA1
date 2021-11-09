// eslint-disable-next-line
export default store => async ({ type, ...params }) => {
    let weather
    let forecast
    switch (type) {
        case 'copenhagenWeather':
            const weatherC = await fetch('http://localhost:8080/data/Copenhagen').then(res => res.json())
            console.log(weather)
            store({ type, ...params, weatherC })
            break;

        case 'aarhusWeather':
            weather = await fetch('http://localhost:8080/data/Horsens')
            store({ type, ...params, weather })
            break;

        case 'horsensWeather':
            weather = await fetch('http://localhost:8080/data/Aarhus')
            store({ type, ...params, weather })
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