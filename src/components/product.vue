<script setup>
import { getProducts } from '../supabase/supabase.js'
import { onMounted, ref } from 'vue'

const isLoading = ref(false)
const products = ref()

const handleGetProducts = async () => {
  isLoading.value = true
  products.value = await getProducts()
  isLoading.value = false
}

onMounted(async () => {
  await handleGetProducts()
})

</script>

<template>
  <!-- Projects Section -->
  <div class="prod-container">
    <div class="prod-section-header">
      <h1>Products</h1>
      <p>
        Explore our wide range of construction solutions designed to meet your
        needs.
      </p>
    </div>
  
    <div class="photo-container">
      <div class="photo-column" v-for="product in products">
        <div class="image-wrapper">
          <img :src="product.imageUrl" class="product-image" />
          <div class="image-overlay">
            <p class="overlay-text">{{ product.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  
</template>

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
  background-color: rgba(205, 172, 100, 0.588);
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
</style>
