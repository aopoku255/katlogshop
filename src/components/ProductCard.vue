<script setup>
import friescup from "@/assets/img/friescup.png";
import friestray from "@/assets/img/friestray.png";
import paperbag from "@/assets/img/paperbag.png";
import soupcup from "@/assets/img/soupcup.png";
import { RouterLink } from "vue-router";

const products = [
  {
    id: 1,
    name: "Fries Cup",
    href: "fries-cup",
    imageSrc: friescup,
    imageAlt: "Front of men's Basic Tee in black.",
    price: "₵35",
    badges: ["New", "Eco Friendly"],
  },
  {
    id: 2,
    name: "Paper Bag",
    href: "paper-bag",
    imageSrc: paperbag,
    imageAlt: "Front of men's Basic Tee in white.",
    price: "₵35",
    badges: ["Hot Sale"],
  },
  {
    id: 3,
    name: "Soup Cup",
    href: "soup-cup",
    imageSrc: soupcup,
    imageAlt: "Front of men's Basic Tee in dark gray.",
    price: "₵35",
    badges: ["Best Seller", "Limited"],
  },
  {
    id: 4,
    name: "Fries Tray",
    href: "fries-tray",
    imageSrc: friestray,
    imageAlt:
      "Front of men's Artwork Tee in peach with white and brown dots forming an isometric cube.",
    price: "₵35",
    badges: ["New Arrival"],
  },
];
</script>

<template>

  <RouterLink
  v-for="product in products"
  :key="product.id"
  class="group relative shadow-md rounded-3xl p-4 flex flex-col justify-between transition-all duration-300"
  to="/product/go"
  >
    <!-- Image -->
    <div class="overflow-hidden rounded-md">
      <img
        :src="product.imageSrc"
        :alt="product.imageAlt"
        class="aspect-square w-full rounded-md bg-white object-contain transition-transform duration-500 group-hover:scale-110 lg:aspect-auto lg:h-80"
      />
    </div>

    <!-- Content -->
    <div class="flex-1">
      <p class="text-sm flex items-center gap-2">
        <span>Min. 250 Units</span>
        <span class="w-1 h-1 bg-gray-900 inline-block rounded-full"></span>
        <span>Delivery: 3 - 5 days</span>
      </p>
      <h3 class="text-gray-700 text-xl font-semibold mt-2">
        <RouterLink :to="`/product/${product.href}`">
          <span aria-hidden="true" class="absolute inset-0" />
          {{ product.name }}
        </RouterLink>
      </h3>
      <p class="text-sm font-medium text-gray-700">
        from
        <span class="text-gray-900 group-hover:text-green-700">{{
          product.price
        }}</span>
        <span class="group-hover:text-green-700">per unit</span>
      </p>
    </div>

    <!-- Badges (toggle expand on hover) -->
    <div
      class="mt-3 overflow-hidden max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-500 ease-in-out"
    >
      <div class="flex flex-wrap gap-2 mt-2">
        <span
          v-for="(badge, index) in product.badges"
          :key="index"
          class="items-center rounded-full bg-gray-400/10 px-3 py-1 text-xs font-medium text-gray-500 inset-ring inset-ring-gray-400/20"
        >
          {{ badge }}
        </span>
      </div>
    </div>
  </RouterLink>
</template>
