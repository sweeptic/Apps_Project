<template>
  <li>
    <h3>
      <span>{{ userName }}</span>
      <br />
    </h3>
    <button @click="viewProjects(id)">View Projects</button>
  </li>
</template>

<script>
import { inject } from 'vue';

export default {
  props: ['id', 'userName'],

  setup() {
    const viewProjects = inject('selectUser');

    return { viewProjects };
  },
};
</script>
