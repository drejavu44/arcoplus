import { createClient } from "@supabase/supabase-js";
import { v4 as uuidv4 } from "uuid";

// Create a single supabase client for interacting with your database
const supabase = createClient(
  "https://mcjjkqjdijgxngdbsomz.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1jamprcWpkaWpneG5nZGJzb216Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI3MTc1NjksImV4cCI6MjAyODI5MzU2OX0.IaUrbyejMvkbX_t2tpyQNssWpLM_Y4AkSDIc8aQQZgc"
);

const createUserAccount = async (newUser) => {
  const { data, error } = await supabase.auth.signUp({
    email: newUser.email,
    password: newUser.password,
    options: {
      data: { firstName: newUser.firstName, lastName: newUser.lastName },
    },
  });

  return error
    ? { status: 0, errorMessage: error.message }
    : { status: 1, data };
};

const getUserSession = async() => {
  const {data} = await supabase.auth.getSession()

  return data
}

const loginUser = async (email, password) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  return error
    ? { status: 0, errorMessage: error.message }
    : { status: 1, data };
};

const uploadImage = async (imageFile) => {
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

  const path = data.path;

  return { imageUrl, path };
};

const deleteImage = async (filePath) => {
  const { error } = await supabase.storage.from("products").remove(filePath);
  console.log(error);

  return error ? false : true;
};

const addProduct = async (newProduct) => {
  const { name, imageFile } = newProduct;
  let result = {};

  const { imageUrl, path } = await uploadImage(imageFile);

  if (!imageUrl) {
    result = { status: 0, errorMessage: "Unable to upload image file." };
    return result;
  }

  const { data, error } = await supabase
    .from("products")
    .insert({ name, imageUrl, imagePath: path })
    .select();

  error
    ? (result = { status: 0, errorMessage: error.message })
    : (result = { status: 1, data });

  console.log(result);
  return result;
};

const addProject = async (newProject) => {
  let result = {};
  const { imageUrl, path } = await uploadImage(newProject.imageFile);

  if (!imageUrl) {
    result = { status: 0, errorMessage: "unable to upload image file." };
    return result;
  }

  const { data, error } = await supabase
    .from("projects")
    .insert({
      title: newProject.title,
      location: newProject.location,
      imageUrl,
      imagePath: path,
      description: newProject.description,
    })
    .select();
  error
    ? (result = { status: 0, errorMessage: error.message })
    : (result = { status: 1, data });

  return result;
};

const getProducts = async () => {
  const { data } = await supabase.from("products").select();

  return data;
};

const getProjects = async () => {
  const { data } = await supabase.from("projects").select();

  return data;
};

const deleteProduct = async (product) => {
  const imageStorageDeletion = await deleteImage(product.imagePath);
  if (!imageStorageDeletion) {
    return false;
  }

  const { error } = await supabase
    .from("products")
    .delete()
    .eq("id", product.id);

  return !error ? true : false;
};

const deleteProject = async (project) => {
  const imageStorageDeletion = await deleteImage(project.imagePath);

  if (!imageStorageDeletion) {
    return false;
  }

  const { error } = await supabase
    .from("projects")
    .delete()
    .eq("id", project.id);

  return !error ? true : false;
};

const updateProduct = async (updatedProduct) => {
  if (updatedProduct.newImage) {
    console.log("tries to delete the associated image with this product.");
    const currentImageDeletion = await deleteImage(updatedProduct.imagePath);

    if (!currentImageDeletion) {
      return {
        status: 0,
        errorMessage:
          "unable to update the image associated with this product.",
      };
    }

    const uploadUpdatedImage = await uploadImage(updatedProduct.newImage);

    updatedProduct.imageUrl = uploadUpdatedImage.imageUrl;
    updatedProduct.imagePath = uploadUpdatedImage.imagePath;
  }

  const { data, error } = await supabase
    .from("products")
    .update({
      name: updatedProduct.name,
      imagePath: updatedProduct.imagePath,
      imageUrl: updatedProduct.imageUrl,
    })
    .eq("id", updatedProduct.id)
    .select();

  return !error
    ? { status: 1, data: updatedProduct }
    : {
        status: 0,
        errorMessage: `unable to update product with id: ${updatedProduct.id}`,
      };
};

const updateProject = async (updatedProject) => {
  if (updatedProject.newImage) {
    const currentImageDeletion = await deleteImage(updatedProject.imagePath);

    if (!currentImageDeletion) {
      return {
        status: 0,
        errorMessage:
          "unable to update the image associated with this product.",
      };
    }

    const uploadUpdatedImage = await uploadImage(updatedProject.newImage);

    updatedProject.imageUrl = uploadUpdatedImage.imageUrl;
    updatedProject.imagePath = uploadUpdatedImage.imagePath;
  }

  const { data, error } = await supabase
    .from("projects")
    .update({
      title: updatedProject.title,
      description: updatedProject.description,
      location: updatedProject.location,
      imagePath: updatedProject.imagePath,
      imageUrl: updatedProject.imageUrl,
    })
    .eq("id", updatedProject.id)
    .select();

  return !error
    ? { status: 1, data: updatedProject }
    : {
        status: 0,
        errorMessage: `unable to update project with id: ${updatedProject.id}`,
      };
};

export {
  createUserAccount,
  loginUser,
  getProducts,
  addProduct,
  deleteProduct,
  updateProduct,
  addProject,
  getProjects,
  deleteProject,
  updateProject,
  getUserSession
};
