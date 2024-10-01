"use strict";

const express = require("express");
const router = express.Router();
// const src = require("");


router.get("/", (req, res) => {

    res.render("./../Containers/views/pages/index.ejs");
});

router.get("/order", (req, res) => {

    res.render("./../Containers/views/pages/order.ejs");
});

router.get("/place-order", (req, res) => {
    const burger = req.query.burger;
    res.render("./../Containers/views/pages/place-order.ejs", { burger });
});



module.exports = router;