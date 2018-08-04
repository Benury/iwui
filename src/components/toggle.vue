<template>
   <div>   
       <irow direct="column" height="680px"  back="#e2e2e2" >
           <irow height="100px" >1</irow>
           <irow flex="1" border="1px solid red">
               <irow direct="row"  back="#fff" >
                   <irow width="100px">a</irow>
                   <irow flex="1" >b</irow>
                   <irow flex="2" >b</irow>                   
                   <irow width="300px" >
                       <irow direct="column">
                           <irow height="60px"  middle  center border="1px solid #ccc" padding="0 0 0 10px">报告设置</irow>
                           <irow flex="1" border="1px solid #ccc;">
                              <irow direct="row" wrap padding="20px 20px"> 
                                    
                                    <irow width="46%"  margin="0 0 10px 0" direct="column" center middle>
                                        <irow center middle height="50px" border="1px solid red;"  margin="0 0 10px 0" relative>abc</irow>
                                        <irow center>表两色</irow>
                                    </irow>
                                    <irow width="46%" height="50px" border="1px solid red;"  margin="0 0 10px 0">3</irow>
                                    <irow width="46%" height="50px" border="1px solid red;" padding="20px 10px" margin="0 0 10px 0">4</irow>
                                    <irow width="46%" height="50px" border="1px solid red;" padding="20px 10px" margin="0 0 10px 0">4</irow>


                              </irow>
                           </irow>
                       </irow>
        
                   </irow>
               </irow>
           </irow>
           <irow height="80px">3</irow>
       </irow>
   </div>
</template>
<script>
import bus from './bus'
import irow from './row'
import item from './item'
export default {
    name:'toggle',
    components:{
        bus,
        irow,
        item
    },
    myOption:'hello',
    data(){
        return {
          
        }
    },
    created(){
        // 定义组件所需的参数
        // 父组件使用子组件时不传参数，直接操作组件模块的store
        this.initStore();


    },
    beforeCreate:function(){
        
    },
    mounted:function(){
       //this.setData();
      // this.$set('my','213')  
      //this.$set('obj','a',1344)
      //this.obj['a'] = 12321321
      //this.$set(this.obj,'a',12343242)
    },
    methods:{
        initStore(){
            //this.state
        
        }
    },
    computed:{
        
        instance: function(){
            return this;
        }
    },
    directives:{
       tog1: {
           inserted:function(el,str,node){
               console.log(str)
               //this.$set('my','123123')
               //console.log(node.context)
               //node.context.$set('my',2123)
               
           }
       }
    }

}
</script>
