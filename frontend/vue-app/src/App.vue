<template>
  <main>
    <user-list :users="activeUsers" />
    <projects-list />
  </main>
  <button @click="clickMe">CLICK ME</button>
</template>

<script>
import ProjectsList from './components/projects/ProjectsList.vue';
import UserList from './components/users/UserList.vue';
import USER_DATA from './dummy-data.js';
import { ref, toRef, reactive } from 'vue';

export default {
  components: {
    UserList,
    ProjectsList,
  },

  setup() {
    const clickMe = () => {
      //   console.log('click', refList);
      //   const updated = [...activeUsers];
      // refList_1.value[0].fullName = 'deleted';
      //   refList_2.value[0].fullName = 'deleted';

      //   console.log('refList_3.value', refList_3[1]);

      refList_3[0].fullName = 'deleted';
      //   activeUsers = [];
    };
    // let activeUsers = USER_DATA;

    const refList_1 = toRef(USER_DATA);
    const refList_2 = ref(USER_DATA);
    const refList_3 = reactive(USER_DATA);
    // const refList_4 = toRefs(USER_DATA);
    // console.log('activeUsers', activeUsers);

    console.log('refList_1', refList_1);
    console.log('refList_2', refList_2);
    console.log('refList_3', refList_3);
    // console.log('refList_4', refList_4);

    return { activeUsers: refList_1, clickMe };
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
