<script setup>
import AuthView from "@/components/AuthView.vue";
import logo from "@/assets/logo.png";
import TextFieldInput from "@/components/TextFieldInput.vue";
import Button from "@/components/Button.vue";
import GoogleButton from "@/components/GoogleButton.vue";
import ContinueWith from "@/components/ContinueWith.vue";
</script>
<template>
  <AuthView>
    <div class=" p-4 rounded">
      <div class="">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm mt-4">
          <RouterLink to="/">
            <img class="mx-auto h-10 w-auto" :src="logo" alt="Your Company" />
          </RouterLink>
          <h2
            class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-green-700"
          >
            Create an account
          </h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form @submit.prevent="" class="space-y-6" action="#" method="POST">
            <TextFieldInput :required="true" />
            <TextFieldInput
              label="Password"
              name="password"
              type="password"
              id="password"
              autocomplete="current-password"
              :required="true"
            />

            <Button type="submit" label="Sign up" />
          </form>

          <ContinueWith />

          <div class="mt-4">
            <GoogleButton />
          </div>
          <p class="text-gray-500 mt-2 text-center">
            Already have an account?
            <RouterLink to="/signin" class="text-green-700 font-semibold"
              >Sign In</RouterLink
            >
          </p>
        </div>
      </div>
    </div>
  </AuthView>
</template>
