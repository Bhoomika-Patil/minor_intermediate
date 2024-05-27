
// let p1=[50,25,25], q1=8, q2=4, q3=6; 
// const hrs=24-(q1+q2+q3);
// console.log("\ntotal hours per day"+hrs);
// // const total=hrs*7;
// // console.log("\n\ntotal hrs per week "+total);
// let x=new Array(3);


// //each subject
// for(i=0;i<3;i++){
// let total=hrs*(p1[i]/100);
// console.log("hours of subject "+i+"per day"+total)
// let total1=total*7;
// //min and max hours to be considered
// function between(min, max) {  
//   return Math.floor(
//     Math.random() * (max - min + 1) + min
//   );
// }


// //generate hours function
// // function generateSumEqualToX(total1) {
// //   var sum = 0;
// //   var numbers = [];
// //   for (var j = 0; j <7; j++) {
// //     var max = Math.max(2, total1 - sum - (7 - j) * 10);
// //     var min = Math.min(5, total1 - sum - (7 - j));
// //     var randomNum = between(min, max);
// //     sum += randomNum;
// //     numbers.push(randomNum);
// //   }
// //   return numbers;
// // }

// function generateSumEqualToX(total1) {
//   var sum = 0;

//   var numbers = [];
//   for (var j = 0; j < 7; j++) {
//     var max = Math.max(0, Math.min(5, total1 - sum - (7 - j) * 10));
//     var min = Math.max(0, Math.min(5, total1 - sum - (7 - j)));
//     var randomNum = between(min, max);
//     sum += randomNum;
//     numbers.push(randomNum);
//   }
//   return numbers;
// }

// // accept it in a 2d array

//    x[i]=new Array(7);
//    var numbers = generateSumEqualToX(total1);
//    x[i]=numbers;
//    console.log("\ntotal hrs per week after priority "+total1+" for subject: "+(i+1));
//    console.log(numbers);
// }


// //return it to frontend
// console.log("\nFinally all of the timetable");
// console.log(x);

// let p1 = [50, 25, 25];
// let q1 = 6, q2 = 4, q3 = 8;
// const hrs = 24 - (q1 + q2 + q3);
// console.log("\nTotal hours per day: " + hrs);

// let x = new Array(7).fill(0).map(() => new Array(3).fill(0));

// for (let i = 0; i < 3; i++) {
//     let total = hrs * (p1[i] / 100);
//     console.log("Hours of subject " + (i + 1) + " per day: " + total);

//     let total1 = total * 7;

//     // Function to generate a random number between min and max (inclusive)
// function between(min, max) {  
//   return Math.floor(
//       Math.random() * (max - min + 1) + min
//   );
// }
//     // Function to generate random numbers with constraints
// function generateSumEqualToX(total1, remainingHours) {
//     let sum = 0;
//     let numbers = [];
//     for (let j = 0; j < 7; j++) {
//         let max = Math.max(0, Math.min(remainingHours, total1 - sum - (7 - j) * 10));
//         let min = Math.max(0, Math.min(remainingHours, total1 - sum - (7 - j)));
//         let randomNum = between(min, max);
//         sum += randomNum;
//         numbers.push(randomNum);
//     }
//     return numbers;
// }

// // Calculate remaining hours after distributing hours for each subject
// let remainingHours = hrs - Math.min(...x.map(arr => arr.reduce((acc, curr) => acc + curr, 0)));

// // Generate hours for each subject
// for (let i = 0; i < 3; i++) {
//     let total = hrs * (p1[i] / 100);
//     console.log("Hours of subject " + (i + 1) + " per day: " + total);

//     let total1 = total * 7;

//     // Generate hours for each day
//     let numbers = generateSumEqualToX(total1, remainingHours);
//     for (let k = 0; k < 7; k++) {
//         x[k][i] = numbers[k];
//     }
    
//     console.log("Total hrs per week after priority for subject " + (i + 1) + ": " + total1);
//     console.log(numbers);
// }
// }
// console.log("\nFinally all of the timetable:");
// console.log(x);





//new
// Function to generate a random number between min and max (inclusive)
function between(min, max) {  
  return Math.floor(
      Math.random() * (max - min + 1) + min
  );
}

// Function to generate random numbers with constraints
function generateSumEqualToX(total1, remainingHours) {
  let sum = 0;
  let numbers = [];
  for (let j = 0; j < 7; j++) {
      let max = Math.max(0, Math.min(remainingHours, total1 - sum - (7 - j) * 10));
      let min = Math.max(0, Math.min(remainingHours, total1 - sum - (7 - j)));
      let randomNum = between(min, max);
      sum += randomNum;
      numbers.push(randomNum);
  }
  return numbers;
}

let p1 = [50, 25, 25];
let q1 = 8, q2 = 4, q3 = 6;
const hrs = 24 - (q1 + q2 + q3);
console.log("\nTotal hours per day: " + hrs);

let x = new Array(7).fill(0).map(() => new Array(3).fill(0));

// Calculate remaining hours after distributing hours for each subject
let remainingHours = hrs - Math.min(...x.map(arr => arr.reduce((acc, curr) => acc + curr, 0)));

// Generate hours for each subject
for (let i = 0; i < 3; i++) {
  let total = hrs * (p1[i] / 100);
  let total1 = total * 7;

  // Generate hours for each day
  let numbers = generateSumEqualToX(total1, remainingHours);
  for (let k = 0; k < 7; k++) {
      x[k][i] = numbers[k];
  }
}

// Display hours for each subject
for (let i = 0; i < 3; i++) {
  let total = hrs * (p1[i] / 100);
  console.log("Hours of subject " + (i + 1) + " per day: " + total);
  console.log("Total hrs per week after priority for subject " + (i + 1) + ": " + total * 7);
}

console.log("\nFinally all of the timetable:");
console.log(x);






// //CHATGPT
// function generateTimeTable(totalHours, subjects) {
//   // Sort subjects by priority in descending order
//   subjects.sort((a, b) => b.priority - a.priority);

//   const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
//   const timeTable = {};

//   let remainingHours = totalHours;

//   // Allocate hours to subjects for each day of the week
//   daysOfWeek.forEach(day => {
//       timeTable[day] = {};

//       subjects.forEach(subject => {
//           if (remainingHours <= 0) return;

//           const hoursPerSubject = calculateHoursForSubject(subject, remainingHours);
//           timeTable[day][subject.name] = hoursPerSubject;
//           remainingHours -= hoursPerSubject;
//       });
//   });

//   return timeTable;
// }

// function calculateHoursForSubject(subject, totalHours) {
//   // Calculate the minimum and maximum hours for the subject
//   const minHours = Math.ceil(totalHours * 0.1); // Minimum percentage of total hours
//   const maxHours = Math.floor(totalHours * 0.5); // Maximum percentage of total hours

//   // Ensure that the subject receives at least some minimum hours
//   const minHoursPerSubject = Math.min(Math.max(minHours, 1), maxHours);
  
//   // Calculate the hours for the subject with some randomness
//   const hoursPerSubject = Math.floor(Math.random() * (maxHours - minHoursPerSubject + 1)) + minHoursPerSubject;

//   return hoursPerSubject;
// }

// // Example input
// const totalHoursPerDay = 8; // Total hours available per day
// const subjects = [
//   { name: 'Math', priority: 5 },     // Example subject with priority 5
//   { name: 'Science', priority: 4 },  // Example subject with priority 4
//   { name: 'History', priority: 3 },  // Example subject with priority 3
//   // Add more subjects as needed
// ];

// // Generate the time table
// const timeTable = generateTimeTable(totalHoursPerDay, subjects);
// console.log(timeTable);

