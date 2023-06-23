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
