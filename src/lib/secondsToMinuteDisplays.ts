import { equals, identity, ifElse, length, pipe, toString } from "ramda";

const lengthIsOne = pipe(length, equals(1));

const prepend0 = (s: string) => `0${s}`;

const timeIntigerToString = pipe(
  toString,
  ifElse(lengthIsOne, prepend0, identity)
);

export default function secondsToMinuteDisplays(sumSeconds: number) {
  const hours = Math.floor(sumSeconds / 3600);
  const minutes = Math.floor(sumSeconds / 60) - hours * 60;
  const seconds = sumSeconds % 60;

  const hoursString = timeIntigerToString(hours);
  const minutesString = timeIntigerToString(minutes);
  const secondsString = timeIntigerToString(seconds);

  const clockString =
    hours == 0
      ? `${minutesString}:${secondsString}`
      : `${hoursString}:${minutesString}`;

  return clockString;
}
