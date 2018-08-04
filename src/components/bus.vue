<template>
    <div>
        bus {{$store.state.count}}
       
        {{st.a.c}}
    </div>
</template>
<script>
export default {
    name:'bus',
    params:{ // 需要共享的参数
        a:{
            c:''
        },
        b:456
    },
    data(){
        return {
            demo:{},

        }
    },
    computed:{
        st :function(){
            return this.$store.state.bus
        }
    },
    created (){
        // 动态创建vuex模块，往里面添加需要托管给自组建共享的变量， 自组件使用，其实应该在自组建中定义 自己需要的变量
        // 父组件使用 是 初始化所有状态
        this.getStore('bus') // 动态创建模块
        this.$store.commit('inject', this.$options.params); // 注入改组件需要共享的通信参数
        //console.log(this.$store.state)


        
        
    }
}
</script>
