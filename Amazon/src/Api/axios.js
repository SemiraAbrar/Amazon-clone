import axios from 'axios'
const axiosInstance = axios.create({
  // baseURL: "http://127.0.0.1:5001/clone-6336a/us-central1/api",
  baseURL: "https://amazon-api-deploy-n88x.onrender.com",
});
export {axiosInstance}