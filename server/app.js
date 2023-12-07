const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();

app.use(cors());

app.get("/products", async (req, res) => {
  try {
    const results = await db.q("select * from Products");
    res.send(results);
  } catch (e) {
    res.status(500).send(e);
  }
});

app.get("/products/:id", async (req, res) => {
  try {
    const results = await db.q("select * from Products where product_id = $1", [
      req.params.id,
    ]);
    res.send(results);
  } catch (e) {
    res.status(500).send(e);
  }
});

app.listen(5555, () => {
  console.log("Listening in port 5555");
});
