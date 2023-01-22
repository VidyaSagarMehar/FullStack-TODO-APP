require('dotenv').config();
const express = require('express');
const connectToDb = require('./config/db');
const notesRoutes = require('./routes/notesRoute');
const userRoutes = require('./routes/userRoute');
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectToDb();

app.use('/', notesRoutes);
app.use('/', userRoutes);
module.exports = app;
