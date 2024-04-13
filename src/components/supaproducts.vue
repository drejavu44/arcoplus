<script setup>
import { getProducts } from "../supabase/supabase.js";
import { ref, onMounted } from "vue";
import AddProduct from "./addProduct.vue";

const products = ref([]);

const handleGetProducts = async () => {
  products.value = await getProducts()
};

const updateProductsArray = (newProduct) => {
  products.value = [...products.value, newProduct];
};

onMounted(() => {
  handleGetProducts();
});
</script>
<template>
  <h2>Products with backend functionalities</h2>
  <AddProduct :updateProductsArray="updateProductsArray" />
  <ul>
    <li v-for="product in products" :key="product.id">
      <p>{{ product.name }}</p>
      <img :src="product.imageUrl" width="100px" height="100px" />
    </li>
  </ul>
</template>
<style scoped></style>
