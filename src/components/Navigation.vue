<template>
  <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
  <nav class="">
    <div class="max-w-1xl mx-auto px-4">
      <div class="flex justify-between">
        <div class="flex space-x-4 items-center">
          <!-- Website Logo -->
          <div>
            <a href="#" class="flex flex-row items-center py-4 px-2">
              <img src="logo.png" alt="Logo" class="h-20 w-20 mr-2" />
            </a>
          </div>
          <!-- Primary Navbar items -->
          <router-link :to="{ name: 'Home' }" class="py-4 px-2 text-black-500 font-bold"
            >Home</router-link
          >
          <router-link :to="{ name: 'About' }" class="py-4 px-2 text-black-500 font-bold"
            >About</router-link
          >
          <router-link :to="{ name: 'Resume' }" class="py-4 px-2 text-black-500 font-bold"
            >Resume</router-link
          >
        </div>
        <div class="flex space-x-4 items-center py-4 px-2">
          <a href="https://www.linkedin.com/in/sandrabuchen/">
            <i class="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/sandraroz/">
            <i class="fab fa-github-square"></i>
          </a>
          <a href="mailto:s.buchen22@gmail.com">
            <i class="fas fa-envelope-square"></i>
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Navigation',
});
</script>
