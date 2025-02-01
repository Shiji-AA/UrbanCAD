import axios from "axios"

const axiosInstance = axios.create({
      baseURL:`${import.meta.env.VITE_PUBLIC_API_URL}/api/users`

});
const axiosInstanceAdmin = axios.create({
    baseURL:`${import.meta.env.VITE_PUBLIC_API_URL}/api/admin`
  
})





export { axiosInstance,axiosInstanceAdmin};