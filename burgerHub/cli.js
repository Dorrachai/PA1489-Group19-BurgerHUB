"use strict";

const BurgerHub = require("/app/containers/kitchenView/kitchenview.js");


const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

(async function() {
    try {
        const orders = await BurgerHub.showOrders("OrdersTb");
        console.table(orders);
    } catch (error) {
        console.error("Error fetching orders:", error);
    }
})();



(async function main() {
    displayMenu();

    rl.setPrompt("--> ");
    rl.prompt();

    rl.on("close", () => process.exit(0));
    rl.on("line", async (input) => {
        const [command, ...args] = input.trim().split(" ");

        switch (command) {
            case "menu":
            case "help":
            case "home":
            case "1":
                displayMenu();
                break;
            case "exit":
            case "quit":
                terminateProgram();
                break;
            case "3":
            case "Finish order":
                break;
            case "2":
            case "Orders":
                console.table(await BurgerHub.showOrders());
                break;
            default:
                displayMenu();
                break;
        }

        rl.prompt();
    });
})();

function displayMenu() {
    console.info(`
Menu:
=====================================================
1 Home:                         This menu
2 Orders:                       Shows orders
3 Finish order:                 Mark order done
exit, quit:                     Exit the program
=====================================================`);
}
