
CREATE DATABASE CompanyDB;
GO

USE CompanyDB;
GO


CREATE TABLE Employees
(
    EmployeeID INT PRIMARY KEY,
    EmployeeName VARCHAR(100),
    Department VARCHAR(50),
    Salary DECIMAL(10,2)
);



INSERT INTO Employees VALUES
(101,'Kiran','IT',75000),
(102,'Rahul','HR',50000),
(103,'Sneha','Finance',68000),
(104,'Anjali','IT',82000),
(105,'Ravi','Sales',47000);


CREATE PROCEDURE GetAllEmployees
AS
BEGIN
    SELECT *
    FROM Employees;
END;
GO


EXEC GetAllEmployees;
GO