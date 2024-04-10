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
            <img src="../assets/ap-au.jpg" class="about-us-image" />
          </div>
          <div class="wwa-column-2">
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
          <div class="wcu-10">Experienced Team</div>
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
  </div>
  <Footer />
</template>

<script setup>
import Navbar from "../components/navbar.vue";
import Footer from "../components/footer.vue";
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

.wwa-column {
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

.wwa-column-2 {
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
  /*padding: 35px;*/
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
  color: #031333;
  margin-top: 31px;
  font: 500 20px/100% Poppins, sans-serif;
  text-align: center;
}

.wcu-5 {
  color: #949494;
  text-align: center;
  margin-top: 31px;
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
  color: #031333;
  margin-top: 31px;
  font: 500 20px/100% Poppins, sans-serif;
  text-align: center;
}
.wcu-8 {
  color: #949494;
  text-align: center;
  margin-top: 31px;
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
  color: #031333;
  margin-top: 31px;
  font: 500 20px/100% Poppins, sans-serif;
  text-align: center;
}
.wcu-11 {
  color: #949494;
  text-align: center;
  margin-top: 31px;
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
</style>
