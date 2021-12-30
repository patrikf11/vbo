
<template>
  <canvas class="canvas-gauges"></canvas>
</template>

<script>
//fork of cpfarher/vue2-canvas-gauges
import { RadialGauge } from 'canvas-gauges'
export default {
  name: 'RadialGauge', 
  props: { 
    value: Number,
    options: { // https://canvas-gauges.com/documentation/user-guide/configuration
        type: Object,
        default: () => ({})  
    }
  },
  data: function () {
    return {
      chart: null
    }
  },
  mounted: function () {  
    let minv = this.options?.minValue ? this.options?.minValue : 0;
    this.chart = new RadialGauge(Object.assign({}, this.options, {renderTo: this.$el, value: minv})).draw();
    this.chart.value = this.value;
    
  },
  beforeDestroy: function () {
    this.chart.destroy()
  },
  watch: {
    value: function (val) {
      this.chart.value = val;
    },
    options: function () {
      //update seems to work a lot better
      //this.chart.destroy();
      //this.chart = new RadialGauge(Object.assign({}, this.options, {renderTo: this.$el, value: this.value})).draw()
      this.chart.update(this.options);
    }
  }
}
</script>