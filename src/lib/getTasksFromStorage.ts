import { isNil, pipe, when } from "ramda";

export default pipe(
  () => localStorage.getItem("tasks"),
  JSON.parse,
  when(isNil, () => [])
);
