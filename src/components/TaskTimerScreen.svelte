<script lang="ts">
  import secondsToMinuteDisplays from "../lib/secondsToMinuteDisplays";
  import { activeTask } from "../tasks";

  import PauseIcon from "./icons/PauseIcon.svelte";
  import ResumeIcon from "./icons/ResumeIcon.svelte";
  import SkipIcon from "./icons/SkipIcon.svelte";

  export let time: number;
  export let isPaused: boolean;

  export let resumeTime: () => void;
  export let pauseTime: () => void;
  export let endCurrentTaskNow: () => void;
</script>

<main class="centered-content-screen gap-4">
  <h2>{$activeTask.title}</h2>
  <h1 class="text-7xl">{secondsToMinuteDisplays(time)}</h1>

  <div class="join">
    <button disabled={isPaused} on:click={pauseTime}><PauseIcon /></button>
    <button disabled={!isPaused} on:click={resumeTime}><ResumeIcon /></button>
    <button on:click={endCurrentTaskNow}><SkipIcon /></button>
  </div>
</main>

<style>
  button {
    @apply btn btn-primary join-item;
  }
</style>
