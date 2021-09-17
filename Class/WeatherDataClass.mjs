import { EventDataType } from "./Class/EventDataTypeClass.mjs";

class WeatherDataClass extends EventDataType {
    constructor(value, time, place, type, unit) {
        super(time, place, type, unit)
        this.value = value
    }

    getValue() {
        return this.value
    }
}

let weather = new WeatherDataClass(20, 2000, "VIA", "Snow", "mm")
console.log(weather.getType())