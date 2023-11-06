const mongoose = require('mongoose');



async function Connection() {

     await mongoose
     .connect('mongodb+srv://anaislu12:1234@ejemplo.tpneya6.mongodb.net/?retryWrites=true&w=majority')

     .catch((err) => console.log(err));

}

module.exports = { Connection };