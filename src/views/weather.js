//try ro keep vue files clean by moving out excessive scripts 
import { cloneDeep } from 'lodash'

const templateOpt = {
    units: '',
    title: '',
    height:250, //needs to be fixed in order to render same size
    width:250,
    minValue: 0,
    maxValue: 0,
    strokeTicks: true,
    colorBar: 'white',
    barProgress:false,
    colorBarProgress: 'blue',
    highlights: [],
    minorTicks: 0,
    majorTicks: [],
    colorPlate: '#fff',
    borderShadowWidth: 0,
    borders: false,
    needleType: 'arrow',
    needleShadow: true,
    needleWidth: 2,
    needleCircleSize: 7,
    needleCircleOuter: true,
    needleCircleInner: true,
    numberSide: 'left',
    needleSide: 'left',
    animationDuration: 1500,
    animationRule: 'bounce',
    barWidth: 15,
    valueBox: true,
    valueBoxStroke: 5,
    valueTextShadow: true,
    valueDec: 2,
    valueInt:1,
    barBeginCircle: 0,
    fontNumbersSize: 28,
    fontUnitsSize: 25,
    fontValueSize: 30
  };

  function gaugeTrend(currVal, prevVal){
    if (prevVal < currVal){
      return [{from:prevVal, to:currVal, color:'red'}];
    }
    if (prevVal > currVal){
      return [{from:currVal, to:prevVal, color:'blue'}];
    }
    return [];
  }

  export function getGaugeOptions(kind, currVal, prevVal){
    let opt = cloneDeep(templateOpt);
    if (GaugeKind.PRESSURE.name == kind.name) {
        opt.units = 'hPa';
        opt.title = 'Pressure.';
        opt.minValue = 960;
        opt.maxValue = 1060;
        opt.minorTicks = 10;
        opt.fontNumbersSize = 20;
        opt.majorTicks = ['','970','980','990','1000','','1020','1030','1040','1050',''];
        opt.highlights=gaugeTrend(currVal, prevVal);
    }
    if (GaugeKind.HUMIDITY.name == kind.name) {
        opt.units = '%RH';
        opt.title = 'Humidity.';
        opt.minValue = 0;
        opt.maxValue = 100;
        opt.minorTicks = 5;
        opt.majorTicks = ['0','','20','','40','','60','','80','','100'];
        opt.highlights=gaugeTrend(currVal, prevVal);
    }
    if (GaugeKind.TEMPERATURE.name == kind.name) {
        opt.units = '°C';
        opt.title = 'Temp.';
        opt.minValue = -40;
        opt.maxValue = 40;
        opt.highlights = [ {'from': -40,'to': -15,'color': 'lightblue'},{'from': 30,'to': 40,'color': 'red'}];
        opt.minorTicks = 3;
        opt.majorTicks = ['','-30','-20','-10','','10','20','30',''];
        console.log(currVal + "----" + prevVal);
        opt.highlights=gaugeTrend(currVal, prevVal);
    }
    return opt;
  }
 
  export class GaugeKind {
    // Create new instances of the same class as static attributes
    static PRESSURE = new GaugeKind("pressure");
    static TEMPERATURE = new GaugeKind("temperature");
    static HUMIDITY = new GaugeKind("humidity");
    constructor(name) {
      this.name = name;
    }
  }

  