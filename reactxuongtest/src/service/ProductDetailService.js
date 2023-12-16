import axios from "axios";

const BASE_URL = "http://localhost:8080/api/v1/productDetail";

export const fetchingProductDetail = async (id) => {
    try {
        const response = await axios.get(BASE_URL + `/getAllProductDetail/${id}`);
        const data = response.data;
        return data;
    } catch (error) {
        console.log(error);
    }

}