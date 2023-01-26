DROP DATABASE IF EXISTS portfolios_dev;
CREATE DATABASE portfolios_dev;

\c portfolios_dev;

CREATE TABLE portfolios (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    url TEXT NOT NULL,
    category TEXT,
    is_favorite BOOLEAN
);