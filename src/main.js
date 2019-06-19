import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase';

Vue.config.productionTip = false;

var firebaseConfig = {
  apiKey: "AIzaSyAbr4r2cFv4j8n4N8LKckkSPjd00Tcakk8",
  authDomain: "cs260jdsc0.firebaseapp.com",
  databaseURL: "https://cs260jdsc0.firebaseio.com",
  projectId: "cs260jdsc0",
  storageBucket: "cs260jdsc0.appspot.com",
  messagingSenderId: "120870431557",
  appId: "1:120870431557:web:cb4c121c18d011fb"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

firebase.auth().onAuthStateChanged(user => {
  if(user){
    store.commit('setUser',user);
  }
  else {
    store.commit('setUser',null);
  }
});
