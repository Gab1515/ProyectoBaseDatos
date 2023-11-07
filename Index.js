const { app, port } = require("./Src/app");
const { connection } = require("./Src/db");

// // /* -------SINCRONIZAMOS BASE DE DATOS Y SERVIDOR EXPRESS------------- */

connection().then(
  app.listen(port, () => {
    console.log(`Servidor levantado en el puerto: ${port}`);
  })
);