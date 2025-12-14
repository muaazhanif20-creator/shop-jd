import { defineStore } from 'pinia'

export const useProductList = defineStore('products', {
    state: () => ({ products:[]}),
    getters: {
      totalItems: (state) => state.products.length,
    },

    actions:{
        getProductListing(){
       
            const url = 'https://fakestoreapi.com/products';
            fetch(url).then(response => {
                 if (!response.ok) {
                 throw new Error(`HTTP error! status: ${response.status}`);
           }
          return response.json();
  })
  .then(data => {
     this.products = data 
  })
  .catch(error => {
    console.error("Fetch error:", error);
  });


       
       }
}
  })