// 1-block-scoped.js

export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const newTask = true;   // block-scoped newTask
    const newTask2 = false; // block-scoped newTask2
  }

  return [task, task2];
}

