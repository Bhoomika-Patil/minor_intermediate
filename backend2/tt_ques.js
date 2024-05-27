
const express=require("express");
const cors=require("cors");
const bodyParser = require('body-parser');
// const objs = require("C:/Users/bhoom/minor/tt-full/TimeTrek/navigation/screens/Questions.js");
const app=express();
app.use(cors());
app.use(express.json());

// console.log(objs);
//getting req from frontend:
const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8082 });

wss.on('connection', (ws) => {
  console.log('WebSocket connected');

  ws.on('message', (message) => {
    const jsonStr = message.toString('utf-8'); // Convert Buffer to string
const jsonObj = JSON.parse(jsonStr); // Parse JSON string to object

console.log(jsonObj);
    // Handle the received message here
  


  //ALGORRITHM

  
  let  p1 = jsonObj.percentages.map(function(percentage) {
    return parseInt(percentage, 10); // Convert to integer
});
  const q1 = parseInt(jsonObj.q1);
  const q2 = parseInt(jsonObj.q2);
  const q3 = parseInt(jsonObj.q3);
  const hrs = 24 - (q1 + q2 + q3);
  console.log("\nTotal hours per day: " + hrs);
  let timetable = [];
  for (let i = 0; i < 7; i++) { // Loop for 7 days
    let dailyHours = [];
    for (let j = 0; j < 3; j++) { // Loop for each subject
      let total = hrs * (p1[j] / 100);
      const totalHours = Math.floor(total); // Extract the integer part
      let remainingMinutes = Math.round((total - totalHours) * 60); // Convert the decimal part to minutes and round it
      
      // Round the remaining minutes to the nearest 15-minute interval
      remainingMinutes = Math.round(remainingMinutes / 15) * 15;
      
      const timeString = totalHours + "-" + remainingMinutes.toString().padStart(2, '0');
      
      console.log(timeString); // Output: "0-45"
      dailyHours.push(timeString);
    }
    timetable.push(dailyHours);
  }
  
  console.log("\nFinally all of the timetable:");
  console.log(timetable);
  
  ws.send(JSON.stringify(timetable));
});

ws.on('close', () => {
  console.log('WebSocket closed');
});

ws.on('error', (error) => {
  console.error('WebSocket error:', error);
});
});
app.listen(8083, () => {
  console.log('listening...');
})