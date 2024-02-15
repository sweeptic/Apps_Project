<script>
  import BaseContainer from '../UI/BaseContainer.svelte';
  import BaseSearch from '../UI/BaseSearch.svelte';
  import UserItem from './UserItem.svelte';

  export let userData;

  export let onClickHandler;

  const onChangeFilter = (ev) => (filteredUsers = ev.detail);

  $: filteredUsers = userData || [];
</script>

<BaseContainer>
  <ul>
    <BaseSearch itemList={userData} on:filteredList={onChangeFilter} filterField={'fullName'} />
    {#each filteredUsers as user (user.id)}
      <div>
        <UserItem {user} {onClickHandler} />
      </div>
    {/each}
  </ul>
</BaseContainer>
