var inquirer=require('inquirer');

//connects to the Bamazon_db database
var mysql=require('mysql');
var connection=mysql.createConnection({
	host:"localhost",
	port: 3306,
	user:"root", //Your username
	password:"", //Supply your password here
	database:"bamazonDB"})

//shows if you're connected or not
connection.connect(function(err){
	if(err) throw err;
	console.log("connected as id "+connection.threadID);
	console.log();})

//Display stock by All item_id, product_name price, stock_quantity
connection.query('SELECT * FROM bamazonDB.products;',function(err,res){
	for(var i=0;i<res.length;i++){
		console.log(res[i].item_id+" | "+res[i].product_name+" | "+res[i].price+" | "+res[i].stock_quantity);
		}
	console.log("-----------------------------------");
});