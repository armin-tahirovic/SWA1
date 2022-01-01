import {WeatherPredictionClass} from "./WeatherPredictionClass.mjs"


class WindPredictionClass extends WeatherPredictionClass{
    constructor(minValue, maxValue, time, place, type, unit){
        super(minValue, maxValue, time, place, type, unit)
        this.expectedDirection = expectedDirection
    }

    getExpectedDirection() {
        return this.expectedDirection
    }


    convertToMPH() {
        let minValueinF = this.getMin()
        let maxValueinF = this.getMax()
        if(this.unit === "MS") {
            minValueinF = this.getMin() * 2.236936
            maxValueinF = this.getMax() * 2.236936
        }
        return {unit, minValue, maxValue} 
    }

    convertToMS() {
        let minValueinF = this.getMin()
        let maxValueinF = this.getMax()
        if(this.unit === "MPH") {
            minValueinF = this.getMin() * 0.44704
            maxValueinF = this.getMax() * 0.44704
        }
        return {unit, minValue, maxValue} 
    }

}