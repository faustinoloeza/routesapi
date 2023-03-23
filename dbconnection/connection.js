//import sql from "mssql";
//import config from "../config";
const sql = require('mssql');
const config =  require("../config");


const dbSettings = {
  user: config.dbUser,
  password: config.dbPassword,
  server: config.dbServer,
  database: config.dbDatabase,
  options: {
    encrypt: true, // for azure
    trustServerCertificate: true, // change to true for local dev / self-signed certs
  },
};

const getConnection = async () => {
  try {
    const pool = await sql.connect(dbSettings);
    return pool;
  } catch (error) {
    console.error(error);
  }
};

const getConnection2 = async () => {
  try {
    const pool = new sql.ConnectionPool(dbSettings);
    const poolConnect = pool.connect();
    
    return pool;
  } catch (error) {
    console.error(error);
  }
};

//export { sql };

module.exports = {
    getConnection,
    //sql
}