import mysql from 'mysql2';

//Conexion a la BBDD
const db =mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'foovie'
});

export default db;