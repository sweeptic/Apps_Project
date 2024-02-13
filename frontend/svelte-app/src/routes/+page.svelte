<script>
  // @ts-nocheck

  import ProjectList from './../components/projects/ProjectList.svelte';
  import UserList from '../components/users/UserList.svelte';
  import dummyData from '../data/dummy-data';
  import customUsersStore from '../components/store/app-store';

  /**
   * @type {any[] | undefined}
   */
  let selectedUser;
  let actualUser;
  let updatedUserData;
  $: isLoading = !$customUsersStore.length;

  const onClickHandler = (/** @type {string} */ id) => {
    if (id !== actualUser) {
      selectedUser = updatedUserData.find((user) => user.id === id);
      actualUser = id;
    }
    // @ts-ignore
  };

  setTimeout(() => {
    customUsersStore.setUsers(dummyData);
  }, 1000);

  //   if ($customUsersStore.length > 0) {
  //     const unsubscribe = customUsersStore.subscribe((items) => {
  //       console.log('items', items);
  //     });
  //     unsubscribe();
  //   }

  $: console.log('isLoading', isLoading);

  $: updatedUserData = [...$customUsersStore];
</script>

{#if isLoading}
  <span>Loading...</span>
{:else}
  <section id="user-list">
    <UserList userData={updatedUserData} {onClickHandler} />
    <ProjectList {selectedUser} />
  </section>
{/if}

<!-- <h1>Welcome to SvelteKit</h1> -->
<!-- <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p> -->

<style>
  #user-list {
    display: flex;
    justify-content: space-between;
  }
</style>
