<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
  <div class="signup-sucess-container">
    <div class="signup-sucess-form">
      <div class="signup-sucess-header">
        <img
          src="../../assets/LOGO TRANSPARENT 3.png"
          class="signup-sucess-logo"
          alt="ArcoPlus Logo"
        />
        <h1>Welcome to ArcoPlus</h1>
      </div>
      <div class="form-group">
        <h1>
          You have <p>successfully</p> signed up. Click here to
          <RouterLink class="login-link" to="/login">login</RouterLink>
        </h1>
      </div>
    </div>
  </div>
</template>

<style scoped>
.signup-sucess-container {
  background-image: url("../../assets/ap-login-su-bg.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.signup-sucess-form {
  width: 550px;
  padding: 20px;
  border-bottom: 4px solid rgba(205, 171, 100, 1);
  background-color: #1e1e1e;
  border-radius: 30px;
}

.signup-sucess-header {
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

.signup-sucess-header h1 {
  border-bottom: 8px solid rgba(205, 171, 100, 1);
}

.signup-sucess-logo {
  width: 100px;
}

.form-group {
  font-family: Poppins, sans-serif;
  color: #fff;
  text-align: center;
  border-bottom: 1px solid #e0e0e026;
  margin-bottom: 5px;
}

.form-group p {
  display: inline; 
  color: #14A44D;
}

.login-link {
  margin-top: 20px;
  color: #fff;
  /*text-decoration: none;*/
  display: inline-block;
  transition: color 0.5s ease;
  font-family: Poppins, sans-serif;
}

.login-link:hover {
  color: rgba(205, 171, 100, 1);
}
</style>
