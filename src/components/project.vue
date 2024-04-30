<script setup>
import { getProjects } from "@/supabase/supabase";
import { onMounted, ref } from "vue";

const projects = ref();
const isLoading = ref(false);

const handleGetProjects = async () => {
  isLoading.value = true;
  projects.value = await getProjects();
  isLoading.value = false;
};

onMounted(async () => {
  await handleGetProjects();
});
</script>

<template>
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
      <div class="project" v-for="project in projects">
        <div class="project-details">
          <img :src="project.imageUrl" class="project-image" />
          <div class="project-details-2">
            <div class="project-location">
              <p><i class="fa-solid fa-location-dot"></i></p>
              {{ project.title }}
            </div>
            <div class="project-address">{{ project.location }}</div>
            <div class="project-name">{{ project.description }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Projects section */

.proj-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url("../assets/ap-abt-bg.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.proj-section-header {
  padding: 35px;
  display: flex;
  flex-direction: column;
  color: #1e1e1e;
  font-size: 13px;
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
  overflow: hidden;
  cursor: pointer;
}

.project-image {
  height: 200px;
  max-height: 200px;
  width: 100%;
  box-shadow: 0px 6px 16px 0px rgba(0, 0, 0, 0.02);
  transition: transform 0.3s ease;
}

.project-details {
  margin-top: 10px;
  background-color: #1e1e1e;
  min-height: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
}

.project-details-2 {
  padding: 8px;
}

.project-location p {
  display: inline;
  color: rgba(205, 171, 100, 1);
}

.project-location {
  font-family: Poppins, sans-serif;
  color: white;
  font-size: 18px;
  font-weight: bold;
}

.project-address {
  color: #9d9d9d;
  letter-spacing: 0.5px;
  font-family: Poppins, sans-serif;
  font-size: 12px;
  margin-bottom: 10px;
}

.project-name {
  color: var(--Gray-600, #9d9d9d);
  letter-spacing: 0.18px;
  margin-top: 4px;
  font: 10px Poppins, sans-serif;
}

.project:hover .project-image {
  transform: scale(1.1);
}
</style>
