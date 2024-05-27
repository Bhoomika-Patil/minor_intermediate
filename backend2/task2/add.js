const express=require("express");
const cors=require("cors");
const connection=require("./db");


const app=express()
app.use(cors());
app.use(express.json());
console.log("bjb");

//getting req from frontend:
app.post('/minordb',(req,res)=>{
  console.log('Received POST request');
    const obj = req.body;
    console.log(obj);
    console.log(obj.name);
    connection.query

    const sql = 'INSERT INTO tasks (userid,tid,title,descript,timing,dates) VALUES (?,?,?,?, ?, ?)';

    // Values corresponding to placeholders
    const values = [obj.date, obj.time, obj.event];
    
    // Execute the SQL query with the provided values
    connection.query(sql, values, (error, results, fields) => {
      if (error) {
        console.error('Error inserting data into database:', error);
        return;
      }
      console.log('Data inserted into database:', results);
      res.status(200).json({ message: 'Data inserted successfully' }); // Send success response
    });
    
   
})


app.listen(8086, () => {
  console.log('listening...');
connection.connect(function(err){
    if(err) throw err;
    console.log("db connected");
})
})