<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import { loginUser } from "../../supabase/supabase.js";
import Loader from "@/Loader/Loader.vue";
import router from "@/router/index.js";
import Swal from "sweetalert2";

const email = ref("");
const password = ref("");
const isLoading = ref(false)

const handleLogin = async () => {
  if(email.value === "" || password.value === ""){
    alert("email and password should not be empty.")
    return
  }
  isLoading.value = true
  const result = await loginUser(email.value, password.value);
  isLoading.value = false

  if (result.status === 1) {
    router.push('/adminhome')
  } else {
    Swal.fire({
      title: "Login Failed.",
      text: result.errorMessage,
      icon: "error",
      timer: 1500,
      showConfirmButton: false,
      confirmButtonColor: "rgba(205, 171, 100, 1)",
    });
  }
};
</script>

<template>
  <Loader v-if="isLoading" />
  <div v-else id="app" class="login-container">
    <div class="login-form">
      <div class="login-header">
        <img src="../../assets/LOGO TRANSPARENT 3.png" class="login-logo" alt="ArcoPlus Logo" />
        <h1>Welcome to ArcoPlus</h1>
        <p>Please enter your credentials to sign in!</p>
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <div class="button-container">
        <button @click="handleLogin">Login</button>
        <RouterLink to="/signup" class="signup-link">No Account? Sign up</RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.login-container {
  background-image: url("../../assets/ap-login-su-bg.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.login-form {
  width: 550px;
  padding: 20px;
  border-bottom: 4px solid rgba(205, 171, 100, 1);
  background-color: #1e1e1e;
  border-radius: 30px;
}

.login-header {
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  color: #fff;
  font-size: 13px;
  font-family: Poppins, sans-serif;
  font-weight: bold;
  align-items: center;
  text-align: center;
  border-bottom: 1px solid #e0e0e026;
}

.login-header h1 {
  border-bottom: 8px solid rgba(205, 171, 100, 1);
}

.login-header p {
  color: #fff;
  font-size: 15px;
  font-family: Poppins, sans-serif;
  font-weight: normal;
}

.login-logo {
  width: 100px;
}

.form-group {
  margin-bottom: 20px;
  color: #fff;
}

label {
  font-family: Poppins, sans-serif;
  font-size: 14px;
  font-weight: bold;
  color: #fff;
}

input[type="email"],
input[type="password"] {
  padding: 10px;
  border: 1px solid #e0e0e026;
  border-radius: 4px;
  font-family: Poppins, sans-serif;
  font-size: 14px;
  margin-bottom: 10px;
  width: 96%;
  margin-top: 5px;
  background-color: transparent;
  color: #fff;
}

button {
  padding: 10px 20px;
  background-color: rgba(205, 171, 100, 1);
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-family: Poppins, sans-serif;
  transition: background-color 0.5s ease;
  margin-top: 20px;
  width: 100%;
  font-size: 15px;
  border-radius: 30px;
}

button:hover {
  background-color: rgb(166, 139, 81);
}

.button-container {
  text-align: center;
}

.signup-link {
  margin-top: 20px;
  color: #fff;
  /*text-decoration: none;*/
  display: inline-block;
  transition: color 0.5s ease;
  font-family: Poppins, sans-serif;
  font-size: 12px;
}

.signup-link:hover {
  color: rgba(205, 171, 100, 1);
}
</style>
