<template>
  <app-navigation />
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppNavigation from '@/components/Navigation.vue';

export default defineComponent({
  components: { AppNavigation },
});
</script>
