CREATE DATABASE FAZT;
USE FAZT;

CREATE TABLE employee(
id_employee int auto_increment,
name varchar(45) DEFAULT NULL,
salary int DEFAULT NULL,
primary key (id_employee)
);

show tables;
describe employee;

use fazt;

INSERT INTO employee (name, salary) values 
('sofia', 1000),
('mateo', 800),
('lucas', 1200),
('sergio', 2500),
('cristian', 2000),
('yenny',  1172);

select* from employee;
select * from employee where id_employee = 1;

delete from employee where id_employee = 11;
UPDATE employee set name = 'mateo', salary = 1200 where id_employee = 3;