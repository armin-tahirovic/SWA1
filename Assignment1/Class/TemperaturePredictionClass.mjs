import {WeatherPredictionClass} from "./weatherPredictionClass.mjs"

class TemperaturePredictionClass extends WeatherPredictionClass{
    
    constructor(minValue, maxValue, time, place, type, unit){
        super(minValue, maxValue, time, place, type, unit)
    }

    convertToF() {
        let minValueinF = this.getMin()
        let maxValueinF = this.getMax()
        if(this.getUnit() === "C") {
            minValueinF = this.getMin() * 1.8 + 32
            maxValueinF = this.getMax() * 1.8 + 32
        }

        return {minValueinF, maxValueinF}  
     }

    convertToC() {
        let minValueinC = this.getMin()
        let maxValueinC = this.getMax()
        if(this.unit === "F") {
            minValueinC = (this.getMin() - 32) / 1.8
            maxValueinC = (this.getMax() - 32) / 1.8
            this.unit = "C"
        }

        return {minValueinC, maxValueinC}   
    }
}


let hot = new TemperaturePredictionClass(10, 20, 2000, "VIA", "light", "C")
console.log(hot.getType())
console.log(hot.convertToF().minValueinF)