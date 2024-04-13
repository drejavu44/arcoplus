import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabase = createClient(
  "https://mcjjkqjdijgxngdbsomz.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1jamprcWpkaWpneG5nZGJzb216Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI3MTc1NjksImV4cCI6MjAyODI5MzU2OX0.IaUrbyejMvkbX_t2tpyQNssWpLM_Y4AkSDIc8aQQZgc"
);

 const getProducts = async () => {
  const { data } = await supabase.from("products").select();

  return data;
};

 const addProduct = async (newProduct) => {
  const { name, imageURL } = newProduct;
  const response = {};

  const { data, error } = await supabase
    .from("products")
    .insert({ name, imageURL })
    .select("");

  error
    ? (response = { status: 0, errorMessage: error.message })
    : (response = { status: 1, data });

  return response;
};

export {
  getProducts,
  addProduct
}

