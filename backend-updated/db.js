
const mysql=require("mysql");
const connection=mysql.createConnection({
    host:'localhost',
    database:'minordb',
    user:'root',
    password:'',
    multipleStatements: true 
});

module.exports=connection;