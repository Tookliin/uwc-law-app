<template>
  <v-container class="grey lighten-3 ml-2">
    <v-row no-gutters>
      <v-col cols="12" sm="12">
        <v-card class="pa-3" outlined tile>
          <v-hover v-slot:default="{ hover }">
            <v-card :elevation="hover ? 12 : 2" max-width="600" class="mx-auto" flat>
              <v-card-title>A rule isn't unfair if it applies to everyone</v-card-title>
              <v-card-text>
                <v-card-text>
                  <span>* Reputable and Trusted in over 10 States</span>
                  <br />
                  <span class="text--primary">
                    <span>* CLIENT Satisfaction proven over 100 clients and Business.</span>
                    <br />
                    <span>* Whitsunday Island, Whitsunday Islands</span>
                  </span>
                </v-card-text>
              </v-card-text>
              <v-card-actions>
                <v-chip class="ma-3" color="indigo darken-3" outlined>
                  <v-icon left>mdi-fire</v-icon>Read More Our Services
                </v-chip>
              </v-card-actions>
            </v-card>
          </v-hover>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
