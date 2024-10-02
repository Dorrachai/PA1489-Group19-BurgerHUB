"use strict";

const express = require("express");
const router = express.Router();
const src = require("/app/Containers/BurgerOrderer/burgerorderer.js");


router.get("/", (req, res) => {

    res.render("./../Containers/views/pages/index.ejs");
});

router.get("/order", (req, res) => {

    res.render("./../Containers/views/pages/order.ejs");
});

router.get("/place-order", async (req, res) => {
    const burger = req.query.burger;
    console.log("1");
    console.log(burger);
    const burgerInfo = await src.editOrder(burger);
    console.log("2");
    console.log(burgerInfo);
    res.render("./../Containers/views/pages/place-order.ejs", { burger, burgerInfo });
});



module.exports = router;