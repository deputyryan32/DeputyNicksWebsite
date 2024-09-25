import Vue from 'vue'
import Vuex from 'vuex'
import posts from './posts'

Vue.use(Vuex)

new Vuex.Store({
  // state: () => ({
  //   counter: 0
  // }),
  // mutations: {
  //   increment (state) {
  //     state.counter++
  //   }
  // },
  modules: {
    posts
  }
})
