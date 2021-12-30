<template>
  <v-card flat v-if="!bmeLoading">
    <v-window v-model="model" reverse >
      <GaugeWindowItem :dta="humidity" :opts="getOpts(gaugeKind.HUMIDITY)" header="humidity"  /> 
      <GaugeWindowItem :dta="temperature" :opts="getOpts(gaugeKind.TEMPERATURE)" header="temp"  />
      <GaugeWindowItem :dta="pressure" :opts="getOpts(gaugeKind.PRESSURE)" header="pressure" />
    </v-window>
    <v-card-actions class="justify-space-between" style="flex-direction: column;">
      <v-item-group v-model="model" class="text-center" mandatory >
        <v-item v-for="n in length" :key="`btn-${n}`" v-slot="{ active, toggle }" >
          <v-btn :input-value="active" icon @click="toggle" >
            <v-icon>mdi-record</v-icon>
          </v-btn>
        </v-item>
      </v-item-group>
    </v-card-actions>
  </v-card>
</template>

<script>
  import GaugeWindowItem from '../components/GaugeCard.vue'
  import { mapGetters } from 'vuex';
  import {getGaugeOptions, GaugeKind} from './weather.js'

  export default {
    name: 'Weather',
    data: () => ({
      length: 3,
      model: 1,
      gaugeKind:GaugeKind,
    }),
    methods: {
      getOpts(kind){
        return getGaugeOptions(kind, this.pressure?.value, this.pressure?.prevValue);
      }
    },
    computed: {
      ...mapGetters([
        'bmeLoading',
        'temperature',
        'pressure',
        'humidity',
      ]),
    },
    mounted: function() {
      // data is fetched by main app    
    },
    created: function() {}, 
    components: {
      GaugeWindowItem  
    }     
  }
</script>
