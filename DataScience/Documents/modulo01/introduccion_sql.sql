# Create a new database
CREATE DATABASE myfirstdb;
# Delete a database
DROP DATABASE myfirstdb;
# Show tables
SHOW TABLES FROM myfirstdb;
# Select database to work
USE myfirstdb;
# Create table
CREATE TABLE clients (
	id_client INT PRIMARY KEY NOT NULL,
  name VARCHAR(50) NOT NULL,
  address VARCHAR(50) NOT NULL,
  phone INT 
);
# Show data from table
SELECT * FROM clients;
# Create a new record in the table eith defined order
INSERT INTO clients (id_client, name, address, phone)
VALUES (001, "Daniel Arteta", "Calle 6 # 3 - 4", 312555777);
# Alter the structure of the table
ALTER TABLE clients MODIFY phone BIGINT;
# Create a new record in the table with the same order as the table structure
INSERT INTO clients VALUES (002, "Alfonso Salazar", "Calle 7 # 4 - 5", 3125557778);
# Update record value
UPDATE clients SET phone = 3125557777 WHERE id_client = 001;
# Delete records with condition
DELETE FROM clients WHERE name = "Daniel Arteta";
# Drop table
DROP TABLE clients;
