<template>
  <v-footer dark padless>
    <v-card flat tile class="lighten-1 white--text text-center">
      <v-card-text>
        <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-text>

      <template>
        <v-container class="grey lighten-5 ml-5">
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
            <v-col cols="12" sm="4">
              <v-card class="pa-2" outlined tile>
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
              </v-card>
            </v-col>
            <v-col cols="12" sm="4">
              <v-card class="pa-2" outlined tile>
                <v-card class="pa-3" outlined tile>
                  <v-card max-width="344" class="mx-auto" flat>
                    <v-card-title>I'm a title</v-card-title>
                    <v-card-text>I'm card text</v-card-text>
                    <v-card-actions>
                      <v-btn text>Click</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-card>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </template>
    </v-card>
  </v-footer>
</template>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} —
        <strong>K&Q-Royal Ownership</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: [
      "fab fa-facebook",
      "fab fa-twitter",
      "fab fa-google-plus",
      "fab fa-linkedin",
      "fab fa-instagram"
    ], show1: false,
      show2: true,
      show3: false,
      show4: false,
      name: '',
      password: 'Password',
      rules: {
        required: value => !!value || 'Required.',
        min: v => v.length >= 8 || 'Min 8 characters',
        emailMatch: () => ('The email and password you entered don\'t match'),
        name: [val => (val || '').length > 0 || 'This field is required']
      },
  })
};
</script>