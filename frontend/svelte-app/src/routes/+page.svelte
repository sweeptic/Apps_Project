<script>
  // @ts-nocheck

  import ProjectList from './../components/projects/ProjectList.svelte';
  import UserList from '../components/users/UserList.svelte';
  import dummyData from '../data/dummy-data';

  /**
   * @type {any[] | undefined}
   */
  let selectedUser;

  const onClickHandler = (/** @type {string} */ id) => {
    // @ts-ignore
    selectedUser = dummyData.find((user) => user.id === id);
  };
</script>

<section id="user-list">
  <UserList userData={dummyData} {onClickHandler} />
  <ProjectList {selectedUser} />
</section>

<section id="project-list"></section>

<!-- <h1>Welcome to SvelteKit</h1> -->
<!-- <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p> -->

<style>
  #user-list {
    display: flex;
    justify-content: space-between;
  }
</style>
