<template>
  <div>
    <button v-on:click="copenhagenWeather()">Copenhagen weather</button>
    <button v-on:click="aarhusWeather()">Aarhus weather</button>
    <button v-on:click="horsensWeather()">Horsens weather</button>
    <br><br>
    <input type='date' id='fromDate'>
    <input type='date' id='toDate'>
    <button v-on:click="fromDateToDate(document.body.getElementById('fromDate').value, document.body.getElementById('toDate').value)">Submit</button>
      <table>
        <thead><tr><td>Value</td><td>Type</td><td>Unit</td><td>Time</td><td>Place</td></tr></thead>
          <tbody>
            <tr v-for="w in weathers" :key="w">
              <td>{{ w.value }} </td>
              <td>{{ w.type }} </td>
              <td>{{ w.unit }} </td>
              <td>{{ w.time }} </td>
              <td>{{ w.place }} </td>  
            </tr>
          </tbody>
      </table>
  </div>
</template>

<script>
export default {
  emits: ['copenhagenWeather', 'aarhusWeather', 'horsensWeather', 'fromDateToDate'],
  name: "Weather",
  props: {
    weathers: Array
  },
  methods: {
    copenhagenWeather() {
      this.$emit('copenhagenWeather')
    },
    aarhusWeather() {
      this.$emit('aarhusWeather')
    },
    horsensWeather() {
      this.$emit('horsensWeather')
    },
    fromDateToDate(from, to) {
      this.$emit('fromDateToDate', from, to)
    }
  }
}
</script>