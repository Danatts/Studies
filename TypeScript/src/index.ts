import { Curso } from "./models/Curso";
import { Estudiante } from "./models/Estudiante";
import { ITarea, Nivel } from "./models/interfaces/ITareas";
import { Empleado } from "./models/Persona";
import { Programar } from "./models/Programar";

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

// Clases y objetos

const cursoTS = new Curso("TypeScript", 15);
const cursoJS = new Curso("JavaScript", 25);

const listaCursos: Curso[] = [cursoJS, cursoTS];

const martin: Estudiante = new Estudiante("Martin", listaCursos, 101, "Gómez");

console.log(`${martin.nombre} estudia:`);
martin.cursos.forEach((curso: Curso) => console.log(curso.nombre));

console.log(martin.horasEstudiadas);

// Instancia de un objeto

console.log(martin instanceof Estudiante);

// Herencia y poliformismo

let empleado01 = new Empleado("Martin", "San José", 22, 2000);

// Uso de interfaces

let programar: ITarea = {
  titulo: 'Programar en TS',
  completado: false,
  urgencia: Nivel.Bloqueanta,
  descripcion: 'Practicar con Katas',
  resumen() {
      return `Título: ${this.titulo}`
  },
}

let programarTS = new Programar("TypeScript", "Tarea de programación en TS", false, Nivel.Bloqueanta);
console.log(programarTS.resumen());
