<template>
  <div class="about-container">
    <div class="about-background-div">
      <Navbar />
      <div class="opening-text">
        <h1>About Us</h1>
      </div>
    </div>
  </div>
  <!--Who we are-->
  <div class="wwa-container">
    <div class="wwa">
      <div class="wwa-3">
        <div class="wwa-4">
          <div class="wwa-column">
            <div class="wwa-5">
              <div class="wwa-6">Who We Are?</div>
              <div class="wwa-7">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </div>
            </div>
          </div>
          <div class="wwa-column-2">
            <img src="../assets/LOGO LATEST V4.jpg" class="about-us-image" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--Why Choose Us?-->
  <div class="wcu-section-header">
    <h1>Why Choose Us?</h1>
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    </p>
  </div>
  <div class="wcu">
    <div class="wcu-2">
      <div class="wcu-column">
        <div class="wcu-3">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c34898178e2dea90e403576f1cfdf41526f3610d730034628f0f4618b0acf64d?"
            class="img"
          />
          <div class="wcu-4">Expertise in Diverse Projects</div>
          <div class="wcu-5">
            From residential to commercial and industrial ventures, our
            construction company specializes in a wide array of projects,
            ensuring tailored solutions to meet every client's needs.
          </div>
        </div>
      </div>
      <div class="wcu-column-2">
        <div class="wcu-6">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e6a7bc941146df329f4d711ab2a33780f864a20ebdc0d65366ed37ce1a397be6?"
            class="img-2"
          />
          <div class="wcu-7">Sustainable Solutions</div>
          <div class="wcu-8">
            Committed to environmental responsibility, we integrate sustainable
            practices into our projects, minimizing our ecological footprint
            with eco-friendly materials and energy-efficient designs.
          </div>
        </div>
      </div>
      <div class="wcu-column-3">
        <div class="wcu-9">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/536492aff729039dc4b210f795440a3e4a312af37504541ca09729ebd58df30a?"
            class="img-3"
          />
          <div class="wcu-10">
            Experienced <br />
            Team
          </div>
          <div class="wcu-11">
            Our team comprises skilled architects, engineers, project managers,
            and laborers, bringing years of collective experience to every
            project. With a focus on efficiency and safety, we deliver results
            that exceed expectations.
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--Work With Us-->
  <div class="wwu-container">
    <div class="wwu-section-header">
      <h1>Work With Us</h1>
      <p>Join our dynamic team and be part of something extraordinary.</p>
    </div>
    <div class="wwu">
      <div class="wwu-3">
        <div class="wwu-4">
          <div class="wwu-column-1">
            <div class="contact-info">
              <h1 class="wwu-contact">Contact Us</h1>
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
          <div class="wwu-column-2">
            <div class="wwu-5">
              <div class="wwu-7">
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
                    <label for="jobPosition">Job Position:</label>
                    <select id="jobPosition" name="jobPosition" required>
                      <option value="" disabled selected>
                        Select a job position
                      </option>
                      <option value="1">Point Guard</option>
                      <option value="2">Shooting Guard</option>
                      <option value="3">Security Guard</option>
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
import Navbar from "../components/navbar.vue";
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
  background-image: url("../assets/ap-bg-3.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
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
  height: 800px;
  font-size: 50px;
  color: white;
  font-family: Poppins, sans-serif;
  text-align: center;
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

.opening-text .content p {
  margin-right: 15px;
}

.opening-text button {
  background-color: transparent;
  border-radius: 10px;
  border-color: rgba(205, 171, 100, 1);
  border-style: solid;
  border-width: 1px;
  color: rgba(205, 171, 100, 1);
  padding: 5px 20px;
  font-size: 18px;
  font-family: Poppins, sans-serif;
  cursor: pointer;
  transition: background-color 0.5s ease;
}

.opening-text button:hover {
  background-color: rgba(205, 171, 100, 1);
  color: white;
}

/* Who we are section */
.wwa-container {
  background-color: rgba(240, 240, 240, 0.45);
}

.wwa {
  display: flex;
  max-width: 60%;
  flex-direction: column;
  margin: 0 auto;
  padding: 80px;
}

.wwa-3 {
  background-color: white;
  width: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.wwa-4 {
  gap: 20px;
  display: flex;
}

.wwa-column-2 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 50%;
}
.img {
  aspect-ratio: 0.88;
  object-fit: auto;
  object-position: center;
  width: 100%;
  flex-grow: 1;
}

.wwa-column {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 50%;
  margin-left: 20px;
}

.wwa-5 {
  display: flex;
  flex-direction: column;
  align-self: stretch;
  margin: auto 0;
}

.wwa-6 {
  color: #000;
  font: 700 40px Poppins, sans-serif;
  padding: 30px;
}
.wwa-7 {
  color: #8f8f8f;
  font: 400 12px Poppins, sans-serif;
  padding: 30px;
  margin-top: -30px;
}

/*Why Choose Us?*/
.wcu-section-header {
  padding: 35px;
  display: flex;
  flex-direction: column;
  color: #1e1e1e;
  font-size: 13px;
  font-family: Poppins, sans-serif;
  font-weight: bold;
  align-items: center;
}

.wcu-section-header h1 {
  border-bottom: 8px solid rgba(205, 171, 100, 1);
}

.wcu-section-header p {
  color: #8f8f8f;
  font-size: 15px;
  font-family: Poppins, sans-serif;
  font-weight: normal;
  margin-bottom: -2%;
}
.wcu {
  max-width: 790px;
  margin: 0 auto;
  padding: 100px 0;
}
.wcu-2 {
  gap: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.wcu-column {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 33%;
  margin-left: 0px;
}

.wcu-3 {
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  padding: 56px 11px 34px;
  max-height: 250px;
}

.img {
  aspect-ratio: 1.04;
  object-fit: auto;
  object-position: center;
  width: 49px;
  fill: rgba(240, 240, 240, 0.45);
  align-self: center;
}
.wcu-4 {
  color: #1e1e1e;
  margin-top: 31px;
  font: 500 20px/100% Poppins, sans-serif;
  text-align: center;
}

.wcu-5 {
  color: #949494;
  text-align: center;
  margin-top: 23px;
  font: 400 12px/19px Poppins, sans-serif;
}
.wcu-column-2 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 33%;
  margin-left: 0px;
}

.wcu-6 {
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  padding: 56px 11px 34px;
  max-height: 250px;
}

.img-2 {
  aspect-ratio: 1.04;
  object-fit: auto;
  object-position: center;
  width: 49px;
  fill: rgba(205, 171, 100, 1);
  align-self: center;
}
.wcu-7 {
  color: #1e1e1e;
  margin-top: 31px;
  font: 500 20px/100% Poppins, sans-serif;
  text-align: center;
}
.wcu-8 {
  color: #949494;
  text-align: center;
  margin-top: 23px;
  font: 400 12px/19px Poppins, sans-serif;
}
.wcu-column-3 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 33%;
  margin-left: 0px;
}

