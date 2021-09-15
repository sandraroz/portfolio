<template>
  <!-- Background Container -->
  <app-background />
  <!-- Main container -->
  <div id="main">
    <app-navigation />

    <router-view v-slot="{ Component }">
      <!-- Ghost component used to load components dynamically -->
      <transition name="fade" mode="out-in">
        <component :is="Component"></component>
      </transition>
    </router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppNavigation from '@/components/Navigation.vue';
import AppBackground from '@/components/Background.vue';

export default defineComponent({
  components: { AppNavigation, AppBackground },
});
</script>

<style>
.fade-enter-from {
  opacity: 0;
}
.fade-enter-active {
  transition: all 0.5s linear;
}
.fade-leave-to {
  transition: all 0.5s linear;
  opacity: 0;
}
</style>
