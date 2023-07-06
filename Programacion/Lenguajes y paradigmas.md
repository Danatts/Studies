# Lenguajes y paradigmas

## Paradigmas de programación

### Imperativo vs Declarativo

Los imperativos son una secuencia de instrucciones que le van diciendo paso a paso qué hacer al
sistema. Por el contrario, los declarativos se centran en el qué y no en el cómo; es decir,
  definimos qué queremos hacer y ya el sistema resuelve cómo hacerlo.

### Funcionales vs Procedimentales

  En la programación funcional se encapsula una serie instrucciones dentro de funciones que podemos
  reusar a lo largo del código, mientras que la programación procedimental se escribe de forma
  suelta en el código y se ejecuta de forma secuencial.

  Conceptos de progamación funcional:

  - **Funciones pura:** Es aquella que, con los mismos parámetros, siempre devuelve el mismo resultado
  sin importar las veces que se le llame.

  - **Funciones sin estado:** Es aquella que no tienen variables o estados internos que se usen dentro
  de la función.

### Orientado a objetos

  A partir de unas **clases** que contienen unos atributos (datos) y métodos (funciones) se crean los
  diversos objetos con sus particularidades propias. A esto de le llama *instanciar*.
  Los diversos objetos dentro de un sistemas interaccionan y se relacionan entre sí.

  Conceptos de objetos:

  - **Abstracción:** El principio de abstracción lo que implica es que la clase debe representar
  las características de la entidad hacia el mundo exterior, pero ocultando la complejidad que
  llevan aparejada. O sea, nos abstrae de la complejidad que haya dentro dándonos una serie de
  atributos y comportamientos (propiedades y funciones) que podemos usar sin preocuparnos de qué
  pasa por dentro cuando lo hagamos.


  - **Encasulamiento:** La encapsulación es la característica de un lenguaje POO que permite quede
  todo lo referente a un objeto quede aislado dentro de éste. Es decir, que todos los datos
  referentes a un objeto queden "encerrados" dentro de éste y sólo se puede acceder a ellos a
  través de los miembros que la clase proporcione (propiedades y métodos).

  - **Herencia:** En la POO, cuando una clase hereda de otra, obtiene todos los rasgos que tuviese la
  primera. Dado que una clase es un patrón que define cómo es y cómo se comporta una cierta entidad,
  una clase que hereda de otra, obtiene todos los rasgos de la primera, añade otros nuevos y, además,
  también puede modificar algunos de los que ha heredado.

  - **Polimorfismo:** El concepto de polimorfismo se refiere al hecho de que varios objetos de
  diferentes clases, pero con una base común, se pueden usar de manera indistinta, sin tener que
  saber de qué clase exacta son para poder hacerlo.

## Niveles de lenguajes de programación

### Bajo nivel

  Relacionado directamente con el hardware y la arquitectura.

  - **Lenguaje máquina:** Escrito en lenguaje binario.
  - **Lenguaje ensamblador:** Abstracción del lenguaje de máquina a funciones muy específicas.

### Medio-bajo nivel

  Tienen una sintaxis más amigable para la lecutra humana, y, sin embargo, tienen capacidades de bajo
  nivel como el acceso a registros de memoria.

  Los lenguajes más conocidos son C y C++.

### Medio-alto nivel

  Son la mayoría de lenguajes modernos con una sintaxis muy simple y con mucha abstracción.

  Algunos lenguajes son Python, JavaScript, Java, Php, C#.

### Alto nivel

  Son frameworks basados en lenguajes de medio nivel que facilitan aun más la escritura de código.

## Proceso de conversión

### Compilación vs interpretación

  En el lenguaje compilado, el código es convertido a un nuevo archivo traducido al binario que es
  capaz de ser leido directamente por el procesador.

  En el lenguaje interpretado, el código es leido linea por linea por un intérprete en timpo real que
  le va dando las instrucciones al sistema.

  [Artículo explicativo a fondo](https://medium.com/basecs/a-deeper-inspection-into-compilation-and-interpretation-d98952ebc842)
