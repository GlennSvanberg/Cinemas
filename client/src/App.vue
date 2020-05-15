<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center ml-6">
        <v-spacer></v-spacer>
        <h1>{{title}}</h1>
      </div>
    </v-app-bar>
    <v-content>
      <Cinemas v-if="showCinemas" :id="id" @show-movies="showMoviesComponent" />
      <Movies v-if="!showCinemas" :cinemaId="id" />
      <v-container>
        <v-row>
          <v-spacer></v-spacer>
          <v-btn
            v-if="!showCinemas"
            @click="showCinemasComponent"
            class="mr-6"
            color="secondary"
          >Tillbaka</v-btn>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Cinemas from "./components/Cinemas";
import Movies from "./components/Movies";

export default {
  name: "App",
  methods: {
    showMoviesComponent: function(id) {
      this.id = id;
      this.showCinemas = !this.showCinemas;
      this.title = "Biografer";
    },
    showCinemasComponent: function() {
      this.showCinemas = !this.showCinemas;
    }
  },
  components: {
    Cinemas: Cinemas,
    Movies: Movies
  },
  created() {},

  data: () => ({
    cinemas: [],
    id: 0,
    showCinemas: true,
    title: "Biografer"
  })
};
</script>
