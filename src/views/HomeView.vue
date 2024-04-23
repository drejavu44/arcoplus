<template>
  <div class="home-container">
    <div class="home-background-div">
      <Navbar />
      <div id="home" class="opening-text">
        <h1>Transforming Ideas Into Structures</h1>
        <div class="content">
          <p>Got a project for us? We’ve got you covered.</p>
          <button @click="scrollToSection('quote')">GET A QUOTE</button>
        </div>
      </div>
    </div>
    <!-- About Us -->
    <div id="about" class="about-us">
      <div class="about-us-2">
        <div class="about-us-column">
          <img src="../assets/ap-about-us.jpg" class="about-us-image" />
        </div>
        <div class="about-us-column-2">
          <div class="about-us-3">
            <div class="about-us-4">About</div>
            <div class="about-us-5">
              Creating, <br />Communicating <br />& Delivering
            </div>
            <div class="about-us-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </div>
            <a class="about-us-7"
              ><RouterLink to="/application">APPLY NOW!</RouterLink>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--Why Choose Us-->
  <div class="wcu-container">
    <div class="wcu-section-header">
      <h1>Why Choose Us?</h1>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
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
              Committed to environmental responsibility, we integrate
              sustainable practices into our projects, minimizing our ecological
              footprint with eco-friendly materials and energy-efficient
              designs.
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
              Our team comprises skilled architects, engineers, project
              managers, and laborers, bringing years of collective experience to
              every project.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--Project-->
  <div id="projects">
    <Project />
  </div>
  <!--Product-->
  <div id="products">
    <Product />
  </div>
  <!--Quote Form-->
  <div id="quote">
    <QuoteForm />
  </div>
  <Footer />
</template>

<script setup>
import Navbar from "../components/navbar.vue";
import Footer from "../components/footer.vue";
import Product from "../components/product.vue";
import Project from "../components/project.vue";
import QuoteForm from "../components/quoteform.vue";
import { RouterLink } from "vue-router";

const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    window.scrollTo({
      top: section.offsetTop,
      behavior: "smooth",
    });
  }
};
</script>

<style scoped>
.home-container {
  margin: 0; /* Adjust margin */
}

.home-background-div {
  background-image: url("../assets/ap-bg-2.jpg");
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
  font-size: 45px;
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
  border-radius: 30px;
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

/* About us section */

.about-us {
  padding: 80px;
  background-color: rgba(240, 240, 240, 0.45);
}

.about-us-2 {
  gap: 5px;
  display: flex;
}

.about-us-column {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 50%;
  margin-left: 0px;
}

.about-us-image {
  aspect-ratio: 0.75;
  object-fit: auto;
  object-position: center;
  width: 80%;
  align-self: stretch;
  margin: auto 0;
}

.about-us-column-2 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 50%;
  margin-left: 20px;
}

.about-us-3 {
  display: flex;
  flex-direction: column;
  align-self: stretch;
  font-size: 16px;
  color: #1e1e1e;
  font-weight: 400;
  margin: auto 0;
}

.about-us-4 {
  color: rgba(205, 171, 100, 1);
  font-family: Poppins, sans-serif;
  line-height: 200%;
  letter-spacing: 3px;
  text-transform: capitalize;
}

.about-us-5 {
  color: #1e1e1e;
  margin-top: 37px;
  font: 700 56px/64px Poppins, sans-serif;
}

.about-us-6 {
  font-family: Poppins, sans-serif;
  line-height: 32px;
  margin-top: 35px;
  color: #8f8f8f;
}

.about-us-7 {
  margin-top: 45px;
}

.about-us-7 a {
  background-color: transparent;
  border-radius: 30px;
  border-color: rgba(205, 171, 100, 1);
  border-style: solid;
  border-width: 1px;
  align-self: start;
  color: rgba(205, 171, 100, 1);
  justify-content: center;
  padding: 10px 30px;
  font: 12px/267% Poppins, sans-serif;
  cursor: pointer;
  transition: background-color 0.5s ease;
  text-decoration: none;
}

.about-us-7 a:hover {
  background-color: rgba(205, 171, 100, 1);
  color: white;
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
}

.wcu {
  max-width: 90%;
  margin: 0 auto;
  margin-bottom: 50px;
  padding: 5px;
}

.wcu-2 {
  gap: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.wcu-column,
.wcu-column-2,
.wcu-column-3 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 50%;
  margin-left: 0px;
  height: 300px; 
}

.wcu-3,
.wcu-6,
.wcu-9 {
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  padding: 56px 11px 34px;
  max-height: 100%; 
  overflow: hidden; 
}

.img,
.img-2,
.img-3 {
  aspect-ratio: 1.04;
  object-fit: auto;
  object-position: center;
  width: 49px;
  align-self: center;
}

.wcu-4,
.wcu-7,
.wcu-10 {
  color: #1e1e1e;
  margin-top: 31px;
  font: 500 20px/100% Poppins, sans-serif;
  text-align: center;
}

.wcu-5,
.wcu-8,
.wcu-11 {
  color: #949494;
  text-align: center;
  margin-top: 23px;
  font: 400 12px/19px Poppins, sans-serif;
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

@media only screen and (max-width: 768px) {
  .wcu-5,
  .wcu-8,
  .wcu-11 {
    overflow: auto; 
  }
}
</style>
