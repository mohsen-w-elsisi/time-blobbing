<script lang="ts">
  import { editTask, removeTask } from "../tasks";
  import type { Task } from "../types";
  import TaskEditDialog from "./TaskEditDialog.svelte";

  export let task: Task;
  export let index: number;

  let taskEditingCopy = { ...task };
  let editingModal: HTMLDialogElement;

  function showEditModal() {
    editingModal.showModal();
  }

  function saveEditedTask() {
    editTask(index, taskEditingCopy);
  }

  function removeThisTask() {
    removeTask(index);
  }
</script>

<article class="card card-compact bg-base-200 drop-shadow-lg">
  <div class="card-body">
    <h2 class="card-title">{task.title}</h2>
    <p>{task.duration} minutes</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary btn-sm" on:click={removeThisTask}>remove</button>
      <button class="btn btn-primary btn-sm" on:click={showEditModal}>edit</button>
    </div>
  </div>
</article>

<TaskEditDialog
  bind:modal={editingModal}
  bind:task={taskEditingCopy}
  on:submit={saveEditedTask}
/>
