<template>
  <div>
    <v-row no-gutters>
      <v-col md="6" offset-md="5">
        <v-div class="pa-4" outlined tile>
          <h2>Services</h2>
        </v-div>
      </v-col>
    </v-row>
    <v-container class="grey lighten-5">
      <v-row class="pb-4 mb-1">
        <v-col cols="6" md="4">
          <v-card class="pa-3" outlined tile>
            <v-img
              class="white--text"
              height="200px"
              src="https://source.unsplash.com/1600x900/?consultation"
            ></v-img>
            <v-card-text>
              <span class="text--primary">
                <span>* Finnancial consultation and management</span>
                <br />
                <span>* Digital skills management</span>
              </span>
            </v-card-text>

            <v-card-actions>
              <v-btn text color="orange">Apply</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="6" md="4">
          <v-card class="pa-2" outlined tile>
            <v-img
              class="white--text"
              height="200px"
              src="https://source.unsplash.com/1600x900/?marriage"
            ></v-img>
            <v-card-text>
              <span class="text--primary">
                <span>* Advertising and marketing</span>
                <br />
                <span>* Divorce handling</span>
              </span>
            </v-card-text>

            <v-card-actions>
              <v-btn text color="orange">Apply</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="6" md="4">
          <v-card class="pa-2" outlined tile>
            <v-img
              class="white--text"
              height="200px"
              src="https://source.unsplash.com/1600x900/?finance"
            ></v-img>

            <v-card-text>
              <span class="text--primary">
                <span>* High commercial service to loyal clients</span>
                <br />
                <span>* Divorce handling</span>
              </span>
            </v-card-text>

            <v-card-actions>
              <v-btn text color="orange">Apply</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <div class>
      <v-row no-gutters>
        <v-col md="6" offset-md="4" class="py-3">
          <v-div outlined tile>
            <h2>Our Trusted Clients</h2>
          </v-div>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col cols="8" sm="12">
          <v-card class="pa-2" outlined tile>
            <v-hover v-slot:default="{ hover }">
              <v-card max-width="600" class="mx-auto" flat>
                <v-row>
                  <v-col cols="6" md="4">
                    <v-avatar class="round" color="orange" size="162">
                      <img src="https://source.unsplash.com/1600x900/?MacDonald" alt="women" />
                    </v-avatar>
                  </v-col>

                  <v-col cols="4" md="4">
                    <v-avatar class="round" color="orange" size="162">
                      <img src="https://source.unsplash.com/1600x900/?Amazon" alt="women" />
                    </v-avatar>
                  </v-col>

                  <v-col cols="4" md="4">
                    <v-avatar class="round" color="orange" size="162">
                      <img src="https://source.unsplash.com/1600x900/?facebook" alt="women" />
                    </v-avatar>
                  </v-col>

                  <v-col cols="4" md="4">
                    <v-avatar class="round" color="orange" size="162">
                      <img src="https://source.unsplash.com/1600x900/?food" alt="women" />
                    </v-avatar>
                  </v-col>

                  <v-col cols="4" md="4">
                    <v-avatar class="round" color="orange" size="162">
                      <img src="https://source.unsplash.com/1600x900/?mug and bean" alt="women" />
                    </v-avatar>
                  </v-col>

                  <v-col cols="4" md="4">
                    <v-avatar class="round" color="orange" size="162">
                      <img src="https://source.unsplash.com/1600x900/?woolworths" alt="women" />
                    </v-avatar>
                  </v-col>
                </v-row>
              </v-card>
            </v-hover>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>
    

























