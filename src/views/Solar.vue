<template> 
<v-container>
  <v-row>  
  <HistoryChart /> 
  </v-row>
</v-container> 
 </template>

<script>
import HistoryChart from '../components/HistoryChart.vue'
  export default {
    name: 'About',
    data: () => ({windowSize:{} }),
    components: {
        HistoryChart
    },
    methods:{
    },
    computed:{
    },
  }
</script>
