<script>
  // @ts-nocheck

  import BaseSearch from '../UI/BaseSearch.svelte';
  import ProjectItem from './ProjectItem.svelte';

  /**
   * @type {{projects: { id: string; title: string; }[]; }| undefined}
   */
  export let selectedUser;
  let clearInput = true;
  const onChangeFilter = (ev) => (filteredProjects = ev.detail);

  $: filteredProjects = selectedUser?.projects || [];
</script>

<div>
  <BaseSearch {clearInput} filterField={'title'} itemList={selectedUser?.projects} on:filteredList={onChangeFilter} />
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
