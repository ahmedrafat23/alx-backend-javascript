// 1-block-scoped.js

export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    let task = true;   // block-scoped
    let task2 = false; // block-scoped
  }

  return [task, task2];
}

