const mysql=require("mysql");
const connection=mysql.createConnection({
    host:'localhost',
    database:'minordb',
    user:'root',
    password:''
});

module.exports=connection;