<template>
  <div class="nav-container" :class="{ 'scrolled': isScrolled }">
    <div class="div">
      <img src="../assets/logo.png" class="img" />
    </div>
    <div class="div-2">
      <div class="nav-item">Home</div>
      <div class="nav-item">About</div>
      <div class="nav-item">Projects</div>
      <div class="nav-item">Products</div>
    </div>
  </div>
</template>

<style scoped>
.nav-container {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 20px 30px; 
  background-color: transparent;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: background-color 0.3s ease, padding 0.3s ease; 
}

.div {
  padding: 10px;
  margin-right: 50%;
}

.div-2 {
  display: flex;
  justify-content: flex-end;
  color: #E5E6E8;
}

.nav-item {
  margin-left: 40px;
  font-family: Poppins, sans-serif;
  cursor: pointer; 
  transition: color 0.3s ease;
}

.nav-item:hover {
  color: rgba(205, 171, 100, 1); 
}

.img {
  height: 50px;
  vertical-align: middle;
  cursor: pointer;
}


.nav-container.scrolled {
  background-color: #1E1E1E;
  padding: 10px 30px; 
}
</style>

<script>
export default {
  data() {
    return {
      isScrolled: false
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 0;
    }
  }
};
</script>
