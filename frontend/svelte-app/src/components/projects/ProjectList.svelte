<script>
  import ProjectItem from './ProjectItem.svelte';

  /**
   * @type {{projects: { id: string; title: string; }[]; }| undefined}
   */
  export let selectedUser;
</script>

<div>
  <ul>
    {#if selectedUser}
      {#if !selectedUser.projects.length}
        <h3>No projects here.</h3>
      {/if}
      {#each selectedUser.projects as project (project.id)}
        <div>
          <ProjectItem {project} />
        </div>
      {/each}
    {:else}
      <h3>There is no user selected</h3>
    {/if}
  </ul>
</div>
