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
        console.log(burger);
        const burgerInfo = await src.getBurger(burger);
        const sides = await src.getSides();
        const drinks = await src.getDrinks();
        res.render("./../containers/views/pages/place-order.ejs", { burgerInfo, sides, drinks });
    } catch (error) {
        res.status(500).send("An error occurred");
    }
});

router.post("/place-order", async (req, res) => {
    try {
        console.log("Form data received:", req.body);  
        const { burger, sides, drink } = req.body;  
        const result = await src.placeOrder(burger, sides, drink);  
        if (result) {
            res.render("./../containers/views/pages/order-success");  
        } else {
            res.status(500).send("Order placement failed: No result returned from DB.");
        }
    } catch (error) {
        console.error("Error placing the order:", error);  // Log the full error
        res.status(500).send(`An error occurred while placing the order: ${error.message}`);
    }
});


module.exports = router;
