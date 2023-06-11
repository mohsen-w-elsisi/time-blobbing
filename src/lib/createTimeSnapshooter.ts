import { isNil, pipe, subtract, when } from "ramda";

export default function createTimeSnapshooter() {
  let snapshot: Date;

  const getSnapshot = pipe(() => snapshot, when(isNil, newDate));

  const subtractTimeFromSnapshot = pipe(getSnapshot, subtract);

  const takeTimeSnapshot = () => (snapshot = newDate());

  const getTimeSinceLastSnapshot = pipe(newDate, (n) =>
    subtractTimeFromSnapshot()(n)
  );

  return { takeTimeSnapshot, getTimeSinceLastSnapshot };
}

const newDate = () => new Date();
