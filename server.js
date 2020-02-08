console.log("---- Starting the backend -----");
const cors = require("cors");
const express = require("express");
const app = express();

const medRouter = require("./route/med.route");
const farmRouter = require("./route/farm.route");

const Farm = require("./db-model/Farm");
const Med = require("./db-model/Med");

const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/Aplicatie_PAM-master";

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

_fillUpDB();

app.use(cors());
app.use("/", medRouter);
app.use("/", farmRouter);

app.listen(3002, () => {
  //console.log("listening on 3000");
  console.log("listening on 3002");
});

function _fillUpDB() {
  const farms = [];
  farms.push(
    new Farm({ name: "Apa", strada: "Apa minerala", nr: 1 })
  );
  farms.push(
    new Farm({ name: "Galuste", strada: "Cu prune", nr: 2 })
  );
  farms.push(
    new Farm({ name: "Branza", strada: "Mozzarella", nr: 3 })
  );

  for (const f of farms) {
    f.save();
  }

  const meds = [];
  meds.push(
    new Med({ name: "Apa", farmacie: "Apa minerala" })
  );

  
  for (const m of meds) {
    m.save();
  }
}