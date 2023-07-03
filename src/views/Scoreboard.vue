<template>
  <v-app>
    <v-main>
      <v-container>
        <v-card>
          <v-card-title>
            Scoreboard
          </v-card-title>
          <v-card-text>
            <v-row class="pb-5">
              <v-col cols="6">
                <v-text-field v-model="search" label="Search by Name" single-line hide-details></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-select v-model="selectedProblem" :items="$store.state.problems" label="Filter by Problem" single-line
                  hide-details clearable></v-select>
              </v-col>
            </v-row>
            <v-data-table :headers="headers" :items="filteredData" :search="search" hide-default-footer></v-data-table>
          </v-card-text>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      search: '',
      headers: [
        {
          text: 'Rank',
          align: 'start',
          value: 'rank',
        },
        { text: 'Name', value: 'name' },
        { text: 'Score', value: 'score' },
        { text: 'A', value: 'a' },
        { text: 'A time', value: 'at' },
        { text: 'B', value: 'b' },
        { text: 'B time', value: 'bt' },
        { text: 'C', value: 'c' },
        { text: 'C time', value: 'ct' },
        { text: 'D', value: 'd' },
        { text: 'D time', value: 'dt' },
        { text: 'E', value: 'e' },
        { text: 'E time', value: 'et' },
      ],
    }
  },
  computed: {
    filteredData() {
      if (this.$store.state.selectedProblem) {
        return this.$store.state.data.filter(item => item[this.$store.state.selectedProblem.toLowerCase()] > 0)
      }
      else {
        return this.$store.state.data
      }
    },
    selectedProblem: {
      get() {
        return this.$store.state.selectedProblem
      },
      set(newValue) {
        this.$store.commit('setSelectedProblem', newValue)
      }
    }
  }
}
</script>