import axios from 'axios';
const axiosInstance = axios.create({
  //baseURL: "http://localhost:3000/api/users",
  baseURL: "https://checkoutform.onrender.com/api/users"

 
  });
  export default axiosInstance
  