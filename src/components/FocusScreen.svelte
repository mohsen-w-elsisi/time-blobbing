<script lang="ts">
  import { onDestroy, onMount } from "svelte";
  import createTaskCycler from "../lib/createTaskCycler";
  import { activeTask, thereAreTasks } from "../tasks";
  import AllDone from "./AllDone.svelte";
  import NextTaskPrompt from "./NextTaskPrompt.svelte";
  import TaskTimerScreen from "./TaskTimerScreen.svelte";

  const {
    time,
    isPaused,
    completionState,
    cycleNextTask,
    resumeTime,
    pauseTime,
    endCurrentTaskNow,
  } = createTaskCycler();

  onMount(cycleNextTask);
  onDestroy(pauseTime);
</script>

{#if $thereAreTasks}
  {#if $completionState}
    <NextTaskPrompt on:accept={cycleNextTask} />
  {:else}
    <TaskTimerScreen
      time={$time}
      isPaused={$isPaused}
      {pauseTime}
      {resumeTime}
      {endCurrentTaskNow}
    />
  {/if}
{:else}
  <AllDone />
{/if}
