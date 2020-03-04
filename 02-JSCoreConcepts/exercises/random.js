randomArray = (length, min, max) => [...new Array(length)].map(() => Math.round(Math.random() * (max -min) + min));

console.log(randomArray(10, 5, 20))