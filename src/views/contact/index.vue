<template>
  <div>
    <v-row no-gutters>
      <v-col md="6" sm="12" offset-md="3">
        <v-div class="pa-4" outlined tile>
          <h2>Contact</h2>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field v-model="name" :counter="10" :rules="nameRules" label="Name" required></v-text-field>

            <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
            <v-text-field v-model="number" :rules="phonerules" label="cell no:" required></v-text-field>

            <v-combobox
              v-model="select"
              :items="items"
              label="Select a favorite activity or create a new one"
            ></v-combobox>

            <v-checkbox
              v-model="checkbox"
              :rules="[v => !!v || 'You must agree to continue!']"
              label="Do you agree?"
              required
            ></v-checkbox>
          </v-form>
          <v-btn rounded color="primary" lg dark>Get quote</v-btn>
        </v-div>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      v => !!v || "Name is required",
      v => (v && v.length <= 10) || "Name must be less than 10 characters"
    ],
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],

    number: "",
    phonerules: [
      v => !!v || "Enter contact details.",
      v => (v && v.length <= 10) || "Numbers must be 10"
    ],
    select: "Financial",
    items: ["Financial", "Litigation", "Marital", "Governence"],
    checkbox: false
  }),

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    }
  }
};
</script>