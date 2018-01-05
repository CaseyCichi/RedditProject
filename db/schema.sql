SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';
DROP SCHEMA IF EXISTS `barkfeed_db` ;
CREATE SCHEMA IF NOT EXISTS `barkfeed_db`;
USE `barkfeed_db` ;

DROP TABLE IF EXISTS `barkfeed_db`.`Content` ;
CREATE TABLE IF NOT EXISTS `barkfeed_db`.`Content` (
  `ContentID` INT(11) NOT NULL AUTO_INCREMENT,
  `PostID` INT(11) NOT NULL,
  `Title` VARCHAR(45) NULL DEFAULT NULL,
  `Content` VARCHAR(45) NULL DEFAULT NULL,
  `AddDate` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  PRIMARY KEY (`ContentID`, `PostID`));

DROP TABLE IF EXISTS `barkfeed_db`.`User` ;
CREATE TABLE IF NOT EXISTS `barkfeed_db`.`User` (
  `UserID` INT(11) NOT NULL AUTO_INCREMENT,
  `Username` VARCHAR(45) NOT NULL UNIQUE,
  `Password` VARCHAR(45) NOT NULL,
  `Pawup` INT(11) NULL DEFAULT 0,
  `AddDate` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  PRIMARY KEY (`UserID`));

DROP TABLE IF EXISTS `barkfeed_db`.`PostType` ;
CREATE TABLE IF NOT EXISTS `barkfeed_db`.`PostType` (
  `PostTypeID` INT(11) NOT NULL AUTO_INCREMENT,
  `Type` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`PostTypeID`));

DROP TABLE IF EXISTS `barkfeed_db`.`Post` ;
CREATE TABLE IF NOT EXISTS `barkfeed_db`.`Post` (
  `PostID` INT(11) NOT NULL AUTO_INCREMENT,
  `UserID` INT(11) NOT NULL,
  `PostTypeID` INT(11) NOT NULL,
  `ParentID` INT(11) NULL DEFAULT NULL,
  `AddDate` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `Content_ContentID` INT(11) NOT NULL,
  `Content_PostID` INT(11) NOT NULL,
  PRIMARY KEY (`PostID`, `Content_ContentID`, `Content_PostID`));
