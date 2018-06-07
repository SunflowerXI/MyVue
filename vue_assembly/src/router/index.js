import Vue from 'vue'
import Router from 'vue-router'
import test from '@/components/test'

Vue.use(Router)

export default new Router({
  routes: [
    /* {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    } */
    {
      path: '/',
      name: 'test',
      component: test
    }
  ]
})
if (module.hot) {
  module.hot.accept();
}