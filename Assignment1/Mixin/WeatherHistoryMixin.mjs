import { weatherData } from "./WeatherDataMixin.mjs";
import { dateInterval } from "./DateIntervalMixin.mjs";


function weatherHistory(value, time, place, type, unit, dateFrom, dateTo) {

const state = {value, time, place, type, unit, dateFrom, dateTo}   
const weatherDataFunction = weatherData(state)
const dateIntervalFunction = dateInterval(state)

let list = []
    

function setPlace(data){
    state.place = data 
     return data
}

function clearPlace(){
    delete state.place
}

function setType(data){
    state.type = data
}

function clearType(){
    delete state.type 
}

function setPeriodFilter(dateFrom, dateTo){
    state.dateFrom = dateFrom
    state.dateTo = dateTo
}

function clearPeriodFilter(){
    delete state.dateFrom
    delete state.dateTo
}

function add(){
    list.push(state)
}

function getFilteredData(){
    return list
}

function convertToUSUints() {
    if(unit === "MM") {
        state.value = value * 0.039370
        state.unit = "Inch"
    }
}

function convertToInternationalUnits() {
    if(unit === "Inch") {
        state.value = value * 25.4
        state.unit = "MM"
    }
}
    

    return {
        ...dateIntervalFunction,
        ...weatherDataFunction,
        setPeriodFilter,
        clearPeriodFilter,
        setPlace,
        clearPlace,
        setType,
        clearType,
        add,
        getFilteredData,
        convertToInternationalUnits,
        convertToUSUints
    }
}

 
let temp = weatherHistory(25.4,2000,"visdd","rain","MM","07/06/2021","03/08/2021")
let temp1 = weatherHistory(25.4,2000,"via","rain","MM","07/06/2021","03/08/2021")
temp.convertToUSUints()
temp.setPeriodFilter("22/06/3333","20/93/3929")
temp.add()





console.log(temp.getFilteredData()[0].dateTo)



