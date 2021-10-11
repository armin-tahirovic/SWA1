import { EventDataTypeFunctional } from "./EventDataTypeFunctional.mjs"

class WeatherData extends EventDataTypeFunctional {
    constructor(value, time, place, type, unit) {
        super(time, place, type, unit)
        this.value = value
    }

    getValue() {
        return this.value
    }
}

export { WeatherData }