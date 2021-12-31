<template>
    <Chart :chartData="getChartData()"/>
</template>

<script>
import Chart from './Chart.vue'
import {getChartData } from './HistoryChart.js'
import { mapGetters } from 'vuex';

export default {
  name: 'HistoryChart',
  props: { 
    metric: {type:String,
             default: () => {return 'temperature'}
    },
  }, 
  data() {
    return {
    }
  },
  methods:{
        getChartData(){
            let data=[];
            switch(this.metric) {
            case "pressure":
                data = this.pressureHist;
                break;
            case "temperature":
                data = this.temperatureHist;
                break;
            case "humidity":
                data = this.humidityHist;
                break;
            default:
                data = [];
            }
          return getChartData(data) || {};
      }
  },
  computed: {
      ...mapGetters([
        'temperatureHist','pressureHist','humidityHist'
      ]),
  },
  components: {
      Chart
  }
}

/*
class Metric {
    static PRESSURE = new Metric("pressure");
    static TEMPERATURE = new Metric("temperature");
    static HUMIDITY = new Metric("humidity");
    constructor(name) {
      this.name = name;
}
*/
</script>