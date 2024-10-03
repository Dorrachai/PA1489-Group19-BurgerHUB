"use strict";

const config = require("/app/containers/menuStore/config/burgerhub.json");
const mysql = require("mysql2/promise");  // Use mysql2 with promises

let functions = {

    // Function to edit an order (querying data)
    editOrder: async function () {
        try {
            const db = await mysql.createConnection(config);  // Connect to the database
            let sql = `SELECT * FROM SidesTb`;  // Query to select all sides
            const [rows] = await db.execute(sql);  // Execute the query
            await db.end();  // Close the database connection

            return rows;  // Return the entire array of rows, not just the first row
        } catch (error) {
            console.error("Error executing query in editOrder:", error);
            throw error;  // Optionally throw the error so it can be handled elsewhere
        }
    },


    // Function to place an order (inserting data)
    placeOrder: async function (burger, sides, drink) {
        try {
            const db = await mysql.createConnection(config);  // Connect to the database
            let sql = `INSERT INTO OrdersTb (burger, sides, drink) VALUES (?, ?, ?)`;  // Insert query
            const [result] = await db.execute(sql, [burger, sides, drink]);  // Execute query with values
            await db.end();  // End the connection after insertion
            return result;
        } catch (error) {
            console.error("Error executing query in placeOrder:", error);
        }
    },
}

module.exports = functions;
