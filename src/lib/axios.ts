import axios from "axios";

export const apiClient = axios.create({
    baseURL: process.env.API_URL,
    headers: {
    'Content-Type': 'application/json',
    // Add any default headers here
    // 'Authorization': `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
  },
})

apiClient.interceptors.request.use(
    (config) => {
    // You can modify request config before sending
    // For example, add authentication token
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
)

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // Centralized error handling
    console.error('API Error:', error);
    return Promise.reject(error);
  }
);