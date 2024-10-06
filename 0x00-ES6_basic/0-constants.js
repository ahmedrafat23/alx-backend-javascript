// 0-constants.js

// Modify taskFirst to use const
export function taskFirst() {
  const task = 'I prefer const when I can.';
  return task;
}

// Function to return ' is okay'
export function getLast() {
  return ' is okay';
}

// Modify taskNext to use let
export function taskNext() {
  let combination = 'But sometimes let';
  combination += getLast();  // Adding ' is okay' to combination

  return combination;
}

