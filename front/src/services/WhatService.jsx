
import axios from 'axios';

const baseUrl = 'http://localhost:8000/api';

const axiosInstance = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json',
  }
});

export const sendMessage = async (formData) => {
  try {
    const response = await axiosInstance.post('/send-message', formData);
    return response.data;
  } catch (error) {
    throw error;
  }
};