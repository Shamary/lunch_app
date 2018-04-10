CREATE DATABASE IF NOT EXISTS lunch_db;
USE lunch_db;

CREATE TABLE IF NOT EXISTS menu(
id int AUTO_INCREMENT PRIMARY KEY,
appetizer varchar(50), 
protein varchar(30), 
carb varchar(30), 
vegetable varchar(30), 
sides varchar(50));

CREATE TABLE IF NOT EXISTS orders(
name varchar(50),
branch int,
appetizer varchar(50), 
protein varchar(30), 
carb varchar(30), 
vegetable varchar(30), 
sides varchar(50));