import {weatherPrediction} from "./weatherPredictionMixin.mjs"

function windPrediction(minValue, maxValue, expectedDirection, time, place, type, unit) {

    function getExpectedDirection() {
        return expectedDirection
    }


    function convertToMPH() {
        if(unit === "MS") {
            minValue = minValue * 2.236936
            maxValue = maxValue * 2.236936
            unit = "MPH"
        }
        return {unit, minValue, maxValue} 
    }

    function convertToMS() {
        if(unit === "MPH") {
            minValue = minValue * 0.44704
            maxValue = maxValue * 0.44704
            unit = "MS"
        }
        return {unit, minValue, maxValue} 
    }

    const weatherPrediction_ = weatherPrediction(minValue, maxValue, time, place, type, unit)

    return {
        ...weatherPrediction_,
        getExpectedDirection,
        convertToMPH,
        convertToMS
    }
}