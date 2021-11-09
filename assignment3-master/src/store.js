// eslint-disable-next-line
export default (init_model, view, renderer) => {
    let model = init_model

    function reducer(action, model) {
        const { weather } = action
        switch (action.type) {
            case 'copenhagenWeather':
                const { weatherC } = action
                return model.CityWeatherData(weatherC)

            case 'aarhusWeather':
                const { weatherAa } = action
                console.log(weatherAa)
                return model.CityWeatherData(weatherAa)

            case 'horsensWeather':
                const { weatherH } = action
                return model.CityWeatherData(weatherH)

            case 'fromDateToDate':
                // const { weatherF, weatherT } = action
                console.log(action.params)
                return model.TimeWeatherData(action.param, action.params)

            // Forecast
            case 'copenhagenForecast':
                return model.CityForecastData(weather)

            case 'aarhusForecast':
                return model.CityForecastData(weather)

            case 'horsensForecast':
                return model.CityForecastData(weather)

            default:
                return model
        }
    }

    return action => {
        model = reducer(action, model)
        renderer(view(model))
    }
}