<script setup>
import { computed } from "vue"
import { RouterLink } from "vue-router"

const props = defineProps({
  items: {
    type: Array,
    required: true,
    // example: [{ label: "Home", to: "/" }, { label: "Shop", to: "/shop" }, { label: "Packaging" }]
  },
  separator: {
    type: String,
    default: "/" // could be ">", "›", "→" etc.
  }
})

const normalized = computed(() => {
  // Mark the last item as current if it lacks "to"
  const arr = props.items.map((it) => ({ ...it }))
  const last = arr[arr.length - 1]
  if (last && !("to" in last)) last.current = true
  return arr
})
</script>

<template>
  <nav class="w-full px-6" aria-label="Breadcrumb">
    <ol class="flex items-center gap-2 text-sm text-gray-500">
      <li v-for="(item, idx) in normalized" :key="idx" class="inline-flex items-center gap-2">
        <!-- Link or current label -->
        <template v-if="item.to && !item.current">
          <RouterLink
            :to="item.to"
            class="inline-flex items-center gap-1 hover:text-gray-900 transition-colors"
          >
            <component
              v-if="item.icon"
              :is="item.icon"
              class="size-4 shrink-0"
              aria-hidden="true"
            />
            <span class="max-w-[12ch] sm:max-w-none truncate">{{ item.label }}</span>
          </RouterLink>
        </template>
        <template v-else>
          <span
            class="inline-flex items-center gap-1 text-gray-900 font-medium"
            aria-current="page"
          >
            <component
              v-if="item.icon"
              :is="item.icon"
              class="size-4 shrink-0"
              aria-hidden="true"
            />
            <span class="max-w-[12ch] sm:max-w-none truncate">{{ item.label }}</span>
          </span>
        </template>

        <!-- Separator (hide after last) -->
        <span
          v-if="idx < normalized.length - 1"
          class="select-none text-gray-300"
          aria-hidden="true"
        >
          {{ separator }}
        </span>
      </li>
    </ol>
  </nav>
</template>
