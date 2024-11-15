import axios from "axios";

const api = axios.create({
  baseURL: "http://api.example.com",
  timeout: 10000,
});

export default api;
