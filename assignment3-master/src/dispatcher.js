// eslint-disable-next-line
export default store => async ({ type, ...params }) => {
    switch (type) {
        case 'copenhagenWeather':
            const weatherC = await fetch('http://localhost:8080/data/Copenhagen').then(res => res.json())
            const forecastC = await fetch('http://localhost:8080/forecast/Copenhagen').then(res => res.json())
            store({ type, ...params, weatherC, forecastC })
            break;

        case 'aarhusWeather':
            const weatherAa = await fetch('http://localhost:8080/data/Aarhus').then(res => res.json())
            const forecastAa = await fetch('http://localhost:8080/forecast/Aarhus').then(res => res.json())
            store({ type, ...params, weatherAa, forecastAa })
            break;

        case 'horsensWeather':
            const weatherH = await fetch('http://localhost:8080/data/Horsens').then(res => res.json())
            const forecastH = await fetch('http://localhost:8080/forecast/Horsens').then(res => res.json())
            store({ type, ...params, weatherH, forecastH })
            break;

        case 'fromDateToDate':
            store({ type, ...params })
            break;

        default:
    }
}