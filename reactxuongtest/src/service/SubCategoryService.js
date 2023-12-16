import axios from "axios";

const BASE_URL = "http://localhost:8080/api/v1/subCategory";

export const fetchSubCategoryName = async () => {

    try {
        const response = await axios.get(BASE_URL + "/getAllSubCategoryName");
        const data = response.data;
        return data;
    } catch (error) {
        console.log(error);
        throw new error("Lỗi Fetching subCategoryName", error);
    }
}