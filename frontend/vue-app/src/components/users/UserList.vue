<template>
  <base-container>
    <div>userlist</div>
    <ul>
      <user-item :key="user.id" v-for="user in users_" :user-name="user.fullName" :user="user"></user-item>
    </ul>
  </base-container>
</template>

<script>
import BaseContainer from '../UI/BaseContainer';
import UserItem from './UserItem.vue';
import { toRefs, ref, toRef } from 'vue';

export default {
  components: {
    BaseContainer,
    UserItem,
  },
  props: ['users'],
  setup(props) {
    const { users } = toRefs(props);
    const usersAlias = toRef(users);
    const refitem = ref(users);
    const item = users;

    console.log('users', users);
    console.log('refitem', refitem);
    console.log('usersAlias', usersAlias);

    console.log('item', item);
    console.log('prop item');

    // const displayedItems = computed(function () {
    //   return users;
    // });
    // console.log('users', users.value);
    // const availableItems = computed(function () {
    //   return users;
    // });
    // const { users } = toRefs(props);
    // console.log('users', users);
    // console.log('availableItems', availableItems);
    return { users_: refitem };
  },
};
</script>

<style></style>
