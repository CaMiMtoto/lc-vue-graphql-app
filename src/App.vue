<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from "./components/HelloWorld.vue";
import { onMounted, ref } from "vue";
</script>

<template>
  <h1>Hello App!</h1>
  <div
    class="flex space-x-2 items-center text-center w-full h-10 justify-center"
  >
    <router-link class="text-gray-500" to="/">Go to Home</router-link>
    <router-link class="text-gray-500" to="/about">Go to About</router-link>
  </div>
  <!-- route outlet -->
  <!-- component matched by the route will render here -->
  <router-view></router-view>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
