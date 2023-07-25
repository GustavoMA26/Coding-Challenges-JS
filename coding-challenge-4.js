// Another solution:
//let tip = 0;
// const bill = 430;

// console.log (
//     `The bill was ${bill}, the tip was ${bill >= 50 && bill <= 300 ? tip = bill * 0.15 : tip = bill * 0.20} and the total was ${tip+bill}.`
// );

const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`)