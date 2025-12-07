<template>
      <header class="flex header">
        <div class="logo">
            <img v-if="imgLogoSrc" :src="imgLogoSrc" width="100" height="100"/>
           <h1 class="logo-font-style">{{brandName}}</h1>
        </div>
        <nav class="nav">   
            <RouterLink :to="`/${value.toLowerCase()}`" class="margin-10 nav-link" v-for="value in brandPageLinks">{{value}}</RouterLink>
        </nav>
    </header>
</template>

<script setup>
  
  defineProps({
  brandName: {
    type: String,
    default: 'JD'
  },
  brandPageLinks: {
    type: Array,
    default:['Home', 'Shop', 'About', 'Contact']
  },
  imgLogoSrc:{
   type:String,
    default:''
  }
})

</script>