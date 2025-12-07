<template>
  <WelcomeSection title="Welcome to my home page" subTitle="fresh deal on home page"/>
  <ProductCardList/>
  <NewsLetter/>
</template>

<script setup>

import ProductCardList from '../components/Product-Card-List.vue';
import WelcomeSection from '../components/welcome-section.vue';
import NewsLetter from '../components/News-Letter.vue'

const linksArray = ['Home','About', 'Contact','Cart']
</script>