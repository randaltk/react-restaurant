import axios from "axios";

const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}/default/get-integration`,
  headers: { "content-type": "multipart/form-data" },
});

export default api;
