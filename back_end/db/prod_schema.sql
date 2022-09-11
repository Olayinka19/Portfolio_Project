CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    price INT,
    image TEXT,
    blockchain_id TEXT,
    category TEXT,
    description TEXT,
    is_favorite BOOLEAN
);