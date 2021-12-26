<template>
  <v-container>
      <h3>Foul weather...</h3>
      <ul>
        <li> Temp </li>
        <li> Press </li>
        <li> Humids </li>
      </ul>      
      <v-btn @click="incr"> increment {{count}} </v-btn>
      <v-btn @click="decr"> decrement </v-btn>
  </v-container>
</template>

<script>
  import store from '../store/store';
  import * as type from '../store/types';
  import { mapState } from 'vuex';

  export default {
    name: 'Weather',
    data: () => ({ }),
    methods: {
      incr: function(){
        console.log('incr'); 
        store.dispatch({ type: type.Increment, amount: 20}); 
      },
      decr: function(){
        console.log('decr');
        store.dispatch({ type: type.Decrement, amount: 20}); 
      } 
    },
    computed: mapState({
      count: state => state.count,
    }),      
  }
</script>
