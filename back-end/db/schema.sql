DROP DATABASE IF EXISTS portfolios_dev;
CREATE DATABASE portfolios_dev;

\c portfolios_dev;

CREATE TABLE portfolios (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    item TEXT NOT NULL,
    description TEXT NOT NULL,
    price INT NOT NULL,
    url TEXT NOT NULL,
    image TEXT NOT NULL,
    category TEXT,
    is_favorite BOOLEAN
);