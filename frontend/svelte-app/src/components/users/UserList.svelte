<script>
  // @ts-nocheck

  import BaseSearch from '../UI/BaseSearch.svelte';
  import UserItem from './UserItem.svelte';
  // your script goes here
  /**
   * @type {any}
   */
  export let userData;

  /**
   * @type {any}
   */
  export let onClickHandler;

  const onChangeFilter = (/** @type {{ detail: any; }} */ ev) => (filteredUsers = ev.detail);

  $: filteredUsers = userData || [];
</script>

<div>
  <ul>
    <BaseSearch itemList={userData} on:filteredList={onChangeFilter} filterField={'fullName'} />
    {#each filteredUsers as user (user.id)}
      <div>
        <UserItem {user} {onClickHandler} />
      </div>
    {/each}
  </ul>
</div>
