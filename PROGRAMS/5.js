function countDigits(n) {
  return n === 0 ? 0 : 1 + countDigits(Math.floor(n / 10));
}

function armstrongSum(n, p) {
  return n === 0 ? 0 : Math.pow(n % 10, p) + armstrongSum(Math.floor(n / 10), p);
}

let num = 153;
let digits = countDigits(num);

console.log(num === armstrongSum(num, digits) ? "Armstrong" : "Not Armstrong");
