<template>
  <div class="quote-form-container">
    <div class="quote-form">
      <div class="quote-form-3">
        <div class="quote-form-4">
          <div class="quote-column-1">
            <div class="contact-info">
              <h1 class="quote-contact">Contact Us</h1>
              <div class="contact-item">
                <i class="fas fa-envelope"></i>
                <div class="contact-text">
                  <h2 class="contact-heading">Email</h2>
                  <span>arcoplusph@gmail.com</span>
                </div>
              </div>
              <div class="contact-item">
                <i class="fas fa-phone"></i>
                <div class="contact-text">
                  <h2 class="contact-heading">Phone</h2>
                  <span>+63 915 592 6361</span>
                </div>
              </div>
              <div class="contact-item">
                <i class="fas fa-map-marker-alt"></i>
                <div class="contact-text">
                  <h2 class="contact-heading">Address</h2>
                  <span
                    >Greenlane Subdivision, Pamplona Tres, Las Pinas City</span
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="quote-form-column-2">
            <div class="quote-form-5">
              <div class="quote-form-6">Got a project?</div>
              <div class="quote-form-7">
                <h1>GET A QUOTATION!</h1>
                <div class="form-group">
                  <label for="name">Name:</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <form>
                  <div class="form-group form-group-inline">
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                  </div>
                  <div class="form-group form-group-inline">
                    <label class="p-label" for="phone">Phone:</label>
                    <input type="tel" id="phone" name="phone" required />
                  </div>
                  <div class="form-group">
                    <label for="message">Message:</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      required
                    ></textarea>
                  </div>
                </form>
                <button type="submit" @click="handleButtonClick">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Swal from "sweetalert2";

const formData = ref({
  name: "",
  email: "",
  phone: "",
  message: "",
});

const handleButtonClick = () => {
  // Handle form submission logic here

  Swal.fire({
    icon: "success",
    title: "Inquiry received!",
    showConfirmButton: false,
    timer: 1500,
  });
};
</script>

<style scoped>
/* quote form section */
.quote-form-container {
  background-color: #fafafa;
}

.quote-form {
  display: flex;
  max-width: 100%;
  flex-direction: column;
  margin: 0 auto;
  padding: 45px;
}

.quote-form-3 {
  width: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.quote-form-4 {
  display: flex;
}

.quote-form-column {
  display: flex;
  flex-direction: column;
  line-height: normal;
}

.quote-form-column-2 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 100%;
  background-color: #fff;
}

.quote-form-5 {
  display: flex;
  flex-direction: column;
  align-self: stretch;
  margin: auto 0;
}

.quote-form-6 {
  color: rgba(205, 171, 100, 1);
  font-family: Poppins, sans-serif;
  font-size: 12px;
  font-weight: normal;
  padding: 25px;
  text-align: center;
}

.quote-form-7 {
  color: #1e1e1e;
  font-family: Poppins, sans-serif;
  font-size: 15px;
  font-weight: bold;
  padding: 25px;
  margin-top: -75px;
  text-align: center;
}

.quote-form-7 h1 {
  margin-bottom: 40px;
  border-bottom: 1px solid #e0e0e0;
  padding: 10px;
}

.form-group {
  margin-bottom: 20px;
}

.form-group :focus {
  border-color: rgba(205, 171, 100, 1);
  outline: none;
}

form {
  border-bottom: 1px solid #e0e0e0;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  text-align: left;
  color: #1e1e1e;
  font-weight: bold;
  font-size: 12px;
}

input,
textarea {
  width: 100%;
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

.quote-column-1 {
  background-image: url("../assets/ap-9-bg.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  font-family: Poppins, sans-serif;
  width: 40%;
}

.contact-info {
  flex-direction: column;
}

.contact-item {
  margin-bottom: 10px;
  padding: 15px 0;
  display: flex;
  align-items: center;
  font-size: 25px;
  color: rgba(205, 171, 100, 1);
}

.contact-item h2 {
  font-size: 12px;
}

.contact-text {
  display: flex;
  flex-direction: column;
  margin-left: 10px;
}

.contact-heading {
  margin: 0;
  color: #fff;
}

.contact-text span {
  color: #fff;
  font-size: 16px;
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
  margin-left: 20px;
}

.form-group-inline input[type="email"] {
  width: 105%;
}
.p-label {
    margin-left: 25px;
  }
</style>
