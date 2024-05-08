<script setup>
import AdminNavbar from "../components/navbar-admin.vue";
import { ref, onMounted } from "vue";
import { getUserSession } from "@/supabase/supabase";

const activeTab = ref("jobApplications");

const userAccount = ref();

const getUserAccount = async () => {
  userAccount.value = await getUserSession();
};

onMounted(async () => {
  await getUserAccount();
});
</script>

<template>
  <div class="adminhome-container">
    <div class="adminhome-background-div">
      <div id="home" class="opening-text">
        <h1>
          Welcome,
          <b>{{ userAccount?.session.user.user_metadata.firstName }}</b>
        </h1>
        <div class="content">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <AdminNavbar />
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
      <!-- Tab Navigation -->
      <div class="jaq-tab-navigation">
        <button
          :class="{
            'jaq-tab-btn': true,
            active: activeTab === 'jobApplications',
          }"
          @click="activeTab = 'jobApplications'"
        >
          Job Applications
        </button>
        <button
          :class="{ 'jaq-tab-btn': true, active: activeTab === 'quotations' }"
          @click="activeTab = 'quotations'"
        >
          Quotations
        </button>
      </div>
      <!-- Tab Content -->
      <div v-if="activeTab === 'jobApplications'" class="ah-container">
        <table class="jaq-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Job Position</th>
              <th>Resume</th>  
            </tr>
          </thead>
          <tbody>
            <!-- Job Applications -->
            <tr>
              <td>Cardo Dalisay</td>
              <td>cdcutie@gmail.com</td>
              <td>143-143-143</td>
              <td>Installer</td>
              <td><a href="path_to_resume">Download Resume</a></td>           
            </tr>
          </tbody>
        </table>
      </div>
      <div v-else class="ah-container">
        <table class="jaq-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Message</th>      
            </tr>
          </thead>
          <tbody>
            <!-- Quotations-->
            <tr>
              <td>Cardo Dalisay</td>
              <td>cdcutie@gmail.com</td>
              <td>143-143-143</td>
              <td>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style scoped>
.adminhome-container {
  margin: 0; /* Adjust margin */
}

.adminhome-background-div {
  background-image: url("/src/assets/admin-bg.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 500px;
  max-width: 100%; /* Set maximum width */
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
  margin-top: -75px;
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
  font-family: Poppins, sans-serif;
  padding: 20px;
}

.ah-container h2 /* table title */ {
  font-size: 16px;
  letter-spacing: 1.5px;
  font-weight: normal;
  text-transform: uppercase;
  color: #8f8f8f;
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

/* Table */

.jaq-table {
  border-collapse: collapse;
  max-width: 100%;
  font-family: Poppins, sans-serif;
  border-top: 4px solid rgba(205, 171, 100, 1);
  table-layout: fixed;
}

.jaq-table th,
.jaq-table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
  overflow-wrap: break-word;
  max-width: 200px;
  padding: 10px;
}

.jaq-table a {
  text-decoration: none;
  color: rgba(205, 171, 100, 1);
}

/* Tabs */
.jaq-tab-navigation {
  display: flex;
  justify-content: flex-start;
  margin-top: 20px;
}

.jaq-tab-btn {
  font-family: Poppins, sans-serif;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: transparent;
  transition: color 0.3s;
  color: #8f8f8f;
}

.jaq-tab-btn:focus {
  outline: none;
}

.jaq-tab-btn:hover {
  color: rgba(205, 171, 100, 1);
}

.jaq-tab-btn.active {
  color: rgba(205, 171, 100, 1);
}

.jaq-button {
  background-color: transparent;
  border-radius: 30px;
  border-color: rgba(205, 171, 100, 1);
  border-style: solid;
  border-width: 1px;
  color: rgba(205, 171, 100, 1);
  padding: 5px 20px;
  font-size: 14px;
  font-family: Poppins, sans-serif;
  cursor: pointer;
  transition: background-color 0.5s ease;
}

.jaq-button:hover {
  background-color: rgba(205, 171, 100, 1);
  color: white;
}
</style>
