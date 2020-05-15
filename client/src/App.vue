<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center ml-6">
        <v-spacer></v-spacer>
        <h1>Biografer</h1>
      </div>
    </v-app-bar>

    <v-content>
      <v-container grid-list-lg>
        <v-row>
          <v-col v-for="cinema in cinemas" :key="cinema.id">
            <v-card>
              <v-card-title v-text="cinema.title" primary-title class="primary white--text" dark></v-card-title>
              <v-card-text v-text="cinema.description" class="mt-4"></v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="success">Se Filmer</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
//import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",
  methods: {
    fetchCinemas: function() {
      const baseURI = "http://localhost:8080/api/cinema";
      this.$http.get(baseURI).then(result => {
        this.cinemas = result.data;
      });
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
