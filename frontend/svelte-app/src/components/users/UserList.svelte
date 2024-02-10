<script>
  import UserItem from './UserItem.svelte';
  // your script goes here
  /**
   * @type {any}
   */
  export let userData;

  console.log('data', userData);
</script>

<div>
  <ul>
    {#each userData as user (user.id)}
      <div>
        <UserItem {user} />
      </div>
    {/each}
  </ul>
</div>
