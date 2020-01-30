import Vue from 'vue'
import Vuex from 'vuex'
// import app from './modules/app'
// import errorLog from './modules/errorLog'
// import permission from './modules/permission'
// import tagsView from './modules/tagsView'
// import settings from './modules/settings'
// import user from './modules/user'
import city from './modules/city'
import province from './modules/province'
import getters from './getters'
   
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    // app,
    // errorLog,
    // permission,
    // tagsView,
    // settings,
    // user,
    city,
    province,
  },
  getters
})

export default store
