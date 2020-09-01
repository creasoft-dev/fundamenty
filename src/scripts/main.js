import '../styles/main.css';
import '../styles/algolia.css';
import '../styles/radar.css';
import './algolia.js';

import Vue from 'vue/dist/vue.js'

import Search from './Search.vue';
import ReactiveSearch from '@appbaseio/reactivesearch-vue';

Vue.config.productionTip = false;
Vue.use(ReactiveSearch);

var app = new Vue({
    el: '#vue-container',
    data: {
        message: 'Vue is working!'
    },
    components: {
        Search
    }
});

// console.log(Search);
