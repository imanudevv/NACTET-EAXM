const r = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

r.question("Base: ", b => {
  r.question("Height: ", h => {
    console.log("Area =", 0.5 * b * h);
    r.close();
  });
});
