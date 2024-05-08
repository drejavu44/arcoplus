<template>
  <!-- Products Section -->
  <div class="prod-container">
    <div class="prod-section-header">
      <h1>Products</h1>
      <p>
        Explore our wide range of construction solutions designed to meet your
        needs.
      </p>
    </div>
  
    <transition name="fade" mode="out-in">
      <div class="photo-container" :key="currentPage">
        <div class="photo-column" v-for="(product, index) in paginatedProducts" :key="index">
          <div class="image-wrapper">
            <img :src="product.imageUrl" class="product-image" />
            <div class="image-overlay">
              <p class="overlay-text">{{ product.name }}</p>
            </div>
          </div>
        </div>
      </div>
    </transition>

    <div class="pagination">
      <button @click="previousPage" :disabled="currentPage === 1"><i class="fa-solid fa-arrow-left"></i></button>
      <span>Page {{ currentPage }} of {{ totalPages }}</span>
      <button @click="nextPage" :disabled="currentPage === totalPages"><i class="fa-solid fa-arrow-right"></i></button>
    </div>
  </div>
</template>

<script setup>
import { getProducts } from '../supabase/supabase.js'
import { onMounted, ref, computed } from 'vue'

const isLoading = ref(false)
const products = ref([])
const itemsPerPage = 4 // Display only four products per page
const currentPage = ref(1)

const totalPages = computed(() => Math.ceil(products.value.length / itemsPerPage))

const paginatedProducts = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  return products.value.slice(startIndex, endIndex)
})

const handleGetProducts = async () => {
  isLoading.value = true
  products.value = await getProducts()
  isLoading.value = false
}

onMounted(async () => {
  await handleGetProducts()
})

const previousPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--
  }
}

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++
  }
}
</script>

<style scoped>
/* Products section */
.prod-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.prod-section-header {
  padding: 35px;
  display: flex;
  flex-direction: column;
  color: #1e1e1e;
  font-size: 13px;
  font-family: Poppins, sans-serif;
  font-weight: bold;
  align-items: center;
}

.prod-section-header h1 {
  border-bottom: 8px solid rgba(205, 171, 100, 1);
}

.prod-section-header p {
  color: #8f8f8f;
  font-size: 15px;
  font-family: Poppins, sans-serif;
  font-weight: normal;
  margin-bottom: 1%;
}

.photo-container {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 3%;
  transition: opacity 0.5s ease; /* Add transition effect */
}

.photo-column {
  flex: 10 10 calc(25% - 20px);
  margin: 0;
  margin-bottom: -10px;
  position: relative;
  cursor: pointer;
}

.image-wrapper {
  position: relative;
  overflow: hidden;
  transition: transform 0.5s ease, box-shadow 0.3s ease;
  height: 98%;
}

.product-image {
  width: 100%;
  min-height: 100%;
  transition: transform 0.5s ease;
  will-change: transform;
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-height: 100%;
  background-color: #ececec5f;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.5s ease;
}

.overlay-text {
  color: white;
  font-size: 18px;
  font-family: Poppins, sans-serif;
  text-align: center;
}

.image-wrapper:hover .product-image {
  transform: scale(1.1);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
}

.image-wrapper:hover .image-overlay {
  opacity: 1;
}

.pagination {
  margin-top: 10px;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  font-family: Poppins, sans-serif;
  font-size: 12px;
  color: #8f8f8f;
}

.pagination button {
  margin: 0 10px;
  padding: 5px 10px;
  background-color: #eee;
  border: none;
  cursor: pointer;
  transition: background-color 0.5s ease;
}

.pagination button:hover {
  background-color: #ddd;
}

.pagination button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
