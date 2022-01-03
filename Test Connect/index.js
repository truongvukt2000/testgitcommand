const express = require("express");
const connection = require("./database");

const app = express();

app.get("/classes", (req, res) => {
  let sql = "SELECT * FROM classes_info";
  connection.query(sql, (error, results) => {
    if (error) throw error;
    res.send(results);
  });
  //res.json(data);
});

app.listen(3000, (req, res) => {
  console.log("App listening on port 3000");
  connection.connect((err) => {
    if (err) throw err;
    else console.log("Database connected!");
  });
});
