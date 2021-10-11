const model = (weathers, filter = () => true) => {
    const weatherData = () => weathers
    .map(w => ({...w}))
    .filter(filter)

    const filtered = filter => model(weathers, filter)
    const all = () => model(weathers)

    return {weatherData, filtered, all}
}
