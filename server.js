const express = require("express");
let app = express();
let PORT = process.env.PORT || 3000;
app.use("/assets", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.send(
    `<!DOCTYPE html> <html lang="en> <head><link rel="stylesheet" href="/assets/style.css"> <title>Document</title> </head> <body> <h1>Hola Mundo </h1> <p> Este es un parrafo y su contenido debe ser azul</p></body> </html>`
  );
});

app.get("/person/:id", (req, res) => {
  res.render("person", { ID: req.params.id, Qstr: req.query.qstr });
});

app.get("/persona/:id", (req, res) => {
  res.render("persona", {
    ID: req.params.id,
    MSG: req.query.message,
    TS: req.query.times,
  });
});

app.use("/assets", express.static(__dirname + "/public"));

app.set("view engine", "ejs");

app.listen(PORT);
