<template>
  <div class="flex flex-wrap justify-center">
    <div v-for="skill in skills" :key="skill">
      <div class="p-3">
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
          <img :src="`icons/${skill.icon}`" :alt="skill.name" />
          <div class="px-6 py-4 bg-white">
            <div class="font-bold text-xl mb-2">{{ skill.name }}</div>
            <p class="text-gray-700 text-base">
              {{ skill.description }}
            </p>
          </div>
          <!-- Links -->
          <div class="flex flex-wrap px-6 pt-4 pb-2 bg-white">
            <div v-for="link in skill.links" :key="link">
              <a :href="link.link">
                <span :class="bubbleStyle">{{ link.name }}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ListWidget',
  props: ['skills'],
  data() {
    return {
      bubbleStyle:
        'inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2',
    };
  },
});
</script>

<style scoped>
img {
  width: 512px;
}
</style>
