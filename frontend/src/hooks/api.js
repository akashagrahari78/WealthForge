import axios from "axios";

// Create a base Axios instance
const api = axios.create({
  baseURL: "http://localhost:3000/api" || "https://wealthforge-cpv5.onrender.com/api",
  withCredentials: true, // use if you handle cookies or auth tokens
});

// Optionally: Add interceptors for auth or error handling
api.interceptors.request.use(
  (config) => {
    // Example: attach token if available
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default api;
