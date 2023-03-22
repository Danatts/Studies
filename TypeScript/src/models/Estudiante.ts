import { Curso } from "./Curso";

export class Estudiante {
  //Propiedades de clase
  nombre: string;
  apellidos?: string;
  cursos: Curso[];
  private ID: number; // Solo se puede obtener o cambiar desde un getter o un setter

  // Constructor
  constructor(nombre: string, cursos: Curso[], ID:number, apellidos?:string) {
    this.nombre = nombre;
    this.cursos = cursos;
    this.ID = ID;
    if(apellidos) this.apellidos = apellidos;
  }

  get horasEstudiadas(): number {
    let horasEstudiadas = 0;
    this.cursos.forEach((curso: Curso) => {
      horasEstudiadas += curso.horas;
    })
    return horasEstudiadas;
  }

  set IDSetter(ID: number) {
    this.ID = ID;
  }
}

