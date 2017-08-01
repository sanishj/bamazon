CREATE DATABASE bamazonDB; 

CREATE TABLE bamazonDB.products 
  ( 
     item_id         INTEGER(11) AUTO_INCREMENT=1001 NOT NULL, 
     movie      VARCHAR(60) NOT NULL, 
     five_times BOOLEAN NOT NULL DEFAULT 0, 
     score      INTEGER(10), 
     PRIMARY KEY (id) 
  ); 