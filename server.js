const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
// Incoming PORT details
var corsOptions = {
  origin: "http://localhost:4200"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");

db.sequelize.sync();

  
  
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Our Node Server" });
});

require("./app/routes/turorial.routes")(app);
require("./app/routes/user.routes")(app);
require("./app/routes/student.routes")(app);
require("./app/routes/staff.routes")(app);
require("./app/routes/trainer.routes")(app);
require("./app/routes/member.routes")(app);
require("./app/routes/sub.routes")(app);
require("./app/routes/alumni.routes")(app);
require("./app/routes/subreport.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
