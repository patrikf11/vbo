<template>
  <v-app>
    <v-app-bar
      app
      color="#fcb69f"
      dark
      src="https://picsum.photos/1920/1080?random"
    >
     <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <Weather v-if="group==0"/>
      <About v-if="group==2"/>
    </v-main>
   
     <v-navigation-drawer v-model="drawer" absolute bottom temporary >
      <v-list nav dense >
        <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4" >
          <v-list-item>
            <v-list-item-title>Weather</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>Solar</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>About</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
import Weather from './views/Weather.vue';
import About from './views/About.vue';

export default {
  name: 'App',

  components: {
    Weather,About,
  },

  data: () => ({
    drawer:false,
    group:0,
    //
  }),
  watch: {
    group () {
      console.log(this.group)
      this.drawer = false
    },
  }
};
</script>
