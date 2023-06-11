<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import type { Task } from "../types";

  export let buttonText = "ok"

  export let task: Task = { title: "", duration: 0 };
  export let modal: HTMLDialogElement;

  const closeModal = () => modal.close()

  const dispatch = createEventDispatcher();

  function dispatchSubmitEvent() {
    dispatch("submit");
  }
</script>

<dialog class="modal modal-bottom sm:modal-middle" bind:this={modal}>
  <form
    method="dialog"
    on:submit={dispatchSubmitEvent}
    class="modal-box form-control gap-2"
  >
    <input
      type="text"
      class="input"
      placeholder="title"
      bind:value={task.title}
    />

    <input
      type="number"
      class="input"
      placeholder="duration"
      bind:value={task.duration}
    />

    <div class="modal-action flex-row-reverse justify-start">
      <button class="btn">{buttonText}</button>
      <button class="btn btn-ghost" on:click|preventDefault={closeModal}>cancel</button>
    </div>
  </form>
</dialog>
