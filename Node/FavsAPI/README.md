# FavsAPI

## Description

FavsAPI is a project made with the aim of practice
the creation of REST API.

## Challenge

Favs is a new company that aims to provide a better way to organize your
favorite things: music, clothes, courses, etc., all in one place.

The CEO of Favs hired you to develop the initial version of his product. It’s
worth mentioning that she does not have any technical background.

However, she has a clear vision on how the product should behave, so she
provided a list of functional requirements.

## Requirements

1. Each user will have a unique id, and he will authenticate using a non-empty
email and a password.
2. Each user will be able to save a list of favs. Each fav will have an title,
description and link, and each list will be defined by a unique id and a name.
3. The system have to allow the following actions:
  - Create a new list with a given name (auto-generate the unique id)
  - Get the users lists
  - Get an individual list for the user
  - Add items to a given list (based on the generated id)
  - All endpoints have to be secured with Bearer Auth (JWT)
  - You should ensure that the password is strong enough

## Endpoints

| Route | Verb | Middleware | Description | Required body data |
| - | - | - | - | - |
| /api/favs | GET | isAuth() | Get all user favorites lists | - |
| /api/favs | POST | isAuth() | Create a new favorites list | name: String |
| /api/favs/:id | GET | isAuth() | Get a single favorite list by it id | - |
| /api/favs/:id | DELETE | isAuth() | Delete a single favorite list by it id | - |
| /api/favs/:id | PATCH | isAuth() | Update a single favorite list by it id | - |
| /api/item | POST | isAuth() | Create a new item and insert it into the given id list | title: String, desc: String, link: String, favList: Object_id |
| /api/user | GET | isAuth() | Get all users | - |
| /api/user | POST | none | Create an user | name: String, email: String, password: String |
| /auth/local/login | POST | none | Check if a user is already registered and return an authentication token | email: String, password: String |
