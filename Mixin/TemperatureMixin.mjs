import { weatherData } from "./WeatherDataMixin.mjs";

function temperature(value, time, place, type, unit) {

    const weatherDataFunction = weatherData(value, time, place, type, unit)

    function convertToF() {
        if(unit === "C") {
            value = value * 1.8 + 32
            unit = "F"
        }

        return {value, unit}
    }

    function convertToC() {
        if(unit === "F") {
            value = (value - 32) / 1.8
            unit = "C"
        }

        return {value, unit}
    }

    return {
        ...weatherDataFunction,
        convertToF,
        convertToC
    }
}

let temp1 = temperature(78, 2000, "Horsens", "Sunny", "F")
console.log(temp1.convertToC().value, temp1.convertToC().unit)

/*
function temperaturePrediction(unit, minValue, maxValue) {

    function getUnit() {
        return unit
    }

    function getMinValue() {
        return minValue
    }

    function getMaxValue() {
        return maxValue
    }

    function matches(temp) {
        if(temp >= minValue && temp <= maxValue) {
            return true
        } else {
            return false
        }
    }

    function convertToF() {
        if(unit === "C") {
            value = value * 1.8 + 32
            unit = "F"
        }
    }

    function convertToC() {
        if(unit === "F") {
            value = (value - 32) / 1.8
            unit = "C"
        }
    }

    return {
        getUnit,
        getMinValue,
        getMaxValue,
        matches,
        convertToF,
        convertToC
    }
}

let temp3 = temperaturePrediction("C", 15, 25)
console.log(temp3.matches(30))
*/

function precipitation(value, time, place, type, unit) {

    const weatherDataFunction = weatherData(value, time, place, type, unit)

    function getPrecipitationType() {
        return type
    }

    function convertToInches() {
        if(unit === "MM") {
            value = value * 0.039370
            unit = "Inch"
        }

        return {value, unit}
    }

    function convertToMM() {
        if(unit === "Inch") {
            value = value * 25.4
            unit = "MM"
        }

        return {value, unit}
    }

    return {
        ...weatherDataFunction,
        getPrecipitationType,
        convertToInches,
        convertToMM
    }
}


/*
function precipitationPrediction(unit, minValue, maxValue, expectedType) {

    function getUnit() {
        return unit
    }

    function getMinValue() {
        return minValue
    }

    function getMaxValue() {
        return maxValue
    }

    function getExpectedType() {
        return expectedType
    }

    function matches(precipitation) {
        if(precipitation >= minValue && precipitation <= maxValue) {
            return true
        } else {
            return false
        }
    }

    function convertToInches() {
        if(unit === "MM") {
            value = value * 0.039370
            unit = "Inch"
        }
    }

    function convertToMM() {
        if(unit === "Inch") {
            value = value * 25.4
            unit = "MM"
        }
    }

    return {
        getUnit,
        getMinValue,
        getMaxValue,
        getExpectedType,
        matches,
        convertToInches,
        convertToMM
    }
}

let temp5 = precipitationPrediction("Inch", 1, 5, "Snow")
console.log(temp5.matches(3))
console.log(temp5.matches(10))
*/

function wind(value, time, place, type, unit, direction) {

    const weatherDataFunction = weatherData(value, time, place, type, unit)

    function getDirection() {
        return direction
    }

    function convertToMPH() {
        if(unit === "MS") {
            value = value * 2.236936
            unit = "MPH"
        }

        return {value, unit}
    }

    function convertToMS() {
        if(unit === "MPH") {
            value = value * 0.44704
            unit = "MS"
        }

        return {value, unit}
    }

    return {
        ...weatherDataFunction,
        getDirection,
        convertToMPH,
        convertToMS
    }
}


/*
function windPrediction(unit, minValue, maxValue, expectedDirection) {

    function getUnit() {
        return unit
    }

    function getMinValue() {
        return minValue
    }

    function getMaxValue() {
        return maxValue
    }

    function getExpectedDirection() {
        return expectedDirection
    }

    function matches(wind) {
        if(wind >= minValue && wind <= maxValue) {
            return true
        } else {
            return false
        }
    }

    function convertToMPH() {
        if(unit === "MS") {
            value = value * 2.236936
            unit = "MPH"
        }
    }

    function convertToMS() {
        if(unit === "MPH") {
            value = value * 0.44704
            unit = "MS"
        }
    }

    return {
        getUnit,
        getMinValue,
        getMaxValue,
        getExpectedDirection,
        matches,
        convertToMPH,
        convertToMS
    }
}

let temp8 = windPrediction("MS", 5, 15, "East")
console.log(temp8.matches(3))
console.log(temp8.matches(10))
*/

function cloudCoverage(value, time, place, type, unit, UV) {

    const weatherDataFunction = weatherData(value, time, place, type, unit)

    function getUV() {
        return UV
    }

    return {
        ...weatherDataFunction,
        getUV
    }
}


/*
function cloudCoveragePrediction(unit, maxValue, minValue, uv) {

    function getUnit() {
        return unit
    }

    function getMaxValue() {
        return maxValue
    }

    function getMinValue() {
        return minValue
    }

    function getUV() {
        return uv
    }

    function matches(cloud) {
        if(cloud <= maxValue && cloud >= minValue) {
            return true
        }
    }

    return {
        getUnit,
        getMaxValue,
        getMinValue,
        getUV,
        matches
    }
}
*/