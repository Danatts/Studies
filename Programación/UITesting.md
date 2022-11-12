# UI Testing

![Pirámide de testing](./assets/img06.png)

Este enfoque busca dejar de lado el testing unitario y enfocarse el en testing
de lo que sería la experiencia del usuario. Para estos test se usa **Cypress**,
que se escribe en JavaScript.

[Documentación](https://docs.cypress.io/guides/overview/why-cypress)

Añadiendo `/// <reference types="Cypress" />` arriba del cóodigo permite aplicar
Intellisense a los comandos de Cypress.

Es mejor agregar un `data-cy` a los componentes de la aplicación para que cypress
reconozca los elementos.
