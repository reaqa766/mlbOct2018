import { Injectable } from '@angular/core';
import { EstadoVzlaComponent } from 'src/app/components/estado-vzla/estado-vzla.component';
import { Liga } from '../Interfaces/Liga';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  ligas: Liga[];
  nombreLiga: string [];



  constructor() {
  }





}
