<template>
  <table>
      <thead><tr><td>Value</td><td>Type</td><td>Unit</td><td>Time</td><td>Place</td></tr></thead>
      <tbody>
          <tr v-for="w in weathers" :key="w.place">
              <td>{{ w.value }} </td>
              <td>{{ w.type }} </td>
              <td>{{ w.unit }} </td>
              <td>{{ w.time }} </td>
              <td>{{ w.place }} </td>
              <template v-if="w.precipitation">
                  <td>{{ w.precipitation_type }}</td>
              </template>
              <template v-if="w.direction">
                  <td>{{ w.direction }}</td>
              </template>
              <template v-else>
                  <td colspan = "3"><button v-on:click="hire(w)">Hire</button></td>
              </template>
          </tr>
      </tbody>
  </table>
</template>

<script>
export default {
  emits: ['hire'],
  name: "Weather",
  props: {
    weathers: Array
  },
  methods: {
    hire(w) {
      this.$emit('hire', w)
    }
  }
}
</script>