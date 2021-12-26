import Vue from 'vue'
import Vuex from 'vuex'
import * as type from './types';

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
      count: 0
    },
    mutations: {
      increment (state, payload){
        console.log('mutat');
        return state.count = state.count + payload.amount;
      }
    },
    actions: {
      increment (context, payload) {
        console.log('action');
        context.commit(type.Increment, payload);
      },
    },
  });
  
export default store;

