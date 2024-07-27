const express = require('express');
const mongoose = require('mongoose');

// Define the MongoDB url
const mongoUrl = 'mongodb://localhost:27017/Coffeshop'

// Set up the mongodb connection
mongoose.connect(mongoUrl,{
  useNewUrlParser:true,
  useUnifiedTopology:true
})

// Access the default connection object
const db = mongoose.connection;

// Define the event listner
 db.on('connected',()=>{
    console.log('Connected to MongoDB server');
 });

 db.on('error',(err)=>{
  console.log('Mongodb connection error',err);
 });

 db.on('disconnected',()=>{
    console.log('Mongodb disconnected');
 });

//  Export the database connection
 module.exports = db;

