<script setup>
import AddProject from '@/components/addProject.vue';
import { getProjects, deleteProject } from "../../supabase/supabase.js"
import { onMounted, ref } from 'vue';
import EditProjectModal from '@/components/editProjectModal.vue';
import Swal from "sweetalert2";

const projects = ref()
const selectedProject = ref()
const showEditProjectModal = ref(false)

const handleGetProjects = async () => {
    projects.value = await getProjects()
}

const addNewProjectToArray = (project) => {
    projects.value = [...projects.value, project]

}

const showEditProject = (project) => {
    selectedProject.value = project
    showEditProjectModal.value = true
}

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
        return
    }
    Swal.fire({
        title: "Deleted!",
        text: "Your project has been deleted.",
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
        confirmButtonColor: "rgba(205, 171, 100, 1)",
    })

    projects.value = projects.value.filter(proj => proj.id !== project.id)
}

const hideEditProject = () => {
    showEditProjectModal.value = false
}

const updateProjectValue = (updatedProject) => {
    projects.value = projects.value.map(project => project.id === updatedProject.id ? updatedProject : project)
}

onMounted(async () => {
    await handleGetProjects()
})
</script>

<template>
    <AddProject :addNewProjectToArray="addNewProjectToArray" />
    <EditProjectModal v-if="showEditProjectModal" :updateProjectValue="updateProjectValue"
        :selectedProject="selectedProject" :hideEditProject="hideEditProject" />
    <ul>
        <li v-for="project in projects">
            <p>{{ project.title }}</p>
            <p>{{ project.description }}</p>
            <p>{{ project.location }}</p>
            <img height="100px" width="100px" :src="project.imageUrl">
            <button @click="showEditProject(project)">Edit</button>
            <button @click="handleDeleteProject(project)">Delete</button>
        </li>
    </ul>
</template>
<style scoped></style>