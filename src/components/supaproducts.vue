<script setup>
import { getProducts, deleteProduct } from "../supabase/supabase.js";
import { ref, onMounted } from "vue";
import AddProduct from "./addProduct.vue";
import Navbar from "./navbar.vue";
import Footer from "./footer.vue";
import EditProductModal from "./editProductModal.vue";
import Swal from "sweetalert2";

const products = ref([]);
const selectedProduct = ref({})
const showEditProductModal = ref(false)

const handleGetProducts = async () => {
  products.value = await getProducts()
};

const handleDeleteProduct = async (product) => {
  const isDeletionSuccessful = await deleteProduct(product)

  isDeletionSuccessful ? Swal.fire({
    title: "Deleted!",
    text: "Your project has been deleted.",
    icon: "success",
    timer: 1500,
    showConfirmButton: false,
    confirmButtonColor: "rgba(205, 171, 100, 1)",
  }) : Swal.fire({
    title: "Deletion Failed.",
    text: "Your project has been deleted.",
    icon: "error",
    timer: 1500,
    showConfirmButton: false,
    confirmButtonColor: "rgba(205, 171, 100, 1)",
  });

  products.value = products.value.filter(prod => prod.id !== product.id)
}

const showEditProduct = (product) => {
  selectedProduct.value = product
  showEditProductModal.value = true
  console.log(selectedProduct.value)
}

const hideEditProduct = () => {
  selectedProduct.value = {}
  showEditProductModal.value = false
}

const updateProductsArray = (newProduct) => {
  products.value = [...products.value, newProduct];
};

const updateProductValue = (updatedProduct) => {
  products.value = products.value.map(product =>
    (product.id === updatedProduct.id) ? updatedProduct : product
  );
}

onMounted(() => {
  handleGetProducts();
});

</script>
<template>
  <Navbar />
  <br><br><br>
  <AddProduct :updateProductsArray="updateProductsArray" />
  <EditProductModal v-if="showEditProductModal" :hideEditProduct="hideEditProduct" :selectedProduct="selectedProduct" :updateProductValue="updateProductValue"/>
  <ul>
    <li v-for="product in products" :key="product.id">
      <p>{{ product.name }}</p>
      <img :src="product.imageUrl" width="100px" height="100px" />
      <button @click="handleDeleteProduct(product)">Delete</button>
      <button @click="showEditProduct(product)">Edit</button>
    </li>
  </ul>
  <Footer />
</template>
<style scoped></style>
