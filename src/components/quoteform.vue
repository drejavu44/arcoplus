<template>
  <div class="quote-form-container">
    <div class="quote-form">
      <div class="quote-form-3">
        <div class="quote-form-4">
          <div class="quote-form-column-2">
            <div class="quote-form-5">
              <div class="quote-form-6">Got a project?</div>
              <div class="quote-form-7">
                <h1>Get a quotation!</h1>
                <form>
                  <div class="form-group">
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" required />
                  </div>
                  <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                  </div>
                  <div class="form-group">
                    <label for="phone">Phone:</label>
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
          <div class="quote-form-column">
            <img src="../assets/ap-11.jpg" class="quote-form-image" />
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
  background-color: rgba(240, 240, 240, 0.45);
}

.quote-form {
  display: flex;
  max-width: 75%;
  flex-direction: column;
  margin: 0 auto;
  padding: 80px;
}

.quote-form-3 {
  background-color: white;
  width: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.quote-form-4 {
  gap: 20px;
  display: flex;
}

.quote-form-column {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 50%;
}

.quote-form-image {
  aspect-ratio: 0.88;
  object-fit: auto;
  object-position: center;
  width: 100%;
  flex-grow: 1;
}

.quote-form-column-2 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 50%;
  margin-left: 20px;
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
  border-radius: 10px;
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
</style>
