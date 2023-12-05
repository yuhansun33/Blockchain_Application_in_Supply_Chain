CREATE DATABASE `blockchain`;
USE `blockchain`;

CREATE TABLE `user` (
    `UserID` int  NOT NULL AUTO_INCREMENT,
    `UserName` varchar(100)  NOT NULL ,
    `UserAddr` varchar(100)  NOT NULL ,
    `UserPassword` varchar(100)  NOT NULL ,
    PRIMARY KEY (
        `UserID`
    )
);

INSERT INTO user (UserName, UserAddr, UserPassword)
VALUES ('DDD', '0xc8d6Ff5bD64754025077306a1Ef866Df4b5f278A', '123321');