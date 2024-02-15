<script>
  export let user;
  export let onClickHandler;
</script>

<li>
  <h3>{user.fullName}</h3>
  <button on:click={onClickHandler(user.id)}>Select</button>
</li>
