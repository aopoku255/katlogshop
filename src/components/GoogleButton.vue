<script setup>
import googleLogo from "@/assets/img/google.png";
</script>

<template>
    <button
              type="button"
              class="flex w-full items-center gap-x-2 justify-center rounded-md bg-white px-3 py-1.5 text-sm/6 font-semibold text-gray-900 shadow-sm ring-1 ring-gray-300 hover:bg-gray-50"
            >
              <img class="h-4" :src="googleLogo" alt="" />
              <span>Google</span>
            </button>
</template>