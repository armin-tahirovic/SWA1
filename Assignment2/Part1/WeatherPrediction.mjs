import { EventDataTypeFunctional } from './EventDataTypeFunctional.mjs'

class WeatherPrediction extends EventDataTypeFunctional {
    constructor(minValue, maxValue, time, place, type, unit) {
        super(time, place, type, unit)
        this.minValue = minValue
        this.maxValue = maxValue
    }

    getMin() {
        return this.minValue
    }

    getMax() {
        return this.maxValue
    }

    matches(weatherData){
        if(weatherData.getTime() === this.time && weatherData.getPlace() === this.place && weatherData.getType() === this.type && weatherData.getUnit() === this.unit && weatherData.getValue() >= this.minValue && weatherData.getValue() <= this.maxValue){
            return true
        } else {
            return false
        }
    }


}

export { WeatherPrediction }
