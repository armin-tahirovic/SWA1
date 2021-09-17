import { event, dataType } from "./EventDataType.mjs";

function weatherData(value, time, place, type, unit) {

    function getValue() {
        return value
    }

    const eventFunction = event(time, place)
    const dataTypeFunction = dataType(type, unit)

    return {...eventFunction, ...dataTypeFunction, getValue}
}

let weather = weatherData(20, 2000, "VIA", "Rain", "mm")
console.log(weather.getType(), weather.getPlace())