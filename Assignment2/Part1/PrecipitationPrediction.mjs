import { WeatherPrediction } from './WeatherPrediction.mjs'

class precipitationPrediction extends WeatherPrediction{
    constructor(minValue, maxValue, time, place, type, unit, expectedTypes){
        super( time, place, type, unit, minValue, maxValue)
        this.expectedTypes = expectedTypes
        Object.freeze(this)
    }


    getExpectedTypes() {
        return this.expectedTypes
    }

    convertToInches() {
        let minValue = this.getMin()
        let maxValue = this.getMax()
        if(this.unit === "MM") {
            minValue = this.getMin() * 0.039370
            maxValue = this.getMax() * 0.039370
        }

        return new precipitationPrediction  (this.time, this.place, this.type, this.unit, minValue, maxValue, this.expectedTypes)
    }

    convertToMM() {
        let minValue = this.getMin()
        let maxValue = this.getMax()
        if(this.unit === "Inch") {
            minValue = this.getMin() * 25.4
            maxValue = this.getMax() * 25.4
        }

        return new precipitationPrediction  (this.time, this.place, this.type, this.unit, minValue, maxValue, this.expectedTypes) 
    }
}