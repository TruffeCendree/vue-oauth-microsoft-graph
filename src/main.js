import { createApp } from 'vue'
import { FontAwesomeIcon } from './lib/fontAwesome'
import App from './App.vue'

createApp(App)
  .component('FontAwesomeIcon', FontAwesomeIcon)
  .mount('#app')
