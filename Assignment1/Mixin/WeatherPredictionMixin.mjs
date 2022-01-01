import { event, dataType } from "./EventDataTypeMixin.mjs";
import { weatherData } from "./WeatherDataMixin.mjs";

function weatherPrediction(minValue, maxValue, time, place, type, unit) {

    function getMax() {
        return maxValue
    }

    function getMin(){
        return minValue
    }

    function matches(weatherData){
        if(weatherData.getTime() === time && weatherData.getPlace() === place && weatherData.getType() === type && weatherData.getUnit() === unit && weatherData.getValue() >= minValue && weatherData.getValue() <= maxValue){
            return true
        } else {
            return false
        }
    }

    const eventFunction = event(time, place)
    const dataTypeFunction = dataType(type, unit)

    return {...eventFunction, ...dataTypeFunction, getMax, getMin, matches}
}

export {weatherPrediction}

let weather = weatherData(20, 2000, "VIA", "Rain", "mm")