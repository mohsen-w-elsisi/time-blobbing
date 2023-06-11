import { writable, readable } from "svelte/store";

export default function createReactiveBoolean() {
  const mutableBoolean = writable(false);

  const readableBoolean = readable(false, (set) => {
    mutableBoolean.subscribe(set);
  });

  const setTrue = () => mutableBoolean.set(true);
  const setFalse = () => mutableBoolean.set(false);

  return { setTrue, setFalse, readableBoolean };
}
