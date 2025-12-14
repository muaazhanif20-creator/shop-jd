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


       
       },
       deleteProduct(productIdToDelete){
        const deleteURL = `https://fakestoreapi.com/products/${productIdToDelete}`;

fetch(deleteURL, {
    method: "DELETE" 
})
.then(response => {
    // Check for a successful response (usually 200, 204, or 202)
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    // The response body often contains the deleted object as confirmation (a mock response)
    return response.json(); 
})
.then(deletedProduct => {
    console.log(`Successfully deleted product ID ${productIdToDelete} (mock confirmation):`);
    console.log(deletedProduct);
    // In a real application, you would now update the UI to remove the item.
})
.catch(error => {
    console.error("DELETE error:", error);
});

       }

}
  })