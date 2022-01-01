<template>
    <Chart :chartData="getChartData()"/>
</template>

<script>
import Chart from './Chart.vue'
import {getChartData } from './HistoryChart.js'
import { mapGetters } from 'vuex';
import {BMEKind} from '../components/common.js'

export default {
  name: 'HistoryChart',
  props: { 
    metric: {type:String,
             default: () => {return 'temperature'}
    },
  }, 
  data: () => ({}),
  methods:{
        getChartData(){
            let data=[];
            switch(this.metric) {
            case "pressure":
                data = this.getBMEHist(BMEKind.PRESSURE);
                break;
            case "temperature":
                data = data = this.getBMEHist(BMEKind.TEMPERATURE);
                break;
            case "humidity":
                data = this.getBMEHist(BMEKind.HUMIDITY);
                break;
            default:
                data = [];
            }
          return getChartData(data) || {};
      }
  },
  computed: {
      ...mapGetters([
        'getBMEHist'
      ]),
  },
  components: {
      Chart
  }
}

</script>