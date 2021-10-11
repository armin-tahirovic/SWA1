import { WeatherPrediction } from './WeatherPrediction.mjs'

class TemperaturePrediction extends WeatherPrediction {
    constructor(minValue, maxValue, time, place, type, unit) {
        super(time, place, type, unit, minValue, maxValue)
        Object.freeze(this)
    }

    convertToF() {
        let minValueinF = this.getMin()
        let maxValueinF = this.getMax()
        if(this.getUnit() === "C") {
            minValueinF = this.getMin() * 1.8 + 32
            maxValueinF = this.getMax() * 1.8 + 32
        }

        return new TemperaturePrediction(this.time, this.place, this.type, this.unit, minValueinF, maxValueinF)
     }

    convertToC() {
        let minValueinC = this.getMin()
        let maxValueinC = this.getMax()
        if(this.unit === "F") {
            minValueinC = (this.getMin() - 32) / 1.8
            maxValueinC = (this.getMax() - 32) / 1.8
            this.unit = "C"
        }

        return new TemperaturePrediction(this.time, this.place, this.type, this.unit, minValueinC, maxValueinC)  
    }
}
