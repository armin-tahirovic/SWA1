function temperature(unit, value) {

    function getUnit() {
        return unit
    }

    function getValue() {
        return value
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
        getValue,
        convertToF,
        convertToC
    }
}

let temp1 = temperature("F", 78)
temp1.convertToC()
console.log(temp1.getValue(), temp1.getUnit())

let temp2 = temperature("C", 25)
temp2.convertToF()
console.log(temp2.getValue(), temp2.getUnit())


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
        if(temp >= minValue || temp <= maxValue) {
            return true
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
console.log(temp3.matches(20))


function precipitation(unit, value, precipitationType) {
    
    function getUnit() {
        return unit
    }

    function getValue() {
        return value
    }

    function getPrecipitationType() {
        return precipitationType
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
        getValue,
        getPrecipitationType,
        convertToInches,
        convertToMM
    }
}