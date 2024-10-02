"use strict";

const config = require("/app/Containers/MenuStore/config/burgerhub.json")// insert config file
const mysql = require("promise-mysql");


let functions = {

    editOrder: async function (burgerName) {
        const db = await mysql.createConnection(config);
        let sql = (`SELECT * FROM MenuTb WHERE burger_name = '?';`);
        const res = await db.query(sql, [burgerName]);

        return res;
    },

    placeOrder: async function (burger, sides, drink) {
        const db = await mysql.createConnection(config);
        let sql = (`INSERT INTO OrdersTb (burger, sides, drink)
        VALUES ('?', '?', '?');`);

        const res = await db.query(sql, [burger, sides, drink]);
    }





}

module.exports = functions;