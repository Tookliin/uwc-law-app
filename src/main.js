import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueNoty from 'vuejs-noty'
import VueDisqus from 'vue-disqus'
import 'vuejs-noty/dist/vuejs-noty.css'
import wysiwyg from "vue-wysiwyg";
import "vue-wysiwyg/dist/vueWysiwyg.css";
import vuetify from './plugins/vuetify';



Vue.use(wysiwyg, {}); // config is optional. more below
Vue.use(VueDisqus)
Vue.use(VueNoty, {
  timeout: 4000,
  progressBar: true,
  layout: 'topCenter'
});
Vue.config.productionTip = false
const authData = localStorage.getItem('auth');
new Vue({
  router,

  data: {
    auth: {
      auth: authData ? JSON.parse(authData) : {}
    }
  },

  vuetify,
  render: h => h(App)
}).$mount('#app')
