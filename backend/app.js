require('dotenv').config();
const express = require('express');
const DbConnection = require('./config/db');
const todoRoutes = require('./routes/todoRoutes');

const app = express();

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

DbConnection();

app.use('/', todoRoutes);

module.exports = app;
