-- MySQL Script generated by MySQL Workbench
-- 07/06/16 11:18:13
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema super_store
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema super_store
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `super_store` DEFAULT CHARACTER SET utf8 ;
USE `super_store` ;

-- -----------------------------------------------------
-- Table `super_store`.`Brand`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `super_store`.`Brand` (
  `BrandID` INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `BrandName` VARCHAR(100) NOT NULL,
  `Description` VARCHAR(1000) NOT NULL,
  PRIMARY KEY (`BrandID`),
  INDEX `BrandID` (`BrandID` ASC),
  INDEX `BrandID_2` (`BrandID` ASC))
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `super_store`.`Review`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `super_store`.`Review` (
  `ReviewID` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `ReviewContent` VARCHAR(1000) NOT NULL,
  `CustomerID` INT(10) UNSIGNED NOT NULL,
  `ProductID` INT(10) UNSIGNED NOT NULL,
  `Rating` TINYINT(3) UNSIGNED NOT NULL,
  PRIMARY KEY (`ReviewID`),
  INDEX `CustomerID` (`CustomerID` ASC, `ProductID` ASC))
ENGINE = InnoDB
AUTO_INCREMENT = 1
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `super_store`.`Product`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `super_store`.`Product` (
  `ProductID` INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `ProductName` VARCHAR(100) NOT NULL,
  `Description` VARCHAR(1000) NOT NULL,
  `Price` DECIMAL(4,0) NOT NULL,
  `Color` VARCHAR(50) NOT NULL,
  `DateCreated` DATE NOT NULL,
  `Availability` VARCHAR(20) NOT NULL,
  `BrandID` INT(11) UNSIGNED NOT NULL,
  `LatestReviewID` INT UNSIGNED NULL,
  PRIMARY KEY (`ProductID`),
  INDEX `BrandID` (`BrandID` ASC),
  INDEX `LatestReview_idx` (`LatestReviewID` ASC),
  CONSTRAINT `ProductBrand`
    FOREIGN KEY (`BrandID`)
    REFERENCES `super_store`.`Brand` (`BrandID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `LatestReview`
    FOREIGN KEY (`LatestReviewID`)
    REFERENCES `super_store`.`Review` (`ReviewID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `super_store`.`User`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `super_store`.`User` (
  `UserID` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `UserName` VARCHAR(100) NOT NULL,
  `Email` VARCHAR(100) NOT NULL,
  `BirthDate` DATE NULL,
  `UserType` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`UserID`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
