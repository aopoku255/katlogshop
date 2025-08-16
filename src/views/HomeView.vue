<script setup lang="ts">
import Breadcrumb from '@/components/Breadcrumb.vue';
import ProductCard from '@/components/ProductCard.vue';
const crumbs = [
  { label: "Home", to: "/",  },
  { label: "All" }
]
</script>

<template>
  
  <div class="bg-white">
  
    <Breadcrumb
:items="crumbs"
separator="/"
class="mb-4 text-gray-500 dark:text-gray-400"
/>
    <div class="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 class="text-2xl font-semibold tracking-tight text-gray-900">Shop All</h2>
      <p class="md:w-2xl">Browse our full range of custom and stock packaging and marketing materials! Find the right sustainable packaging for your business, and create a brand that’s as strong as your values.</p>

      <div class="mt-6 grid grid-cols-1 gap-x-2 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 items-start">
  <ProductCard />
</div>
    </div>
  </div>
  
</template>

