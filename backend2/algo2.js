// Define an empty 2D array
let timetable = [];
let p1=[50,25,25];
let q1=8,q2=4,q3=4;
let hrs=24-(q1+q2+q3);
// Display hours for each subject
for (let i = 0; i < 7; i++) { // Loop for 7 days
  let dailyHours = [];
  for (let j = 0; j < 3; j++) { // Loop for each subject
    let total = hrs * (p1[j] / 100);
    dailyHours.push(total);
  }
  timetable.push(dailyHours);
}

console.log("\nFinally all of the timetable:");
console.log(timetable);
