<script setup>
import AdminNavbar from "../components/navbar-admin.vue";
import { ref } from "vue";
import Swal from "sweetalert2";
import { addProject } from "@/supabase/supabase";

const newProject = ref({});

const props = defineProps({
  addNewProjectToArray: {
    type: Function,
    required: true,
  },
  toggleLoadingState: {
    type: Function,
    required: true
  }
});

const handleFileInputChange = (event) => {
  const file = event.target.files[0];

  newProject.value.imageFile = file;
};

const handleAddProject = async () => {
  props.toggleLoadingState()
  if (!newProject.value.imageFile) {
    return;
  }

  const result = await addProject(newProject.value);
  props.toggleLoadingState()

  if (result.status === 0) {
    Swal.fire({
      title: "Error!",
      text: `${newProject.value.title} has not been added successfully.`,
      icon: "error",
      timer: 1500,
      showConfirmButton: false,
      confirmButtonColor: "rgba(205, 171, 100, 1)",
    });
    newProject.value = {};
  }
  const newlyAddedProject = result.data[0];
  props.addNewProjectToArray(newlyAddedProject);
  Swal.fire({
    title: "Success!",
    text: `${newProject.value.title} has been added successfully.`,
    icon: "success",
    timer: 1500,
    showConfirmButton: false,
    confirmButtonColor: "rgba(205, 171, 100, 1)",
  });
  newProject.value = {};
  document.getElementById("imageFile").value = "";
};
</script>

<template>
  <div class="mp-background">
    <div class="container">
      <div class="mp-header">
        <h1>Manage Projects</h1>
        <AdminNavbar />
        <p>
          Add, edit, or delete products that are currently visible to the user
          on the homepage.
        </p>
      </div>
      <div>
        <div class="input-group">
          <label>Project Title:</label>
          <input type="text" v-model="newProject.title" />
        </div>
        <div class="input-group">
          <label>Project Description:</label>
          <textarea type="text" v-model="newProject.description" />
        </div>
        <div class="input-group">
          <label>Project Location:</label>
          <input type="text" v-model="newProject.location" />
        </div>
        <div class="input-group">
          <label>Project Image:</label>
          <input id="imageFile" type="file" @change="handleFileInputChange" />
        </div>
        <div class="mp-button">
          <div class="input-group">
            <button @click="handleAddProject">Submit</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.mp-background {
  background-image: url("../assets/ap-add-bg.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 900px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  width: 90%;
  background-color: #1a1a1a35;
  padding: 30px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
}

.mp-header {
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  color: #fff;
  font-size: 13px;
  font-family: Poppins, sans-serif;
  font-weight: bold;
  align-items: center;
  text-align: center;
  border-bottom: 1px solid #e0e0e026;
}

.mp-header h1 {
  border-bottom: 8px solid rgba(205, 171, 100, 1);
}

.mp-header p {
  color: #fff;
  font-size: 15px;
  font-family: Poppins, sans-serif;
  font-weight: normal;
}

.input-group {
  margin-bottom: 20px;
  color: #fff;
}

.input-group label {
  font-family: Poppins, sans-serif;
  font-size: 14px;
  font-weight: bold;
  color: #fff;
}

.input-group input[type="text"],
.input-group input[type="file"],
.input-group textarea {
  padding: 10px;
  border: 1px solid #e0e0e026;
  border-radius: 4px;
  font-family: Poppins, sans-serif;
  font-size: 14px;
  margin-bottom: 10px;
  width: 98%;
  margin-top: 5px;
  color: #fff;
}

.input-group input[type="file"],
.input-group textarea {
  background-color: transparent;
}

.input-group input[type="text"] {
  background-color: transparent;
  color: #fff;
}

.input-group input[type="file"]::-webkit-file-upload-button {
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: rgba(205, 171, 100, 1);
  padding: 10px;
  color: #fff;
}

.input-group button {
  padding: 10px 20px;
  background-color: rgba(205, 171, 100, 1);
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-family: Poppins, sans-serif;
  transition: background-color 0.5s ease;
  margin-top: 20px;
  width: 100%;
  font-size: 15px;
  border-radius: 30px;
}

.input-group button:hover {
  background-color: rgb(166, 139, 81);
}

.mp-button {
  border-top: 1px solid #e0e0e026;
  align-items: center;
  text-align: center;
}
</style>
