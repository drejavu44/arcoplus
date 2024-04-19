<script setup>
import { getProducts, deleteProduct } from "../../supabase/supabase";
import { ref, onMounted } from "vue";
import AddProduct from "../../components/addProduct.vue";
import Navbar from "../../components/navbar.vue";
import Footer from "../../components/footer.vue";
import EditProductModal from "../../components/editProductModal.vue";
import Swal from "sweetalert2";

const products = ref([]);
const selectedProduct = ref({});
const showEditProductModal = ref(false);

const handleGetProducts = async () => {
  products.value = await getProducts();
};

const handleDeleteProduct = async (product) => {
  const isDeletionSuccessful = await deleteProduct(product);

  isDeletionSuccessful
    ? Swal.fire({
        title: "Deleted!",
        text: "Your product has been deleted.",
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
        confirmButtonColor: "rgba(205, 171, 100, 1)",
      })
    : Swal.fire({
        title: "Deletion Failed.",
        text: "Your project has been deleted.",
        icon: "error",
        timer: 1500,
        showConfirmButton: false,
        confirmButtonColor: "rgba(205, 171, 100, 1)",
      });

  products.value = products.value.filter((prod) => prod.id !== product.id);
};

const showEditProduct = (product) => {
  selectedProduct.value = product;
  showEditProductModal.value = true;
  console.log(selectedProduct.value);
};

const hideEditProduct = () => {
  selectedProduct.value = {};
  showEditProductModal.value = false;
};

const updateProductsArray = (newProduct) => {
  products.value = [...products.value, newProduct];
};

const updateProductValue = (updatedProduct) => {
  products.value = products.value.map((product) =>
    product.id === updatedProduct.id ? updatedProduct : product
  );
};

onMounted(() => {
  handleGetProducts();
});
</script>
<template>
  <Navbar />
  <AddProduct :updateProductsArray="updateProductsArray" />
  <EditProductModal
    v-if="showEditProductModal"
    :hideEditProduct="hideEditProduct"
    :selectedProduct="selectedProduct"
    :updateProductValue="updateProductValue"
  />
  <div class="products-container">
    <div class="products" v-for="product in products" :key="product.id">
      <div class="image-container">
        <img :src="product.imageUrl" alt="Product Image" />
      </div>
      <div class="products-content">
        <h2 :class="{ 'break-line': product.name.length > 20 }">
          {{ product.name }}
        </h2>
        <div class="button-container">
          <button class="edit-button" @click.stop="showEditProduct(product)">
            <i class="fas fa-edit"></i> Edit
          </button>
          <button
            class="delete-button"
            @click.stop="handleDeleteProduct(product)"
          >
            <i class="fas fa-trash-alt"></i> Delete
          </button>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<style scoped>
.products-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  font-family: Poppins, sans-serif;
  padding: 40px;
}

.products {
  width: 300px;
  height: 320px;
  overflow: hidden;
  margin-right: 30px;
  margin-bottom: 35px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
  position: relative;
  transition: transform 0.3s ease;
  background-color: #1e1e1e;
}

.products:hover {
  transform: scale(1.1);
}

.image-container {
  height: 200px;
  overflow: hidden;
}

.products img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.products-content {
  padding: 10px;
}

.products-content h2 {
  font-weight: bold;
  margin: 0;
  word-wrap: break-word;
  font-size: 16px;
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
