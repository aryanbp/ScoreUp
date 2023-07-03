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
                <v-select v-model="selectedProblem" :items="problems" label="Filter by Problem" single-line
                  hide-details></v-select>
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
      selectedProblem: null,
      problems: ['', 'A', 'B', 'C', 'D', 'E'],
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
      scores: [
        {
          rank: 1,
          name: 'Mike',
          score: 452,
          a: 25.0,
          b: 51,
          c: 49,
          d: 42,
          e: 96,
          at: '1:30',
          bt: '11:00',
          ct: '12:00',
          dt: '5:00',
          et: '9:30',
        },
        {
          rank: 2,
          name: 'Ashly',
          score: 518,
          a: 26.0,
          b: 65,
          c: 7,
          d: 6,
          e: 0,
          at: '5:00',
          bt: '10:00',
          ct: '3:00',
          dt: '9:00',
          et: '1:00',
        },
        {
          rank: 3,
          name: 'Sarah',
          score: 280,
          a: 15,
          b: 32,
          c: 0,
          d: 18,
          e: 25,
          at: '2:10',
          bt: '3:45',
          ct: '9:30',
          dt: '2:55',
          et: '6:20',
        },
        // {
        //   rank: 4,
        //   name: 'Brown',
        //   score: 180,
        //   a: 0,
        //   b: 12,
        //   c: 20,
        //   d: 30,
        //   e: 18,
        //   at: '12:00',
        //   bt: '1:15',
        //   ct: '3:40',
        //   dt: '2:30',
        //   et: '4:45',
        // },
        // {
        //   rank: 5,
        //   name: 'Emily',
        //   score: 330,
        //   a: 20,
        //   b: 25,
        //   c: 22,
        //   d: 15,
        //   e: 30,
        //   at: '1:50',
        //   bt: '2:20',
        //   ct: '1:35',
        //   dt: '3:10',
        //   et: '4:25',
        // },
        // {
        //   rank: 6,
        //   name: 'David',
        //   score: 400,
        //   a: 25,
        //   b: 40,
        //   c: 35,
        //   d: 45,
        //   e: 30,
        //   at: '2:30',
        //   bt: '3:00',
        //   ct: '2:15',
        //   dt: '4:40',
        //   et: '5:55',
        // },
        // {
        //   rank: 7,
        //   name: 'Olivia',
        //   score: 240,
        //   a: 10,
        //   b: 22,
        //   c: 18,
        //   d: 28,
        //   e: 15,
        //   at: '3:20',
        //   bt: '1:55',
        //   ct: '4:10',
        //   dt: '3:35',
        //   et: '2:05',
        // },

      ],
    }
  },
  computed: {
    filteredData() {
      let data = this.scores
      if (this.selectedProblem) {
        data = data.filter(item => item[this.selectedProblem.toLowerCase()] > 0)
      }
      return data
    }
  }
}
</script>