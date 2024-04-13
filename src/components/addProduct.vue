<script setup>
import { addProduct } from '../supabase/supabase.js';
import { ref } from 'vue';

const props = defineProps({
    updateProductsArray: {
        type: Function,
        required: true
    }
})

const newProduct = ref({})

const handleAddProduct = async () => {
    if(!newProduct.value.imageFile){
        return
    }
    const response = await addProduct(newProduct.value)
    if (response.status === 0) {
        alert("Unable to add product")
        return
    }
    const newlyAddedProduct = response.data[0]
    props.updateProductsArray(newlyAddedProduct)
}

const handleFileInputChange = (event)=> {
    const file = event.target.files[0]
    newProduct.value.imageFile = file
    console.log(newProduct.value.imageFile)
}

</script>
<template>
    <div class="container">
        <label for="productName">Product Name:</label><br>
        <input type="text" id="productName" name="productName" v-model="newProduct.name"><br>
        <label for="imageUrl">Image URL:</label><br>
        <input type="file" id="imageUrl" name="imageUrl" @change="handleFileInputChange"><br><br>
        <button @click="handleAddProduct">Submit</button>
    </div>
</template>
<style scoped>
body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    margin: 0;
    padding: 0;
}

.container {
    max-width: 400px;
    margin: 20px auto;
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

label {
    margin-bottom: 5px;
}

input[type="text"] {
    padding: 8px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

button {
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}
</style>