## Steps to install

Please find below the steps to install the backend server and mysql dump  

### Clone this repository
```
git clone https://github.com/shyamtada/timeSlotManagementBackend.git
cd timeSlotManagementBackend
```
Install node modules
```
npm install
```

### Steps to install DB Dump
Using MySQL version 8.0
Connect To Mysql root user to create user for our backend

```
CREATE USER 'server'@'localhost'IDENTIFIED WITH mysql_native_password BY 'backend@123';
```

Grant Privileges to this user
```
GRANT ALL PRIVILEGES ON digital_trons_db.*  TO server@localhost;
```

Flush Privileges
```
FLUSH PRIVILEGES;
```
Create Dabatabase
```
create database digital_trons_db;
```
Install MySQL dump from the file `db_dump.sql` in the root directory.
From root directory of the project,
```
mysql -userver -pbackend@123 digital_trons_db < db_dump.sql
```
### Start the project
Run this command from the root directory to start the backend server. 
```
node index.js
```
---
### Endpoints
|Endpoint  |Description  |
|--|--|
| GET /slots | get list of booked slots |
| POST /slots | book new slot | 
| PUT /slots | update a slot | 
| GET /slots/:slot | get details of specific slot |