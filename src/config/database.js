require('dotenv').config();
module.exports = {
  
  "username": process.env.DB_USER,
  "password": process.env.DB_PASS,
  "database": process.env.DB_DATABASE,
  "host": process.env.DB_HOST,
  "dialect": "postgres",
  "protocol": 'postgres',
  "port": 5432,
  "define": {
    "timestamps": true,
    "underscored": true,
  },
  "dialectOptions": {
    "ssl": {
      "require": true, // This will help you. But you will see nwe error
      "rejectUnauthorized": false // This line will fix new error
    },
    "native": true
  },
}