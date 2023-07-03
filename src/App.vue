<template>
  <v-app id="inspire">
    <v-app-bar app dark src="board.jpg">
      <template v-slot:img="{ props }">
        <v-img v-bind="props" gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"></v-img>
      </template>

      <v-app-bar-title class="title">ScoreUp</v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>

      <template v-slot:extension>
        <v-tabs v-model="tab" align-with-title>
          <v-tab v-for="item in items" :to="item.to" :key="item">{{ item.title }}</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    tab: null,
    items: [
      { title: 'Scoreboard', icon: 'mdi-counter', to: '/' },
      { title: 'Submissions', icon: 'mdi-help-box', to: '/submissions' },
    ],
  }),
}
</script>