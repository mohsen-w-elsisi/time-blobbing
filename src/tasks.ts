import { readable, writable } from "svelte/store";
import type { Task, Tasks } from "./types";
import { equals, not, pipe, prop } from "ramda";
import getTasksFromStorage from "./lib/getTasksFromStorage";

const _tasks = writable<Tasks>(getTasksFromStorage());

export const tasks = readable<Tasks>([], (set) => _tasks.subscribe(set));

export const activeTask = readable<Task>(undefined, (set) => {
  tasks.subscribe((tasks) => set(tasks[0]));
});

export const thereAreTasks = readable<boolean>(undefined, (set) =>
  tasks.subscribe(pipe(prop("length"), equals(0), not, set))
);

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
  _tasks.update((tasks) => {
    return tasks.filter((_, i) => i != index);
  });
}
