let datum = { ticks: true };
let size = 10;

size = datum.ticks ? size : 0;
console.log(size); // Output: 10 (since datum.ticks is true)

datum.ticks = false;
size = datum.ticks ? size : 0;
console.log(size); // Output: 0 (since datum.ticks is false)
