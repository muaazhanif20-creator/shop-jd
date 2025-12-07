<template>
 <!--Welcome section-->
    <section class="image-background section-height">
        <div class="flex-center flex-direction-column section-height">
               <h1 class="text-color-white welcome-text-font-size">{{title}}</h1>
                <p class="text-color-white margin-top-bottom-10 welcome-paragraph-font-size">{{subTitle}}</p>
                <button v-if="isButtonShow">shop now</button> 
               
        </div>     
    </section>
 </template>


<script setup>
defineProps({
    title:{
        type:String,
        default:'Welcome to my website'
    },
    subTitle:{
          type:String,
        default:'Fresh deal every day'
    },
    isButtonShow:{
     type:Boolean,
     default:true
    }

})
</script>