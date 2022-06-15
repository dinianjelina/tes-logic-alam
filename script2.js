let input = [3, 7, 1, 2, 6, 7, 8, 9, 12, 5, 3, 12];
let output = [...new Set(input)];

output.sort(function (a, b) {
  return b - a;
});
console.log(output.join(' , '));
