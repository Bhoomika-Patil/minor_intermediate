const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();
app.use(bodyParser.json());

const mysqlConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'minordb'
});

const port = 3000;

mysqlConnection.connect((err) => {
  if (!err) {
    console.log('Db connection successful');
  } else {
    console.error('Db connection failed\n ' + JSON.stringify(err, undefined, 2));
  }
});

app.post('/signup', async (req, res) => {
//   const { fn, ln, email, pwd } = req.body;

    mysqlConnection.query(
      'update tasks set  title=?,descript=?,timing=?,dates=? where tid=?',
      [title,descript,timing,dates],
      (err, result) => {
        if (!err) {
          console.log('task updated successfully');
          res.json({ success: true });
        } else {
          let errorMessage = 'task updation failed.';
          res.json({ success: false, error: errorMessage });
        }
      }
    );
  }
);

app.listen(port, () => console.log('Express server is running at port: ' + port));