.wcu-9 {
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  padding: 56px 11px 34px;
  max-height: 245px;
}

.wcu-column .wcu-3,
.wcu-column-2 .wcu-6,
.wcu-column-3 .wcu-9 {
  transition: transform 0.3s ease;
}

.wcu-column:hover .wcu-3,
.wcu-column-2:hover .wcu-6,
.wcu-column-3:hover .wcu-9 {
  transform: scale(1.1);
}

.img-3 {
  aspect-ratio: 1.04;
  object-fit: auto;
  object-position: center;
  width: 49px;
  fill: #cdab64;
  align-self: center;
}
.wcu-10 {
  color: #1e1e1e;
  margin-top: 31px;
  font: 500 20px/100% Poppins, sans-serif;
  text-align: center;
}
.wcu-11 {
  color: #949494;
  text-align: center;
  margin-top: 20px;
  font: 400 12px/19px Poppins, sans-serif;
}
/*Work With Us*/
.wwu-container {
  background-color: rgba(240, 240, 240, 0.45);
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
  padding: 40px;
}

.wwu-3 {
  background-color: white;
  width: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.wwu-4 {
  gap: 20px;
  display: flex;
}

.wwu-column-2 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 75%;
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
  max-width: 100%;
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

.wwu-column-1 {
  background-image: url("../assets/ap-9-bg.jpg");
  background-size: cover;
  background-position: center;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  font-family: Poppins, sans-serif;
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
  color: white;
}

.contact-text span {
  color: white;
  font-size: 16px;
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
</style>
