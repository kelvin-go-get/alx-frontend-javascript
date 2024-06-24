export default function taskBlock(trueOrFalse) {
  let task = false; // Using let to declare task
  let task2 = true; // Using let to declare task2

  if (trueOrFalse) {
    task = true; // Assigning new value to task without re-declaring
    task2 = false; // Assigning new value to task2 without re-declaring
  }

  return [task, task2];
}
