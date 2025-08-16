<script setup>
import friescup from "@/assets/img/friescup.png"
import friestray from "@/assets/img/friestray.png"
import paperbag from "@/assets/img/paperbag.png"
import soupcup from "@/assets/img/soupcup.png"
import { RouterLink } from "vue-router"
const products = [
  {
    id: 1,
    name: 'Fries Cup',
    href: '#',
    imageSrc: friescup,
    imageAlt: "Front of men's Basic Tee in black.",
    price: '₵35',
    color: 'Black',
  },
  {
    id: 2,
    name: 'Paper Bag',
    href: '#',
    imageSrc: paperbag,
    imageAlt: "Front of men's Basic Tee in white.",
    price: '₵35',
    color: 'Aspen White',
  },
  {
    id: 3,
    name: 'Soup Cup',
    href: '#',
    imageSrc: soupcup,
    imageAlt: "Front of men's Basic Tee in dark gray.",
    price: '₵35',
    color: 'Charcoal',
  },
  {
    id: 4,
    name: 'Fries Tray',
    href: '#',
    imageSrc: friestray,
    imageAlt: "Front of men's Artwork Tee in peach with white and brown dots forming an isometric cube.",
    price: '₵35',
    color: 'Iso Dots',
  },
]
</script>

<template>
    <div v-for="product in products" :key="product.id" class="group relative shadow-lg p-4 rounded-md">
          <img :src="product.imageSrc" :alt="product.imageAlt" class="aspect-square w-full rounded-md bg-white object-contain group-hover:opacity-75 lg:aspect-auto lg:h-80" />
          <div class="mt-4 flex justify-between">
            <div>
              <h3 class="text-gray-700 text-xl font-bold">
                <RouterLink to="product.href" >
                  <span aria-hidden="true" class="absolute inset-0" />
                  {{ product.name }}
                </RouterLink>
              </h3>
              <p class="mt-1 text-sm text-gray-500">{{ product.color }}</p>
            </div>
            <p class="text-sm font-medium text-gray-900">{{ product.price }}</p>
          </div>
        </div>
</template>