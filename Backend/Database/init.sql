CREATE TABLE products(ID INT PRIMARY KEY NOT NULL, NAME TEXT NOT NULL, PRICE REAL NOT NULL, IMAGE TEXT, DESCRIPTION TEXT);

CREATE TABLE users(EMAIL TEXT PRIMARY KEY NOT NULL, HASHEDPASSWORD TEXT NOT NULL, USERNAME TEXT, IMAGE TEXT);

INSERT INTO products VALUES (1, "Red Nike Shoes", 79.99, "revolt-red-nike-unsplash.jpg","A red pair of slightly used shoes made by Nike");

INSERT INTO products VALUES (0, "Canvas Rusksack", 49.99, "jakob-owens-O_rusksack-unsplash.jpg" ,"A brand new rusksack");
