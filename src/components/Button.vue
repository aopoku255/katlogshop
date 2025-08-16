<script setup>
import { defineProps } from 'vue';
defineProps({
    label: {
        type: String,
        default: "Sign in"
    },
    type: {
        type: String,
        default: "button"
    }
})
</script>

<template>
    <div>
        <button :type="type"
            class="flex w-full justify-center rounded-md bg-green-700 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-green-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500">
            {{ label }}
        </button>
    </div>
</template>