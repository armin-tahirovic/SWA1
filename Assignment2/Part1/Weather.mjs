import { WeatherData } from "./WeatherData.mjs"


class Temperature extends WeatherData {
    constructor(value, time, place, type, unit) {
        super(value, time, place, type, unit)
        Object.freeze(this)
    }

    convertToF() {
        if(this.unit === "C") {
            let newValue = this.getValue() * 1.8 + 32
            let newUnit = "F"
            return new Temperature(newValue, this.time, this.place, this.type, newUnit)
        }
    }
    
    convertToC() {
        if(this.unit === "F") {
            let newValue = (this.getValue() - 32) / 1.8
            let newUnit = "C"
            return new Temperature(newValue, this.time, this.place, this.type, newUnit)
        }
    }
}
let temp1 = new Temperature(25, 1900, "Horsens", "Hot", "C")
console.log(temp1.convertToF())



class Precipitation extends WeatherData {
    constructor(value, time, place, type, unit) {
        super(value, time, place, type, unit)
        Object.freeze(this)
    }

    getPrecipitationType() {
        return this.type
    }

    convertToInches() {
        if(this.unit === "MM") {
            let newValue = this.getValue() * 0.039370
            let newUnit = "Inch"
            return new Precipitation(newValue, this.time, this.place, this.type, newUnit)
        }
    }

    convertToMM() {
        if(this.unit === "Inch") {
            let newValue = this.getValue() * 25.4
            let newUnit = "MM"
            return new Precipitation(newValue, this.time, this.place, this.type, newUnit)
        }
    }
}
let pre1 = new Precipitation(25, 2000, "Copenhagen", "Heavy Rain", "MM")
console.log(pre1.convertToInches())
console.log(pre1.getPrecipitationType())



class Wind extends WeatherData {
    constructor(value, time, place, type, unit, direction) {
        super(value, time, place, type, unit)
        this.direction = direction
        Object.freeze(this)
    }

    getDirection() {
        return this.direction
    }

    convertToMPH() {
        if(this.unit === "MS") {
            let newValue = this.getValue() * 2.236936
            let newUnit = "MPH"
            return new Wind(newValue, this.time, this.place, this.type, newUnit, this.direction)
        }
    }

    convertToMS() {
        if(this.unit === "MPH") {
            let newValue = this.getValue() * 0.44704
            let newUnit = "MS"
            return new Wind(newValue, this.time, this.place, this.type, newUnit, this.direction)
        }
    }
}
let wind = new Wind(25, 530, "Horsens", "Storm", "MS", "North")
console.log(wind.convertToMPH())
console.log(wind.getDirection())



class Cloud extends WeatherData {
    constructor(value, time, place, type, unit, uv, cloudType, density) {
        super(value, time, place, type, unit)
        this.uv = uv
        this.cloudType = cloudType
        this.density = density
        Object.freeze(this)
    }

    getUv() {
        return this.uv
    }

    getCloudType() {
        return this.cloudType
    }

    getDensity() {
        return this.density
    }
}
let cloudCoverage = new Cloud(25, 530, "Horsens", "Storm", "MS", 78, 'Heavy', 'Too much')
console.log(cloudCoverage.getPlace())