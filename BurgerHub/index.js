"use strict";

const express = require("express");
const port = 8008;
const app = express();
//const indexRoutes = require("./routes/routes.js");

app.set("view engine", "ejs");

app.use(express.static("public"));

app.use(express.urlencoded({ extended: false }));


//app.use(indexRoutes);

app.listen(port, () => {
    console.log(`Server starting on port: ${port}`);
});



