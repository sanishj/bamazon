# BAMAZON 
This is an Amazon-like storefront built with NodeJS &amp; MySQL. The app will take in orders from customers and deplete stock from the store's inventory. The App also tracks product sales across store's departments and then provide a summary of the highest-grossing departments in the store.

## Getting started

1. Open your command line (CLI) program (*e.g.*, GitBash, Terminal, etc.)

2. Type the following command to install the required node packages

    ```
    npm install
    ```

3. To run the application, type 

    ```
    node bamazonCustomer.js
    ```

## Screenshots
The Prompt lists all the available products by querying the Database and users can choose the desired product they wish to buy. Next they are prompted with the quantity they wish to purchase.

Screenshot of live query from database. 
![Image](https://github.com/sanishj/bamazon/blob/master/screenshots/liveQueryFromDB.JPG)

Screenshot if there is insufficient quantity in the database. 
![Image](https://github.com/sanishj/bamazon/blob/master/screenshots/tooMuchQty_100.JPG)
![Image](https://github.com/sanishj/bamazon/blob/master/screenshots/insufficientStockMsg.JPG)

Screenshot of message of the order went through that displays Total cost.
![Image](https://github.com/sanishj/bamazon/blob/master/screenshots/Qty_5.JPG)
![Image](https://github.com/sanishj/bamazon/blob/master/screenshots/ordered.JPG)

Screenshot of product (before and after purchase).
![Image](https://github.com/sanishj/bamazon/blob/master/screenshots/dbBeforePurchase.JPG)
![Image](https://github.com/sanishj/bamazon/blob/master/screenshots/dbAfterPurchase.JPG)
