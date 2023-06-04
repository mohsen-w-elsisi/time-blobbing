import { readable, writable } from "svelte/store";
import type { Task, Tasks } from "./types";

const _tasks = writable<Tasks>([{ title: "hello", duration: 600 }]);

export const tasks = readable<Tasks>([], (set) => _tasks.subscribe(set));

export function addTask(newTask: Task) {
  _tasks.update((tasks) => [...tasks, { ...newTask }]);
}

export function editTask(index: number, newTask: Task) {
  _tasks.update((tasks) => {
    tasks[index] = { ...newTask };
    return tasks;
  });
}

export function removeTask(index: number) {
  _tasks.update(tasks => {
    return tasks.filter((_, i) => i != index)
  })
}