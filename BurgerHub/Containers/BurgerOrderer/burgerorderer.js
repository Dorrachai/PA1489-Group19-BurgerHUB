"use strict";

const config = require("./MenuStore/config/burgerhub.json")// insert config file
const mysql = require("promise-mysql");


let functions = {

    placeOrder: async function (burger, sides, drink) {
        const db = await mysql.createConnection(config);
        let sql = (`INSERT INTO OrdersTb (burger, sides, drink)
        VALUES ('?', '?', '?');`);

        const res = await db.query(sql, [burger, sides, drink]);
        
    }




}

module.exports = functions;