import { WindPrediction } from './WindPrediction.mjs'

class WeatherForecast {
    constructor(data = []) {
        this.data = data
        Object.freeze(this)
    }

    forPlace(place){
        const places = data => data.filter(WeatherPrediction => WeatherPrediction.getPlace() === place)

        return new WeatherForecast(places)

    }

    forType(){

    }

    forPeriod(){

    }

    including(){

    }

    convertToUsUnit(){

    }

    convertToInternationalUnits(){

    }

    getAverageMinValue(){

    }

    getAverageMaxValue(){

    }

    getPredictions(){
        return this.data
    }
}

//testing

const predictions = [
    new WindPrediction("01-01-2020", "VIA", "Wind", "MPH", 5, 10, "North")]

    const forecast = new WeatherForecast(predictions)

    console.log(forecast.forPlace("VIA").getPredictions().length)