// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCommentAlt, faPaperPlane, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import BulmaToastr from 'vue-bulma-toastr'
Vue.use(BulmaToastr)
library.add(faCommentAlt, faPaperPlane, faTimes)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
