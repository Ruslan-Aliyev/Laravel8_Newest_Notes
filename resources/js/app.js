import ApolloClient from 'apollo-boost';
import VueApollo from 'vue-apollo';

require('./bootstrap');

window.Vue = require('vue');
Vue.use(VueApollo)

Vue.component('example', require('./components/ExampleComponent.vue').default);

const apolloClient = new ApolloClient({
  uri: 'http://localhost/laravel_notes/public/graphql'
});

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
})

const app = new Vue({
    el: '.vuepart',
    apolloProvider
});