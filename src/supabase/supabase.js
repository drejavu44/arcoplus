import { createClient } from "@supabase/supabase-js";
import { v4 as uuidv4 } from "uuid";

// Create a single supabase client for interacting with your database
const supabase = createClient(
  "https://mcjjkqjdijgxngdbsomz.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1jamprcWpkaWpneG5nZGJzb216Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI3MTc1NjksImV4cCI6MjAyODI5MzU2OX0.IaUrbyejMvkbX_t2tpyQNssWpLM_Y4AkSDIc8aQQZgc"
);

const uploadProductImage = async (imageFile) => {
  const file = imageFile;
  const uuid = uuidv4();
  const fileName = `${uuid}_${file.name}`;
  let imageUrl = "";

  const { data, error } = await supabase.storage
    .from("products")
    .upload(fileName, file);

  if (!error) {
    imageUrl = `https://mcjjkqjdijgxngdbsomz.supabase.co/storage/v1/object/public/${data.fullPath}`;
  }

  const path = data.path

  return {imageUrl, path};
};

const deleteProductImage = async(filePath) => {
  const {error} = await supabase.storage.from('products').remove(filePath)

  return error ? false : true
}

const addProduct = async (newProduct) => {
  const { name, imageFile } = newProduct;
  let result = {};

  const {imageUrl, path} = await uploadProductImage(imageFile);

  if (!imageUrl) {
    result = { status: 0, errorMessage: "Unable to upload image file." };
    return result;
  }

  const { data, error } = await supabase
    .from("products")
    .insert({ name, imageUrl, imagePath: path})
    .select();

  error
    ? (result = { status: 0, errorMessage: error.message })
    : (result = { status: 1, data });

    console.log(result)
  return result;
};

const getProducts = async () => {
  const { data } = await supabase.from("products").select();

  return data;
};

const deleteProduct = async (product) => {
  const imageStorageDeletion = await deleteProductImage(product.imagePath)
  if(!imageStorageDeletion){
    return false
  }

  const {error} = await supabase.from('products').delete().eq('id', product.id)

  return !error ? true : false
}

export { getProducts, addProduct, uploadProductImage, deleteProduct };
