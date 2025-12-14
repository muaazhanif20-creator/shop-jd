<template>
    <!--Product list Section-->
    <section class="products">
         <h2>Featured Products</h2>
         <div class="product-list flex-center">
            <ProductCard v-for="value in store.products"  :id="value.id" :name="value.title" :imgSrc="value.image" :price="value.price"></ProductCard>    
         </div>
    </section>
</template>
<script setup>
import ProductCard from './Product-Card.vue';
import {useProductList} from '../store/productlist'

const store = useProductList()
store.getProductListing()

</script>