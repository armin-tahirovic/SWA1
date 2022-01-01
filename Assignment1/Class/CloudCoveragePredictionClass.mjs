import {WeatherPredictionClass} from "./WeatherPredictionClass.mjs"

class CloudCoveragePredictionClass extends WeatherPredictionClass{
    constructor(minValue, maxValue, time, place, type, unit){
        super(minValue, maxValue, time, place, type, unit)
        this.uv = uv
        this.cloudType = this.cloudType
        this.density = this.density
    }

     getUV() {
        return this.uv
    }

     getCloudType() {
        return this.cloudType
    }

     getDensity() {
        return this.density
    }

}