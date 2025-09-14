import {defineStore} from "pinia";
import axios from "axios";
import router from "../router/index.js";
export const useLogin = defineStore("login", {
    state: () => {
        return {
            loginToken: localStorage.getItem("token") || null,
        }
    },
    getters: {
        isAuthenticated: state => !!state.loginToken,
    },
    actions:{
        async login(context){
            let postLogin = await axios.post(`${import.meta.env.VITE_BASE_URL}/Accounts/login`,context)
            if(postLogin.data.token){
                this.loginToken = postLogin.data.token
                localStorage.setItem("token", postLogin.data.token);
                router.push('/')
            }else {
                router.push('/login')
            }
        },
        logout(){
            this.loginToken = null
            localStorage.removeItem("token");
            router.push('/login')
        }
    }
})