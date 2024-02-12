<script>
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

  console.log('data', userData);
</script>

<div>
  <ul>
    {#each userData as user (user.id)}
      <div>
        <UserItem {user} {onClickHandler} />
      </div>
    {/each}
  </ul>
</div>
