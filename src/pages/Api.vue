<template>
  <h1>api</h1>
  <pre>{{store.data}}</pre>
</template>
<script setup>
import {useCounterStore} from "../store/fetchAds.js";
let store = useCounterStore();
import {onMounted} from "vue";
onMounted(()=>{
  store.render()
})
</script>