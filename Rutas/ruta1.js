const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    console.log("La vida es buena");
    res.send("Esta es la Ruta 1");
});

module.exports = router;
