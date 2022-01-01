import {WeatherPredictionClass} from "./WeatherPredictionClass.mjs"

class PrecipitationPrediction extends WeatherPredictionClass{
    constructor(minValue, maxValue, time, place, type, unit, expectedTypes){
        super(minValue, maxValue, time, place, type, unit)
        this.expectedTypes = expectedTypes
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

        return {minValue, maxValue}  
    }

    convertToMM() {
        let minValue = this.getMin()
        let maxValue = this.getMax()
        if(this.unit === "Inch") {
            minValue = this.getMin() * 25.4
            maxValue = this.getMax() * 25.4
        }

        return {minValue, maxValue}  
    }
}

let rain = new PrecipitationPrediction(15, 75, 2021, "Home", "Rain", "MM", "Rain")
console.log(rain.convertToInches().minValue)