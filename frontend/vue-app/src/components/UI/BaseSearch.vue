<template>
  <input type="search" @input="search" :value="searchTermFromProps" />
</template>

<script>
import { toRefs } from 'vue';

export default {
  props: ['searchTerm'],
  setup(props, ctx) {
    const { searchTerm: searchTermAlias } = toRefs(props);

    const search = (event) => ctx.emit('search', event.target.value);

    return { search, searchTermFromProps: searchTermAlias };
  },
};
</script>
