import { Injectable } from '@angular/core';
import { EstadoVzlaComponent } from 'src/app/components/estado-vzla/estado-vzla.component';
import { Ligas } from '../Interfaces/Ligas';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  ligas: Ligas;
  nombreLiga: string [];



  constructor() {
  }





}
