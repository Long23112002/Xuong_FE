import axios from 'axios';

const BASE_URL = "http://localhost:8080/api/v1/brand";

export const fetchAllBrandName = async () => {
    try {
        const response = await axios.get(BASE_URL + "/getAllBrandName");
        const data = response.data;
        return data;
    } catch (error) {
        console.log(error);
    }
}
