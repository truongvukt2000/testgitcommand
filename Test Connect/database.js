const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "bpu9ef9qlhijkmbpw3id-mysql.services.clever-cloud.com",
  user: "udawm4q21k2lwpop",
  port: 3306,
  password: "45khdZIfLm0GcwtW8nKa",
  database: "bpu9ef9qlhijkmbpw3id",
});

module.exports = connection;
