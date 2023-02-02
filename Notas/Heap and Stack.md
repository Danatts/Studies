# Heap and Stack

El ***heap*** y el ***stack*** son partes de la memoria disponibles al código para usar en el tiempo 
de ejecución. El *stack* almacena los valores en el orden en que son añadidos y los remueve en orden
contrario. A esto de le llama *last in, first out*. Añadir un elemento de le dice *pushing* y
quitarlo *popping*. Toda información almacenada en el *stack* tiene un tamaño fijo conocido, de lo
contrario, debe almacenarse en el *heap*.

El *heap* es menos ordenado: cuando se añaden datos, se solicita una cierta cantidad de espacio, el 
asignador de memoria encuentra un espacio vacio dentro del *heap* con el suficiente espacio, lo
marca como usado y devuelve un puntero, que es la dirección de esa locación. A este proceso se le
conoce como *allocating*.

Ahora, como el puntero del *heap* es conocido y tiene un tamaño fijo, este puede almcenarse dentro
del *stack*, por lo que, cuando se necesita los datos, se sigue la ubicación del puntero.

Añadir datos al *stack* es más rápido que en el *heap* porque no se debe buscar un lugar para los
nuevos datos; el espacio siempre estará en la parte superior del *stack*.

Acceder a los datos en el *heap* es más lento porque hay que seguir un puntero para llegar a él. El
procesador puede hacer mejor su trabajo si los datos están juntos entre ellos en vez de que estén
lejos entre sí.
