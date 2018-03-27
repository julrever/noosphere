// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Viewer from 'v-viewer'
  Vue.use(Viewer)


new Vue({
  el: '#main',
  router,
  data: {
    isActive: false,
  },
  methods: {
    openMenu: function() {
    }
  }
})
