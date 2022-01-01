<template>
  <v-card flat v-if="!bmeLoading" >
    <v-row class="flex-nowrap justify-center" v-if="grr"> 
      <GaugeWindowItem :src="getGaugeData(bmeKind.HUMIDITY)" header="humidity"  /> 
      <GaugeWindowItem :src="getGaugeData(bmeKind.TEMPERATURE)" header="temperature"  />
      <GaugeWindowItem :src="getGaugeData(bmeKind.PRESSURE)" header="pressure" />
    </v-row>
    <template v-if="!grr" >
    <v-window v-model="model" reverse >
      <v-window-item>
        <GaugeWindowItem :src="getGaugeData(bmeKind.HUMIDITY)" header="humidity"  /> 
      </v-window-item>
      <v-window-item>
        <GaugeWindowItem :src="getGaugeData(bmeKind.TEMPERATURE)" header="temperature"  />
      </v-window-item>
      <v-window-item>
        <GaugeWindowItem :src="getGaugeData(bmeKind.PRESSURE)" header="pressure" />
      </v-window-item>  
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
    </template>
      <v-footer padless>
      <v-col class="text-center text-capitalize" cols="12">
          {{dt}} 
      </v-col>
    </v-footer>
  </v-card>
</template>

<script>
  import GaugeWindowItem from '../components/GaugeCard.vue'
  import { mapGetters } from 'vuex';
  import {BMEKind} from '../common/common.js'
  import {getGaugeData} from './weather.js'

  import { format,parseISO } from 'date-fns'
  import sv from 'date-fns/locale/sv'


  export default {
    name: 'Weather',
    data: () => ({
      length: 3,
      model: 1,
      bmeKind:BMEKind,
    }),
    methods: {
      getGaugeData(bmeKind){
        return getGaugeData(bmeKind, this.getBMECurrent(bmeKind));
      },
    },
    computed: {
      ...mapGetters([
        'bmeLoading',
        'getBMECurrent',
      ]),
      grr: function(){
        return  this.$vuetify.breakpoint.smAndUp;
      },
      dt() {
        let temperature = this.getBMECurrent(this.bmeKind.TEMPERATURE);
        if (temperature?.dt){    
            return format(parseISO(temperature?.dt), 'HH:mm EEEE, d LLLL', {locale: sv});
        }
        return '';
      },
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
