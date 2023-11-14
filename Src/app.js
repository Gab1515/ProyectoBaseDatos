
const express = require("express");
const cors = require("cors"); 
const app = express(); 
const port = 3000;
const jwt = require('jsonwebtoken');


require("./db.js");

// /* ------MIDDLEWARES (configuraciones express)---------------------------------------------------------- */
app.use(express.json());
app.use(cors()); 


const Ensere = require("./Models/Enseres");
const User = require("./Models/Users");


app.get("/", (req, res) => {
  res.send(

  );
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });

    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }

    const token = jwt.sign({ username: user.username }, 'secreto', { expiresIn: '1h' });

    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
app.post("/user", async (req, res) => {
  const {
    username,
    email,
    identification_number,
    password,
    phone_number,
    productos, 
  } = req.body;
  

  const productosEncontrados = await Ensere.find({ name: { $in: productos } });
  

 
  const user = new User({
    username: username,
    email: email,
    identification_number: identification_number,
    password: password,
    phone_number: phone_number,
    productos: productosEncontrados.map((producto) => producto._id), });

  
  user.password = await User.encryptPassword(password);

  
  const newUser = user.save();

  res.status(200).json({
    _id: newUser._id,
    username: newUser.username,
    mail: newUser.email,
  });


});


module.exports = { app, port };