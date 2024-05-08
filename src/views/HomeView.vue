<template>
  <Loader v-if="isLoading"/>
  <div v-else>
    <div class="container">
      <div class="home-container">
        <div class="home-background-div">
          <Navbar />
          <div id="home" class="opening-text">
            <h1>GOT A PROJECT FOR US? WE'VE GOT YOU COVERED</h1>
            <div class="content">
              <button @click="scrollToSection('quote')">GET A FREE QUOTATION NOW!</button>
            </div>
          </div>
        </div>
        <!--Why Choose Us-->
        <div class="about-us-wcu">
          <div class="wcu">
            <div class="wcu-2">
              <div class="wcu-column">
                <div class="wcu-3">
                  <p class="wcu-icons">
                    <i class="fa-solid fa-screwdriver-wrench"></i>
                  </p>
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
                  <p class="wcu-icons"><i class="fa-solid fa-check-to-slot"></i></p>
                  <div class="wcu-7">Sustainable Solutions</div>
                  <div class="wcu-8">
                    Committed to environmental responsibility, we integrate
                    sustainable practices into our projects, minimizing our
                    ecological footprint with eco-friendly materials and
                    energy-efficient designs.
                  </div>
                </div>
              </div>
              <div class="wcu-column-3">
                <div class="wcu-9">
                  <p class="wcu-icons"><i class="fa-solid fa-people-group"></i></p>
                  <div class="wcu-10">Experienced Team</div>
                  <div class="wcu-11">
                    Our team comprises skilled architects, engineers, project
                    managers, and laborers, bringing years of collective experience
                    to every project.
                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- About Us -->
      <div id="about">
        <div class="about-us-2">
          <div class="about-us-column">
            <img src="../assets/ap-about-us.jpg" class="about-us-image" />
          </div>
          <div class="about-us-column-2">
            <div class="about-us-3">
              <div class="about-us-4">About</div>
              <div class="about-us-5">TRANSFORMING IDEAS INTO STRUCTURES</div>
              <div class="about-us-6">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
                <br /><br />
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. Lorem
                Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </div>
              <div class="about-us-7">
                <div @click="scrollToSection('projects')">
                  See some of our recent projects
                </div>
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
      <QuoteForm :toggleLoadingState="toggleLoadingState" />
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from "../components/navbar.vue";
import Footer from "../components/footer.vue";
import Product from "../components/product.vue";
import Project from "../components/project.vue";
import QuoteForm from "../components/quoteform.vue";
import Loader from "@/Loader/Loader.vue";
import { RouterLink } from "vue-router";
import { ref } from "vue";

const isLoading = ref(false)

const toggleLoadingState = () => {
  isLoading.value = !isLoading.value
}

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
.container {
  display: flex;
  flex-direction: column;
}

.home-container {
  flex: 1;
}

.about-us-wcu {
  padding: 80px;
  margin-bottom: 50px;
}

#projects {
  flex: 1;
}

.home-background-div {
  background-image: url("../assets/ap-landing-bg.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 450px;
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
  color: #fff;
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
  margin-top: -20px;
  opacity: 0;
  animation: fadeInUp 1s ease forwards;
}

.opening-text button {
  background-color: transparent;
  border-radius: 30px;
  border-color: rgba(205, 171, 100, 1);
  border-style: solid;
  border-width: 1px;
  color: rgba(205, 171, 100, 1);
  padding: 5px 30px;
  font-size: 18px;
  font-family: Poppins, sans-serif;
  cursor: pointer;
  transition: background-color 0.5s ease;
  box-shadow: 1px 1px 30px rgba(44, 44, 44, 0.3);
}

.opening-text button:hover {
  background-color: rgba(205, 171, 100, 1);
  color: white;
}

/* about us section */

.about-us-wcu {
  padding: 150px;
  margin-top: -150px;
  margin-bottom: 50px;
}

.about-us-2 {
  gap: 5px;
  display: flex;
  margin-top: -200px;
  padding: 80px;
}

.about-us-column {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 60%;
  margin-left: 0px;
}

.about-us-image {
  aspect-ratio: 0.75;
  object-fit: auto;
  object-position: center;
  width: 80%;
  min-height: 100%;
  align-self: stretch;
  margin: auto 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
}

.about-us-column-2 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 80%;
  min-height: 100%;
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
  font-size: 56px;
  font-weight: bold;
  font-family: Poppins, sans-serif;
  text-shadow: 1px 1px 50px rgba(0, 0, 0, 0.3);
}

.about-us-6 {
  font-family: Poppins, sans-serif;
  line-height: 32px;
  margin-top: 35px;
  color: #9d9d9d;
}

.about-us-7 {
  margin-top: 45px;
}

.about-us-7 div {
  color: rgba(205, 171, 100, 1);
  justify-content: center;
  font-size: 12px;
  font-family: Poppins, sans-serif;
  cursor: pointer;
  transition: color 0.5s ease;
  text-decoration: underline;
}

.about-us-7 div:hover {
  color: rgb(153, 128, 73);
}


/* wcu section */

.wcu {
  max-width: 100%;
  margin: 0 auto;
  margin-top: -25px;
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
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  padding: 56px 11px 34px;
  max-height: 100%;
  overflow: hidden;
  background-color: #fff;
}

.wcu-icons {
  margin: 0;
  font-size: 40px;
  align-self: center;
  color: #1e1e1e;
}

.wcu-4,
.wcu-7,
.wcu-10 {
  color: rgba(205, 171, 100, 1);
  margin-top: 31px;
  font-weight: bold;
  font-size: 20px;
  font-family: Poppins, sans-serif;
  text-align: center;
}

.wcu-5,
.wcu-8,
.wcu-11 {
  color: #9d9d9d;
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
