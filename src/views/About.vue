<template>
  <div>
    <ul class="flex items-center space-x-6 justify-center">
      <li :class="programmingStyle" @click="swapSkill('programming')">Programming</li>
      <li :class="techStyle" @click="swapSkill('technology')">Technology</li>
      <li :class="miscStyle" @click="swapSkill('misc')">Miscelaneous</li>
    </ul>

    <transition name="fade">
      <app-list-widget :skills="programming" v-show="onSkill === 'programming'" />
    </transition>
    <transition name="fade">
      <app-list-widget :skills="tech" v-show="onSkill === 'technology'" />
    </transition>

    <transition name="fade">
      <app-list-widget :skills="misc" v-show="onSkill === 'misc'" />
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { query, orderBy, getDocs, DocumentData } from 'firebase/firestore';
import AppListWidget from '@/components/ListWidget.vue';

import { programmingSkills, techSkills, miscSkills } from '@/includes/firebase';
import { ISkills } from '@/interfaces/data';

export default defineComponent({
  components: { AppListWidget },
  name: 'About',
  data() {
    return {
      onSkill: 'programming',
      programmingStyle: 'text-pink-500 border-b-2 border-pink-500',
      miscStyle: 'text-black',
      techStyle: 'text-black',

      programming: [] as ISkills[],
      tech: [] as ISkills[],
      misc: [] as ISkills[],
    };
  },
  async created() {
    // loads default skill view
    await this.loadProgramming();
    await this.loadTech();
    await this.loadMisc();
  },

  methods: {
    async swapSkill(input: string) {
      if (input === 'technology' && this.onSkill !== 'technology') {
        this.onSkill = 'technology';
        this.programmingStyle = 'text-black';
        this.miscStyle = 'text-black';
        this.techStyle = 'text-pink-500 border-b-2 border-pink-500';
        console.log(this.tech);
      } else if (input === 'misc' && this.onSkill !== 'misc') {
        this.onSkill = 'misc';
        this.programmingStyle = 'text-black';
        this.miscStyle = 'text-pink-500 border-b-2 border-pink-500';
        this.techStyle = 'text-black';
        console.log(this.misc);
      } else if (input === 'programming' && this.onSkill !== 'programming') {
        this.onSkill = 'programming';
        this.programmingStyle = 'text-pink-500 border-b-2 border-pink-500';
        this.miscStyle = 'text-black';
        this.techStyle = 'text-black';
        console.log(this.programming);
      }
    },
    async loadProgramming() {
      try {
        const programmingSkillsQuery = query(programmingSkills, orderBy('priority'));
        const querySnapshot = await getDocs(programmingSkillsQuery);
        querySnapshot.forEach((doc: DocumentData) => {
          this.programming.push(doc.data() as ISkills);
        });
      } catch (err) {
        console.error(err);
      }
    },
    async loadTech() {
      try {
        const techSkillsQuery = query(techSkills, orderBy('priority'));
        const querySnapshot = await getDocs(techSkillsQuery);
        querySnapshot.forEach((doc: DocumentData) => {
          this.tech.push(doc.data() as ISkills);
        });
      } catch (err) {
        console.error(err);
      }
    },
    async loadMisc() {
      try {
        const miscSkillsQuery = query(miscSkills, orderBy('priority'));
        const querySnapshot = await getDocs(miscSkillsQuery);
        querySnapshot.forEach((doc: DocumentData) => {
          this.misc.push(doc.data() as ISkills);
        });
      } catch (err) {
        console.error(err);
      }
    },
  },
});
</script>

<style scoped>
.fade-enter-active {
  transition: opacity 1s ease-in-out;
}

.fade-enter-to {
  opacity: 1;
}

.fade-enter {
  opacity: 0;
}
</style>
