const express = require("express");
const cors = require("cors");
const connection = require("./db");
const WebSocket = require("ws");
const axios = require("axios");

const app = express();
app.use(cors());
app.use(express.json());

let globalUserid; // Declare a global variable for userid

// Database connection
connection.connect(err => {
  if (err) throw err;
  console.log("Receiver server database connected");
});

function convertDateToYMD(date) {
  const [yyyy, mm, dd] = date.split('-');
  return `${dd}-${mm}-${yyyy}`;
}

function convertTimeTo24HrFormat(time) {
  const [timePart, modifier] = time.split(' ');
  let [hours, minutes] = timePart.split(':');
  
  if (hours === '12') {
    hours = '00';
  }
  
  if (modifier === 'PM') {
    hours = parseInt(hours, 10) + 12;
  }
  
  return `${hours}:${minutes}`;
}

// Endpoint to receive userid and add task
app.post('/receive-userid', (req, res) => {
  const { userid, subject, date, time } = req.body;
  console.log(`Received userid ${userid}`);
  globalUserid = userid; // Assign userid to the global variable
  // ...
});

// Endpoint to receive userid and add task
app.post('/receive-userid', (req, res) => {
  const { userid, subject, date, time } = req.body;
  console.log(`Received userid again ${userid}`);

  const formattedTime = convertTimeTo24HrFormat(time); // Convert time to 24-hour format
  const sql = 'INSERT INTO tasks (userid, descript, timing, dates) VALUES (?, ?, ?, ?)';
  const values = [userid, subject, formattedTime, date];

  connection.query(sql, values, (error, results) => {
    if (error) {
      console.error('Error inserting data into database:', error);
      return res.status(500).json({ message: 'Database insertion failed' });
    }
    console.log("Task stored in db");
    res.status(200).json({ message: 'Task added successfully' });
  });
});

// Endpoint to add task
app.post('/minordb', (req, res) => {
  const { date, time, event } = req.body;
  console.log("user id printing in add task wala function received in the above", globalUserid); // Use the global variable
  console.log(`Received date ${date} time ${time} event ${event}`);

  // Convert the date to the correct format
  const formattedDate = convertDateToYMD(date);
  console.log("Converted date", formattedDate);

  // Convert time to 24-hour format
  const formattedTime = convertTimeTo24HrFormat(time);
  console.log("Converted time", formattedTime);

  // Assuming userid is sent via the WebSocket connection
  const userid = req.body.userid || globalUserid; // Use the global variable if not in the request body

  // Get the maximum tid for the given userid
  const getMaxTidQuery = `
    SELECT COALESCE(MAX(tid), 0) AS max_tid
    FROM tasks
    WHERE userid = ?
  `;

  connection.query(getMaxTidQuery, [userid], (error, results) => {
    if (error) {
      console.error('Error retrieving max tid:', error);
      return res.status(500).json({ message: 'Failed to add task' });
    }

    const maxTid = results[0].max_tid;
    const newTid = maxTid + 1;

    // Insert the new task with the calculated tid
    const insertTaskQuery = `
      INSERT INTO tasks (userid, tid, descript, timing, dates)
      VALUES (?, ?, ?, ?, ?)
    `;
    const values = [userid, newTid, event, formattedTime, formattedDate];
    connection.query(insertTaskQuery, values, (error, results) => {
      if (error) {
        console.error('Error inserting task:', error);
        return res.status(500).json({ message: 'Failed to add task' });
      }

      console.log('Task added successfully');
      res.status(200).json({ message: 'Task added successfully' });
    });
  });
});

const PORT = 5002;
app.listen(PORT, () => {
  console.log(`Receiver server listening on port ${PORT}...`);
});
