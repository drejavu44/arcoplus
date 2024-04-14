<script setup>
import { getProducts, deleteProduct } from "../supabase/supabase.js";
import { ref, onMounted } from "vue";
import AddProduct from "./addProduct.vue";

const products = ref([]);
const selectedProduct = ref({})

const handleGetProducts = async () => {
  products.value = await getProducts()
};

const handleDeleteProduct = async(product)=> {
  const isDeletionSuccessful = await deleteProduct(product)

  if(!isDeletionSuccessful){
    alert(`Unable to delete product with ID ${product.id}`)
  }

  products.value = products.value.filter(prod => prod.id !== product.id)
}

const setSelectedProduct = (product) =>{
  selectedProduct.value = product
}

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
      <button @click="handleDeleteProduct(product)">Delete</button>
      <button @click="setSelectedProduct(product)">Edit</button>
    </li>
  </ul>
</template>
<style scoped>
</style>
