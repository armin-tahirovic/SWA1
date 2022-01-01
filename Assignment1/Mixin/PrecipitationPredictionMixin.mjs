import {weatherPrediction} from "./weatherPredictionMixin.mjs"

function precipitationPrediction(minValue, maxValue, expectedTypes, time, place, type, unit) {

    function getExpectedTypes() {
        return expectedTypes
    }

    function convertToInches() {
        if(unit === "MM") {
            minValue = minValue * 0.039370
            maxValue = maxValue * 0.039370
            unit = "Inch"
        }

        return {unit, minValue, maxValue}  
    }

    function convertToMM() {
        if(unit === "Inch") {
            minValue = minValue * 25.4
            maxValue = maxValue * 25.4
            unit = "MM"
        }

        return {unit, minValue, maxValue}  
    }

    const weatherPrediction_ = weatherPrediction(minValue, maxValue, time, place, type, unit)

    return {
        ...weatherPrediction_,
        getExpectedTypes,
        convertToInches,
        convertToMM
    }
}

let rain = precipitationPrediction(15, 75, "Rain", 2021, "Home", "Rain", "MM")
console.log(rain.convertToInches().minValue)
console.log(rain.getMin())