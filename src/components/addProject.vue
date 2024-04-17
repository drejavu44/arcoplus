<script setup>
import { ref } from 'vue';
import Swal from "sweetalert2";
import { addProject } from '@/supabase/supabase';

const newProject = ref({})

const props = defineProps({
    addNewProjectToArray: {
        type: Function,
        required: true,
    },
});

const handleFileInputChange = (event) => {
    const file = event.target.files[0]

    newProject.value.imageFile = file
}

const handleAddProject = async () => {
    if (!newProject.value.imageFile) {
        return;
    }

    const result = await addProject(newProject.value)

    if (result.status === 0) {
        Swal.fire({
            title: "Error!",
            text: `${newProject.value.title} has not been added successfully.`,
            icon: "error",
            timer: 1500,
            showConfirmButton: false,
            confirmButtonColor: "rgba(205, 171, 100, 1)",
        });
        newProject.value = {}
    }
    const newlyAddedProject = result.data[0]
    props.addNewProjectToArray(newlyAddedProject)
    Swal.fire({
        title: "Success!",
        text: `${newProject.value.title} has been added successfully.`,
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
        confirmButtonColor: "rgba(205, 171, 100, 1)",
    });
    newProject.value={}
    document.getElementById('imageFile').value = ""
}

</script>

<template>
    <div>
        <label>Project Title:</label>
        <input type="text" v-model="newProject.title" /><br>
        <label>Project Description:</label>
        <textarea type="text" v-model="newProject.description" /><br>
        <label>Project Location:</label>
        <input type="text" v-model="newProject.location" /><br>
        <label>Project Image:</label>
        <input id="imageFile" type="file" @change="handleFileInputChange" /><br>
        <button @click="handleAddProject">Submit</button>
    </div>
</template>
