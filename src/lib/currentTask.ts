import { tasks } from "../tasks";
import type { Task } from "../types";

let _nextTask: Task | null;
tasks.subscribe((tasks) => {
  try {
    _nextTask = tasks[0];
  } catch {
    _nextTask = null;
  }
});

export default function currentTask() {
  return _nextTask;
}
