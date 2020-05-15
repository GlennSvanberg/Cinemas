<template>
  <v-container grid-list-lg>
    <h1>Movies</h1>
    <v-row>
      <v-col v-for="movie in movies" :key="movie.id">
        <v-card>
          <v-card-title v-text="movie.title" primary-title class="primary white--text" dark></v-card-title>
          <v-card-text v-text="movie.description" class="mt-4"></v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<style scoped>
</style>

<script>
export default {
  name: "App",
  props: ["cinemaId"],
  methods: {
    fetchMovies: function() {
      const baseURI =
        "http://localhost:8080/api/cinema/movies/?id=" + this.cinemaId;
      this.$http.get(baseURI).then(result => {
        this.movies = result.data;
      });
    },
    onMoviesClick(id) {
      this.$emit("show-movies", id);
    }
  },
  components: {},
  created() {
    this.fetchMovies();
  },

  data: () => ({
    movies: []
  })
};
</script>