const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    console.log("Sé tú mismo");
    res.send("Esta es la Ruta 2");
});

module.exports = router;
