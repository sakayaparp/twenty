import Vue from 'vue';
import firebase from 'firebase';
import moment from 'moment';
import '!script!jquery/dist/jquery.min';
import '!script!semantic-ui-css/semantic.min';
import '!style!css!semantic-ui-css/semantic.min.css';
import router from './router';
import App from './App';

firebase.initializeApp({
  apiKey: 'AIzaSyC5qvk86rfSc3JQIWMSsPAXU0mdMPpfFHc',
  authDomain: 'twenty-hw3.firebaseapp.com',
  databaseURL: 'https://twenty-hw3.firebaseio.com',
  storageBucket: 'twenty-hw3.appspot.com',
  messagingSenderId: '926352514426',
});

Vue.filter('upper', (value) => {
  if (typeof value === 'string') {
    return value.toUpperCase();
  }

  return value;
});

// const ticker = new Vue({
//   data: () => ({
//     tick: 0,
//   }),
//   created() {
//     setTimeout(() => {
//       this.tick = Date.now();
//     }, 10000);
//   },
// });

Vue.filter('fromNow', value => moment(value).fromNow());

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
});
