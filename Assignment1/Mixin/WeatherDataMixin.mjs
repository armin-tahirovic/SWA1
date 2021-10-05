import { event, dataType } from "./EventDataTypeMixin.mjs";

function weatherData(value, time, place, type, unit) {

    const eventFunction = event(time, place)
    const dataTypeFunction = dataType(type, unit)

    function getValue() {
        return value
    }

    return {...eventFunction, ...dataTypeFunction, getValue}
}

let weather = weatherData(20, 2000, "VIA", "Rain", "mm")
console.log(weather.getType(), weather.getPlace())

export { weatherData }