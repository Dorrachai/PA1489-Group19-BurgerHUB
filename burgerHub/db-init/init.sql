-- Create the database if it doesn't exist
CREATE DATABASE IF NOT EXISTS BurgerHub;

-- Switch to the database
USE BurgerHub;

-- Create MenuTb only if it doesn't exist
CREATE TABLE IF NOT EXISTS `MenuTb` (
    `burger_name` VARCHAR(40),
    `patty` VARCHAR(40),
    `toppings` VARCHAR(120),
    `sauce` VARCHAR(40),
    `sidedish` VARCHAR(40),
    `drink` VARCHAR(40)
);

-- Create SidesTb only if it doesn't exist
CREATE TABLE IF NOT EXISTS `SidesTb` (
    `side_name` VARCHAR(120)
);

-- Insert default sides if they don't already exist
INSERT IGNORE INTO `SidesTb` (`side_name`) VALUES ('Fries'), ('Onion Rings'), ('Salad');

-- Create DrinksTb only if it doesn't exist
CREATE TABLE IF NOT EXISTS `DrinksTb` (
    `drink_name` VARCHAR(120)
);

-- Insert default drinks if they don't already exist
INSERT IGNORE INTO `DrinksTb` (`drink_name`) VALUES ('Coke'), ('Pepsi'), ('Sprite');

-- Create OrdersTb only if it doesn't exist
CREATE TABLE IF NOT EXISTS `OrdersTb` (
    `order_id` INT NOT NULL AUTO_INCREMENT UNIQUE,
    `burger` VARCHAR(40),
    `sides` VARCHAR(40),
    `drink` VARCHAR(40)
);


DELETE FROM MenuTb;
DELETE FROM SidesTb;
DELETE FROM DrinksTb;

SET GLOBAL local_infile = 1;

LOAD DATA LOCAL INFILE 'menu.csv'
INTO TABLE MenuTb
CHARSET utf8
FIELDS
TERMINATED BY ','
ENCLOSED BY '"'
LINES
TERMINATED BY '\n'
IGNORE 1 LINES
;

LOAD DATA LOCAL INFILE 'sides.csv'
INTO TABLE SidesTb
CHARSET utf8
FIELDS
TERMINATED BY ','
ENCLOSED BY '"'
LINES
TERMINATED BY '\n'
IGNORE 1 LINES
;

LOAD DATA LOCAL INFILE 'drinks.csv'
INTO TABLE DrinksTb
CHARSET utf8
FIELDS
TERMINATED BY ','
ENCLOSED BY '"'
LINES
TERMINATED BY '\n'
IGNORE 1 LINES
;
