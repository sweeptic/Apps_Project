<template>
  <main>
    <user-list :users="activeUsers" />
    <projects-list :user="selectedUser" />
  </main>
</template>

<script>
import ProjectsList from './components/projects/ProjectsList.vue';
import UserList from './components/users/UserList.vue';
import USER_DATA from './dummy-data.js';
import { provide, ref } from 'vue';

export default {
  components: {
    UserList,
    ProjectsList,
  },

  setup() {
    let selectedUser = ref(null);
    const activeUsers = USER_DATA;

    const selectUser = (id) => {
      selectedUser.value = activeUsers.find((userItem) => userItem.id === id);
    };
    provide('selectUser', selectUser);

    return { activeUsers, selectedUser };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

main {
  display: flex;
  justify-content: space-between;
}
</style>
