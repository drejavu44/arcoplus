<template>
  <div>
    <button class="edit-product-button" @click="openModal">
      <i class="fa-solid fa-pen-to-square"></i>
      Edit
    </button>
    <button class="delete-product-button" @click="confirmDelete">
      <i class="fa-solid fa-trash"></i>
      Delete
    </button>
    <div v-if="isModalOpen" class="modal">
      <div class="modal-content">
        <div class="modal-header">
          <h1>Edit Project</h1>
          <span class="close" @click="closeModal">&times;</span>
        </div>
        <div class="modal-input">
          <label>Project Name:</label><br />
          <input type="text" /><br />
        </div>
        <div class="modal-input">
          <label>Description:</label><br />
          <textarea class="description-textarea"></textarea><br />
        </div>
        <div class="modal-input">
          <label>Upload Picture:</label><br />
          <input type="file" /><br />
        </div>
        <div class="modal-buttons">
          <button class="cancel-button" @click="closeModal">Cancel</button>
          <button class="submit-button" @click="submitForm">Submit</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Swal from "sweetalert2";

/* Script for Modal */
const isModalOpen = ref(false);

const openModal = () => {
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};

const submitForm = () => {
  // Here, you can put your form submission logic

  Swal.fire({
    title: "Submitted!",
    text: "Your project has been updated successfully.",
    icon: "success",
    timer: 1500, 
    showConfirmButton: false, 
    confirmButtonColor: "rgba(205, 171, 100, 1)",
  }).then(() => {
    closeModal();
  });
};


const confirmDelete = () => {
  Swal.fire({
    title: "Are you sure?",
    text: "Are you sure you want to delete?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "rgba(205, 171, 100, 1)",
    cancelButtonColor: "#9fa6b2",
    confirmButtonText: "Confirm",
  }).then((result) => {
    if (result.isConfirmed) {
      deleteProduct();
    }
  });
};

const deleteProduct = () => {
  // Here, you can put your delete logic

  // Show Sweet Alert notification
  Swal.fire({
    title: "Deleted!",
    text: "Your project has been deleted.",
    icon: "success",
    timer: 1500, 
    showConfirmButton: false, 
    confirmButtonColor: "rgba(205, 171, 100, 1)",
    
  });
};
</script>

<style scoped>
/* Edit Project Modal */
.modal {
  display: block;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  overflow: auto;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #1e1e1e;
  font-size: 13px;
  font-family: Poppins, sans-serif;
  font-weight: bold;
  border-bottom: 1px solid #e0e0e0;
  margin-bottom: 15px;
}

.modal-header h1 {
  margin: 0;
}

.modal-content {
  position: relative;
  font-family: Poppins, sans-serif;
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 30%;
  border-bottom: 1px solid #e0e0e0;
}

.close {
  color: #aaa;
  font-size: 28px;
  font-weight: normal;
  padding: 10px;
  transition: color 0.3s ease;
}

.close:hover,
.close:focus {
  color: rgba(205, 171, 100, 1);
  text-decoration: none;
  cursor: pointer;
}

.modal-input {
  margin-bottom: 10px;
}

.modal-buttons {
  border-top: 1px solid #e0e0e0;
}

label {
  font-family: Poppins, sans-serif;
  font-size: 14px;
  font-weight: bold;
  color: #1e1e1e;
}

.description-textarea {
  width: 78%;
  height: 100px;
  min-height: 100px;
  border: 1px solid #ccc;
  margin-top: 5px;
  border-radius: 4px;
}

input[type="text"],
input[type="file"] {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-family: Poppins, sans-serif;
  font-size: 14px;
  margin-bottom: 10px;
  width: 75%;
  margin-top: 5px;
}

input[type="file"] {
  background-color: #f9f9f9;
}

input[type="file"]::-webkit-file-upload-button {
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: transparent;
  padding: 10px;
}

.submit-button {
  padding: 10px 20px;
  background-color: rgba(205, 171, 100, 1);
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-family: Poppins, sans-serif;
  margin-top: 15px;
}

.cancel-button {
  padding: 10px 20px;
  background-color: #9fa6b2;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 10px;
  font-family: Poppins, sans-serif;
  margin-top: 15px;
}

.edit-product-button {
  padding: 10px 20px;
  background-color: rgba(205, 171, 100, 1);
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-family: Poppins, sans-serif;
  margin-right: 10px;
  margin-top: 30px;
  margin-bottom: 20px;
}

.delete-product-button {
  padding: 10px 20px;
  background-color: #dc4c64;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-family: Poppins, sans-serif;
  margin-top: 30px;
  margin-bottom: 20px;
}
</style>