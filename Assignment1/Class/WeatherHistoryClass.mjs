import { WeatherDataClass } from "./WeatherDataClass.mjs"



class WeatherHistoryClass extends WeatherDataClass  {
    constructor(value, place, type, unit, dateFrom, dateTo){
    super(value, place, type, unit, dateFrom, dateTo)
    
}
    getPlaceFilter(){
        return this.place
    }
    setPlacefilter(place){
        place = this.place
    }

    clearPlaceFilter(){
       delete this.place 
    }

    setTypeFilter(type){
        type = this.type
    }
    clearTypeFilter(){
        delete this.type
    }

    setPeriodFilter(dateFrom, dateTo){
        this.dateFrom = dateFrom
        this.dateTo = dateTo
    }
    
    clearPeriodFilter(){
        delete this.dateFrom
        delete this.dateTo
    }
  

    convertToUSUnits() {
        if(this.unit === "MM") {
            this.value = this.value * 0.039370
            this.unit = "Inch"
        }
    }

    convertToInternationalUnits() {
        if(this.unit === "Inch") {
            this.value = this.value * 25.4
            this.unit = "MM"
        }
    }
   
    add(){  
       let data = [this.value, this.place, this.type, this.unit, this.dateFrom, this.dateTo]
        return data
    } 

}

let test = new WeatherHistoryClass(100, 200, 20000, "VIA0", "light0", "C0")
test.setPeriodFilter("23/323/32232","2323/232/2323")
console.log(test.add()[4])
 