<script setup>
import AddProject from "@/components/addProject.vue";
import { getProjects, deleteProject } from "../../supabase/supabase.js";
import Navbar from "../../components/navbar.vue";
import Footer from "../../components/footer.vue";
import { onMounted, ref } from "vue";
import EditProjectModal from "@/components/editProjectModal.vue";
import Swal from "sweetalert2";

const projects = ref();
const selectedProject = ref();
const showEditProjectModal = ref(false);

const handleGetProjects = async () => {
  projects.value = await getProjects();
};

const addNewProjectToArray = (project) => {
  projects.value = [...projects.value, project];
};

const showEditProject = (project) => {
  selectedProject.value = project;
  showEditProjectModal.value = true;
};

const handleDeleteProject = async (project) => {
  const isDeletionSuccessful = await deleteProject(project);

  if (!isDeletionSuccessful) {
    Swal.fire({
      title: "Deletion Failed.",
      text: "Your project has not been deleted.",
      icon: "error",
      timer: 1500,
      showConfirmButton: false,
      confirmButtonColor: "rgba(205, 171, 100, 1)",
    });
    return;
  }
  Swal.fire({
    title: "Deleted!",
    text: "Your project has been deleted.",
    icon: "success",
    timer: 1500,
    showConfirmButton: false,
    confirmButtonColor: "rgba(205, 171, 100, 1)",
  });

  projects.value = projects.value.filter((proj) => proj.id !== project.id);
};

const hideEditProject = () => {
  showEditProjectModal.value = false;
};

const updateProjectValue = (updatedProject) => {
  projects.value = projects.value.map((project) =>
    project.id === updatedProject.id ? updatedProject : project
  );
};

onMounted(async () => {
  await handleGetProjects();
});
</script>

<template>
  <Navbar />
  <AddProject :addNewProjectToArray="addNewProjectToArray" />
  <EditProjectModal
    v-if="showEditProjectModal"
    :updateProjectValue="updateProjectValue"
    :selectedProject="selectedProject"
    :hideEditProject="hideEditProject"
  />
  <div class="projects-container">
    <div class="projects" v-for="project in projects">
      <div class="image-container">
        <img height="100px" width="100px" :src="project.imageUrl" />
      </div>
      <div class="projects-content">
        <h2><i class="fa-solid fa-location-dot"></i> {{ project.location }}</h2>
        <h1>{{ project.title }}</h1>
        <p>{{ project.description }}</p>
        <div class="button-container">
          <button class="edit-button" @click="showEditProject(project)">
            <i class="fas fa-edit"></i> Edit
          </button>
          <button class="delete-button" @click="handleDeleteProject(project)">
            <i class="fas fa-trash-alt"></i> Delete
          </button>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>
<style scoped>
.projects-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  font-family: Poppins, sans-serif;
  padding: 40px;
}

.projects {
  width: 300px;
  height: 400px;
  overflow: hidden;
  margin-right: 30px;
  margin-bottom: 35px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
  position: relative;
  transition: transform 0.3s ease;
  background-color: #1e1e1e;
}

.projects:hover {
  transform: scale(1.1);
}

.image-container {
  height: 200px;
  overflow: hidden;
}

.projects img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.projects-content {
  padding: 10px;
}

.projects-content h1 {
  font-weight: bold;
  margin: 0;
  word-wrap: break-word;
  font-size: 18px;
  text-align: center;
  margin-bottom: 10px;
  color: #fff;
}

.projects-content h2 {
  font-weight: bold;
  margin: 0;
  word-wrap: break-word;
  font-size: 12px;
  margin-bottom: 10px;
  color: #fff;
}

.projects-content p {
  font-weight: normal;
  margin: 0;
  word-wrap: break-word;
  font-size: 10px;
  text-align: center;
  margin-bottom: 10px;
  color: #fff;
}

.button-container {
  position: absolute;
  bottom: 10px; 
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  width: 95%; 
  gap: 10px;
}

.edit-button,
.delete-button {
  background-color: rgba(205, 171, 100, 1);
  color: #fff;
  border: none;
  padding: 3px 10px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 13px;
  font-family: Poppins, sans-serif;
  transition: background-color 0.5s ease;
  width: 100%; 
}

.edit-button:hover {
  background-color: rgb(166, 139, 81);
  color: white;
}

.delete-button {
  background-color: #dc4c64;
}

.delete-button:hover {
  background-color: #aa3d50;
  color: white;
}

@media screen and (max-width: 768px) {
  .products {
    width: calc(50% - 15px);
  }
}

@media screen and (max-width: 480px) {
  .products {
    width: calc(100% - 30px);
    margin-right: 0;
  }
}
</style>
