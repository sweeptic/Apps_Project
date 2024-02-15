<script>
  import ProjectList from './../components/projects/ProjectList.svelte';
  import UserList from '../components/users/UserList.svelte';
  import dummyData from '../data/dummy-data';
  import customUsersStore from '../components/store/app-store';

  let selectedUser;
  let actualUser;
  let updatedUserData;
  $: isLoading = !$customUsersStore.length;

  const onClickHandler = (id) => {
    if (id !== actualUser) {
      selectedUser = updatedUserData.find((user) => user.id === id);
      actualUser = id;
    }
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

  $: updatedUserData = [...$customUsersStore];
</script>

{#if isLoading}
  <span>Loading...</span>
{:else}
  <main id="main">
    <UserList userData={updatedUserData} {onClickHandler} />

    <ProjectList {selectedUser} />
  </main>
{/if}

<!-- <h1>Welcome to SvelteKit</h1> -->
<!-- <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p> -->

<style>
  #main {
    display: flex;
    justify-content: space-between;
  }
</style>
