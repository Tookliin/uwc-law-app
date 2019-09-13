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
        <v-img v-bind="props" gradient="to top right, rgba(100,115,201,.7), rgba(29,34,52,.7)"></v-img>
      </template>

      <v-toolbar-title>
        <h1>UMUZI</h1>
        <h3 class="subheading grey--text">LAW FIRM</h3>
      </v-toolbar-title>

      <div class="flex-grow-1"></div>

      <v-toolbar-items>
        <v-btn text>Home</v-btn>
        <v-btn text>About-Us</v-btn>
        <v-btn text>Contact-Us</v-btn>
        <v-btn text>Services</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>