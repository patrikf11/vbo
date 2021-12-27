<template>
  <v-container v-if="!bmeLoading">
      <h3>Foul weather...</h3>
      <ul>
        <li> Temp  {{temperature}} </li>
        <li> Press {{pressure}}</li>
        <li> Humids {{humidity}}</li>
      </ul>      
  </v-container>
</template>

<script>
  import store from '../store/store';
  import * as type from '../store/types';
  import { mapGetters } from 'vuex';

  export default {
    name: 'Weather',
    data: () => ({ }),
    methods: {
    },
    computed: {
      ...mapGetters([
        'bmeLoading',
        'temperature',
        'pressure',
        'humidity',
      ]),
    },
    mounted: function() {
      store.dispatch({type: type.FETCH_BME}); 
    }, 
    created: function() {},      
  }
</script>
