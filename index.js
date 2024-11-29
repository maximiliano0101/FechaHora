const express = require('express');
require("dotenv").config();
const moment = require('moment'); // Importa moment
const app = express();
const ruta = require("./Rutas/ruta2");

app.use(ruta);

const port = process.env.PORT || 3000;

// Muestra la fecha y hora al iniciar el servidor
app.listen(port, () => {
    const currentTime = moment().format('YYYY-MM-DD HH:mm:ss'); // Formatea la fecha y hora
    console.log(`Servidor en http://localhost:${port}`);
    console.log(`Servidor iniciado el: ${currentTime}`); // Imprime la fecha y hora
});
