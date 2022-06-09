create TABLE users(
    userID SERIAl PRIMARY KEY,
    email VARCHAR(255),
    password VARCHAR(255),
    userRoleID INTEGER,
    FOREIGN KEY (userRoleID) REFERENCES userRoles (userRoleID)
);

create TABLE userRoles(
    userRoleID SERIAl PRIMARY KEY,
    userRoleName VARCHAR(255)
);
