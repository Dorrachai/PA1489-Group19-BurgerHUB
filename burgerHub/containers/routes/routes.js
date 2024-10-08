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
        const sides = await src.editOrder();
        res.render("./../containers/views/pages/place-order.ejs", { burger, sides });
    } catch (error) {
        res.status(500).send("An error occurred");
    }
});

router.post("/place-order", (req, res) => {
    try {
        const { burger, sides, drink } = req.body;
        res.send("Order placed successfully!");
    } catch (error) {
        res.status(500).send("An error occurred while placing the order");
    }
});

module.exports = router;
