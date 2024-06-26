import { Jugador } from "./Jugador";

export interface Equipo {

  nombre?: string,
  logo?: string,
  jugadores?: Jugador[],
  puntos?: string,
  managerId?: string,
  managerName?: string,
  paisDeResidencia?: string,
  nroJugadores?: any,
}
