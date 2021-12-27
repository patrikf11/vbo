import Vue from 'vue'
import Vuex from 'vuex'
import * as type from './types';

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
      count: 0,
      bmePayload: [],
      bmeLoading: true
    },
    getters: {
      temperature(state){
        return state.bmePayload.slice(-1)[0]?.field1;
      },
      pressure(state){
        return state.bmePayload.slice(-1)[0]?.field2;
      },
      humidity(state){
        return state.bmePayload.slice(-1)[0]?.field3;
      },
      bmeLoading(state){
        return state.bmeLoading;
      },
      count(state){
        return state.count;
      },
    },
    mutations: {
      increment (state, payload){
        console.log('mutat');
        return state.count = state.count + payload.amount;
      },
      fetchBME(state, bmePayload) {
        console.log('add payload', bmePayload);
        state.bmePayload = bmePayload
      },
      loadingBME(state, status){
        state.bmeLoading = status;
      }
    },
    actions: {
      fetchBME( context ) { 
        context.commit(type.LOADING_BME, true);         
        fetch("https://api.thingspeak.com/channels/586281/feeds.json?results=10")
          .then(response => response.json())
          .then(data => context.commit(type.FETCH_BME, data.feeds))
          .catch(error => console.log(error.statusText));
        context.commit(type.LOADING_BME, false);           
      },
      increment (context, payload) {
        console.log('action');
        context.commit(type.Increment, payload);
      },
    },
  });
  
export default store;

