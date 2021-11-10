const model = (weather, forecast) => {

    const Weather = () => weather
        .sort((a, b) => (a.time > b.time) ? -1 : 1)

    const Forecast = () => forecast
        .sort((a, b) => (a.time > b.time) ? -1 : 1)

    const CityWeatherData = (weather, forecast) => model(weather, forecast)

    const TimeWeatherData = (from, to) => model(filterWeatherDate(from, to), filterForecastDate(from, to))

    const filterWeatherDate = (from, to) => weather
        .filter(w => w.time >= from && w.time <= to)

    const filterForecastDate = (from, to) => forecast
        .filter(f => f.time >= from && f.time <= to)

    const all = () => model(weather, forecast)

    return { Weather, Forecast, CityWeatherData, filterWeatherDate, filterForecastDate, TimeWeatherData, all }
}

export default model