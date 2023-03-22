export class Persona {
  nombre: string;
  apellido: string;
  edad: number;

  constructor(nombre: string, apellido: string, edad: number) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
  }
}

export class Empleado extends Persona {
  sueldo: number;

  constructor(nombre: string, apellido: string, edad: number, sueldo: number) {
    super(nombre, apellido, edad); // Se pasa usando 'super' al ser una extensión de Persona
    this.sueldo = sueldo;
  }
}
