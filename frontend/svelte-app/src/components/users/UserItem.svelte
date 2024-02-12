<script>
  /**
   * @type {{ fullName: any; id:any }}
   */
  export let user;
  /**
   * @type {any}
   */
  export let onClickHandler;
</script>

<li>
  <h3>{user.fullName}</h3>
  <button on:click={onClickHandler(user.id)}>Select</button>
</li>
