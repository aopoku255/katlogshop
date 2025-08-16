<script setup lang="ts">
import { RouterLink } from 'vue-router';

</script>

<template>
  <!--
    This example requires updating your template:

    ```
    <html class="h-full">
    <body class="h-full">
    ```
  -->
  <main class="grid min-h-full place-items-center bg-[#f4f4f4] px-6 py-24 sm:py-32 lg:px-8">
    <div class="text-center">
      <p class=" font-semibold text-gray-700 text-5xl">404</p>
      <h1 class="mt-4 text-5xl font-semibold tracking-tight text-balance text-gray-700 sm:text-7xl">Page not found</h1>
      <p class="mt-6 text-lg font-medium text-pretty text-gray-700 sm:text-xl/8">Sorry, we couldn’t find the page you’re looking for.</p>
      <div class="mt-10 flex items-center justify-center gap-x-6">
        <RouterLink to="/" class="rounded-md bg-gray-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-graytext-gray-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500">Go back home</RouterLink>
        <a href="#" class="text-sm font-semibold text-gray-700">Contact support <span aria-hidden="true">&rarr;</span></a>
      </div>
    </div>
  </main>
</template>
