import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Toggle from '@/components/toggle'
import Bus from '@/components/bus'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/tog',
      name:'toggle',
      component: Toggle
    },{
      path:'/bus',
      name:'bus',
      component:Bus  // 通信总线
    }
  ]
})
