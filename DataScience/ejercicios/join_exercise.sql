CREATE TABLE city (
	city_id INT NOT NULL,
	city VARCHAR(50),
	PRIMARY KEY (city_id)
);

CREATE TABLE country (
	country_id INT NOT NULL,
	city_id INT,
	country VARCHAR(50),
	PRIMARY KEY (country_id),
	FOREIGN KEY (city_id) REFERENCES city(city_id)
);

INSERT INTO city VALUES (1, "Bogotá");
INSERT INTO city VALUES (2, "Barcelona");
INSERT INTO city VALUES (3, "Londres");
INSERT INTO city VALUES (4, "Roma");
INSERT INTO city VALUES (5, "Moscú");

SET FOREIGN_KEY_CHECKS=0;
INSERT INTO country VALUES (1, 1, "Colombia");
INSERT INTO country VALUES (2, 2, "España");
INSERT INTO country VALUES (3, 4, "Italia");
INSERT INTO country VALUES (4, 6, "Brasil");
INSERT INTO country VALUES (5, 7, "Perú");

# LEFT JOIN
SELECT city, country
FROM city AS CI
LEFT JOIN country AS CO ON CI.city_id = CO.city_id;
# LEFT JOIN NULL
SELECT city, country
FROM city AS CI
LEFT JOIN country AS CO ON CI.city_id = CO.city_id
WHERE CO.city_id IS NULL;
# RIGHT JOIN
SELECT city, country
FROM city AS CI
RIGHT JOIN country AS CO ON CI.city_id = CO.city_id;
# RIGHT JOIN
SELECT city, country
FROM city AS CI
RIGHT JOIN country AS CO ON CI.city_id = CO.city_id
WHERE CI.city_id IS NULL;
#
# INNER JOIN
SELECT city, country
FROM city AS CI
INNER JOIN country AS CO ON CI.city_id = CO.city_id;
# FULL OUTER JOIN
SELECT city, country
FROM city AS CI
FULL OUTER JOIN country AS CO
ON CI.city_id = CO.city_id;
# FULL OUTER JOIN NULL
SELECT city, country
FROM city AS CI
FULL OUTER JOIN country AS CO
ON CI.city_id = CO.city_id;
