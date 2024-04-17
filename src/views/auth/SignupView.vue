<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import { createUserAccount } from "../../supabase/supabase.js";

const email = ref("");
const password = ref("");

const handleSignup = async () => {
  const result = await createUserAccount(email.value, password.value);
  console.log(result);
};
</script>

<template>
  <div id="app" class="signup-container">
    <div class="signup-form">
      <div class="signup-header">
        <img
          src="../../assets/LOGO TRANSPARENT 3.png"
          class="signup-logo"
          alt="ArcoPlus Logo"
        />
        <h1>Welcome to ArcoPlus</h1>
        <p>Please enter needed credentials to sign up!</p>
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
        <button @click="handleSignup">Signup</button>
        <RouterLink to="/login" class="login-link">Back to Login →</RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.signup-container {
  background-image: url("../../assets/ap-login-su-bg.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.signup-form {
  width: 550px;
  padding: 20px;
  border-bottom: 4px solid rgba(205, 171, 100, 1);
  background-color: #1e1e1e;
  border-radius: 30px;
}

.signup-header {
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

.signup-header h1 {
  border-bottom: 8px solid rgba(205, 171, 100, 1);
}

.signup-header p {
  color: #fff;
  font-size: 15px;
  font-family: Poppins, sans-serif;
  font-weight: normal;
}

.signup-logo {
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

.login-link {
  margin-top: 20px;
  color: #fff;
  /*text-decoration: none;*/
  display: inline-block;
  transition: color 0.5s ease;
  font-family: Poppins, sans-serif;
  font-size: 12px;
}

.login-link:hover {
  color: rgba(205, 171, 100, 1);
}
</style>
