# BASE DE DATOS: Sakila
# Lista de todos los nombres de los actores
SELECT first_name FROM actor;
# Lista de los nombres y apellidos de los actores
SELECT first_name, last_name FROM actor;
# Lista de todas las columnas de la tabla city
SELECT * FROM city;
# Actores que tienen de apellido 'Johansson'
SELECT * FROM actor WHERE last_name = "Johansson";
# Actores que contengan una 'O' en su nombre y una 'A' en su apellido
SELECT * FROM actor WHERE first_name LIKE "%O%" AND last_name LIKE "%A%";
# Ciudades que empiezan por 'a'
SELECT * FROM city WHERE city LIKE "A%";
# Ciudades que acaben por 's'
SELECT * FROM city WHERE city LIKE "%S";
# Listar el nombre y el apellido de los actores con el alias para la columna: nombre completo
SELECT CONCAT(first_name, ' ', last_name) AS "nombre completo" FROM actor;
# Obtener los nombres de las ciudades en mayúscula y en minúscula con el alias para las columnas: city may. cuty min
SELECT UPPER(city) AS "city may", LOWER(city) "city min" FROM city;
# Título de las películas con una duración entre 80 y 100
SELECT title, length FROM film WHERE length BETWEEN 80 AND 100;
# Películas con un título de más de 12 letras
SELECT title, LENGTH(title) FROM film WHERE LENGTH(title) > 12 ORDER BY LENGTH(title) DESC LIMIT 10;
# ¿Cuántos actores hay?
SELECT COUNT(actor_id) AS "numero actores" FROM actor;
# Media de duración de películas
SELECT AVG(length) AS "duracion media" FROM film;
# Película con mayor duración
SELECT MAX(length) AS "duracion maxima" FROM film;
SELECT title, length FROM film WHERE length = (SELECT MAX(length) from film);
# Película con menor duración
SELECT MIN(length) AS "duracion minima" FROM film;
SELECT title, length FROM film WHERE length = (SELECT MIN(length) from film);
# Mostrar el nombre de la película y el nombre completo de los actores
SELECT title, CONCAT(first_name, ' ', last_name) AS actor
FROM film AS A 
LEFT JOIN film_actor AS B ON A.film_id = B.film_id
RIGHT JOIN actor AS C ON B.actor_id = C.actor_id
ORDER BY title;
# Cuántas películas ha realizado el actor ED CHASE
SELECT COUNT(film_id)
FROM actor AS A
LEFT JOIN film_actor as B ON A.actor_id = B.actor_id
WHERE A.first_name = "ED" AND A.last_name = "CHASE";
# Cantidad de películas por características especiales
SELECT special_features, COUNT(special_features) AS "count" FROM film GROUP BY special_features;
# Crear las columnas 'year', 'month', 'day' a partir de la fecha de la tabla actor (CAST, SUBSTRING)
SELECT last_update, 
SUBSTRING(last_update, 1, 4)  AS 'year',
SUBSTRING(last_update, 6, 2)  AS 'month',
SUBSTRING(last_update, 9, 2)  AS 'day'
FROM actor;
# Fecha de actualización de las tablas (DISTINCT)
SELECT DISTINCT(A.last_update), B.last_update
FROM actor as A
JOIN film as B;
# Número de películas de cada rating
SELECT rating, COUNT(film_id) FROM film GROUP BY rating;
# Mostrar los 10 actores que más películas han hecho
SELECT CONCAT(A.first_name, ' ', A.last_name) as "actor", COUNT(film_id) as "# films" 
FROM film_actor as F 
LEFT JOIN actor as A ON F.actor_id = A.actor_id
GROUP BY actor
ORDER BY COUNT(film_id) DESC
LIMIT 10;
# Mostrar los 5 actores que menos películas han hecho
SELECT CONCAT(A.first_name, ' ', A.last_name) as "actor", COUNT(film_id) as "# films" 
FROM actor as A 
LEFT JOIN film_actor as F ON A.actor_id = F.actor_id
GROUP BY actor
ORDER BY COUNT(film_id) DESC
LIMIT 10;
# Mostrar los 5 actores que menos películas han hecho
SELECT CONCAT(A.first_name, ' ', A.last_name) as "actor", COUNT(film_id) as "# films" 
FROM actor as A 
LEFT JOIN film_actor as F ON A.actor_id = F.actor_id
GROUP BY actor
ORDER BY COUNT(film_id) ASC
LIMIT 5;
# Películas de la categoría "Action"
SELECT F.title, C.name
FROM film as F
LEFT JOIN film_category as FC ON F.film_id = FC.film_id
LEFT JOIN category as C on FC.category_id = C.category_id
WHERE C.name = "Action";
# Clientes de Argentina
SELECT CONCAT(first_name, " ", last_name) AS customer, city, country
FROM customer as CU
LEFT JOIN address as AD ON CU.address_id = AD.address_id
LEFT JOIN city AS CT ON AD.city_id = CT.city_id
LEFT JOIN country AS CO ON CT.country_id = CO.country_id
WHERE country = "Argentina";
# Clientes que hayan alquilado películas de la categoría "Action"
SELECT CONCAT(first_name, " ", last_name) AS customer, FI.title, CA.name
FROM customer as CU
INNER JOIN rental as RE ON CU.customer_id = RE.customer_id
INNER JOIN inventory as IV ON RE.inventory_id = IV.inventory_id
INNER JOIN film as FI ON IV.film_id = FI.film_id
INNER JOIN film_category as FC ON FI.film_id = FC.film_id
INNER JOIN category as CA on FC.category_id = CA.category_id
WHERE CA.name = "Action";
