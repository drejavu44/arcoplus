<script setup>
import supabase from "@/supabase/supabase";
import { ref, onMounted } from "vue";
import AddProduct from "./addProduct.vue";

const products = ref([]);

const getProducts = async () => {
  const { data } = await supabase.from("products").select("*");
  products.value = data;
};

const updateProductsArray = (newProduct) => {
  products.value = [...products.value, newProduct];
};

onMounted(() => {
  // getCountries()
  getProducts();
});
</script>
<template>
  <h2>Products with backend functionalities</h2>
  <AddProduct :updateProductsArray="updateProductsArray" />
  <ul>
    <li v-for="product in products" :key="product.id">
      <p>{{ product.name }}</p>
      <img :src="product.imageURL" width="100px" height="100px" />
    </li>
  </ul>
</template>
<style scoped></style>
