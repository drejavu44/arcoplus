<template>
  <div class="ah-navbar">
    <RouterLink
      to="/adminhome"
      class="nav-item"
      :class="{ active: $route.path === '/adminhome' }"
      exact
    >
      <i class="fas fa-home"></i> Overview
    </RouterLink>
    |
    <RouterLink
      to="/products"
      class="nav-item"
      :class="{ active: $route.path === '/products' }"
      exact
    >
      <i class="fas fa-cube"></i> Products
    </RouterLink>
    |
    <RouterLink
      to="/projects"
      class="nav-item"
      :class="{ active: $route.path === '/projects' }"
      exact
    >
      <i class="fas fa-project-diagram"></i> Projects
    </RouterLink>
    |
    <button
      @click="logOutUser"
      class="logout-button"
    >
      <i class="fas fa-sign-out-alt"></i> Sign Out
  </button>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { logOutUser } from "@/supabase/supabase";
</script>

<style scoped>
.ah-navbar {
  text-align: center;
  font-size: 18px;
  transition: background-color 0.3s ease, padding 0.3s ease;
}

.nav-item {
  display: inline-block;
  padding: 10px 20px;
  text-decoration: none;
  color: #e5e6e8;
  margin: 0 10px;
  transition: color 0.3s ease;
}

.nav-item:hover {
  color: rgba(205, 171, 100, 1);
}

.nav-item.active {
  color: rgba(205, 171, 100, 1);
}

.logout-button{
  padding: 10px 20px;
  font-size: 17px;
  background-color: transparent;
  border: none;
  color: #fff;
  transition: color 0.3s ease;
  cursor: pointer;
  margin: 0 10px;
  font-family: Poppins, sans-serif;
}

.logout-button:hover {
  color: rgba(205, 171, 100, 1);
}
</style>
