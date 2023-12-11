import axios from "axios";
const BASE_URL = "http://localhost:8080/api/v1/product";

export const fetchProducts = async () => {
  try {
    const response = await axios.get(BASE_URL + "/getAllProductNamePage");
    const data = response.data;
    return data;
  } catch (error) {
    console.log(error);
    throw error("Lỗi Fetching product", error);
  }
};

