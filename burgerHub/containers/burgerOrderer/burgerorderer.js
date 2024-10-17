"use strict";

const config = require("../../Containers/MenuStore/config/burgerhub.json");
const mysql = require("mysql2/promise");  // Use mysql2 with promises

let functions = {

    getBurger: async function (burger) {
        try {
            const db = await mysql.createConnection(config);  // Connect to the database
            let sql = `SELECT * FROM MenuTb WHERE burger_name = ?`;  // Query to select the burger
            const [rows] = await db.execute(sql, [burger]);  // Execute the query with the burger parameter
            
            await db.end();  // Close the database connection
    
            if (rows.length > 0) {
                // Assuming 'toppings' is stored as a comma-separated string in the database
                const toppings = rows[0].toppings.split(',').map(topping => topping.trim());  // Split and trim toppings
                return { ...rows[0], toppings };  // Return the burger data along with the toppings array
            } else {
                return null;  // Handle case when no burger is found
            }
        } catch (error) {
            console.error("Error executing query in getBurger:", error);
            throw error;  // Optionally throw the error so it can be handled elsewhere
        }
    },

    getSides: async function () {
        try {
            const db = await mysql.createConnection(config);  // Connect to the database
            let sql = `SELECT * FROM SidesTb`;  // Query to select all sides
            const [rows] = await db.execute(sql);  // Execute the query
            await db.end();  // Close the database connection
            // console.log(rows);
            return rows;  // Return the entire array of rows, not just the first row
        } catch (error) {
            console.error("Error executing query in editOrder:", error);
            throw error;  // Optionally throw the error so it can be handled elsewhere
        }
    },

    getDrinks: async function () {
        try {
            const db = await mysql.createConnection(config);  // Connect to the database
            let sql = `SELECT * FROM DrinksTb`;  // Query to select all sides
            const [rows] = await db.execute(sql);  // Execute the query
            await db.end();  // Close the database connection
            return rows;  // Return the entire array of rows, not just the first row
        } catch (error) {
            console.error("Error executing query in editOrder:", error);
            throw error;  // Optionally throw the error so it can be handled elsewhere
        }
    },

    placeOrder: async function (burger, toppings, sides, drink) {
        try {
            // console.log("Burger:", burger);
            // console.log("Toppings:", toppings);
            // console.log("Sides:", sides);
            // console.log("Drink:", drink);
    
            const db = await mysql.createConnection(config);  // Connect to the database
            let sql = `INSERT INTO OrdersTb (burger, toppings, sides, drink) VALUES (?, ?, ?, ?)`;  // Insert query
            const toppingsStr = toppings.join(', ');  // Convert toppings array to a string (e.g., "lettuce, tomato")
            const [result] = await db.execute(sql, [burger, toppingsStr, sides, drink]);  // Execute query with values
            await db.end();  // End the connection after insertion
            return result;
        } catch (error) {
            console.error("Error executing query in placeOrder:", error);
            throw error;  // Throw the error to handle it elsewhere
        }
    },

    getOrderId: async function () {
        const db = await mysql.createConnection(config);
        let sql = `SELECT order_id FROM OrdersTb ORDER BY order_id DESC LIMIT 1;`
        const [result] = await db.execute(sql);
        await db.end();
        return result[0];
    },
    
    
}

module.exports = functions;
