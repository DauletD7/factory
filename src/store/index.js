import Vue from 'vue';
import Vuex from 'vuex';
import fav from './fav.js';

Vue.use(Vuex);

export default new Vuex.Store({
  modules:{
    fav
  }
});
