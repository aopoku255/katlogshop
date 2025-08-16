<script setup>
import { defineProps } from "vue";
const props = defineProps({
    label: {
        type: String,
        default: "Email address",
    },
    type: {
        type: String,
        default: "email",
    },
    name: {
        type: String,
        default: "email",
    },
    id: {
        type: String,
        default: "email",
    },
    autocomplete: {
        type: String,
        default: "email",
    },
    required: {
        type: Boolean,
        default: false,
    },
    isPasswordInput: {
        type: Boolean,
        default: false,
    },
});
</script>

<template>
    <div>
        <div class="flex items-center justify-between">
            <label for="password" class="block text-sm/6 font-medium text-green-900">{{ props.label }}</label>
            <div class="text-sm" v-if="props.isPasswordInput">
                <a href="#" class="font-semibold text-green-700 hover:text-green-900">Forgot password?</a>
            </div>
        </div>
        <div class="mt-2">
            <input :type="props.type" :name="props.name" :id="props.id" :autocomplete="props.autocomplete"
                :required="props.required"
                class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-green-700 outline-1 -outline-offset-1 outline-green-900 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-green-900 sm:text-sm/6" />
        </div>
    </div>
</template>
