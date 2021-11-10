// eslint-disable-next-line
export default (init_model, view, renderer) => {
    let model = init_model

    function reducer(action, model) {
        switch (action.type) {
            case 'copenhagenWeather':
                const { weatherC, forecastC } = action
                return model.CityWeatherData(weatherC, forecastC)

            case 'aarhusWeather':
                const { weatherAa, forecastAa } = action
                return model.CityWeatherData(weatherAa, forecastAa)

            case 'horsensWeather':
                const { weatherH, forecastH } = action
                return model.CityWeatherData(weatherH, forecastH)

            case 'fromDateToDate':
                return model.TimeWeatherData(action.param, action.params)

            default:
                return model
        }
    }

    return action => {
        model = reducer(action, model)
        renderer(view(model))
    }
}