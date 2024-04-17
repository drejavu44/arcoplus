<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import { createUserAccount } from "../../supabase/supabase.js"

const email = ref('');
const password = ref('');

const handleSignup = async () => {
    const result = await createUserAccount(email.value,password.value)
    console.log(result)
};
</script>

<template>
    <div id="app" class="signup-container">
        <div class="signup-form">
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" v-model="email" required>
            </div>
            <div class="form-group">
                <label for="password">Password:</label>
                <input type="password" id="password" v-model="password" required>
            </div>
            <button @click="handleSignup">Signup</button>
        </div>
    </div>
</template>

<style scoped>
.signup-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.signup-form {
    max-width: 300px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f9f9f9;
}

.form-group {
    margin-bottom: 15px;
}

label {
    display: block;
    font-weight: bold;
}

input[type="email"],
input[type="password"] {
    width: 93%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 3px;
    margin-right: 50px;
}

button {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: #007bff;
    color: #fff;
    cursor: pointer;
    margin: 10px;
}

button:hover {
    background-color: #0056b3;
}
</style>