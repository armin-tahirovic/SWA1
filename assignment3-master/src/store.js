// eslint-disable-next-line
export default (init_model, view, renderer) => {
    let model = init_model

    function reducer(action, model) {
        const { city } = action
        switch (action.type) {
            case 'copenhagenWeather':
                return model.CityWeatherData(city)

            case 'aarhusWeather':
                return model.CityWeatherData(city)

            case 'horsensWeather':
                return model.CityWeatherData(city)

            // Forecast
            case 'copenhagenForecast':
                return model.CityForecastData(city)

            case 'aarhusForecast':
                return model.CityForecastData(city)

            case 'horsensForecast':
                return model.CityForecastData(city)

            default:
                return model
        }
    }

    return action => {
        model = reducer(action, model)
        renderer(view(model))
    }
}