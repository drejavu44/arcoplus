<template>
    <div class="project-container">
      <div class="background-div">
        <Navbar />
        <div class="opening-text">
          <h1>Transforming Ideas Into Structures</h1>
          <div class="content">
            <p>Got a project for us? We’ve got you covered.</p>
            <button>GET A QUOTE</button>
          </div>
        </div>
      </div>
      <!--Socials-->
      <Social />
      <!-- About Us -->
      <div class="about-us">
        <div class="about-us-2">
          <div class="about-us-column">
            <img src="./assets/ap-about-us.jpg" class="about-us-image" />
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
              <RouterLink to="/about">LEARN MORE</RouterLink>
            </div>
          </div>
        </div>
      </div>
      <!--Features-->
      <div class="features">
        <div class="features-2">
          <div class="features-column">
            <div class="features-3">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/184d7f0f507e0d4d8e42ffc2320cd20d2b24cf5385be08e57e519fbd2ae22a37?"
                class="img"
              />
              <div class="features-4">Expertise in Diverse Projects</div>
              <div class="features-5">
                From residential to commercial and industrial ventures, our
                construction company specializes in a wide array of projects,
                ensuring tailored solutions to meet every client's needs.
              </div>
            </div>
          </div>
          <div class="features-column-2">
            <div class="features-6">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/85d236b97fa775e1e63d98b4af8e1f6d7ed68e870367f994ab5fe6664c2dc296?"
                class="img-2"
              />
              <div class="features-7">Experienced Team</div>
              <div class="features-8">
                Our team comprises skilled architects, engineers, project
                managers, and laborers, bringing years of collective experience to
                every project. With a focus on efficiency and safety, we deliver
                results that exceed expectations.
              </div>
            </div>
          </div>
          <div class="features-column-3">
            <div class="features-9">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e7362c9b3d06498fa1f343e95b7740472e7fc66b07296c0a0d2a4420a1e2e4d9?"
                class="img"
              />
              <div class="features-10">Safety Standards</div>
              <div class="features-11">
                Safety is paramount. We strictly adhere to regulations, provide
                continuous training, and implement robust safety protocols to
                safeguard our workforce and clients.
              </div>
            </div>
          </div>
          <div class="features-column-4">
            <div class="features-12">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1a8b88e22dcb9333292a2686077a880c8e46723e7a8e0e3d7e85914196aee692?"
                class="img-3"
              />
              <div class="features-13">Sustainable Solutions</div>
              <div class="features-14">
                Committed to environmental responsibility, we integrate
                sustainable practices into our projects, minimizing our ecological
                footprint with eco-friendly materials and energy-efficient
                designs.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Projects -->
    <div class="proj-container">
      <div class="proj-section-header">
        <h1>Projects</h1>
        <p>
          Explore our recent projects showcasing innovative designs and
          cutting-edge solutions.
        </p>
      </div>
      <div class="project-grid">
        <!-- Project 1 -->
        <div class="project">
          <div class="project-details">
            <img src="./assets/sample.jpg" class="project-image" />
            <div class="project-location">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8b7a1bcf87641e36f148e5b34797d93a07f96aec9329308296333bf3bfc3dbb9?"
                class="company-logo"
              />
              Las Piñas City
            </div>
            <div class="project-address">Pamplona Tres</div>
            <div class="project-name">Lorem Ipsum</div>
          </div>
        </div>
        <!-- Project 2 -->
        <div class="project">
          <div class="project-details">
            <img src="./assets/sample.jpg" class="project-image" />
            <div class="project-location">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8b7a1bcf87641e36f148e5b34797d93a07f96aec9329308296333bf3bfc3dbb9?"
                class="company-logo"
              />
              Makati City
            </div>
            <div class="project-address">Samsung Store Glorietta 2</div>
            <div class="project-name">Lorem Ipsum</div>
          </div>
        </div>
        <!-- Project 3 -->
        <div class="project">
          <div class="project-details">
            <img src="./assets/sample.jpg" class="project-image" />
            <div class="project-location">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8b7a1bcf87641e36f148e5b34797d93a07f96aec9329308296333bf3bfc3dbb9?"
                class="company-logo"
              />
              Quezon City
            </div>
            <div class="project-address">Eulogio Rodriguez Jr. Avenue‎</div>
            <div class="project-name">Lorem Ipsum</div>
          </div>
        </div>
        <!-- Project 4 -->
        <div class="project">
          <div class="project-details">
            <img src="./assets/sample.jpg" class="project-image" />
            <div class="project-location">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8b7a1bcf87641e36f148e5b34797d93a07f96aec9329308296333bf3bfc3dbb9?"
                class="company-logo"
              />
              Parañaque City
            </div>
            <div class="project-address">161 Armstrong Avenue</div>
            <div class="project-name">Lorem Ipsum</div>
          </div>
        </div>
        <!-- Project 5 -->
        <div class="project">
          <div class="project-details">
            <img src="./assets/sample.jpg" class="project-image" />
            <div class="project-location">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8b7a1bcf87641e36f148e5b34797d93a07f96aec9329308296333bf3bfc3dbb9?"
                class="company-logo"
              />
              Las Piñas City
            </div>
            <div class="project-address">Pamplona Tres</div>
            <div class="project-name">Lorem Ipsum</div>
          </div>
        </div>
        <!-- Project 6 -->
        <div class="project">
          <div class="project-details">
            <img src="./assets/sample.jpg" class="project-image" />
            <div class="project-location">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8b7a1bcf87641e36f148e5b34797d93a07f96aec9329308296333bf3bfc3dbb9?"
                class="company-logo"
              />
              Makati City
            </div>
            <div class="project-address">Samsung Store Glorietta 2</div>
            <div class="project-name">Lorem Ipsum</div>
          </div>
        </div>
        <!-- Project 7 -->
        <div class="project">
          <div class="project-details">
            <img src="./assets/sample.jpg" class="project-image" />
            <div class="project-location">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8b7a1bcf87641e36f148e5b34797d93a07f96aec9329308296333bf3bfc3dbb9?"
                class="company-logo"
              />
              Quezon City
            </div>
            <div class="project-address">Eulogio Rodriguez Jr. Avenue‎</div>
            <div class="project-name">Lorem Ipsum</div>
          </div>
        </div>
        <!-- Project 8 -->
        <div class="project">
          <div class="project-details">
            <img src="./assets/sample.jpg" class="project-image" />
            <div class="project-location">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8b7a1bcf87641e36f148e5b34797d93a07f96aec9329308296333bf3bfc3dbb9?"
                class="company-logo"
              />
              Parañaque City
            </div>
            <div class="project-address">161 Armstrong Avenue</div>
            <div class="project-name">Lorem Ipsum</div>
          </div>
        </div>
      </div>
    </div>
    <!--Product-->
    <Product />
    <!--Quote Form-->
    <h1>Forms</h1>
    <Supaproducts/>
    <Footer />
  </template>
  
  <script setup>
  import Supaproducts from "../components/supaproducts.vue";
  import Navbar from "../components/navbar.vue";
  import Footer from "../components/footer.vue";
  import Social from "../components/socials.vue";
  import Product from "../components/product.vue";
  import { RouterLink } from "vue-router";
  </script>
  
  <style scoped>
  
  .active{
    font-weight: 900;
    color:navajowhite
  }
  .project-container {
    margin: 0; /* Adjust margin */
  }
  
  .background-div {
    background-image: url("./assets/ap-bg-2.jpg");
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
  
  /* Projects section */
  
  .proj-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .proj-section-header {
    /*padding: 35px;*/
    display: flex;
    flex-direction: column;
    color: #1e1e1e;
    font-size: 20px;
    font-family: Poppins, sans-serif;
    font-weight: bold;
    align-items: center;
  }
  
  .proj-section-header h1 {
    border-bottom: 8px solid rgba(205, 171, 100, 1);
  }
  
  .proj-section-header p {
    color: #8f8f8f;
    font-size: 15px;
    font-family: Poppins, sans-serif;
    font-weight: normal;
    margin-bottom: -2%;
  }
  
  .project-grid {
    padding: 40px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  
  .project {
    width: calc(25% - 20px);
    margin-bottom: 10px;
  }
  
  .project-image {
    width: 100%;
    box-shadow: 0px 6px 16px 0px rgba(0, 0, 0, 0.02);
    border-radius: 16px;
  }
  
  .project-details {
    margin-top: 10px;
    background-color: rgba(240, 240, 240, 0.45);
    border-radius: 16px;
    border: 1px solid rgba(255, 255, 255, 1);
    padding: 16px;
  }
  
  .company-logo {
    width: 12px;
  }
  
  .project-location {
    font-family: Poppins, sans-serif;
    margin-top: 10px;
  }
  
  .project-address {
    color: #1e1e1e;
    letter-spacing: 0.5px;
    margin-top: 8px;
    font: 700 16px Poppins, sans-serif;
  }
  
  .project-name {
    color: var(--Gray-600, #636363);
    letter-spacing: 0.18px;
    margin-top: 4px;
    font: 14px Poppins, sans-serif;
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
    background-color: transparent;
    border-radius: 10px;
    border-color: rgba(205, 171, 100, 1);
    border-style: solid;
    border-width: 1px;
    align-self: start;
    margin-top: 45px;
    color: #cdab64;
    justify-content: center;
    padding: 5px 20px;
    font: 12px/267% Poppins, sans-serif;
    cursor: pointer;
    transition: background-color 0.5s ease;
  }
  
  .about-us-7:hover {
    background-color: rgba(205, 171, 100, 1);
    color: white;
  }
  
  /* Features section */
  .features {
    background-color: rgba(240, 240, 240, 0.45);
    align-items: center;
    justify-content: center;
    padding: 30px;
  }
  .features-2 {
    gap: 20px;
    display: flex;
  }
  
  .features-column {
    display: flex;
    flex-direction: column;
    line-height: normal;
    width: 25%;
  }
  
  .features-3 {
    display: flex;
    margin-top: 5px;
    flex-direction: column;
    align-items: center;
  }
  
  .img {
    aspect-ratio: 1.01;
    object-fit: auto;
    object-position: center;
    width: 101px;
    max-width: 100%;
  }
  .features-4 {
    color: #1e1e1e;
    align-self: stretch;
    text-align: center;
    margin: 18px -2px 0;
    font: 700 18px Poppins, sans-serif;
  }
  .features-5 {
    color: #8f8f8f;
    text-align: center;
    margin-top: 11px;
  
    font: 300 12px Poppins, sans-serif;
  }
  .features-column-2 {
    display: flex;
    flex-direction: column;
    line-height: normal;
    width: 25%;
    margin-left: 20px;
  }
  
  .features-6 {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    align-items: center;
  }
  
  .img-2 {
    aspect-ratio: 1;
    object-fit: auto;
    object-position: center;
    width: 100px;
    max-width: 100%;
  }
  .features-7 {
    color: #1e1e1e;
    margin-top: 23px;
    font: 700 18px Poppins, sans-serif;
  }
  .features-8 {
    color: #8f8f8f;
    text-align: center;
    align-self: stretch;
    margin-top: 11px;
    font: 300 12px Poppins, sans-serif;
  }
  .features-column-3 {
    display: flex;
    flex-direction: column;
    line-height: normal;
    width: 25%;
    margin-left: 20px;
  }
  
  .features-9 {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  
  .features-10 {
    color: #1e1e1e;
    margin-top: 23px;
    font: 700 18px Poppins, sans-serif;
  }
  .features-11 {
    color: #8f8f8f;
    align-self: stretch;
    margin-top: 11px;
    text-align: center;
    font: 300 12px Poppins, sans-serif;
  }
  .features-column-4 {
    display: flex;
    flex-direction: column;
    line-height: normal;
    width: 25%;
    margin-left: 20px;
  }
  
  .features-12 {
    display: flex;
    flex-direction: column;
  }
  
  .img-3 {
    aspect-ratio: 1;
    object-fit: auto;
    object-position: center;
    width: 100px;
    align-self: center;
    max-width: 100%;
  }
  .features-13 {
    color: #1e1e1e;
    margin-top: 23px;
    text-align: center;
    font: 700 18px Poppins, sans-serif;
  }
  .features-14 {
    color: #8f8f8f;
    text-align: center;
    margin-top: 9px;
    font: 300 12px Poppins, sans-serif;
  }
  </style>
  