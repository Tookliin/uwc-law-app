<template>
  <div>
    <v-toolbar
      dark
      class="cover"
      white
      prominent
      src="https://source.unsplash.com/1600x900/?legal,law"
    >
      <template v-slot:img="{ props }">
        <v-img v-bind="props" gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"></v-img>
      </template>
      <div>
        <h1>UMUZI</h1>
        <h3 class="subheading grey--text">LAW FIRM</h3>
      </div>

      <v-toolbar-title>Vuetify</v-toolbar-title>

      <div class="flex-grow-1"></div>

      <router-link to="/">Home</router-link>
    </v-toolbar>
  </div>
</template>