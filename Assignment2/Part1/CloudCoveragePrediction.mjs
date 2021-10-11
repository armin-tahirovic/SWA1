import { WeatherPrediction } from './WeatherPrediction.mjs'

class cloudCoveragePrediction extends WeatherPrediction{
    constructor(minValue, maxValue, time, place, type, unit, uv, cloudType, density){
        super(time, place, type, unit, minValue, maxValue,)
        this.uv = uv
        this.cloudType = cloudType
        this.density = density
        Object.freeze(this)
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