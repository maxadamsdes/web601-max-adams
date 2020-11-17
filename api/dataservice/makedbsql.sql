use max;

-- Creates a user table
drop table if exists User;
create table User(
   ID int auto_increment primary key,
   FirstName varchar(25),
   Lastname varchar(25),
   Email varchar(30),
   Password varchar(30),
   Type int(1),
   College varchar(30),
   Year int(2)
);

insert into User(FirstName, Lastname, Email, Password, Type, College, Year)
values ('Max', 'Adams', 'maxadamswork@gmail.com', 'Adams123', 1, 'Waimea', 20),
      ('Wendy', 'Johns', 'wendy@gmail.com', 'Wendy123', 0, '', 0),
      ('Test', 'Test', 'test@gmail.com', 'Test1234', 1, 'Test', 12),
      ('Test2', 'Test2', 'test2@gmail.com', 'Test21234', 0, 'Test2', 12);


drop procedure if exists GetUsers;
delimiter //
create procedure GetUsers()
begin
      select * from Person;
end //
delimiter ;

drop procedure if exists CheckPassword;
delimiter //
create procedure CheckPassword (pEmail VARCHAR(50), pPassword VARCHAR(50))
begin
     DECLARE vResult int ;
     select 
            case  
               when Email = pEmail and Password = pPassword then 1
               when Email = pEmail and Password <> pPassword then 0
            end as Result
    from 
       User
    where
        pEmail = Email
    into vResult;

    if ISNULL(vResult) then 
      set vResult = -1;
    end if;

    SELECT vResult as Result;
end //
delimiter ;
-- Test CheckPassword
call CheckPassword('Max','P@ssword1');
call CheckPassword('Max','P@ssword11');
call CheckPassword('Maxy','P@ssword11');

drop procedure if exists CheckEmail;
delimeter //
create procedure CheckEmail (pEmail VARCHAR(25))
begin
   DECLARE vResult varchar ;
     select Email from 
       User
    where
        pEmail = Email
    into vResult;

    if ISNULL(vResult) then 
      set vResult = -1;
    else
      set vResult = 1
    end if;


    SELECT vResult as Result;
end //
delimiter ;
-- Test CheckEmail
call CheckEmail('maxadamswork@gmail.com');
call CheckEmail('maxadamswork123@gmail.com');

-- Checks the users type to tell whether they can view admin content
drop procedure if exists CheckUserType;
delimeter //
create procedure CheckUserType (pEmail VARCHAR(25))
begin
   DECLARE vResult int ;
     select Type from 
       User
       end as Result
    where
        pEmail = Email
    into vResult;

    if ISNULL(vResult) then 
      set vResult = -1;
    end if;

    SELECT vResult as Result;
end //
delimiter ;
-- Test CheckUserType
call CheckUserType('maxadamswork@gmail.com');
call CheckUserType('wendy@gmail.com');

 

