const model = (weather, forecast) => {

    const Weather = () => weather
        .sort((a, b) => (a.time > b.time) ? -1 : 1)

    const CityWeatherData = city => weather
        .sort((a, b) => (a.time > b.time) ? -1 : 1)
        .filter(w => w.place === city)

    const TimeWeatherData = (from, to) => weather
        .sort((a, b) => (a.time > b.time) ? -1 : 1)
        .filter(w => w.time >= from && w.time <= to)

    // Forecast
    const CityForecastData = city => forecast
        .sort((a, b) => (a.time > b.time) ? -1 : 1)
        .filter(f => f.place === city)

    const TimeForecastData = (from, to) => forecast
        .sort((a, b) => (a.time > b.time) ? -1 : 1)
        .filter(f => f.time >= from && f.time <= to)

    const all = () => model(weather, forecast)

    return { Weather, CityWeatherData, CityForecastData, TimeWeatherData, TimeForecastData, all }
}

export default model