import { createApp } from 'vue'
import App from './App.vue'
import './css/index.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSearch, faCaretDown, faBell, faPlus, faBookmark, faMobileAlt, faInfo, faStepBackward, faCaretLeft, faStepForward, faCaretRight } from '@fortawesome/free-solid-svg-icons'

library.add(faSearch, faCaretDown, faBell, faPlus, faBookmark, faMobileAlt, faInfo, faStepBackward, faCaretLeft, faStepForward, faCaretRight)
createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')