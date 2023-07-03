<template>
  <v-app>
    <v-main>
      <v-container>
        <v-card>
          <v-card-title>Submission Details</v-card-title>
          <v-card-text>
            <v-row class="pb-5">
              <v-col cols="12">
                <v-select v-model="selectedProblem" :items="$store.state.problems" label="Select Problem" single-line
                  hide-details clearable></v-select>
              </v-col>
            </v-row>
            <v-data-table :headers="headers" :items="filteredData" hide-default-footer></v-data-table>
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
      headers: [
        { text: 'Submission Time', value: 'subt' },
        { text: 'Status', value: 'status' },
        { text: 'Submitted By', value: 'name' },
        { text: 'Problem Title', value: 'problemTitle' },
        { text: 'Language', value: 'language' },
      ],
      // submissions: [
      //   {
      //     submissionTime: '10:30',
      //     status: 'Accepted',
      //     problemTitle: 'C',
      //   },
      //   {
      //     submissionTime: '11:15',
      //     status: 'Wrong Answer',
      //     problemTitle: 'A',
      //   },
      //   {
      //     submissionTime: '12:05',
      //     status: 'Accepted',
      //     problemTitle: 'A',
      //   },
      // ],
    };
  },
  computed: {
    filteredData() {
      if (this.$store.state.selectedProblem) {
        return this.$store.state.data.filter(submission => submission.problemTitle === this.$store.state.selectedProblem);
      }
      else {
        return this.$store.state.data;
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
  },
};
</script>
