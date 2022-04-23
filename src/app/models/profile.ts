import { DatePipe } from "@angular/common";

export class Profile {
  $key?:string;
  id: string;
  name: string;
  lastname: string;
  email: string;
  birthDate: Date;
  gender: string;
  country: string;
  city: string;
  team: string;
  isFantasy: boolean;
  instagram?: string;
  liga?: string;
}
