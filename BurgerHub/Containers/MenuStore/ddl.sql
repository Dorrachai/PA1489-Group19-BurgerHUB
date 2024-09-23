DROP TABLE IF EXISTS MenuTb;
DROP TABLE IF EXISTS SidesTb;
DROP TABLE IF EXISTS DrinksTb;
DROP TABLE IF EXISTS OrdersTb;

CREATE TABLE `MenuTb`
(

    `burger_name` VARCHAR (40),
    `patty` VARCHAR (40),
    `toppings` VARCHAR (120),
    `sauce` VARCHAR (40),
    `sidedish` VARCHAR (40),
    `drink` VARCHAR (40)

)

CREATE TABLE `SidesTb`
(

    `side_name` VARCHAR (120)

)

CREATE TABLE `DrinksTb`
(

    `drink_name` VARCHAR (120)

)

CREATE TABLE `OrdersTb`
(

    `orders` VARCHAR (40),

)