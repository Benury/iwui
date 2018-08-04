// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
Vue.use(Vuex)
Vue.prototype.isShow = "a"
Vue.directive('def', {  //  解决toggle 切换经常定义变量比较麻烦的问题
  bind: function (el, binding, vnode) {    
    console.log(binding)
      let filed = binding.arg;  
      let value = binding.expression;
      let _this = vnode.context;
      _this.$set(_this.is, filed, value)
  },
  update: function (el) {
  },
  unbind: function (el) {
  }
})

Vue.mixin({
  data(){
    return {
      is:{  //  解决toggle 切换经常定义变量比较麻烦的问题
        
      }
    }
  },
  computed:{
    state: function(){
      return this.$store.state;
    }
  },
  methods:{
    getStore(name){
      this.$store.registerModule(name,{
        state:{     
        },
        mutations:{
          inject(state,data){
            console.log(data)
            var data = JSON.parse(JSON.stringify(data))
            Object.assign(state, data)
          }
        }

      })
     // console.log(this)
    }
  }

})
//全局函数

Vue.config.productionTip = false
Vue.prototype.test1 = 'bcddsd'


var store = new Vuex.Store({
  
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store:store
})


