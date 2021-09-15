<template>
  <app-list-widget :programming="programming" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { query, orderBy, getDocs, DocumentData } from 'firebase/firestore';
import AppListWidget from '@/components/ListWidget.vue';
import { programmingSkills } from '@/includes/firebase';
import { ISkills } from '@/interfaces/data';

export default defineComponent({
  components: { AppListWidget },
  name: 'About',
  data() {
    return {
      programming: [] as ISkills[],
    };
  },
  async created() {
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
});
</script>

<style scoped></style>
