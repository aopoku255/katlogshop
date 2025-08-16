<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'

import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()

// Reactive computed to track route changes
const isAuthRoute = computed(() => {
  return route.path === '/signin' || route.path === '/signup'
})
</script>

<template>
  <Navbar v-if="!isAuthRoute" />
  <RouterView />
</template>
