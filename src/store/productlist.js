import { defineStore } from 'pinia'

export const useProductList = defineStore('products', {
    state: () => ({ products:[
        {
            id:1,
            name:'blue shirt',
            imgPath:'https://cdn.pixabay.com/photo/2017/09/03/14/41/mock-up-2710535_1280.jpg',
            price:600

        },
        {
            id:2,
            name:'black shirt',
            imgPath:'https://cdn.pixabay.com/photo/2013/07/18/10/57/polo-shirt-163563_1280.jpg',
            price:1000

        },
        {
            id:3,
            name:'black shirt 2',
            imgPath:'https://cdn.pixabay.com/photo/2013/07/18/10/57/polo-shirt-163563_1280.jpg',
            price:2000

        }
   
    ]}),
    getters: {
      totalItems: (state) => state.products.length,
    },
  })