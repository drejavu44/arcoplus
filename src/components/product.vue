<template>
  <!-- Projects Section -->
  <div class="prod-container">
    <div class="prod-section-header">
      <h1>Products</h1>
      <p>
        Explore our wide range of construction solutions designed to meet your needs. 
      </p>
    </div>
    <div class="photo-container">
      <div class="photo-column">
        <div class="image-wrapper">
          <img src="../assets/sample.jpg" class="product-image" />
          <div class="image-overlay">
            <p class="overlay-text">Product 1</p>
          </div>
        </div>
      </div>
      <div class="photo-column">
        <div class="image-wrapper">
          <img src="../assets/sample.jpg" class="product-image" />
          <div class="image-overlay">
            <p class="overlay-text">Product 2</p>
          </div>
        </div>
      </div>
      <div class="photo-column">
        <div class="image-wrapper">
          <img src="../assets/sample.jpg" class="product-image" />
          <div class="image-overlay">
            <p class="overlay-text">Product 3</p>
          </div>
        </div>
      </div>
      <div class="photo-column">
        <div class="image-wrapper">
          <img src="../assets/sample.jpg" class="product-image" />
          <div class="image-overlay">
            <p class="overlay-text">Product 4</p>
          </div>
        </div>
      </div>
      <div class="photo-column">
        <div class="image-wrapper">
          <img src="../assets/sample.jpg" class="product-image" />
          <div class="image-overlay">
            <p class="overlay-text">Product 5</p>
          </div>
        </div>
      </div>
      <div class="photo-column">
        <div class="image-wrapper">
          <img src="../assets/sample.jpg" class="product-image" />
          <div class="image-overlay">
            <p class="overlay-text">Product 6</p>
          </div>
        </div>
      </div>
      <div class="photo-column">
        <div class="image-wrapper">
          <img src="../assets/sample.jpg" class="product-image" />
          <div class="image-overlay">
            <p class="overlay-text">Product 7</p>
          </div>
        </div>
      </div>
      <div class="photo-column">
        <div class="image-wrapper">
          <img src="../assets/sample.jpg" class="product-image" />
          <div class="image-overlay">
            <p class="overlay-text">Product 8</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Projects section */
.prod-container {
  background-color: rgba(240, 240, 240, 0.45);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.prod-section-header {
  /*padding: 35px;*/
  display: flex;
  flex-direction: column;
  color: #1e1e1e;
  font-size: 20px;
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
  margin-bottom: -4px;
  display: flex;
  flex-wrap: wrap;
}

.photo-column {
  flex: 10 10 calc(25% - 20px);
  margin: 0; /* Adjust margin */
  margin-bottom: -4px;
  position: relative;
  cursor: pointer;
}

.image-wrapper {
  position: relative;
  overflow: hidden;
  transition: transform 0.5s ease, box-shadow 0.3s ease; /* Added box-shadow for hardware acceleration */
  height: 98%;
}

.product-image {
  width: 100%;
  transition: transform 0.5s ease; /* Adjusted transition */
  will-change: transform; /* Enforcing hardware acceleration */
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
  transform: scale(1.1); /* Zoom effect on hover */
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2); /* Added box-shadow for hardware acceleration */
}

.image-wrapper:hover .image-overlay {
  opacity: 1;
}
</style>
