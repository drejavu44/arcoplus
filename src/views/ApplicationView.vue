<template>
  <div class="about-container">
    <div class="about-background-div">
      <Navbar />
      <div class="opening-text">
        <h1>WORK WITH US</h1>
        <p>Join our dynamic team and be part of something extraordinary.</p>
      </div>
    </div>
  </div>
  <!--Work With Us-->
  <div class="wwu-container">
    <div class="wwu-section-header">
      <h1>Application Form</h1>
      <p>Fill in the necessary information to submit your application. We will get back to you once it has been checked.</p>
    </div>
    <div class="wwu">
      <div class="wwu-3">
        <div class="wwu-4">
          <div class="wwu-column-2">
            <div class="wwu-5">
              <div class="wwu-7">
                <form>
                  <div class="form-group">
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" required />
                  </div>
                  <div class="form-group form-group-inline">
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                  </div>
                  <div class="form-group form-group-inline">
                    <label class="p-label" for="phone">Phone:</label>
                    <input type="tel" id="phone" name="phone" required />
                  </div>
                  <div class="form-group">
                    <label for="jobPosition">Job Position:</label>
                    <select id="jobPosition" name="jobPosition" required>
                      <option value="" disabled selected>
                        Select a job position
                      </option>
                      <option value="1">Engineer</option>
                      <option value="2">AutoCAD Operator</option>
                      <option value="3">Installer/Fabricator</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label for="phone">Resume:</label>
                    <input type="file" id="resume" name="resume" required />
                  </div>
                  <button type="submit" @click="handleButtonClick">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script setup>
import Navbar from "../components/navbar-application.vue";
import Footer from "../components/footer.vue";
import { ref } from "vue";
import Swal from "sweetalert2";

const formData = ref({
  name: "",
  email: "",
  phone: "",
  jobposition: "",
  resume: "",
});

const handleButtonClick = () => {
  // Handle form submission logic here

  Swal.fire({
    icon: "success",
    title: "Application received!",
    showConfirmButton: false,
    timer: 1500,
  });
};
</script>

<style scoped>
.about-container {
  margin: 0;
}

.about-background-div {
  background-image: url("../assets/ap-app-bg.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 450px;
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
  font-size: 25px;
  color: white;
  font-family: Poppins, sans-serif;
  text-align: center;
  text-shadow: 1px 1px 30px rgba(44, 44, 44, 0.4);
  animation: fadeInUp 1s ease forwards;
}

.opening-text .content {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: white;
  font-family: Poppins, sans-serif;
  margin-top: -45px;
  opacity: 0;
  animation: fadeInUp 1s ease forwards;
}

.opening-text p {
  font-size: 20px;
  margin-top: -35px;
  text-shadow: 1px 1px 30px rgba(44, 44, 44, 0.4);
}


/*Work With Us*/
.wwu-container {
  background-color: #fdfdfd;
}

.wwu-section-header {
  padding: 35px;
  display: flex;
  flex-direction: column;
  color: #1e1e1e;
  font-size: 13px;
  font-family: Poppins, sans-serif;
  font-weight: bold;
  align-items: center;
}

.wwu-section-header h1 {
  border-bottom: 8px solid rgba(205, 171, 100, 1);
}

.wwu-section-header p {
  color: #8f8f8f;
  font-size: 15px;
  font-family: Poppins, sans-serif;
  font-weight: normal;
  margin-bottom: -2%;
}

.wwu {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100%;
  margin: 0 auto;
  margin-bottom: 20px;
  padding: 15px;
}

.wwu-3 {
  background-color: white;
  width: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  overflow: auto;
}

.wwu-4 {
  gap: 20px;
  display: flex;
}

.wwu-column-2 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 100%;
  margin-right: 20px;
}

.wwu-5 {
  display: flex;
  flex-direction: column;
  align-self: stretch;
  margin: auto 0;
}

.wwu-7 {
  color: #1e1e1e;
  font-family: Poppins, sans-serif;
  font-size: 15px;
  font-weight: bold;
  padding: 25px;
  margin-top: -75px;
  text-align: center;
}

.wwu-7 h1 {
  margin-bottom: 40px;
  border-bottom: 1px solid #e0e0e0;
  padding: 10px;
}

.form-group {
  margin-bottom: 20px;
}

form {
  max-width: 100%;
  margin-top: 75px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  text-align: left;
  color: #1e1e1e;
  font-weight: bold;
  font-size: 12px;
}

.form-group select {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-family: Poppins, sans-serif;
  box-sizing: border-box;
  -webkit-appearance: none; /* Removes default arrow on Chrome/Safari */
  -moz-appearance: none; /* Removes default arrow on Firefox */
  appearance: none; /* Removes default arrow on other browsers */
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='%231e1e1e'%3E%3Cpath d='M6 8l4 4 4-4'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 10px top 50%;
  background-size: 12px auto;
}

.form-group :focus {
  border-color: rgba(205, 171, 100, 1); /*Apply to other forms*/
  outline: none;
}

input {
  width: 100%;
  max-width: 110%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
  font-family: Poppins, sans-serif;
  font-size: 14px;
}

button[type="submit"] {
  background-color: transparent;
  border-radius: 30px;
  border-color: rgba(205, 171, 100, 1);
  border-style: solid;
  border-width: 1px;
  color: rgba(205, 171, 100, 1);
  width: 100%;
  font-family: Poppins, sans-serif;
  cursor: pointer;
  transition: background-color 0.5s ease;
  margin-top: 20px;
  padding: 10px 20px;
}

button[type="submit"]:hover {
  background-color: rgba(205, 171, 100, 1);
  color: white;
}

input[type="file"] {
  background-color: #f9f9f9;
}

input[type="file"]::-webkit-file-upload-button {
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: transparent;
}

.form-group-inline {
  display: inline-block;
  width: 48%;
  margin-right: 2%;
}

.form-group-inline:last-child {
  margin-right: 0;
}

.form-group-inline input[type="tel"] {
  margin-left: 27px;
}

.form-group-inline input[type="email"] {
  width: 105%;
}
.p-label {
    margin-left: 25px;
  }
</style>
