<template>
  <HeaderComponent brandName="Bata" :brandPageLinks="linksArray" imgLogoSrc=""/>
  <RouterView />
  <FooterComponent/>
</template>

<script setup>
import FooterComponent from './components/Footer-Component.vue'
import HeaderComponent from './components/Header-Component.vue';

</script>