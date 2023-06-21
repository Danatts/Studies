# Introducción a SQL

## Comandos básicos

- SELECT
- WHERE
- INSERT
- DELETE
- UPDATE

## Tipos de bases de datos

### Relacionales

- Su estructura está en tablas, filas y columnas.
- Es posible estableces vínculos o relaciones entre tablas.
- Evita duplicidad de registros y garantiza la integridad referencial.
- Gestión de forma segura bajo normas y de modo uniforme.

### No Relacionales

- Se almacenan en documentos.
- Tienen una gran capacidad de escalabilidad.
- Son utilizadas para granes volúmenes de datos.
- Son flexibles en su esquema.
- Ofrecen alto rendimiento.

## Modelo ACID

### Atomicidad

Consiste en una serie de pasos, de los que o bien de ejecutan todos o ninguno, es decir, las transacciones son completas.

### Consistencia

Nos permite asegurar que los datos son exactos y consistentes, es decir que estén siempre intactos,
sean siempre los esperados.

### Aislamiento

Asegura que la realización de dos transacciones sobre la misma información sean independientes y no
generen ningún tipo de error.

### Durabilidad

Asegura que, una vez realizada la operación, esta persistirá y no se podrá deshacer, aunque falle el
sistema.

## Tipos de comandos SQL

### DDL: Definición de datos

- CREATE
- DROP
- ALTER
- TRUNCATE

### DML: Manipulación de datos

- INSERT
- UPDATE
- DELETE

### DCL: Control de datos

- GRANT
- REVOKE

### TCL: Control de transacciones

- COMMIT
- ROLLBACK
- SAVE POINT

### DQL: Consulta de datos

- SELECT

