-- DROP DATABASE IF EXISTS hwitter_auth;
-- CREATE DATABASE hwitter_auth;

-- \c hwitter_auth;

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS hweets;
DROP TABLE IF EXISTS hashtags;

CREATE TABLE users
(
    id VARCHAR PRIMARY KEY,
    email VARCHAR
);

CREATE TABLE hweets
(
    id VARCHAR PRIMARY KEY,
    hweets_id VARCHAR REFERENCES users(id) ON DELETE CASCADE,
    content TEXT,
    time_stamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE hashtags
(
    id VARCHAR PRIMARY KEY,
    hweets_id VARCHAR REFERENCES users(id) ON DELETE CASCADE,
    post_id VARCHAR REFERENCES hweets(id) ON DELETE CASCADE,
    tag_name TEXT,
    time_stamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
