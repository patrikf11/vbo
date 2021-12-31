<template>
    <canvas class="vue-chart-js"></canvas>
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
      chart: null
    }
  },
  mounted() {
    const ctx = this.$el;
    this.chart= new Chart(ctx, this.chartData);
  },
  beforeDestroy: function () {
    this.chart.destroy()
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