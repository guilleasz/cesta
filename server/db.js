const { Pool } = require("pg");
const util = require("util");

const pool = new Pool({
  connectionLimit: 10,
  host: "localhost",
  port: "5437",
  user: "postgres",
  password: process.env.DB_PASSWORD,
  database: "postgres",
});

const q = (sql, parameters) => {
  return new Promise((resolver, reject) => {
    pool.connect((err, client, done) => {
      if (err) {
        return console.log(err);
      }
      client.query(sql, parameters, (error, result) => {
        done();
        if (error) return reject(error);
        return resolver(result.rows);
      });
    });
  });
};

module.exports = {
  q,
};
