const sql = require("mssql");
const connection = require("../dbconnection/connection.js");

const getProducts = async (req, res) => {
  try {
    const pool = await connection.getConnection();
    const result = await pool
      .request()
      .input("id", sql.Int, req.params.id)
      .execute("getUsers");

    if (result.recordset.length > 0) {
      res.json(result.recordset);
    } else {
      res.status(404).json({ message: "No se encontraron registros" });
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const getUsuarios = async (req, res) => {
  try {
    const pool = await connection.getConnection();
    const result = await pool
      .request()
      .input("id", sql.Int, req.params.id)
      .execute("getUsers");

    if (result.recordset.length > 0) {
      res.json(result.recordset);
    } else {
      res.status(404).json({ message: "No users" });
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const getUsers = (req, res) => {
  try {
    connection
      .getConnection()
      .then((pool) => {
        return (
          pool
            .request()
            .query("select * from Users")
        );
      })
      .then((result) => {
        res.status(200).send(result.recordset);
        sql.close();
      })
      .catch((err) => {
        res.status(202).send(err);
        sql.close();
      });
  } catch (err) {
    console.log(err);
  }
};

const getUser = (req, res) => {
  const {id} = req.params;
  console.log(id);

  if(id != null || id != undefined){
    res.json({
      message: "sds World",
      name: "Jorge",
      age: 25,
      id: id
    });
  }else{
    res.json({
      message: "SIN ID"
    });
  }

};

const postUser = (req, res) => {
  const body = req.body;
  res.json({
    message: "Hello World",
    name: "Jorge",
    age: 25,
  });
};

const putUsers = (req, res) => {
  res.json({
    message: "Hello World",
    name: "Jorge",
    age: 25,
  });
};

const postUsers = (req, res) => {
  let {name, age} = req.body;

  res.json({
    message: "Hello World POST",
    name: name,
    age: age,

  });
};

const notFound = (req, res) => {
  res.send("No se encontro la ruta");
};

const savePoint = async (req, res) => {
  const { Latitud = 0, Longitud = 0, name } = req.body;
  try {
    const pool = await connection.getConnection();
    const result = await pool
      .request()
      .input("name", sql.Char, name)
      .input("Latitud", sql.Float, Latitud)
      .input("Longitud", sql.Float, Longitud)
      .execute("savePoints");

    if (result.recordset.length > 0) {
      res.json(result.recordset);
    } else {
      res.status(404).json({ message: "No users" });
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const getPoints = async (req, res) => {
  const { name="" } = req.body;
  console.log(name);
  try {
    const pool = await connection.getConnection();
    const result = await pool
      .request()
      .input("name", sql.Char, name)
      .execute("getPoints");

    if (result.recordset.length > 0) {
      res.json(result.recordset);
    } else {
      res.status(404).json({ message: "No geopoints" });
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

module.exports = {
  getUsers,
  putUsers,
  postUsers,
  notFound,
  getProducts,
  getUsuarios,
  savePoint,
  getPoints,
  getUser,
};