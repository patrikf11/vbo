
<template>
  <v-container class="text-center"> 
    <RadialGauge :value="val" :options="opts"/>  
  </v-container>
</template>

<script>

import RadialGauge from './RadialGauge.vue'

export default {
  name: 'GaugeCard', 
  props: { 
    src: {type: Object,
          default: () => ({dta:[], opts:{}})
    },
    header: null,
  },
  data: () => ({}),
  computed:{
      opts() {
        return this.src?.opts || {};
      },
      val() {
          if (this.src?.dta?.value){    
            return this.src?.dta?.value*1;
          }
          return 0;
      },
  },
  components:{
      RadialGauge
  }
}
</script>