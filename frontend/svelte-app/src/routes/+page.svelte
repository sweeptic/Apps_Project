<script>
  import ProjectList from './../components/projects/ProjectList.svelte';
  import UserList from '../components/users/UserList.svelte';
  import dummyData from '../data/dummy-data';
</script>

<section id="user-list">
  <UserList userData={dummyData} />
  <ProjectList />
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
