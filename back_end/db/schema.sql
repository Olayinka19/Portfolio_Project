DROP DATABASE IF EXISTS ahead_shoping;
CREATE DATABASE ahead_shoping;

\c ahead_shoping;

CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    price INT,
    image TEXT,
    category TEXT,
    is_favorite BOOLEAN
);