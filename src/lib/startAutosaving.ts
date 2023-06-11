import { pipe } from "ramda";
import { tasks } from "../tasks";

export default function startAutosaving() {
  tasks.subscribe(saveToLocalStorage);
}

const saveToLocalStorgaeTasksKey = (v: string) =>
  localStorage.setItem("tasks", v);

const saveToLocalStorage = pipe(JSON.stringify, saveToLocalStorgaeTasksKey);
