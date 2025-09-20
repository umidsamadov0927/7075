<template>
  <h1>api</h1>
  <pre>{{response}}</pre>
</template>
<script setup>
import changeApi from "../api/useApi.js";
import {onMounted, ref} from "vue";
// import {useLogin} from "../store/login.js";
// const renderLogin = useLogin();
const response = ref([])

async function renderApi() {
  try {
    const render = await changeApi.get(`/Leads`,{
      // headers:{
      //   authorization: `Bearer ${renderLogin.token}`,
      // }
    })
    response.value = render.data;
  }catch(err) {
    console.error("API xatosi:", err);
  }

}
onMounted(()=>{
  renderApi();
})
</script>