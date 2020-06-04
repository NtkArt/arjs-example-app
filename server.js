const express = require("express");
const path = require("path");
const app = express();

app.set("/", "html");
app.use(express.static(path.join(__dirname, "/")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  return res.render("index");
});

const port = 3333;

app.listen(port, () => {
  console.log("Servidor rodando na porta: ", port);
});
