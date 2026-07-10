
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

CREATE PROCEDURE GetEmployeesByDepartment
    @Department VARCHAR(50)
AS
BEGIN
    SELECT
        EmployeeID,
        EmployeeName,
        Department,
        Salary
    FROM Employees
    WHERE Department = @Department;
END;
GO


EXEC GetEmployeesByDepartment 'IT';
GO

EXEC GetEmployeesByDepartment 'HR';
GO