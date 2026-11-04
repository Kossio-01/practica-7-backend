const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

// Habilitar CORS y parseo de JSON
app.use(cors());
app.use(express.json());

// Listado inicial de sensores en memoria
let sensores = [
  { _id: "1", nombre: "Sensor de Temperatura - UAO - InfoLab" }
];

// GET: Obtener listado de sensores
app.get("/sensores", (req, res) => {
  res.status(200).json(sensores);
});

// POST: Crear un nuevo sensor
app.post("/sensores", (req, res) => {
  const nuevoSensor = {
    _id: Date.now().toString(),
    nombre: req.body.nombre
  };
  sensores.push(nuevoSensor);
  console.log("Sensor agregado:", nuevoSensor);
  res.status(201).json(nuevoSensor);
});

app.listen(port, () => {
  console.log(`Servidor API REST escuchando en el puerto: ${port}`);
});