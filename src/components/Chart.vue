<template>
    <v-col>
    <div class="chart-container" :style="grr">
    <canvas class="vue-chart-js" ref="canvas"></canvas>
    </div>
    <div style= height:10vh;></div>
    </v-col>
</template>

<script>
import Chart from 'chart.js'
export default {
  name: 'Chart',
  props: { 
    chartData: { 
        type: Object,
        default: () => ({})  
    },
  },
  data() {
    return {
      chart: null,
    }
  },
  mounted() {
    const ctx = this.$refs.canvas;
    this.chart= new Chart(ctx, this.chartData);
  },
  methods:{
  },
  beforeDestroy: function () {
    this.chart.destroy()
  },
  computed:{
    grr: function () {
      let h = this.$vuetify.breakpoint.smAndUp ? 70 : 40;    
      return `position: relative; height:${h}vh`;
    },
  },
  watch: {
    chartData: function (val) {
        this.chart.options=val.options;
        this.chart.data = val.data;
        this.chart.update();
    },
   } 
}
</script>