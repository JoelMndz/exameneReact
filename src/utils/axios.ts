import axios from "axios";
import { useAutenticacionStore } from "../features/security/stores/autenticacionStore";

const axiosAPI = axios.create({
  baseURL: 'http://localhost:5577'
});

axiosAPI.interceptors.request.use((config) => {
  const token = useAutenticacionStore.getState().token;
  
  if(token){
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${token}`
    } as any;
  }

  return config;
})

export default axiosAPI;