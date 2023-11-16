const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;
const jwt = require('jsonwebtoken');
const Ensere = require('./Models/Enseres');
const User = require('./Models/Users');

require("./db.js");

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173',
}));

app.get("/", (req, res) => {
  res.send('Welcome to the server!');
});

app.post('/login', async (req, res) => {
 
});


app.post("/api/users", async (req, res) => {
  const {
    username,
    email,
    identification_number,
    password,
    phone_number,
   
  } = req.body;

  try {
 
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ error: 'El usuario ya existe' });
    }


    const user = new User({
      username,
      email,
      identification_number,
      password, 
      phone_number,
    
    });


    const newUser = await user.save();

    res.status(201).json({
      _id: newUser._id,
      username: newUser.username,
      mail: newUser.email,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = { app, port };


