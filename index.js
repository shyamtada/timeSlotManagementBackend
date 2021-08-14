const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
const slots = require("./routes/slots");
require("./connections/mysql").createConnection();

app.get("/", (req, res) => {
  res.status(200).json({message: 'Hello world'});
});

var corsOptions = {
  credentials: true,
  origin: function (origin, callback) {
      callback(null, true)
  },
  allowedHeaders: "Accept, Origin, X-Requested-With, X-Auth-Token, X-Auth-Userid, Authorization, Content-Type, Cache-Control, Access-Control-Allow-Origin"
};

app.use(cors(corsOptions));
app.options("*", cors());
app.use("/slots", slots);


const PORT = 3005;
app.listen(PORT, () => {
  console.log("App running on http://localhost:3005");
});