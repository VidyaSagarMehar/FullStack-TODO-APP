require('dotenv').config();
const express = require('express');
const connectToDb = require('./config/db');
const todoRoutes = require('./routes/todoRoutes');
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectToDb();

app.use('/', todoRoutes);
module.exports = app;
