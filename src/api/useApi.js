import axios from "axios";
import {useLogin} from "../store/login.js";
const changeApi = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
})

changeApi.interceptors.request.use(config => {
    try {
        const loginStore = useLogin();
        if (loginStore.token){
            config.headers.Authorization = `Bearer ${loginStore.token}`;
        }
        return config;
    }catch(error) {
        console.log(error)
    }

})
export default changeApi