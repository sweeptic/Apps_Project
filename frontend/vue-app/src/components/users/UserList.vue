<template>
  <base-container>
    <div>userlist</div>
    <base-search @search="updateSearch" :search-term="enteredSearchTerm" />
    <ul>
      <user-item :key="user.id" v-for="user in availableItems" :id="user.id" :user-name="user.fullName"></user-item>
    </ul>
  </base-container>
</template>

<script>
import BaseContainer from '@/components/UI/BaseContainer.vue';
import BaseSearch from '@/components/UI/BaseSearch.vue';
import UserItem from './UserItem.vue';
import useSearch from '@/hooks/useSearch';
import { toRefs } from 'vue';

export default {
  components: {
    BaseContainer,
    UserItem,
    BaseSearch,
  },
  props: ['users'],
  setup(props) {
    const { users } = toRefs(props);

    const { enteredSearchTerm, availableItems, updateSearch } = useSearch(users, 'fullName');

    return { enteredSearchTerm, updateSearch, availableItems };
  },
};
</script>

<style></style>
