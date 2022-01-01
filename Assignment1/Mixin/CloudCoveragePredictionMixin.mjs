import {weatherPrediction} from "./weatherPredictionMixin.mjs"

function cloudCoveragePrediction(minValue, maxValue, uv, cloudType, density, time, place, type, unit) {

    function getUV() {
        return uv
    }

    function getCloudType() {
        return cloudType
    }

    function getDensity() {
        return density
    }

    const weatherPrediction_ = weatherPrediction(minValue, maxValue, time, place, type, unit)

    return {
        ...weatherPrediction_,
        getUV,
        getCloudType,
        getDensity
  
    }
}