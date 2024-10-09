/*!999999\- enable the sandbox mode */ 
-- MariaDB dump 10.19  Distrib 10.6.18-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: mysql-db    Database: BurgerHub
-- ------------------------------------------------------
-- Server version	10.11.1-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `drinkstb`
--

DROP TABLE IF EXISTS `drinkstb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `drinkstb` (
  `drink_name` varchar(120) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `drinkstb`
--

LOCK TABLES `drinkstb` WRITE;
/*!40000 ALTER TABLE `drinkstb` DISABLE KEYS */;
INSERT INTO `drinkstb` VALUES ('Cola'),('Cola zero'),('Fanta exotic'),('Water'),('Milk'),('Applejuice'),('Gränges');
/*!40000 ALTER TABLE `drinkstb` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `menutb`
--

DROP TABLE IF EXISTS `menutb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `menutb` (
  `burger_name` varchar(40) DEFAULT NULL,
  `patty` varchar(40) DEFAULT NULL,
  `toppings` varchar(120) DEFAULT NULL,
  `sauce` varchar(40) DEFAULT NULL,
  `sidedish` varchar(40) DEFAULT NULL,
  `drink` varchar(40) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `menutb`
--

LOCK TABLES `menutb` WRITE;
/*!40000 ALTER TABLE `menutb` DISABLE KEYS */;
INSERT INTO `menutb` VALUES ('DoubleTrouble','beef','tomato, lettuce, cucumber, onion, cheese','BurgerHubspecial','Frenchfries','Colazero'),('Jamburger','beef','Caramlized onions, 2 cheese slices','Blueberry Jam','Sweet potato fries','Gränges'),('McCaterpiller','beef','4 chedder slices, Fried Egg, Peas, Onions, Roasted onions, Lettuce','Aoili, Ketchup','Mashed Potatoes','Milk'),('KrabbyPatty','beef','Cheese, Pickles, Lettuce, Tomatoes, Onions','Ketchup, Mustard','Mozarella sticks','Fanta exotic');
/*!40000 ALTER TABLE `menutb` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orderstb`
--

DROP TABLE IF EXISTS `orderstb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `orderstb` (
  `order_id` int(11) NOT NULL AUTO_INCREMENT,
  `burger` varchar(40) DEFAULT NULL,
  `sides` varchar(40) DEFAULT NULL,
  `drink` varchar(40) DEFAULT NULL,
  UNIQUE KEY `order_id` (`order_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orderstb`
--

LOCK TABLES `orderstb` WRITE;
/*!40000 ALTER TABLE `orderstb` DISABLE KEYS */;
/*!40000 ALTER TABLE `orderstb` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sidestb`
--

DROP TABLE IF EXISTS `sidestb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sidestb` (
  `side_name` varchar(120) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sidestb`
--

LOCK TABLES `sidestb` WRITE;
/*!40000 ALTER TABLE `sidestb` DISABLE KEYS */;
INSERT INTO `sidestb` VALUES ('French fries'),('Sweet potato fries'),('Apple slices'),('Mozzarella sticks'),('Mashed Potatoes');
/*!40000 ALTER TABLE `sidestb` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-10-09 12:51:16
