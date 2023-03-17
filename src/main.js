import { createApp } from 'vue'
import App from './App.vue'
import './css/index.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSearch, faCaretDown, faBell } from '@fortawesome/free-solid-svg-icons'

library.add(faSearch, faCaretDown, faBell)
createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')