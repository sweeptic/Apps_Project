<template>
  <base-container v-if="user">
    <base-search @search="updateSearch" :search-term="enteredSearchTerm" />

    <h2>{{ user.fullName }}</h2>
    <ul v-if="hasProjects">
      <project-item v-for="prj in availableProjects" :key="prj.id" :title="prj.title" />
    </ul>
    <h3 v-else>No projects found.</h3>
  </base-container>
  <base-container v-else>
    <h3>No user selected.</h3>
  </base-container>
</template>

<script>
import { computed, toRefs, watch } from 'vue';
import ProjectItem from './ProjectItem.vue';
import BaseContainer from '@/components/UI/BaseContainer';
import BaseSearch from '@/components/UI/BaseSearch.vue';
import useSearch from '@/hooks/useSearch';

export default {
  components: {
    ProjectItem,
    BaseContainer,
    BaseSearch,
  },

  props: ['user'],

  setup(props) {
    const { user } = toRefs(props);
    const projects = computed(() => user.value?.projects || []);
    const hasProjects = computed(() => !!projects.value.length);

    watch(user, () => {
      console.log('user changed', user);
      updateSearch('');
    });

    const { enteredSearchTerm, availableItems, updateSearch } = useSearch(projects, 'title');

    return { projects, hasProjects, availableProjects: availableItems, updateSearch, enteredSearchTerm };
  },
};
</script>

<style></style>
