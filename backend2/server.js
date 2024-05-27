const express = require("express");
const cors = require("cors");
const connection = require("./db");
const WebSocket = require("ws");

const app = express();
app.use(cors());
app.use(express.json());

const wss = new WebSocket.Server({ port: 8081 });

let websocketClients = [];

wss.on('connection', (ws) => {
  console.log('Client connected to WebSocket');
  websocketClients.push(ws);

  ws.on('close', () => {
    console.log('Client disconnected from WebSocket');
    websocketClients = websocketClients.filter(client => client !== ws);
  });
});

// Handle HTTP POST request
app.post('/minordb', (req, res) => {
  console.log('Received POST request');
  const obj = req.body;
  console.log(obj);

  const sql = 'INSERT INTO user (name, email, password) VALUES (?, ?, ?)';
  const values = [obj.name, obj.email, obj.password];

  // Insert user into the database
  connection.query(sql, values, (error, results) => {
    if (error) {
      console.error('Error inserting data into database:', error);
      return res.status(500).json({ message: 'Database insertion failed' });
    }

    const userid_stored = results.insertId;
    console.log('Data inserted into database with userid:', userid_stored);

    // Send the userid_stored to all connected WebSocket clients
    websocketClients.forEach(ws => {
      ws.send(JSON.stringify({ userid_stored }));
    });

    // Send success response to the frontend
    res.status(200).json({ message: 'Registration successful', userid: userid_stored });
  });
});

// Create the server
const server = app.listen(5001, () => {
  console.log('Listening on port 5001...');
  connection.connect(err => {
    if (err) throw err;
    console.log("Database connected");
  });
});

// Handle WebSocket upgrades
server.on('upgrade', (request, socket, head) => {
  wss.handleUpgrade(request, socket, head, (ws) => {
    wss.emit('connection', ws, request);
  });
});
