<template>
  <v-container grid-list-lg>
    <v-row>
      <v-col v-for="cinema in cinemas" :key="cinema.id">
        <v-card>
          <v-card-title v-text="cinema.title" primary-title class="primary white--text" dark></v-card-title>
          <v-card-text v-text="cinema.description" class="mt-4"></v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="onMoviesClick(cinema.id)" color="success">Se Filmer</v-btn>
          </v-card-actions>
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
  methods: {
    fetchCinemas: function() {
      const baseURI = "http://localhost:8080/api/cinema";
      this.$http.get(baseURI).then(result => {
        this.cinemas = result.data;
      });
    },
    onMoviesClick(id) {
      console.log(id);
      this.$emit("show-movies", id);
    }
  },
  components: {},
  created() {
    this.fetchCinemas();
  },

  data: () => ({
    cinemas: []
  })
};
</script>