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
      <div class="photo-column">
        <div class="image-wrapper">
          <img src="../assets/products/twin wall poly.jpg" class="product-image" />
          <div class="image-overlay">
            <p class="overlay-text">Twin Wall Polycarbonate Sheet</p>
          </div>
        </div>
      </div>
      <div class="photo-column">
        <div class="image-wrapper">
          <img src="../assets/products/corrugated poly.jpg" class="product-image" />
          <div class="image-overlay">
            <p class="overlay-text">Corrugated Polycarbonate Sheet</p>
          </div>
        </div>
      </div>
      <div class="photo-column">
        <div class="image-wrapper">
          <img src="../assets/products/solid poly.jpg" class="product-image" />
          <div class="image-overlay">
            <p class="overlay-text">Solid Polycarbonate Sheet</p>
          </div>
        </div>
      </div>
      <div class="photo-column">
        <div class="image-wrapper">
          <img src="../assets/products/twin wall poly 2.jpg" class="product-image" />
          <div class="image-overlay">
            <p class="overlay-text">Twin Wall Polycarbonate Sheet</p>
          </div>
        </div>
      </div>
      <div class="photo-column">
        <div class="image-wrapper">
          <img src="../assets/products/pvc laminated ceiling.jpeg" class="product-image" />
          <div class="image-overlay">
            <p class="overlay-text">PVC Laminated Ceiling</p>
          </div>
        </div>
      </div>
      <div class="photo-column">
        <div class="image-wrapper">
          <img src="../assets/products/acrylic sheet.jpg" class="product-image" />
          <div class="image-overlay">
            <p class="overlay-text">Acrylic Sheet</p>
          </div>
        </div>
      </div>
      <div class="photo-column">
        <div class="image-wrapper">
          <img src="../assets/products/aluminum frame.jpg" class="product-image" />
          <div class="image-overlay">
            <p class="overlay-text">Aluminum Frame</p>
          </div>
        </div>
      </div>
      <div class="photo-column">
        <div class="image-wrapper">
          <img src="../assets/products/colored acrylic.jpg" class="product-image" />
          <div class="image-overlay">
            <p class="overlay-text">Colored Acrylic Sheet</p>
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
}

.prod-section-header {
  /*padding: 35px;*/
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
  margin-bottom: 8%;
}

.photo-container {
  display: flex;
  flex-wrap: wrap;
}

.photo-column {
  flex: 10 10 calc(25% - 20px);
  margin: 0; 
  margin-bottom: -5px;
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
