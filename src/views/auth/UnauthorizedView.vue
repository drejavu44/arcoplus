<template>
  <div class="uv-container">
    <h1>404</h1>
    <h2>Oops, Something went wrong</h2>
    <p>You are unauthorized to access this page</p>
    <RouterLink to="/login" class="uv-button">
      <i class="fas fa-sign-out-alt"></i> Back to Login
    </RouterLink>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>

<style scoped>
.uv-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("../../assets/ap-login-su-bg.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: Poppins, sans-serif;
  color: #1e1e1e;
}

h1 {
  font-size: 150px;
  margin-bottom: 0;
  margin-top: 0;
}

h2 {
  margin-top: 0;
  font-size: 30px;
  margin-bottom: 0;
}

.uv-button {
  padding: 10px 20px;
  background-color: rgba(205, 171, 100, 1);
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-family: Poppins, sans-serif;
  transition: background-color 0.5s ease;
  width: 10%;
  font-size: 15px;
  border-radius: 30px;
  text-decoration: none;
  text-align: center;
}
.uv-button:hover {
  background-color: rgb(166, 139, 81);
}
</style>
