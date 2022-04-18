const express = require("express");
const http = require("http");

// Initialize express application
const app = express();

let aeropuertos = [
  { nombre: "Bilbao", conexiones: ["Madrid", "Lisboa", "Londres"] },
  { nombre: "Madrid", conexiones: ["Bilbao", "Lisboa"] },
  { nombre: "Londres", conexiones: ["Madrid"] },
  { nombre: "Lisboa", conexiones: [] }
]

app.get('/aeropuertos', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(aeropuertos.map(aeropuerto => aeropuerto.nombre)));    // res.send() End the response process
});

app.get('/conexiones', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(aeropuertos.filter(aeropuerto => aeropuerto.nombre === req.query.aeropuerto)));    // res.send() End the response process
});

// Indicate the port in which the express application is listening
app.listen(4001, () => {
  console.log("El servidor está inicializado en el puerto 4001");
});