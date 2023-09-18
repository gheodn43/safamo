CREATE TABLE Users (
    Userid INT PRIMARY KEY IDENTITY(1,1),
    user_role_id INT FOREIGN KEY REFERENCES user_role(id),
    Username NVARCHAR(255) NOT NULL,
    Password NVARCHAR(255) NOT NULL,
    SDT NVARCHAR(10),
	CCCD NVARCHAR(12),
    Email NVARCHAR(255),
	Address NVARCHAR(255),
	Memberpoint INT,
	Avatar NVARCHAR(255),
	birthdate DATE,
);
CREATE TABLE user_role (
    id INT PRIMARY KEY IDENTITY(1,1),
    role_name NVARCHAR(255) NOT NULL,
);
CREATE TABLE OTP (
    OTPID INT PRIMARY KEY IDENTITY(1,1),
    Userid INT FOREIGN KEY REFERENCES Users(Userid),
    OTPCode NVARCHAR(6) NOT NULL,
    ExpiryTime DATETIME NOT NULL
);
CREATE TABLE property_role (
        id INT PRIMARY KEY IDENTITY(1,1),
		role_name NVARCHAR(255)
);
CREATE TABLE property (
id INT PRIMARY KEY IDENTITY(1,1),
property_role_id INT FOREIGN KEY REFERENCES property_role(id),
prop_name NVARCHAR(255) NOT NULL,
Address NVARCHAR(255),
Userid INT FOREIGN KEY REFERENCES Users(Userid),
);
CREATE TABLE room_status_role (
id INT PRIMARY KEY IDENTITY(1,1),
room_status_name NVARCHAR(50) NOT NULL
);
CREATE TABLE tag(
id INT PRIMARY KEY IDENTITY(1,1),
tag_name NVARCHAR(50) NOT NULL
);
CREATE TABLE request_role(
id INT PRIMARY KEY IDENTITY(1,1),
request_name NVARCHAR(50) NOT NULL
);
CREATE TABLE request_status_role(
id INT PRIMARY KEY IDENTITY(1,1),
request_status_name NVARCHAR(50) NOT NULL
);
CREATE TABLE request(
id INT PRIMARY KEY IDENTITY(1,1),
request_role_id INT FOREIGN KEY REFERENCES request_role(id),
status_id INT FOREIGN KEY REFERENCES request_status_role(id),
description NVARCHAR(255)
);
CREATE TABLE room(
    id INT PRIMARY KEY IDENTITY(1,1),
	property_id INT FOREIGN KEY REFERENCES property(id),
	room_number INT,
    rating FLOAT,  
	acreage DECIMAL(8, 2), 
    price DECIMAL(10, 2),  
    description NVARCHAR(255),
    maximum_people INT
);
CREATE TABLE room_status (
    id INT PRIMARY KEY IDENTITY(1,1),
	room_id INT FOREIGN KEY REFERENCES room(id),
    room_status_role_id INT FOREIGN KEY REFERENCES room_status_role(id),
);

CREATE TABLE room_tag(
 id INT PRIMARY KEY IDENTITY(1,1),
	room_id INT FOREIGN KEY REFERENCES room(id),
	tag_id INT FOREIGN KEY REFERENCES tag(id),
);