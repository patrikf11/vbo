<template>
  <v-container v-if="!bmeLoading">
    <v-row class="flex-nowrap justify-center" v-if="grr">
      <GaugeWindowItem v-for="kind in Object.values(bmeKind)" :key="kind.name" :src="getGaugeData(kind)"/>
    </v-row>
    <v-row class="flex-nowrap justify-center" v-model="model" v-if="!grr">
      <v-window v-model="model" reverse>
        <v-window-item v-for="kind in Object.values(bmeKind)" :key="kind.name">
          <v-col>
            <GaugeWindowItem :src="getGaugeData(kind)" />
          </v-col>
        </v-window-item>
      </v-window>
    </v-row>
    <v-card-actions class="justify-space-between" style="flex-direction: column" v-if="!grr">
      <v-item-group v-model="model" class="text-center" mandatory>
        <v-item v-for="kind in Object.values(bmeKind)" :key="kind.name" v-slot="{ active, toggle }">
          <v-btn :input-value="active" icon @click="toggle">
            <v-icon>mdi-record</v-icon>
          </v-btn>
        </v-item>
      </v-item-group>
    </v-card-actions>
  </v-container>
</template>

<script>
import GaugeWindowItem from "../components/GaugeCard.vue";
import { mapGetters } from "vuex";
import { BMEKind } from "../common/common.js";
import { getGaugeData } from "./weather.js";

export default {
  name: "Weather",
  data: () => ({
    model: 1,
    bmeKind: BMEKind,
  }),
  methods: {
    getGaugeData(bmeKind) {
      return getGaugeData(bmeKind, this.getBMECurrent(bmeKind));
    },
  },
  computed: {
    ...mapGetters(["bmeLoading", "getBMECurrent"]),
    grr: function () {
      return this.$vuetify.breakpoint.smAndUp;
    },
  },
  mounted: function () {
  },
  created: function () {},
  components: {
    GaugeWindowItem,
  },
};
</script>
