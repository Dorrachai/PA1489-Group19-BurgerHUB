"use strict";

const BurgerHub = require("/app/containers/kitchenView/kitchenview.js");

(async function() {
    try {
        const orders = await BurgerHub.showOrders("OrdersTb");
        console.table(orders);
    } catch (error) {
        console.error("Error fetching orders:", error);
    }
})();

