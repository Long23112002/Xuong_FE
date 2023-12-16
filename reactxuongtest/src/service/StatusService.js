import axios from "axios";

const BASE_URL = "http://localhost:8080/api/v1/status";

export const fetchAllStatusName = async () => {
    try {
        const response = await axios.get(BASE_URL + "/getAllStatusName");
        const data = response.data;
        return data;
    } catch (error) {
        console.log(error);
    }
}