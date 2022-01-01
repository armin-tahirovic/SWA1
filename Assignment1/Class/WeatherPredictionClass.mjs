import { EventDataType } from "./EventDataTypeClass.mjs";


class WeatherPredictionClass extends EventDataType {
    constructor(minValue, maxValue, time, place, type, unit, dateFrom, DateTo) {
        super(time, place, type, unit)
        this.dateFrom = dateFrom
        this.DateTo = DateTo
        this.minValue = minValue
        this.maxValue = maxValue
    }

    getTimeFrom(){
        return this.datefrom
    }

    getTimeTo() {
        return this.dateTo
    }
    
    getMin() {
        return this.minValue
    }

    getMax() {
        return this.maxValue
    }

    matches(weatherDataClass){
        if(weatherDataClass.getTime() === this.time && weatherDataClass.getPlace() === this.place && weatherDataClass.getType() === this.type && weatherDataClass.getUnit() === this.unit && weatherDataClass.getValue() >= this.minValue && weatherDataClass.getValue() <= this.maxValue){
            return true
        } else {
            return false
        }
    }
}

export {WeatherPredictionClass}