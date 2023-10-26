const mysql = require('mysql');

// Database configuration
const dbConfig = {
  host: 'mysql',
  user: 'root',
  password: 'secret',
  database: 'todos',
};

// Create a connection to the database
const connection = mysql.createConnection(dbConfig);

// Attempt to connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }

  console.log('Connected to the database');
});

// Close the database connection when your application is done
connection.end();

// Note: You should perform your database operations inside this callback

// Handle any errors that occur during the connection
connection.on('error', (err) => {
  console.error('Database error:', err);
  console.log('Database not connected');
});


