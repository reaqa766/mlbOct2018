import { Equipo } from "./Equipo";

export  interface  Liga {
  nombre: string,
  esPaga: string,
  logo?: string,
  equipos: Equipo[],
}
