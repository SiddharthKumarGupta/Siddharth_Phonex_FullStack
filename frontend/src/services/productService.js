import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/products/";

export const getProducts = async (category = null) => {
  const response = await axios.get(API_URL, {
    params: category ? { category } : {},
  });

  return response.data;
};