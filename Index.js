const { app, port } = require("./Src/app");
const { connection } = require("./Src/db");



connection().then(
  app.listen(port, () => {
    console.log(`Servidor levantado en el puerto: ${port}`);
  })
);