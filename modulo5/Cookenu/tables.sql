-- Active: 1656530725022@@35.226.146.116@3306@silveira-21814478-guilherme-lira
CREATE TABLE IF NOT EXISTS cookenu_users (
    id VARCHAR(64) PRIMARY KEY,
    name VARCHAR(64) NOT NULL,
    email VARCHAR(64) NOT NULL,
    password varchar(255) NOT NULL,
    role varchar(255) NOT NULL
);
