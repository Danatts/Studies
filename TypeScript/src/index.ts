// DECLARACIÓN DE VARIABLES

// TIPOS PRIMITIVOS
const PI: number = 3.1416;
let nombre: string = 'Daniel';
let yes: boolean = true;
let whatever: any = 'Hola'; // 'any' hace que la variable pueda cambiar de tipo
let vacio: void;
let indefinido: undefined = undefined;
let no: null; // Es como si no se declarara ni asignara pero existe de alguna forma

// TIPOS COMPUESTOS

// Listas
let listaTodos: string[] = ["Todo01", "Todo02"];

let valores: (string | number | boolean)[] = [false, 'Hola', true, 56];

// Enums
enum Estados {
  "Completado", // Valor implícito es 0
  "Incompleto", // Valor implícito es 1
  "Pendiente" // Valor implícito es 2
}

enum PuestoCarrera {
  "Primero" = 1, // Valor implícito es 1
  "Segundo", // Valor implícito es 2
  "Tercero", // Valor implícito es 3
}

let estadoTodo: Estados = Estados.Completado;

// Interfaces

interface Tarea {
  nombre: string,
  estado: Estados,
  urgencia: number
}

let tarea01: Tarea = {
  nombre: "Tarea01",
  estado: Estados.Pendiente,
  urgencia: 1
}

// Tipos

type Producto = {
  precio: number,
  nombre: string,
}

/** 
* Según la documentación, la diferencia entre interfaces y tipos es que los primeros son extensibles, mientras que los segundos son fijos.
*/

// Funciones

function saludar(persona: string) {
  console.log(`Hola, ${persona}`);
}

function despedir(persona?: string) { // Puede recibir o no el parámetro de persona
  if(persona){
    console.log(`Adios, ${persona}`);
  } else {
    console.log(`Adios`);
  }
}

function variosTipos(a: string | number) {
  if (typeof a === 'string') {
    console.log('Es un string')
  } else if (typeof a === 'number'){
    console.log('Es un number')
  } else {
    console.log('No es ni string ni number')
  }
}

function ejemploReturn(nombre: string, apellido: string):string {
  return `${nombre} ${apellido}`
}
