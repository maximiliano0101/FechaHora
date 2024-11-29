const express = require('express');
const app = express();
const logMiddleware = require('./middlewares/logMiddleware');

// Usar el middleware para todas las rutas
app.use(logMiddleware);

// Importar las rutas
const ruta1 = require("./Rutas/ruta1");
const ruta2 = require("./routes/ruta2");

// Usar las rutas
app.use("/ruta1", ruta1);
app.use("/ruta2", ruta2);

module.exports = app;
