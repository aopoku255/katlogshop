<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import man from "@/assets/img/man.jpg";
import pizzabox from "@/assets/img/pizzabox.jpg";
import stacked from "@/assets/img/stacked.jpg";
import { RouterLink } from "vue-router";

// Example slides
const slides = [
  {
    image: man,
    text: "Tote Bag",
  },
  {
    image: pizzabox,
    text: "Pizza Boxes",
  },
  {
    image: stacked,
    text: "Carton Boxes",
  },
];

const currentIndex = ref(0);
let intervalId;

onMounted(() => {
  intervalId = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % slides.length;
  }, 3000);
});

onUnmounted(() => {
  clearInterval(intervalId);
});
</script>
<template>
  <div class="grid md:grid-cols-2 mb-8 items-stretch bg-green-50">
    <div class="md:h-screen h-[100vh]">
     
      <slot></slot>
    </div>
    <div class="md:h-[100vh] md:block hidden">
      <div class="relative h-full w-full overflow-hidden rounded">
        <div
          class="absolute top-4 left-4 z-10 text-green-700 px-3 py-1 rounded font-bold text-2xl"
        >
          {{ slides[currentIndex].text }}
        </div>
        <img
          :src="slides[currentIndex].image"
          class="w-full h-full object-cover transition-all duration-700"
          alt="Slider Image"
        />
      </div>
    </div>
  </div>
</template>
