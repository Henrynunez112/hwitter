-- DROP DATABASE IF EXISTS hwitter_auth;
-- CREATE DATABASE hwitter_auth;

-- \c hwitter_auth;

DROP TABLE IF EXISTS users;

CREATE TABLE users(
    id VARCHAR PRIMARY KEY,
    email VARCHAR
);
