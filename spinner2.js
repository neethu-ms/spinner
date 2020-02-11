let arr = ['|','/','-','\\'];
const animate = function(arr) {
  let count = 0, loop = 0;
  while (loop <= 3) {
    for (let item of arr) {
      count += 200;
      setTimeout(() => {
        process.stdout.write('\r' + item + ' ');
      }, count);
    }
    loop++;
  }
  count += 200;
  setTimeout(() => {
    process.stdout.write('\n');
  },count);
};

animate(arr);
