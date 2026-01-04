create table Employee(
    Fname varchar(20),
    Lname varchar(20),
    SSN int,
    Bdate date,
    Address varchar(100),
    Sex char(1),
    Salary int,
    Super_SSN int,
    Dno int,
    primary key (SSN),
    foreign key (Super_SSN) references Employee(SSN)
    foreign key (Dno) references Department(Dnumber)
);
create table department(
    Dname varchar(20),
    Dnumber int,
    Mgr_SSN int,
    Mgr_start_date date,
    primary key (Dnumber),
    foreign key (Mgr_SSN) references Employee(SSN)
);
create table works_for(
    Essn int,
    Pno int,
    Hours float,
    primary key (Essn, Pno),
    foreign key (Essn) references Employee(SSN)
    foreign key (Pno) references Project(Pnumber)
);
create table project(
    Pname varchar(20),
    Pnumber int,
    Plocation varchar(100),
    Dnum int,
    primary key (Pnumber),
    foreign key (Dnum) references Department(Dnumber)
);
create table dependent(
    Essn int,
    Dependent_name varchar(20),
    Sex char(1),
    Bdate date,
    primary key (Essn, Dependent_name),
    foreign key (Essn) references Employee(SSN)
    );

#insert data into the tables 

insert into Department(Dname, Dnumber, Mgr_SSN, Mgr_start_date) values
('DP1', 10, NULL, '2005-01-01'),
('DP2', 20, NULL, '2006-03-01'),
('DP3', 30, NULL, '2006-06-01'),
('DP4', 40, NULL, '2006-08-01');

insert into Employee(Fname, Lname, SSN, Bdate, Address, Sex, Salary, Super_SSN, Dno) values
('Ahmed', 'Ali', 112233, '1965-01-01', '15 Ali fahmy St.Giza', 'M', 1300, 223344, 10),
('Kamel', 'Mohamed', 223344, '1970-10-15', '38 Mohy el dien abo el Ezz St.Cairo', 'M', 1800, 321654, 10),
('Hanaa', 'Sobhy', 123456, '1973-03-18', '38 Abdel Khalik Tharwat St. Downtown.Cairo', 'F', 800, 223344, 10),
('Amr', 'Omran', 321654, '1963-09-14', '44 Hilopolis.Cairo', 'M', 2500, NULL, NULL);

update Department set Mgr_SSN = 223344 where Dnumber = 10;

insert into Project(Pname, Pnumber, Plocation, Dnum) values
('AL Solimaniah', 100, 'Cairo_Alex Road', 10),
('Al Rabwah', 200, '6th of October City', 10),
('Al Rawdah', 300, 'Zaied City', 10),
('Al Rowad', 400, 'Cairo_Faiyom Road', 20);

insert into Works_for(Essn, Pno, Hours) values
(223344, 100, 10),
(223344, 200, 10),
(223344, 300, 10),
(112233, 100, 40);

insert into Dependent(Essn, Dependent_name, Sex, Bdate) values
(112233, 'Hala Saied Ali', 'F', '1970-10-18'),
(223344, 'Ahmed Kamel Shawki', 'M', '1998-03-27'),
(223344, 'Mona Adel Mohamed', 'F', '1975-04-25'),
(321654, 'Ramy Amr Omran', 'M', '1990-01-26');

#1)insert my personal data
insert into Employee(Fname, Lname, SSN, Bdate, Address, Sex, Salary, Super_SSN, Dno) values('Abdallah', 'adel', 102672, '2004-01-01', 'minya,cairo', 'M', 80000, 112233, 30);

#2)insert my freind data
insert into Employee(Fname,Lname,SSN,Bdate,Address,Sex,Salary,Super_SSN,Dno) values('leo','messi',102660,'1990-08-13','argentina,buenos aires','M',NUll,NUll,30);

insert into Employee(Fname,Lname,SSN,Bdate,Address,Sex,Salary,Super_SSN,Dno) values('neymar','jr',112233,'1992-02-05','brazil,sao paulo','M',NUll,NUll,30);
#3)insert new department
update Department set Dname='DEPT IT' ,Dnumber=100 ,Mgr_SSN=112233,Mgr_start_date='2006-11-01' where Dnumber=2;

#4)update employee to be manager of the new department
update Employee set Dno=100 where SSN=102660;
update Employee set Super_SSN=102660 where SSN=102672;
update Department set Mgr_SSN=102660 where Dnumber=100;

#5)delete an employee and check if he is  manger of any thing thin make your friend replace his role
delete from Employee where SSN=1234567894;
update Employee set Dno=30 where SSN=102660;
update Department set Mgr_SSN=102660 where Dnumber=30;

#6)my salary increse 20 percent
update Employee set Salary=Salary*1.2 where SSN=102672;



#part 2 of lab1
#1)Display all the employee data
select * from Employee;

#2)Display the employee First name, last name, Salary and Department number
select Fname,Lname,Salary,Dno from Employee;

