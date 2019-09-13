<template>
  <v-container class="grey lighten-3 ml-5">
    <v-row no-gutters>
      <v-col cols="12" sm="4">
        <v-card class="pa-3" outlined tile>
          <v-card max-width="344" class="mx-auto" flat>
            <v-card-title>I'm a title</v-card-title>
            <v-card-text>
              <v-card-text>
                <span>Number 10</span>
                <br />
                <span class="text--primary">
                  <span>Whitehaven Beach</span>
                  <br />
                  <span>Whitsunday Island, Whitsunday Islands</span>
                </span>
              </v-card-text>
            </v-card-text>
            <v-card-actions>
              <v-btn text>Click</v-btn>
            </v-card-actions>
          </v-card>
        </v-card>
      </v-col>

      <v-card class="mx-auto" max-width="400">
        <v-img
          class="white--text"
          height="200px"
          src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        >
          <v-card-title class="align-end fill-height">Top 10 Australian beaches</v-card-title>
        </v-img>

        <v-card-text>
          <span>Number 10</span>
          <br />
          <span class="text--primary">
            <span>Whitehaven Beach</span>
            <br />
            <span>Whitsunday Island, Whitsunday Islands</span>
          </span>
        </v-card-text>

        <v-card-actions>
          <v-btn text color="orange">Share</v-btn>
          <v-btn text color="orange">Explore</v-btn>
        </v-card-actions>
      </v-card>
    </v-row>
  </v-container>
</template>