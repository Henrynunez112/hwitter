DROP DATABASE IF EXISTS hwitter_auth;
CREATE DATABASE hwitter_auth;

\c hwitter_auth;

DROP TABLE IF EXISTS hashtags;
DROP TABLE IF EXISTS hweets;
DROP TABLE IF EXISTS users;

CREATE TABLE users
(
    id VARCHAR NOT NULL PRIMARY KEY,
    email VARCHAR,
    firstname VARCHAR,
    lastname VARCHAR,
    imgurl VARCHAR
);

CREATE TABLE hweets
(
    id SERIAL NOT NULL PRIMARY KEY,
    hweets_id VARCHAR REFERENCES users(id) ON DELETE CASCADE,
    content VARCHAR(280),
    time_stamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE hashtags
(
    id SERIAL NOT NULL PRIMARY KEY,
    post_id SERIAL REFERENCES hweets(id) ON DELETE CASCADE,
    hweet_tags VARCHAR,
    time_stamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);



