// Interface nos permite definir la firma y los puntos necesarios a implementar por quien la use.

export enum Nivel {
  "Informativa",
  "Urgente",
  "Bloqueanta",
}

export interface ITarea {
  titulo: string
  completado: boolean
  descripcion: string
  urgencia?: Nivel
  resumen: () => string
}
