var inquirer = require('inquirer');
var color = require('colorful'); //This package makes the CLI messages more 'colorful'

//connects to the Bamazon_db database
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root", //Your username
    password: "", //Supply your password here
    database: "bamazonDB"
})

var itemIdPrdData = [];

//Display stock by All item_id, product_name price
connection.query(`SELECT * FROM bamazonDB.products;`, function (err, res) {
    for (var i = 0; i < res.length; i++) {
        itemIdPrdData.push(res[i].item_id + ` | ` + res[i].product_name + ` | $` + res[i].price);
    }
    OrderPrompt();
    // connection.end(); // This ends the connection. it is a delivered function from mysql creator
});

var OrderPrompt = function () {
    inquirer.prompt([{
        type: `list`,
        name: `option`,
        message: color.green_bg(`\nWhat product would you like to buy?\n`),
        choices: itemIdPrdData //quering the DB to get item_id, name and price
    },
    {
        type: `input`,
        name: `qty_requested`,
        message: 'How many do you want to purchase?'
    }]).then(function (choice) {
        var query = `SELECT * FROM bamazonDB.products where ?`;
        var userSelected = choice.option.substring(0, 5) //substring so that we can pick up only the id from res
        connection.query(query,
            { item_id: userSelected }, function (err, res) {
                if (err) throw err;
                if (choice.qty_requested > res[0].stock_quantity) {
                    console.log(color.red_bg(`Insufficient quantity. We don't have that much stock`));
                } else {
                    console.log(color.green_bg(`Your order is being processed.`));
                    order(userSelected, choice.qty_requested, res[0].stock_quantity);
                }
            })
    })
}

order = function (item_id, qty_requested, stock_quantity) {
    var processOrder = `UPDATE bamazonDB.products SET ? WHERE ?`;
    connection.query(processOrder, [{
        stock_quantity: stock_quantity - qty_requested
    }, { item_id: item_id }
    ], function (err, res) {
        if (err) throw err;
        connection.query(`SELECT * FROM bamazonDB.products WHERE ?`,
            { item_id: item_id }, function (err, res) {
                if (err) throw err;
                console.log(color.green_bg(`Your order has been processed.\nTotal Cost = $` + res[0].price * qty_requested));
            });
        connection.end(); // This ends the connection. it is a delivered function from mysql creator
    });
};