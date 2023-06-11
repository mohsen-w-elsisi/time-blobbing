<script>
  import { tasks, thereAreTasks } from "../tasks";
  import TaskTile from "./TaskTile.svelte";

  tasks.subscribe((v) => console.log("the value for tasks is", v));
</script>

{#if $thereAreTasks}
  <main class="p-3 sm:px-6 gap-3 flex flex-col">
    {#each $tasks as task, index}
      <TaskTile {task} {index} />
    {/each}
  </main>
{:else}
  <main class="centered-content-screen">
    <p class="text-lg">nothing here</p>
  </main>
{/if}
