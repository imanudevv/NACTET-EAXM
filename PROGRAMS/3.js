let y = 2024;
console.log((y % 400 === 0 || (y % 4 === 0 && y % 100 !== 0)) 
            ? "Leap Year" : "Not Leap Year");
