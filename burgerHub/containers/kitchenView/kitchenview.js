"use strict";

const config = require("../../Containers/MenuStore/config/burgerhub.json");
const mysql = require("mysql2/promise");

let kitchenview = {
    
    showOrders: async function () {
        const db = await mysql.createConnection(config);  // Connect to the database
        let sql = `SELECT * FROM OrdersTb;`;
        
        const [rows] = await db.execute(sql);  // Destructure to get only the rows
        console.table(rows);  // Log only the rows (actual data)
        
        await db.end();  // Close the database connection
    
        return rows;  // Return the rows
    }    

}
module.exports = kitchenview