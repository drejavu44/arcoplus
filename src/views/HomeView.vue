<template>
  <div class="home-container">
    <div class="home-background-div">
      <Navbar />
      <div class="opening-text">
        <h1>Transforming Ideas Into Structures</h1>
        <div class="content">
          <p>Got a project for us? We’ve got you covered.</p>
          <button>GET A QUOTE</button>
        </div>
      </div>
    </div>
    <!--Socials <Social />-->
    <!-- About Us -->
    <div class="about-us">
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
              ><RouterLink to="/about">LEARN MORE</RouterLink></a
            >
          </div>
        </div>
      </div>
    </div>
    <!--Features <Features />-->
    <!--Project-->
    <Project />
    <!--Product-->
    <Product />
    <!--Quote Form-->
    <!--CRUD-->
    <Supaproducts />
    <Footer />
  </div>
</template>

<script setup>
import Supaproducts from "../components/supaproducts.vue";
import Navbar from "../components/navbar.vue";
import Footer from "../components/footer.vue";
import Social from "../components/socials.vue";
import Product from "../components/product.vue";
import Project from "../components/project.vue";
import Features from "../components/features.vue";
import { RouterLink } from "vue-router";
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

/* About us section */

.about-us {
  padding: 80px;
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
  border-radius: 10px;
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
</style>
