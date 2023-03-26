import { defineStore } from 'pinia';

export default defineStore('product', {
  state: () => ({
    isProductModalOpen: false,
    productsShopCar: 0
  }),
  actions: {}
});
