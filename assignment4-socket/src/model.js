const model = (weather, forecast, warnings) => {

    const Weather = () => weather
        .sort((a, b) => (a.time > b.time) ? -1 : 1)

    const CityWeatherData = (weather, forecast) => model(weather, forecast)

    const TimeWeatherData = (from, to) => model(filterDate(from, to), forecast)

    const filterDate = (from, to) => weather
        .filter(w => w.time >= from && w.time <= to)

    // Forecast
    const CityForecastData = city => forecast
        .sort((a, b) => (a.time > b.time) ? -1 : 1)
        .filter(f => f.place === city)

    const TimeForecastData = (from, to) => forecast
        .sort((a, b) => (a.time > b.time) ? -1 : 1)
        .filter(f => f.time >= from && f.time <= to)

    const updateWarnings = (newWarnings) => model(weather, forecast, newWarnings)

    const all = () => model(weather, forecast, warnings)

    return { Weather, CityWeatherData, filterDate, CityForecastData, TimeWeatherData, TimeForecastData, updateWarnings, all }
}

export default model