# Pasarelas de pago

## Pasarelas

1. ePayco
2. Mercado pago
3. Stripe

## Usando Stripe

1. Se captura la información de la transacción.
2. Se crea un token asociada a la información de tarjeta de crédito del usuario.
3. La información guardada se envía al backend.
4. Se genera el pago enviando la transacción a la pasarela y guardando los datos
de la transacción en la base de datos.
5. Se crea usuario en Stripe para asociar la transacción.

## Implementar Stripe en React

[Documentación](https://stripe.com/docs/stripe-js/react)

Stripe cuenta con varios componentes que ayudan a incorporar la pasarela de
pagos a nuestro proyecto de forma "nativa".
