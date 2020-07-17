-- DROP DATABASE IF EXISTS hwitter_auth;
-- CREATE DATABASE hwitter_auth;

-- \c hwitter_auth;

DROP TABLE IF EXISTS hashtags;
DROP TABLE IF EXISTS hweets;
DROP TABLE IF EXISTS users;

CREATE TABLE users
(
    id VARCHAR NOT NULL PRIMARY KEY,
    email VARCHAR,
    firstname VARCHAR,
    lastname VARCHAR
);

CREATE TABLE hweets
(
    id SERIAL NOT NULL PRIMARY KEY,
    hweets_id VARCHAR REFERENCES users(id),
    content VARCHAR(280),
    time_stamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE hashtags
(
    id SERIAL NOT NULL PRIMARY KEY,
    post_id INT REFERENCES hweets(id) ON DELETE CASCADE,
    user_id VARCHAR REFERENCES users(id) ON DELETE CASCADE,
    hweet_tags VARCHAR,
    time_stamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users
    (id, email, firstname, lastname)
VALUES(2, 'little.s@gmail.com', 'henry', 'nunez'),
    (3, 'shorty.s@gmail.com', 'saul', 'nunez');
INSERT INTO hweets
    (hweets_id, content)
VALUES(2, 'hello world');
INSERT INTO hashtags
    (post_id, user_id, hweet_tags)
VALUES(1, 2, 'word')
