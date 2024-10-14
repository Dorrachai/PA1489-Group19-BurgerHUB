"use strict";

const mysql  = require("promise-mysql");
const config = require("/app/containers/menuStore/config/burgerhub.json");
let db;

module.exports = {
    showOrders: showOrders
}

(async function() {
    db = await mysql.createConnection(config);

    process.on("exit", () => {
        db.end();
    });
})();

async function showOrders(table) {
    let sql = `SELECT * FROM OrderTb;`;
    let res;

    res = await db.query(sql, [table]);
    console.info(`SQL: ${sql} (${table}) got ${res.length} rows.`);

    return res;
}