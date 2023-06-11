import { dec } from "ramda";
import { writable, readable } from "svelte/store";

export default function createReactiveTimeTracker(initialValue: number) {
  const mutableTime = writable(initialValue);

  const time = readable(initialValue, (set) => {
    mutableTime.subscribe(set);
  });

  const setTime = mutableTime.set
  
  const decTime = () => mutableTime.update(dec)

  return {time, setTime, decTime};
}
