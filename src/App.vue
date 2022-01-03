<template>
  <v-app>
    <v-app-bar
      app
      color="#fcb69f"
      dark
      src="https://picsum.photos/900/60?random"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-btn icon @click="reload"><v-icon>mdi-sync</v-icon> </v-btn>
    </v-app-bar>

    <v-main app >
      <Weather v-if="group == 0" />
      <Solar v-if="group == 1" />
      <About v-if="group == 2" />
    </v-main>

    <v-footer app bottom padless >
      <v-col class="text-center text-capitalize" cols="12">
        {{ dt }}
      </v-col>
    </v-footer>

    <v-navigation-drawer v-model="drawer" absolute bottom temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
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
import Weather from "./views/Weather.vue";
import Solar from "./views/Solar.vue";
import About from "./views/About.vue";
import store from "./store/store";
import { FETCH_BME, FETCH_VICTRON } from "./store/types";
import { BMEKind } from "./common/common.js";
import { mapGetters } from "vuex";
import { format, parseISO } from "date-fns";
import sv from "date-fns/locale/sv";

export default {
  name: "App",
  computed: {
    ...mapGetters(["bmeLoading", "getBMECurrent"]),
    dt() {
      let temperature = this.getBMECurrent(this.bmeKind.TEMPERATURE);
      if (temperature?.dt) {
        return format(parseISO(temperature?.dt), "HH:mm EEEE, d LLLL", {
          locale: sv,
        });
      }
      return "";
    },
  },
  methods: {
    reload: () => {
      console.log("fetching data TODO rewrite handling");
      store.dispatch({ type: FETCH_BME });
      store.dispatch({ type: FETCH_VICTRON });
      console.log("fetching data done");
    },
  },
  components: {
    Weather,
    About,
    Solar,
  },
  data: () => ({
    drawer: false,
    group: 0,
    bmeKind: BMEKind,
  }),
  watch: {
    group() {
      console.log(this.group);
      this.drawer = false;
    },
  },
  mounted: function () {
    this.reload();
  },
};
</script>
