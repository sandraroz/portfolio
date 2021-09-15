<template>
  <particles id="tsparticles" :options="particlesOptions" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { particlesOptions } from '@/assets/particlesOptions';

export default defineComponent({
  name: 'Background',
  data() {
    return {
      particlesOptions,
    };
  },
});
</script>
