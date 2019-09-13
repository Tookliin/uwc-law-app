<template>
  <div>
    <v-toolbar
      dark
     
          class="cover"
          white
         
          prominent
          src="https://source.unsplash.com/1600x900/?legal,law"
        
    > <template v-slot:img="{ props }">
            <v-img v-bind="props" gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"></v-img>
          </template>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Vuetify</v-toolbar-title>

      <div class="flex-grow-1"></div>

     <router-link to="/">Home</router-link>
    </v-toolbar>
  </div>