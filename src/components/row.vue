<template>
    <div class="flex"  :style="root">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name:'irow',
    props:{
        width:{
            type: String,
            default:''
        },
        height:{
            type:String,
            default:''
        },
        direct:{
            // 主轴方向
            type: String,
            default:'row'
        },
        wrap:{
            type:Boolean,
            default:false
        },
        jusc:{
            // 主轴上的对齐方式
            type:String,
            default:'space-between'
        },
        alignItem:{
            // 项目在交叉轴的对齐方式
            type:String,
            default:"flex-start"
        },
        alignContent:{
            // 多根轴线的对齐方式
            type:String,
            default:"flex-start"
        },
        border:{
            type:String,
            default:'transparent'
        },
        padding:{
            type:String,
            default:'0'
        },
        margin:{
            type:String,
            default:'0'
        },
        back:{
            type:String,
            default:'transparent'
        },


        // item
        order:{
            type:Number,
            default:0
        },
        flex:{
            type:String,
            default:'none'
        },
        alignSelf:{
            // not usefull
            type:String,
            default:'auto'
        },
        center:{
            type:Boolean,
            default:false
        },
        middle:{
            type:Boolean,
            default:false
        }


    },
    computed:{
        root(){
            return `
                width: ${this.width};
                height:${this.height};
                flex-direction:${this.direct};
                flex-wrap:${this.cwrap};
                justify-content:${this.jusc};
                align-item:${this.alignItem};
                align-content:${this.alignContent};
                border:${this.border};
                padding:${this.padding};
                margin:${this.margin};
                background:${this.back};
                
                order:${this.order};
                flex:${this.flex};
                align-self:${this.alignSelf};
                ${this.ccenter}
                ${this.cmiddle}

            `
        },
        cwrap(){
            return this.wrap ? 'wrap' :'nowrap'
            
        },
        ccenter(){
            return this.center ?   `justify-content: center;` :''
        },
        cmiddle(){
            return this.middle ?  `align-items:center;` :''
        }
    }
}
</script>

<style>
.flex,.flex *{
    display: flex;
    box-sizing: border-box;
    width:100%;
}
</style>
