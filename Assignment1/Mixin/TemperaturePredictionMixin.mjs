import {weatherPrediction} from "./weatherPredictionMixin.mjs"

function temperaturePrediction(minValue, maxValue, time, place, type, unit) {

    function convertToF() {
       
        if(unit === "C") {
            minValue = minValue * 1.8 + 32
            maxValue = maxValue * 1.8 + 32
            unit = "F"
        }

        return {unit, minValue, maxValue}  
     }

    function convertToC() {
        if(unit === "F") {
            minValue = (minValue - 32) / 1.8
            maxValue = (maxValue - 32) / 1.8
            unit = "C"
        }

        return {unit, minValue, maxValue}  
    }

    const weatherPrediction_ = weatherPrediction(minValue, maxValue, time, place, type, unit)

    return {...weatherPrediction_, convertToF, convertToC}
}

let rain = temperaturePrediction(10, 20, 2000, "VIA", "light", "C")
hot.convertToF()
console.log(hot.convertToF().unit)