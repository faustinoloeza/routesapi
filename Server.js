const express = require("express");
const config =  require("./config");

const cors = require("cors");
const userRoutes = require("./routes/user.routes");

class Server {
  constructor() {
    this.app = express();
    this.PORT = config.PORT;
    this.middlewares();
    this.routes();
  }

  middlewares(){
    this.app.use(express.static('public'));
    this.app.use(cors());
    this.app.use(express.json());
  }

  routes() {
    this.app.use(userRoutes);
  }

  listen() {
    this.app.listen(this.PORT, () => {
      console.log("Server on port", this.PORT);
    });
  }
}

module.exports = Server;