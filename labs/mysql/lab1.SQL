LAB 1

--1. Select the title, description, and length of all films that are longer than 120 minutes. Sort them from the longest to the shortest
SELECT 
title,description,length FROM film 
WHERE length > 120 
ORDER BY length DESC;

--2. Find all films that have a rental_rate of 0.99 or 2.99, but their replacement_cost is greater than 20.00
SELECT * FROM film 
WHERE rental_rate IN (0.99, 2.99) 
AND replacement_cost > 20;

--3. Count the total number of films available in each rating (G, PG, R, etc.)
SELECT rating,COUNT(*) FROM film 
GROUP BY rating;

--4. List the customer_ids who have made more than 30 separate payments in the payment table.
SELECT customer_id,COUNT(payment_id) FROM payment 
GROUP BY customer_id 
HAVING COUNT(payment_id) > 30;

--5. Get all "Cities" in the database and the "Country" they belong to, but only for cities located in 'Egypt'
SELECT city,country FROM city 
JOIN country ON city.country_id = country.country_id 
WHERE country = "egypt";

--6. Display a list of all films and the names of the actors who starred in them. (show film id, title and actor name)
SELECT film.film_id,film.title,
CONCAT(actor.first_name, ' ', actor.last_name) AS actor_name FROM film 
JOIN film_actor ON film.film_id = film_actor.film_id 
JOIN actor ON film_actor.actor_id = actor.actor_id;

--7. Find all customers who have rented a movie but haven't returned it yet. (show the customer name and the film title).
SELECT CONCAT(customer.first_name, ' ', customer.last_name) AS customer_name,film.title 
FROM customer 
JOIN rental ON customer.customer_id = rental.customer_id 
JOIN inventory ON rental.inventory_id = inventory.inventory_id 
JOIN film ON inventory.film_id = film.film_id 
WHERE rental.return_date IS NULL;

--8. List the titles of all films whose length is greater than the average length of all films in the database.
SELECT title FROM film 
WHERE length > (SELECT AVG(length) FROM film);

--9. Write a query to find the first_name, last_name, and email of customers who have zero rental records
SELECT first_name, last_name, email FROM customer 
WHERE customer_id NOT IN (SELECT customer_id FROM rental);

--10. Create a view named customer_spending_summary. This view should display each customer's name, their total number of rentals, and the total amount of money they have paid.
CREATE VIEW customer_spending_summary AS 
SELECT 
  CONCAT(customer.first_name, ' ', customer.last_name) AS customer_name,
  COUNT(rental.rental_id) AS total_rentals,
  SUM(payment.amount) AS total_spent 
FROM customer 
JOIN rental ON customer.customer_id = rental.customer_id 
JOIN payment ON rental.rental_id = payment.rental_id 
GROUP BY customer.customer_id;

--11. Use the previous view to find only customers who spent more than $100
SELECT * 
FROM customer_spending_summary 
WHERE total_spent > 100;