import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'

/* font awesome installed */
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(faUserSecret)
library.add(faCoffee)

Vue.component('font-awesome-icon', FontAwesomeIcon)
/* font awesome end */

Vue.config.productionTip = false

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyC3g1hbFcZSnHwfszRIrcwDkxpZk8lH-og",
  authDomain: "coffeebase-61e0c.firebaseapp.com",
  databaseURL: "https://coffeebase-61e0c.firebaseio.com",
  projectId: "coffeebase-61e0c",
  storageBucket: "coffeebase-61e0c.appspot.com",
  messagingSenderId: "1097494948665",
  appId: "1:1097494948665:web:81290a5c1e2311489356e8",
  measurementId: "G-25CRVJVBYY"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
