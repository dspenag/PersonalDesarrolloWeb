// configurar express
const express = require("express");
const tareasRouter =require('./routes/tareas.routes');
const app = express();

app.use(express.json());

app.get("/api/salud", (req, res) => {
  res.json({ estado: "ok", mensaje: "API funcionando correctamente" });
});


app.use ('/api/tareas', tareasRouter);

module.exports = app;