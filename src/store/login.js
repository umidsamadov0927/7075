import {defineStore} from "pinia";
import axios from "axios";
import router from "../router/index.js";
import {useToast} from "vue-toastification";
let toasts = useToast();

export const useLogin = defineStore("login", {
    state: () => {
        return {
            token: localStorage.getItem("token") || null,
        }
    },
    getters: {
        isAuthenticated: state => !!state.token,
    },
    actions:{
        async login(context){
            try {
                let postLogin = await axios.post(`${import.meta.env.VITE_BASE_URL}/Accounts/login`,context)
                if(postLogin.data.token){
                    this.token = postLogin.data.token
                    localStorage.setItem("token", postLogin.data.token);
                    router.push('/')
                    toasts.success("login successful");
                }else {
                    router.push('/login')
                }
            }catch(error){
                console.log(error)
                router.push('/login')
                if(error.response){
                    toasts.error("login error")
                }
            }

        },
        logout(){
            this.token = null
            localStorage.removeItem("token");
            router.push('/login')
            toasts.warning("logout successful")
        }
    }
})