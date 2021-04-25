import Vue from 'vue'
// import Vuex from 'vuex'
import {Store, install} from 'vuex'
import setting from './setting.js'
import banner from './banner.js'
import about from './about.js'
import project from './project.js'

// Vue.use(Vuex)
if(!window.Vuex){
	install(Vue)
}


const store = new Store({
  modules: {
		setting,
		banner,
		about,
		project
  },
	strict: true
})

window.store = store;

export default store
