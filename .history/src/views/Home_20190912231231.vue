<template>
  <div>
    <v-toolbar
      dark
      class="cover"
      white
      height="300px"
      prominent
      src="https://source.unsplash.com/1600x900/?legal,law"
    >
      <template v-slot:img="{ props }">
        <v-img v-bind="props" gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"></v-img>
      </template>

      <v-toolbar-title>
        <h1>UMUZI</h1>
        <h3 class="subheading grey--text">LAW FIRM</h3>
      </v-toolbar-title>

      <div class="flex-grow-1"></div>

      <v-toolbar-items>
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/contact">Contact-Us</router-link>
        <router-link to="/services">Services</router-link>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>