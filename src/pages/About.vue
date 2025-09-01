<template>

  <swiper
      :slides-per-view="3"
      :space-between="30"
      :autoplay="{ delay: 800, disableOnInteraction: false }"
      :loop="true"
      :free-mode="true"
      :pagination="{ clickable: true }"
      :modules="modules"
      class="mySwiper"
  >
    <swiper-slide><div class="h-[400px] bg-blue-500"></div></swiper-slide>
    <swiper-slide><div class="bg-yellow-400 h-[400px]"></div></swiper-slide>
    <swiper-slide><div class="bg-red-500 h-[400px]"></div></swiper-slide>
    <swiper-slide><div class="bg-pink-500 h-[400px]"></div></swiper-slide>
    <swiper-slide><div class="bg-black h-[400px]"></div></swiper-slide>
    <swiper-slide><div class="bg-orange-400 h-[400px]"></div></swiper-slide>
    <swiper-slide><div class="bg-[#56445D] h-[400px]"></div></swiper-slide>
    <swiper-slide><div class="bg-[#C3C3E6] h-[400px]"></div></swiper-slide>
    <swiper-slide><div class="bg-[#87255B] h-[400px]"></div></swiper-slide>
  </swiper>

  <div class="max-w-[600px] mx-auto mt-10">
    <canvas ref="chartCanvas"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";


import { Chart, registerables } from "chart.js";

const modules = [FreeMode, Pagination, Autoplay];


const chartCanvas = ref(null);

onMounted(() => {

  Chart.register(...registerables);

  const data = {
    labels: ["January", "February", "March", "April"],
    datasets: [
      {
        type: "bar",
        label: "Bar Dataset",
        data: [38, 20, 30, 40],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
      },
      {
        type: "line",
        label: "Line Dataset",
        data: [5, 35, 10, 50],
        fill: false,
        borderColor: "rgb(54, 162, 235)",
      },
    ],
  };

  const config = {
    type: "scatter",
    data: data,
    options: {
      responsive: true,
      scales: {
        y: { beginAtZero: true },
      },
    },
  };

  new Chart(chartCanvas.value, config);
});
</script>
