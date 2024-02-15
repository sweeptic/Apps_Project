<template>
  <span v-if="isLoading">loading...</span>
  <main v-else>
    <user-list :users="users" />
    <projects-list :user="selectedUser" />
  </main>
</template>

<script>
import ProjectsList from './components/projects/ProjectsList.vue';
import UserList from './components/users/UserList.vue';
import { provide, ref, computed } from 'vue';
import { useStore } from 'vuex';

export default {
  components: {
    UserList,
    ProjectsList,
  },

  setup() {
    let selectedUser = ref(null);
    const store = useStore();

    const selectUser = (id) => {
      selectedUser.value = users.value.find((userItem) => userItem.id === id);
    };
    provide('selectUser', selectUser);

    store.dispatch('loadUsers');

    const users = computed(function () {
      return store.getters.getUsers;
    });

    const isLoading = computed(() => {
      return !store.getters.getUsers;
    });

    return { selectedUser, users, isLoading };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #0a0e11;
}

main {
  display: flex;
  justify-content: space-between;
}
</style>
