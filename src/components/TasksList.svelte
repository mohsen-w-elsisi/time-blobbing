<script>
  import { tasks } from "../state";
  import TaskTile from "./TaskTile.svelte";
</script>

<main class="p-3 sm:px-6 gap-3 flex flex-col">
  {#each $tasks as task, index}
    <TaskTile {task} {index} />
  {/each}
</main>
