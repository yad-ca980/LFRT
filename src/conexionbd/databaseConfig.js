// databaseConfig.js
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'laptopfix.com.mx',
  user: 'laptopfi_jesus',
  password: '+EL.hMQnF',
  database: 'laptopfi_run',
});

connection.connect((err) => {
  if (err) {
    console.error('Error al conectar a MySQL:', err);
    return;
  }
  console.log('Conexión exitosa a MySQL');

  connection.end();
});

module.exports = connection;
