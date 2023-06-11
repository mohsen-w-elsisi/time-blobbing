<script lang="ts">
  import { link } from "svelte-spa-router";
  import { activeTask } from "../tasks";
  import { createEventDispatcher } from "svelte";

  const emiter = createEventDispatcher();

  function emitAcceptEvent() {
    emiter("accept");
  }
</script>

<main class="centered-content-screen gap-4 p-4">
  <h1 class="text-center text-3xl sm:text-8xl">{$activeTask.title}</h1>
  <h2 class="text-xl">{$activeTask.duration} minutes</h2>

  <div class="flex gap-2">
    <a class="btn btn-secondry" href="/" use:link>back</a>
    <button class="btn btn-primary" on:click={emitAcceptEvent}>start</button>
  </div>
</main>
