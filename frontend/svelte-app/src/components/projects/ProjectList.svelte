<script>
  import BaseContainer from './../UI/BaseContainer.svelte';
  import BaseSearch from '../UI/BaseSearch.svelte';
  import ProjectItem from './ProjectItem.svelte';
  export let selectedUser;
  let clearInput = true;
  const onChangeFilter = (ev) => (filteredProjects = ev.detail);

  $: filteredProjects = selectedUser?.projects || [];
</script>

{#if selectedUser}
  <BaseContainer>
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
        <h3>No user selected.</h3>
      {/if}
    </ul>
  </BaseContainer>
{:else}
  <BaseContainer>
    <h3>No user selected.</h3>
  </BaseContainer>
{/if}
