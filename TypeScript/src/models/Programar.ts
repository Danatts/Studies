import { ITarea, Nivel } from "./interfaces/ITareas";

export class Programar implements ITarea {
  titulo: string;
  descripcion: string;
  completado: boolean;
  urgencia?: Nivel | undefined;

  constructor(
    titulo: string,
    descripcion: string,
    completado: boolean,
    urgencia: Nivel,
  ) {
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.completado = completado;
    this.urgencia = urgencia;
  }

  resumen = () => {
      return `Tarea de Programación: ${this.titulo} - ${this.completado}`
    }
}
