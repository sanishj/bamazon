CREATE DATABASE bamazonDB; 

CREATE TABLE bamazonDB.products 
  ( 
     item_id            INTEGER(11) AUTO_INCREMENT NOT NULL, 
     product_name       VARCHAR(256),
     department_id      INTEGER(11),
     department_names   VARCHAR(256), 
     price              DECIMAL(10,2), 
     stock_quantity     INTEGER(10),
     PRIMARY KEY (item_id) 
  ); 

  SELECT * FROM bamazonDB.products;

  CREATE TABLE bamazonDB.departments 
  ( 
     department_id      INTEGER(11),
     department_names   VARCHAR(256), 
     over_head_costs    DECIMAL(10,2), 
     product_sales      DECIMAL(10,2),
     total_profit       DECIMAL(10,2)
     PRIMARY KEY (item_id) 
  ); 

  SELECT * FROM bamazonDB.departments;