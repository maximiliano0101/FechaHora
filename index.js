const express = require('express');
require("dotenv").config();
const app = express();
const ruta = require("./Rutas/ruta2");
const logMiddleware = require("./FechaYhora/middleware"); // Importa el middleware

// Aplica el middleware a todas las rutas
app.use(logMiddleware);

app.use(ruta);

const port = process.env.PORT || 3000;

// Inicia el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
