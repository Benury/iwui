<template>
    <div :style="item">
        <slot></slot>
    </div>
</template>
<script>
export default {
    props:{
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
        width:{
            type:String,
            default:''
        },
        height:{
            type:String,
            default:''
        },
        border:{
            type:String,
            default:'transparent'
        },
        padding:{
            type:String,
            default:"0"
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
        item(){
            return  `
                order:${this.order};
                flex:${this.flex};
                align-self:${this.alignSelf};
                width:${this.width};
                height:${this.height};
                border: ${this.border};
                padding: ${this.padding};
                ${this.ccenter}
                ${this.cmiddle}
            `
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