#3)3.Display all the projects names, locations and the department which is responsible about it
select Pname,Plocation,Dnum from Project;

#4)display the employees that will have annual commision and show it as ANNUAL COMM column
select Fname,Lname,Salary*1.1 as 'ANNUAL COMM' from Employee;

#5)display the employee id,name whose salary is more than 10000
select SSN,Fname,Lname from Employee where Salary>10000;

#6)display the employee id,name whose salary is more than 10000 annually
select SSN,Fname,Lname from Employee where Salary*12>100000;

#7)display name and salary of female employees
select Fname,Lname,Salary from Employee where Sex='F';

#8)display each department id and name which managed by employye with id = 102660
select Dnumber,Dname from Department where Mgr_SSN=102660;

#9)display id ,names and loctions of project which controlled with department =10   
select Pnumber,Pname,Plocation from Project where Dnum=10;









#lab2 

#1.	Display the Department id, name and id and the name of its manager.
#2.	Display the name of the departments and the name of the projects under its control.
#3.	Display the full data about all the dependence associated with the name of the employee they depend on him/her.
#4.	Display (Using Union Function)
#a.	The name and the gender of the dependence that's gender is Female and depending on Female Employee.
#b.	And the male dependence that depends on Male Employee.
#5.	Display the Id, name and location of the projects in Cairo or Alex city.
#6.	Display the Projects full data of the projects with a name starts with "a" letter.
#7.	display all the employees in department 30 whose salary from 1000 to 2000 LE monthly
#8.	Retrieve the names of all employees in department 10 who works more than or equal10 hours per week on "AL Rabwah" project.
#9.	Find the names of the employees who directly supervised with Kamel Mohamed.
#10.For each project, list the project name and the total hours per week (for all employees) spent on that project.
#11.Retrieve the names of all employees and the names of the projects they are working on, sorted by the project name.
#12.Display the data of the department which has the smallest employee ID over all employees' ID.
#13.For each department, retrieve the department name and the maximum, minimum and average salary of its employees.
#14.List the last name of all managers who have no dependents.
#15.For each department-- if its average salary is less than the average salary of all employees-- display its number, name and number of its employees.
#16.Retrieve a list of employees and the projects they are working on ordered by department and within each department, ordered alphabetically by last name, first name.
#17.For each project located in Cairo City , find the project number, the controlling department name ,the department manager last name ,address and birthdate.








# 1)
select Dnumber,Dname,Mgr_SSN from Department;

#2)
select Dname,Pname from Department join Project on Department.Dnumber=Project.Dnum;

#3)
select * from dependent;

#4)
select Dependent_name,Sex from dependent where Sex='F' and Essn in (select SSN from Employee where Sex='F') 
union select Dependent_name,Sex from dependent where Sex='M' and Essn in (select SSN from Employee where Sex='M');


#5)
select Pnumber,Pname,Plocation from Project where Plocation='Cairo' or Plocation='Alex';

#6)
select * from Project where Pname like 'a%';

#7)
select * from Employee where Dno=30 and Salary between 1000 and 2000;

#8)
select Fname,Lname from Employee where Dno=10 and Essn in (select Essn from Works_for where pno=200 and Hours>=10);

#9)
select Employee.Fname,Employee.Lname from Employee join Department on Employee.SSN=Department.Mgr_SSN where Department.Dname='Kamel Mohamed';

#10)
select Pname,sum(Hours) as total_hours from Project join Works_for on Project.Pnumber=Works_for.Pno group by Pname;

#11)
select Fname,Lname from Employee  join Works_for on Employee.SSN=Works_for.Essn join Project on Works_for.pno=Project.Pnumber order by Pname;

#12)
select * from Department join Employee on Department.Dnumber=Employee.Dno where Employee.SSN=min(Employee.SSN);

#13)
select Department.Dname,max(Employee.salary),min(Employee.salary),avg(Employee.salary)from Department join Employee on Department.Dnumber=Employee.Dno 
group by Department.Dname;

#14)
select Lname from Department join Employee on Department.Mgr_SSN=Employee.SSN where Department.Mgr_SSN not in (select Essn from dependent);

#15)
select Department.Dnumber,Department.Dname,count(Employee.SSN) as num_employees from Department join 
Employee on Department.Dnumber=Employee.Dno group by Department.Dnumber,Department.Dname 
having avg(Employee.Salary)<(select avg(Salary) from Employee);

#16)
select Employee.Fname,Employee.Lname,Project.Pnumber,Project.Pname,Project.Plocation from Employee join Works_for on Employee.SSN=Works_for.Essn join Project on Works_for.pno=Project.Pnumber order by Employee.Lname,Employee.Fname;

#17)
select Project.Pnumber,Department.Dname,Employee.Lname,Employee.Address,Employee.Bdate from Project join Department on Project.Dnum=Department.Dnumber 
join Employee on Department.Mgr_SSN=Employee.SSN where Project.Plocation='Cairo';










