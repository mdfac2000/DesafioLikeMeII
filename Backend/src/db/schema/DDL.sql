CREATE DATABASE likeme;

\c likeme;

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(25) NOT NULL,
    img VARCHAR(1000) NOT NULL,
    descripcion VARCHAR(255) NOT NULL,
    likes INT DEFAULT 0
);

