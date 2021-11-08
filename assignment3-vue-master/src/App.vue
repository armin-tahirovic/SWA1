<template>
  <div id="dynamic-component-demo" class="demo">
    <h1>Weather</h1>
    <weather :weathers='weathers' @hire='hire'/>
  </div>
</template>

<script>
import Weather from "@/components/Weather"
export default {
  name: 'App',
  data() {
    return {
      model: {}
    }
  },
  computed: {
    weathers() { return this.model.CityWeatherData("Copenhagen") }
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