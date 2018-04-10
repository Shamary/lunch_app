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

CREATE TABLE IF NOT EXISTS lunch_admin(username varchar(30) PRIMARY KEY,password varchar(100));
INSERT INTO lunch_admin(username,password) VALUES ("admin","$2b$10$8l6PIdGoli5YTtd0WtQ5Q.6kQwoP7ViCT6dNj7mjXJ5wwWFpWKFTu");