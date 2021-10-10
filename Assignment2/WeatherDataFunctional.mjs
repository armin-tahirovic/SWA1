import { EventDataTypeFunctional } from "./EventDataTypeFunctional.mjs"

class WeatherDataFunction extends EventDataTypeFunctional {
    constructor(value, time, place, type, unit) {
        super(time, place, type, unit)
        this.value = value
    }

    getValue() {
        return this.value
    }
}

let weather = new WeatherDataFunction(20, 2000, "VIA", "Snow", "mm")
console.log(weather.getType())

export { WeatherDataFunction }