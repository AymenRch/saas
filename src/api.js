// src/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000", // Your backend
  withCredentials: true // Important: send/receive cookies
});

export default api;
