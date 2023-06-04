<script lang="ts">
  import TaskEditDialog from "./TaskEditDialog.svelte";
  import AddIcon from "./icons/AddIcon.svelte";
  import type { Task } from "../types";
  import { addTask } from "../state";

  let newTaskModal: HTMLDialogElement;

  let newTask: Task = {
    title: "",
    duration: 0,
  };

  function openNewTaskDialog() {
    newTaskModal.showModal();
  }

  function addNewTask() {
    addTask(newTask);
    console.log("new task should be added");
  }
</script>

<button
  on:click={openNewTaskDialog}
  class="btn btn-primary btn-square drop-shadow-lg fixed right-3 bottom-4"
  ><AddIcon />
</button>

<TaskEditDialog
  buttonText="add"
  bind:modal={newTaskModal}
  bind:task={newTask}
  on:submit={addNewTask}
/>

<style>
  button {
    translate: 0 -120%;
  }
</style>
