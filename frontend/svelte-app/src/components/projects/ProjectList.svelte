<script>
  // @ts-nocheck

  import BaseSearch from './../../UI/BaseSearch.svelte';
  import ProjectItem from './ProjectItem.svelte';

  /**
   * @type {{projects: { id: string; title: string; }[]; }| undefined}
   */
  export let selectedUser;
  let inputValue;

  $: filteredProjects = selectedUser?.projects || [];

  $: if (selectedUser) {
    inputValue = '';
  }

  const onFilter = (/** @type {any} */ ev) => {
    inputValue = ev.detail;
    if (selectedUser) {
      const filtered = [...selectedUser.projects].filter((item) => item.title.includes(ev.detail));
      filteredProjects = [...filtered];
    }
  };
</script>

<div>
  <BaseSearch on:filter={onFilter} {inputValue} />
  <ul>
    {#if selectedUser}
      {#if !filteredProjects.length}
        <h3>No projects here.</h3>
      {/if}
      {#each filteredProjects as project (project.id)}
        <div>
          <ProjectItem {project} />
        </div>
      {/each}
    {:else}
      <h3>There is no user selected</h3>
    {/if}
  </ul>
</div>
