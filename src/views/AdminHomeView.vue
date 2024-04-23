<template>
  <div class="adminhome-container">
    <div class="adminhome-background-div">
      <div id="home" class="opening-text">
        <AdminNavbar />
        <h1>Welcome, <b>Email of user</b></h1>
        <div class="content">
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
        </div>
      </div>
    </div>
    <!-- Overview -->
    <div class="ah-container">
      <div class="ah-section-header">
        <h1>Overview</h1>
        <p>
          View all inquiries sent by customers, such as requests for quotations
          and job applications.
        </p>
      </div>
    </div>
</div>
</template>

<script setup>
import AdminNavbar from "../components/navbar-admin.vue"
</script>

<style scoped>
.adminhome-container {
  margin: 0; /* Adjust margin */
}

.adminhome-background-div {
  background-image: url("/src/assets/ap-bg-2.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 500px;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.opening-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 450px;
  font-size: 45px;
  color: white;
  font-family: Poppins, sans-serif;
  text-align: center;
  animation: fadeInUp 1s ease forwards;
}

.opening-text h1 {
  font-weight: lighter;
  text-transform: uppercase;
}

.opening-text .content {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: -75px;;
  font-size: 22px;
  color: white;
  font-family: Poppins, sans-serif;
  opacity: 0;
  animation: fadeInUp 1s ease forwards;
}

.opening-text .content p {
  margin-right: 15px;
}

.ah-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.ah-section-header {
  padding: 35px;
  display: flex;
  flex-direction: column;
  color: #1e1e1e;
  font-size: 13px;
  font-family: Poppins, sans-serif;
  font-weight: bold;
  align-items: center;
}

.ah-section-header h1 {
  border-bottom: 8px solid rgba(205, 171, 100, 1);
}

.ah-section-header p {
  color: #8f8f8f;
  font-size: 15px;
  font-family: Poppins, sans-serif;
  font-weight: normal;
  margin-bottom: -2%;
}

.ah2-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(240, 240, 240, 0.45);
  min-width: 100%;
}
</style>
