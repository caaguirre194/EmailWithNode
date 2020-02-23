const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const config = require("./config");
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use(cors());

app.post("/formulario", (req, res) => {
  config(req.body);
  res.status(200).send();
});

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
