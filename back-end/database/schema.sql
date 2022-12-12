DROP DATABASE IF EXISTS blog;
create database blog;
use blog;
create table user(
id int AUTO_INCREMENT ,
username varchar(255),
email varchar(255),
password text,
image text,
PRIMARY KEY (id)
);
create table post(
id int AUTO_INCREMENT ,
tags varchar(255),
title varchar(255),
context text,
image text,
cover_img text,
pub  BOOLEAN,
user_id int not null,
PRIMARY KEY (id),
FOREIGN KEY (user_id) REFERENCES user(id)
);



-- ///   mysql -u root -p <back-end/database/schema.sql;   ///