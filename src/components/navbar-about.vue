<template>
  <div class="nav-container" :class="{ scrolled: isScrolled }">
    <div class="div">
      <img src="../assets/logo.png" class="img" />
    </div>
    <div class="div-2">
      <RouterLink to="/" class="nav-link">Home</RouterLink>
      <RouterLink to="/" class="nav-link">About</RouterLink>
      <RouterLink to="/" class="nav-link">Projects</RouterLink>
      <RouterLink to="/" class="nav-link">Products</RouterLink>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { ref, onMounted, onBeforeUnmount } from "vue";

const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 0;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

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
  color: #e5e6e8;
}

.nav-link {
  margin-left: 40px;
  font-family: Poppins, sans-serif;
  cursor: pointer;
  transition: color 0.3s ease;
  color: #fff;
  text-decoration: none;
}

.nav-link:hover {
  color: rgba(205, 171, 100, 1);
}

.img {
  height: 50px;
  vertical-align: middle;
  cursor: pointer;
}

.nav-container.scrolled {
  background-color: #1e1e1e;
  padding: 5px 20px;
}
</style>
