import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://gdrive-3.onrender.com", // Replace with your API's base URL
});

export default axiosInstance;
