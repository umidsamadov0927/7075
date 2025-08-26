<template>
  <section class="container mx-auto px-6 py-12">
    <div>
      <div v-if="load" class="flex justify-center items-center mt-[200px]">
        <div class="loader"></div>
      </div>
      <div v-else  class="flex justify-center text-center items-center mb-6">
        <div class="bg-blue-400 text-white p-6 rounded">
          <p class="font-bold text-white text-lg">sarlavha soni: {{ data.pageCount }}</p>
          <p class=" text-white mt-2">id: {{ data.id }}</p>
          <p class=" text-white mt-2">{{ data.publishDate }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

let data = ref({})
let load = ref(true)
let route = useRoute()
let dataId = route.params.id

async function render() {
  try {
    let res = await fetch(`https://fakerestapi.azurewebsites.net/api/v1/Books/${dataId}`)
    let book = await res.json()
    data.value = book
    console.log(book)
    load.value = false
  } catch (error) {
    console.log(error)
  }
}

onMounted(render)
</script>

<style scoped>
/* HTML: <div class="loader"></div> */
.loader {

  width: 50px;
  aspect-ratio: 1;
  display: grid;
  animation: l14 4s infinite;
}

.loader::before,
.loader::after {
  content: "";
  grid-area: 1/1;
  border: 8px solid;
  border-radius: 50%;
  border-color: red red #0000 #0000;
  mix-blend-mode: darken;
  animation: l14 1s infinite linear;
}

.loader::after {
  border-color: #0000 #0000 blue blue;
  animation-direction: reverse;
}

@keyframes l14 {
  100% {
    transform: rotate(1turn)
  }
}
</style>