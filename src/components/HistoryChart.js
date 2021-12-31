import { cloneDeep } from 'lodash'

export const chartData = {
    type: 'line',
    data: {
        datasets: [{
            label: 'Temperature',
            data: [15, 20, 40, 41],
            fill: false
        }],
        labels: ['January', '',  'March', 'April']
    },
    options: {
        responsive: true,
        legend:{ display: false },  
        scales: {
            x: {
              ticks: {
                callback: function(val) {
                  return 'DD'+val;
                },
                color: 'red',
              }
            }
        }
    }
};

export function getChartData(rawdata){
    let dta = cloneDeep(chartData),
        dtap = rawdata.map( t => t.value),
        lbl = rawdata.map( t => t.dt.substring(8,10));

    dta.data = { 
        datasets: [{
            label: 'Temperature',
            data: dtap,
            fill: false
            }],
        labels: lbl
    };
    return dta;
}

export default chartData;