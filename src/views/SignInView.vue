<script setup>
import AuthView from "@/components/AuthView.vue";
import logo from "@/assets/logo.png";
import TextFieldInput from "@/components/TextFieldInput.vue";
import Button from "@/components/Button.vue";
import GoogleButton from "@/components/GoogleButton.vue";
import ContinueWith from "@/components/ContinueWith.vue";
import { RouterLink } from "vue-router";
</script>
<template>
  <AuthView>
    <div class="p-4 rounded">
      <div class="">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm mt-4">
          <RouterLink to="/">

              <img class="mx-auto h-10 w-auto" :src="logo" alt="Your Company" />
          </RouterLink>
          <h2
            class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-green-700"
          >
            Sign in to your account
          </h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form @submit.prevent="" class="space-y-6">
            <TextFieldInput :required="true" />

            <TextFieldInput
              label="Password"
              name="password"
              type="password"
              id="password"
              autocomplete="current-password"
              :required="true"
              :isPasswordInput="true"
            />

            <Button type="submit" />
          </form>

          <ContinueWith />

          <div class="mt-4">
            <GoogleButton />
          </div>
          <p class="text-gray-500 mt-2 text-center">Don't have an account? <RouterLink to="/signup" class="text-green-700 font-semibold">Sign Up</RouterLink></p>
        </div>
    </div>
    </div>
  </AuthView>
</template>
