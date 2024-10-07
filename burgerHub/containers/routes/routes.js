"use strict";

const express = require("express");
const router = express.Router();
const src = require('/app/containers/burgerOrderer/burgerorderer.js');


router.get("/", (req, res) => {

    res.render("./../containers/views/pages/index.ejs");
});

router.get("/order", (req, res) => {

    res.render("./../containers/views/pages/order.ejs");
});

router.get("/place-order", async (req, res) => {
    try {
        const burger = req.query.burger;
        const sides = await src.editOrder();  // Fetch the sides array from the database
        console.log(sides);

        // Ensure sides is passed as an array
        res.render("./../containers/views/pages/place-order.ejs", { burger, sides });
    } catch (error) {
        console.error("Error fetching data for place-order:", error);
        res.status(500).send("An error occurred");
    }
});


module.exports = router;
