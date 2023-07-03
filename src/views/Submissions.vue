<template>
  <v-app>
    <v-main>
      <v-container>
        <v-card>
          <v-card-title>Submission Details</v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="12">
                <v-select v-model="selectedProblem" :items="problems" label="Select Problem" single-line
                  hide-details></v-select>
              </v-col>
            </v-row>
            <v-data-table :headers="headers" :items="filteredData"></v-data-table>
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
        { text: 'Submission Time', value: 'submissionTime' },
        { text: 'Status', value: 'status' },
        { text: 'Submitted By', value: 'submittedBy' },
        { text: 'Problem Title', value: 'problemTitle' },
        { text: 'Language', value: 'language' },
      ],
      submissions: [
        {
          submissionTime: '10:30',
          status: 'Accepted',
          submittedBy: 'Mike',
          problemTitle: 'A',
          language: 'Python',
        },
        {
          submissionTime: '11:15',
          status: 'Wrong Answer',
          submittedBy: 'Brown',
          problemTitle: 'A',
          language: 'C++',
        },
        {
          submissionTime: '12:05',
          status: 'Accepted',
          submittedBy: 'Ashly',
          problemTitle: 'A',
          language: 'Java',
        },
        // Add more submissions as needed
      ],
      problems: ['A', 'B', 'C', 'D', 'E'],
      selectedProblem: null,

    };
  },
  computed: {
    filteredData() {
      if (this.selectedProblem) {
        return this.submissions.filter(submission => submission.problemTitle === this.selectedProblem);
      }
      else {
        return this.submissions;
      }
    },
  },
};
</script>
