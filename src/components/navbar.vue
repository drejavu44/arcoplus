<template>
  <div class="nav-container" :class="{ scrolled: isScrolled }">
    <div class="div">
      <img src="../assets/logo.png" class="img" @click="scrollToSection('home')" />
    </div>
    <div class="div-2">
      <div :class="{ navItem: true, active: activeSection === 'home' }" @click="scrollToSection('home')">Home</div>
      <div :class="{ navItem: true, active: activeSection === 'about' }" @click="scrollToSection('about')">About</div>
      <div :class="{ navItem: true, active: activeSection === 'products' }" @click="scrollToSection('products')">Products</div>
      <div :class="{ navItem: true, active: activeSection === 'projects' }" @click="scrollToSection('projects')">Projects</div>
      <RouterLink class="navItem" to="/application">Application</RouterLink>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, computed, watch } from "vue";
import { RouterLink } from 'vue-router';

const isScrolled = ref(false);
const activeSection = ref('home');

const handleScroll = () => {
  isScrolled.value = window.scrollY > 0;
};

const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    window.scrollTo({
      top: section.offsetTop,
      behavior: "smooth",
    });
    activeSection.value = sectionId;
  }
};

watch(
  () => window.scrollY,
  (newVal) => {
    const sections = ['home', 'about', 'projects', 'products'];
    for (let i = 0; i < sections.length; i++) {
      const section = document.getElementById(sections[i]);
      if (section && newVal >= section.offsetTop && newVal < section.offsetTop + section.offsetHeight) {
        activeSection.value = sections[i];
        break;
      }
    }
  }
);

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
  margin-right: 40%;
}

.div-2 {
  display: flex;
  justify-content: flex-end;
}

.navItem {
  margin-left: 40px;
  font-family: Poppins, sans-serif;
  cursor: pointer;
  text-decoration: none;
  color: white;
  transition: color 0.3s ease;
}

.navItem.active {
  color: rgba(205, 171, 100, 1)
}

.navItem:hover {
  color: rgba(205, 171, 100, 1)
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
