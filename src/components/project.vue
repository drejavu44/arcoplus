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
    <transition name="fade" mode="out-in">
      <div class="project-grid" :key="currentPage">
        <!-- Project -->
        <div class="project" v-for="(project, index) in paginatedProjects" :key="index">
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
    </transition>
    <div class="pagination">
      <button @click="previousPage" :disabled="currentPage === 1"><i class="fa-solid fa-arrow-left"></i></button>
      <span>Page {{ currentPage }} of {{ totalPages }}</span>
      <button @click="nextPage" :disabled="currentPage === totalPages"><i class="fa-solid fa-arrow-right"></i></button>
    </div>
  </div>
</template>

<script setup>
import { getProjects } from "@/supabase/supabase";
import { onMounted, ref, computed } from "vue";

const projects = ref([]);
const isLoading = ref(false);
const itemsPerPage = 4; // Display only four projects per page
const currentPage = ref(1);

const totalPages = computed(() => Math.ceil(projects.value.length / itemsPerPage));

const paginatedProjects = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return projects.value.slice(startIndex, endIndex);
});

const handleGetProjects = async () => {
  isLoading.value = true;
  projects.value = await getProjects();
  isLoading.value = false;
};

onMounted(async () => {
  await handleGetProjects();
});

const previousPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};
</script>

<style scoped>
/* Projects section */
.proj-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fafafa;
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
  margin-bottom: -8%;
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
  min-width: 340px; 
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
  background-color: #ececec;
  min-height: 100%;
  min-width: 100%;
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
  color: #1e1e1ec1;
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

.pagination {
  margin-top: 10px;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  font-family: Poppins, sans-serif;
  font-size: 12px;
  color: #8f8f8f;
}

.pagination button {
  margin: 0 10px;
  padding: 5px 10px;
  background-color: #eee;
  border: none;
  cursor: pointer;
  transition: background-color 0.5s ease;
}

.pagination button:hover {
  background-color: #ddd;
}

.pagination button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
