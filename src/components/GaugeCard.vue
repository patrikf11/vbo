
<template>
    <v-window-item>
        <v-card class="text-center"> 
          <RadialGauge :value="val" :options="opts"/>  
          <HistoryChart :metric="header"/>
          <v-footer padless>
            <v-col class="text-center text-capitalize" cols="12">
            {{dt}}
          </v-col>
          </v-footer>        
        </v-card>
    </v-window-item> 
</template>

<script>

import RadialGauge from './RadialGauge.vue'
import HistoryChart from './HistoryChart.vue'
import { format,parseISO } from 'date-fns'
import sv from 'date-fns/locale/sv'
export default {
  name: 'GaugeCard', 
  props: { 
    dta: {},
    opts: {},
    header: null, 
  },
  data: () => ({}),
  computed:{
      val() {
          if (this.dta?.value){    
          return this.dta?.value*1;
          }
          return 0;
      },
      dt() {
        if (this.dta?.dt){    
            return format(parseISO(this.dta?.dt), 'HH:mm EEEE, d LLLL', {locale: sv});
        }
        return '';
      }
  },
  components:{
      RadialGauge,HistoryChart
  }
}
</script>