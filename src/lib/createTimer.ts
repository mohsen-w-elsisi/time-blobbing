import createReactiveBoolean from "./createCompletionStateTracker";

export default function createTimer(callback: () => void) {
  let intervalId: number;

  const {
    readableBoolean: isPaused,
    setTrue: setPaused,
    setFalse: setUnPaused,
  } = createReactiveBoolean();

  function startTimer() {
    intervalId = setInterval(callback, 1000);
    setUnPaused();
  }

  function stopTimer() {
    clearInterval(intervalId);
    setPaused();
  }

  return { startTimer, stopTimer, isPaused };
}
