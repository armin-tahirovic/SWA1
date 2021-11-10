<template>
  <div id="dynamic-component-demo" class="demo">
    <h1>Weather</h1>
    <input type='date' v-model="from">
    <input type='date' v-model="to">
    <button v-on:click="fromDateToDate()">Submit</button>
    <Weather :weathers='weathers' @copenhagenWeather='copenhagenWeather' @aarhusWeather='aarhusWeather' @horsensWeather='horsensWeather' @fromDateToDate='fromDateToDate' />
  </div>
</template>

<script>
import Weather from "@/components/Weather"

export default {
  name: 'App',
  data() {
    return {
      model: {},
      from: null,
      to: null
    }
  },
  computed: {
    weathers() { return this.model.Weather() }
  },
  methods: {
    async copenhagenWeather() {
      const weatherC = await fetch('http://localhost:8080/data/Copenhagen').then(res => res.json())
      this.model = this.model.CityWeatherData(weatherC)
    },
    async aarhusWeather() {
      const weatherAa = await fetch('http://localhost:8080/data/Aarhus').then(res => res.json())
      this.model = this.model.CityWeatherData(weatherAa)
    },
    async horsensWeather() {
      const weatherH = await fetch('http://localhost:8080/data/Horsens').then(res => res.json())
      this.model = this.model.CityWeatherData(weatherH)
    },
    async fromDateToDate() {
      console.log(this.from, this.to)
      this.model = this.model.TimeWeatherData(this.from, this.to)
    }
  },
  components: {
    Weather
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>