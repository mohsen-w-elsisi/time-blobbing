import {
  compose,
  divide,
  gte,
  ifElse,
  partial,
  pipe,
  prop,
  subtract,
  when,
} from "ramda";
import createTimer from "./createTimer";
import { removeTask } from "../tasks";
import toSeconds from "./toSeconds";
import currentTask from "./currentTask";
import createReactiveTimeTracker from "./createReactiveTimeTracker";
import createReactiveBoolean from "./createCompletionStateTracker";
import nullary from "./nulary";
import createTimeSnapshooter from "./createTimeSnapshooter";

const removeCurrentTask = nullary(partial(removeTask, [0]));

const currentTaskSecTime = pipe(currentTask, prop("duration"), toSeconds);

export default function createTaskCycler() {
  let remainingTime: number = 0;

  const { time, setTime, decTime } = createReactiveTimeTracker(remainingTime);

  const {
    readableBoolean: completionState,
    setTrue: didComplete,
    setFalse: didNotComplete,
  } = createReactiveBoolean();

  const setCurrentTaskAsComplete = compose(
    () => stopTimer(),
    removeCurrentTask,
    didComplete
  );

  const decrementTime = pipe(decTime, () => remainingTime--);

  const { startTimer, stopTimer, isPaused } = createTimer(
    pipe(decrementTime, when(gte(0), setCurrentTaskAsComplete))
  );

  const { takeTimeSnapshot, getTimeSinceLastSnapshot } =
    createTimeSnapshooter();

  document.addEventListener("focusout", takeTimeSnapshot);
  document.addEventListener(
    "suspend",
    pipe(
      getTimeSinceLastSnapshot,
      divide(1000),
      Math.floor,
      (n) => subtract(remainingTime, n),
      alert
    )
  );


  function setTimerTimeToCurrentTaskTime() {
    remainingTime = currentTaskSecTime();
    setTime(remainingTime);
    console.log("time set to", remainingTime);
  }

  const taskExists = () => !!currentTask();

  const cycleNextTask = nullary(
    partial(
      when(
        taskExists,
        pipe(didNotComplete, setTimerTimeToCurrentTaskTime, startTimer)
      ),
      [null]
    )
  );

  return {
    cycleNextTask,
    time,
    isPaused,
    completionState,
    pauseTime: stopTimer,
    resumeTime: startTimer,
    endCurrentTaskNow: setCurrentTaskAsComplete,
  };
}
