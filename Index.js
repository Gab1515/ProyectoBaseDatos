 const { app, port } = require("./Src/app");
 const {Connection} = require("./Src/db");


// /* -------SINCRONIZAMOS BASE DE DATOS Y SERVIDOR EXPRESS------------- */

Connection().then(

app.listen(port, () => {
    console.log(`Servidor levantado en el puerto: ${port}`);
  })
);