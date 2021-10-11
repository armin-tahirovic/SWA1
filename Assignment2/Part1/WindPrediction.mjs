import { WeatherPrediction } from './WeatherPrediction.mjs'

class WindPrediction extends WeatherPrediction {
    constructor(minValue, maxValue, time, place, type, unit, expectedDirection) {
        super(time, place, type, unit, minValue, maxValue)
        this.expectedDirection = expectedDirection
        Object.freeze(this)
    }

    getExpectedDirection() {
        return this.expectedDirection
    }


    convertToMPH() {
        let minValue = this.getMin()
        let maxValue = this.getMax()
        if(this.unit === "MS") {
            minValueinF = this.getMin() * 2.236936
            maxValueinF = this.getMax() * 2.236936
        }
        return new WindPrediction(this.time, this.place, this.type, "MPH", minValue, maxValue, this.expectedDirection)
    }

    convertToMS() {
        let minValue = this.getMin()
        let maxValue = this.getMax()
        if(this.unit === "MPH") {
            minValueinF = this.getMin() * 0.44704
            maxValueinF = this.getMax() * 0.44704
        }
        return new WindPrediction(this.time, this.place, this.type, "MS", minValue, maxValue, this.expectedDirection)
    }

}

export { WindPrediction }