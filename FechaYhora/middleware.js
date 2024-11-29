const logMiddleware = (req, res, next) => {
    const ahora = new Date();
    console.log(`Fecha y Hora: ${ahora.toLocaleString()}`);
    console.log('Entraron a una ruta');
    next();
};

module.exports = logMiddleware;