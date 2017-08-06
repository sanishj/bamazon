var inquirer = require('inquirer');
var color = require('colorful'); //This package makes the CLI messages more 'colorful'

//connects to the Bamazon_db database
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root", //Your username
    password: "007intel", //Supply your password here
    database: "bamazonDB"
})

var itemIdPrdData = [];

// constructor function used to create programmers objects
function Selection(item_id, numberItem) {
  this.item_id = item_id;
  this.numberItem = numberItem;
}

//Display stock by All item_id, product_name price, stock_quantity
connection.query('SELECT * FROM bamazonDB.products;', function(err, res) {
	for (var i = 0; i < res.length; i++) {
            itemIdPrdData.push(res[i].item_id + " | " + res[i].product_name);
        }
        console.log(itemIdPrdData);
        console.log("-----------------------------------");
        prompt();
        connection.end(); // This ends the connection. it is a delivered function from mysql creator
    });

prompt = function() {
    inquirer.prompt([{
        type: 'list',
        name: 'option',
        message: color.green_bg('\nWhat product would you like to buy?\n'),
        choices: itemIdPrdData
    }, 
    {
    type: 'input',
    name: 'numberItem',
    message: 'How many do you want to purchase?'
  }]).then(function(choice) {
      var newGuy = new Programmer(choice.option, choice.numberItem);
        console.log(newGuy);
    })
}

/*
The app should then prompt users with two messages.
The first should ask them the ID of the product they would like to buy.
The second message should ask how many units of the product they would like to buy.
Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.
If not, the app should log a phrase like Insufficient quantity!, and then prevent the order from going through.
However, if your store does have enough of the product, you should fulfill the customer's order.
This means updating the SQL database to reflect the remaining quantity.
Once the update goes through, show the customer the total cost of their purchase.*/

//executing code
