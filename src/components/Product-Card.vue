<template>
 <div class="product-card">
<img :src="imgSrc" :alt="imgSrc">
 <h3>{{name}}</h3>
 <p v-if="isAboutPage">{{ description}}</p>
 <p v-else>Rs: {{price}}</p>
<button class="buyButton" v-show="isButtonShow">Buy now</button><br>
<button class="DelButton" v-show="IsDeleteButton">Delete</button>
</div>
</template>

<script setup>
defineProps({
    id:{
        type:Number,
        default:0
    },
    name:{
        type:String,
        default:''
    },
    price:{
      type:Number,
      default:0
    },
    imgSrc:{
        type:String,
        default:'https://cdn.pixabay.com/photo/2015/10/16/13/47/premium-991221_1280.jpg'
    },
    isButtonShow:{
        type:Boolean,
        default:true
    },
    isAboutPage:{
        type:Boolean,
        default:false
    },
    description:{
        type:String,
        default:''
    },
    IsDeleteButton:{
        type:Boolean,
        default:false
    }
})
</script>
