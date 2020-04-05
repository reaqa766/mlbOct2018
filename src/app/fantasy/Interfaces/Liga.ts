import { Equipo } from "./Equipo";
import { Jugador } from "./Jugador";

export  interface  Liga {
  nombre: string,
  esPaga: string,
  logo?: string,
  equipos: Equipo[],
  jugadores?: {jugador?: Jugador, equipo?: string}[]
}
