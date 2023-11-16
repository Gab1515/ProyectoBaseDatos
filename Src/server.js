    const express = require('express');
    const mongoose = require('mongoose');
    const app = express();
    const PORT = 3001;


    mongoose.connect('mongodb://localhost:27017/electrodomesticos', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });


    const Item = mongoose.model('Item', { name: String });


    app.get('/api/items', async (req, res) => {
      const items = await Item.find();
      res.json(items);
    });

    app.listen(PORT, () => {
      console.log(`Servidor backend escuchando en el puerto ${PORT}`);
    });