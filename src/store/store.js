import Vue from 'vue'
import Vuex from 'vuex'

import { 
  FETCH_BME,
  LOADING_BME
 } from './types';

Vue.use(Vuex);

function mapBme(state, key){
  const curr = state.bmePayload.slice(-1)[0],
        prev =  state.bmePayload.slice(-7,-6)[0],
        currV = (curr && curr[key]) ? curr[key] : 0,
        prevV = (prev && prev[key]) ? prev[key] : 0;
  return {value:currV, prevValue:prevV, dt:curr?.created_at};
}

const store = new Vuex.Store({
    state: {
      bmePayload: [],
      bmeLoading: true
    },
    getters: {
      temperature(state){
        return mapBme(state, 'field1');
      },
      pressure(state){
        return mapBme(state, 'field2');
      },
      humidity(state){
        return mapBme(state, 'field3');
      },
      bmeLoading(state){
        return state.bmeLoading;
      },
      count(state){
        return state.count;
      },
    },
    mutations: {
      [FETCH_BME] (state, bmePayload) {
        state.bmePayload = bmePayload
      },
      [LOADING_BME] (state, status){
        state.bmeLoading = status;
      }
    },
    actions: {
      [FETCH_BME] (context) { 
        context.commit(LOADING_BME, true);         
        fetch("https://api.thingspeak.com/channels/586281/feeds.json?results=10")
          .then(response => response.json())
          .then(data => context.commit(FETCH_BME, data.feeds))
          .catch(error => console.log(error.statusText));
        context.commit(LOADING_BME, false);           
      },
    },
  });
  
export default store;

