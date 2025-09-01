<template>
  <form @submit.prevent="handleSubmit">
    <div class="w-[600px] max-w-7xl mx-auto mt-[20px] grid grid-cols-2 gap-3">
      <input v-model="title" type="text" class="placeholder:text-green-500 border border-black py-1 rounded-[4px] px-2 outline-none" placeholder="Enter name" required>
      <input v-model="description" type="text" class="placeholder:text-green-500 border border-black py-1 rounded-[4px] px-2 outline-none" placeholder="Enter description" required>
      <input v-model="image_url" type="text" class="placeholder:text-green-500 border border-black py-1 rounded-[4px] px-2 outline-none" placeholder="Enter photo urls" required>
      <button class="w-[295px] bg-green-500 rounded-[4px] focus:scale-95" type="submit">{{ editingId ? "Update" : "Enter" }}</button>
    </div>
  </form>
  <div v-if="load" class="flex justify-center items-center mt-[150px]">
    <div class="loader"></div>
  </div>
  <div v-else class="w-[250px] mx-auto mt-6">
    <div v-for="(item, index) in data" :key="index" class="border p-3 text-center mb-6 rounded shadow-md bg-white">
      <h2>Name: {{item.title}}</h2>
      <p>Title: {{item.description}}</p>
      <img v-if="item.image_url" :src="item.image_url" alt="image_url" class="w-full m-auto w-[180px] object-cover mt-2 rounded">
      <button class="mt-2 px-3 py-1 bg-red-500 text-white rounded" @click="deletePost(item.id)">delete</button>
      <button @click="startEdit(item)" class="mt-2 ml-2 px-3 py-1 bg-blue-500 text-white rounded">Edit</button>
    </div>
  </div>
</template>
<script setup>
import {onMounted, ref} from "vue";
let data = ref([])
let load = ref(true)

let title = ref("")
let description = ref("")
let image_url = ref("")
let editingId = ref(null);

async function render() {
  try {
    let res = await fetch("https://effective-mobile.duckdns.org/api/ads/",{
      method: "GET"
    })
    let books = await res.json()
    data.value = books.results;
    console.log(books)
    load.value = false;
  }catch (error) {
    console.log(error)
  }
}

//bu edit qilingan payti yangi card qushmasligi uchun
async function handleSubmit() {
  if (editingId.value) {
    await updatePost(editingId.value);
  } else {
    await addPost();
  }
}

// post
async function addPost () {
  try {
    let res = await fetch("https://effective-mobile.duckdns.org/api/ads/",{
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: title.value,
        description: description.value,
        image_url: image_url.value,
        category: "home",
        condition: "used"
      })
    })
    let result = await res.json()
    console.log(result)
    render()
    title.value = "";
    description.value = "";
    image_url.value = "";
  }catch (error) {
    console.log(error)
  }
}

//delete
async function deletePost(id) {
  try {
    let res = await fetch(`https://effective-mobile.duckdns.org/api/ads/${id}/`,{
      method: "DELETE",
    })
    if (res.ok) {
      data.value = data.value.filter((item) => item.id !== id)
      console.log(id)
    }else {
      console.log(res.status)
    }
  }catch (error) {
    console.log(error)
  }
}
function startEdit(item) {
  title.value = item.title;
  description.value = item.description;
  image_url.value = item.image_url;
  editingId.value = item.id;
}

//put , patch | update

async function updatePost(id) {
  try {
    let res = await fetch(`https://effective-mobile.duckdns.org/api/ads/${id}/`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: title.value,
        description: description.value,
        image_url: image_url.value,
        category: "home",
        condition: "used",
      }),
    });
    await res.json();
    await render();
    resetForm();
  } catch (error) {
    console.log(error);
  }
}
function resetForm() {
  title.value = "";
  description.value = "";
  image_url.value = "";
  editingId.value = null;
}

onMounted(()=>{
  render()
})
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
@keyframes l14{
  100%{transform: rotate(1turn)}
}
</style>