<script setup>
import { addProduct } from "../supabase/supabase.js";
import { ref } from "vue";
import Swal from "sweetalert2";

const props = defineProps({
  updateProductsArray: {
    type: Function,
    required: true,
  },
});

const newProduct = ref({});

const handleAddProduct = async () => {
  if (!newProduct.value.imageFile) {
    return;
  }
  const response = await addProduct(newProduct.value);
  if (response.status === 0) {
    alert(response.errorMessage);
    return;
  }
  const newlyAddedProduct = response.data[0];
  props.updateProductsArray(newlyAddedProduct);
  Swal.fire({
    title: "Success!",
    text: `${newProduct.value.name} has been added successfully.`,
    icon: "success",
    timer: 1500,
    showConfirmButton: false,
    confirmButtonColor: "rgba(205, 171, 100, 1)",
  });
  newProduct.value = {};
  document.getElementById("imageUrl").value = "";
};

const handleFileInputChange = (event) => {
  const file = event.target.files[0];
  newProduct.value.imageFile = file;
  console.log(newProduct.value.imageFile);
};
</script>
<template>
  <div class="mp-background">
    <div class="container">
      <div class="mp-header">
        <h1>Manage Products</h1>
        <p>
          Add, edit, or delete products that are currently visible to the user
          on the homepage.
        </p>
      </div>

      <div class="input-group">
        <label for="productName">Product Name:</label><br />
        <input
          type="text"
          id="productName"
          name="productName"
          v-model="newProduct.name"
        />
      </div>

      <div class="input-group">
        <label for="imageUrl">Image URL:</label><br />
        <input
          type="file"
          id="imageUrl"
          name="imageUrl"
          @change="handleFileInputChange"
        />
      </div>
      <div class="mp-button">
        <div class="input-group">
          <button @click="handleAddProduct">Submit</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.mp-background {
  background-image: url("../assets/pd-bg2.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  margin-top: 50px;
  width: 90%;
  background-color: rgba(38, 38, 38, 0.568);
  padding: 30px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
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
.input-group input[type="file"] {
  padding: 10px;
  border: 1px solid #e0e0e026;
  border-radius: 4px;
  font-family: Poppins, sans-serif;
  font-size: 14px;
  margin-bottom: 10px;
  width: 98%;
  margin-top: 5px;
}

.input-group input[type="file"] {
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
