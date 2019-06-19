import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jug-equip-vzla',
  templateUrl: './jug-equip-vzla.component.html',
  styleUrls: ['./jug-equip-vzla.component.css']
})
export class JugEquipVzlaComponent implements OnInit {

  searchText: string;
  equipoSelecc= [];
  selectedImg;
  equipos = [ {codigo: 1, url: '../../../../assets/LEONES2.png', equipolvbp: 1, equipo: 'Leones del Caracas'},
    {codigo: 2, url: '../../../../assets/AGUILAS.png', equipolvbp: 2, equipo: 'Aguilas del Zulia'},
    {codigo: 3, url: '../../../../assets/LOGO ARAGUA.png', equipolvbp: 3, equipo: 'Tigres de Aragua'},
    {codigo: 4, url: '../../../../assets/bravos_.png', equipolvbp: 4, equipo: 'Bravos de Margarita'},
    {codigo: 5, url: '../../../../assets/cardenales.png', equipolvbp: 5, equipo: 'Cardenales de Lara'},
    {codigo: 6, url: '../../../../assets/magallanes_.png', equipolvbp: 6, equipo: 'Navegantes del Magallanes'},
    {codigo: 7, url: '../../../../assets/tiburones.png', equipolvbp: 7, equipo: 'Tiburones de La Guaira'},
    {codigo: 8, url: '../../../../assets/CARIBES.png', equipolvbp: 8, equipo: 'Caribes de Anzoátegui'},
  ];


  jugadores = [ {codigo:408234, nombre: 'Miguel Cabrera', url: '../../../../assets/408234.jpg', equipolvbp: 3, tipoJugador: 1},
                {codigo:471865, nombre: 'Carlos Gonzalez ', url: '../../../../assets/471865.jpg', equipolvbp: 2, tipoJugador: 1},
                {codigo:542255, nombre: 'Ender Inciarte', url: '../../../../assets/542255.jpg', equipolvbp: 2, tipoJugador: 1},
                {codigo:520471, nombre: 'Freddy Galvis', url: '../../../../assets/520471.jpg', equipolvbp: 2, tipoJugador: 1},
                {codigo:596059, nombre: 'Rougned Odor', url: '../../../../assets/596059.jpg', equipolvbp: 2, tipoJugador: 1},
                {codigo:444482, nombre: 'David Peralta', url: '../../../../assets/444482.jpg', equipolvbp: 4, tipoJugador: 1},
                {codigo:553869, nombre: 'Elias Diaz', url: '../../../../assets/553869.jpg', equipolvbp: 4, tipoJugador: 1},
                {codigo:553882, nombre: 'Omar Narvaez', url: '../../../../assets/553882.jpg', equipolvbp: 4, tipoJugador: 1},
                {codigo:642731, nombre: 'Thairo Estrada', url: '../../../../assets/642731.jpg', equipolvbp: 4, tipoJugador: 1},
                {codigo:527038, nombre: 'Wilmer Flores', url: '../../../../assets/527038.jpg', equipolvbp: 4, tipoJugador: 1},
                {codigo:514917, nombre: 'Cesar Hernandez', url: '../../../../assets/514917.jpg', equipolvbp: 5, tipoJugador: 1},
                {codigo:545121, nombre: 'Ildemaro Vargas', url: '../../../../assets/545121.jpg', equipolvbp: 5, tipoJugador: 1},
                {codigo:444489, nombre: 'Manny Piña', url: '../../../../assets/444489.jpg', equipolvbp: 5, tipoJugador: 1},
                {codigo:553902, nombre: 'Willians Astudillo', url: '../../../../assets/553902.jpg', equipolvbp: 8, tipoJugador: 1},
                {codigo:501303, nombre: 'Ehire Adrianza', url: '../../../../assets/501303.jpg', equipolvbp: 8, tipoJugador: 1},
                {codigo:606115, nombre: 'Orlando Arcia', url: '../../../../assets/606115.jpg', equipolvbp: 8, tipoJugador: 1},
                {codigo:452678, nombre: 'Asdrubal Cabrera ', url: '../../../../assets/452678.jpg', equipolvbp: 1, tipoJugador: 1},
                {codigo:553993, nombre: 'Eugenio Suarez', url: '../../../../assets/553993.jpg', equipolvbp: 1, tipoJugador: 1},
                // {codigo:467827, nombre: 'Gerardo Parra', url: '../../../../assets/467827.jpg', equipolvbp: 1, tipoJugador: 1},
                {codigo:650402, nombre: 'Gleyber Torres', url: '../../../../assets/650402.jpg', equipolvbp: 1, tipoJugador: 1},
                {codigo:602922, nombre: 'Jose Rondon ', url: '../../../../assets/602922.jpg', equipolvbp: 1, tipoJugador: 1},
                {codigo:462101, nombre: 'Elvis Andrus', url: '../../../../assets/462101.jpg', equipolvbp: 6, tipoJugador: 1},
                {codigo:465041, nombre: 'Francisco Cervelli', url: '../../../../assets/465041.jpg', equipolvbp: 6, tipoJugador: 1},
                // {codigo:491696, nombre: 'Jesus Sucre', url: '../../../../assets/491696.jpg', equipolvbp: 6, tipoJugador: 1},
                {codigo:514888, nombre: 'Jose Altuve', url: '../../../../assets/514888.jpg', equipolvbp: 6, tipoJugador: 1},
                {codigo:606299, nombre: 'Jose Peraza', url: '../../../../assets/606299.jpg', equipolvbp: 6, tipoJugador: 1},
                {codigo:467055, nombre: 'Pablo Sandoval', url: '../../../../assets/467055.jpg', equipolvbp: 6, tipoJugador: 1},
                {codigo:455139, nombre: 'Robinson Chirinos', url: '../../../../assets/455139.jpg', equipolvbp: 6, tipoJugador: 1},
                // {codigo:500208, nombre: 'Yangervis Solarte', url: '../../../../assets/500208.jpg', equipolvbp: 6, tipoJugador: 1},
                {codigo:500874, nombre: 'Jose Martinez', url: '../../../../assets/500874.jpg', equipolvbp: 7, tipoJugador: 1},
                {codigo:500743, nombre: 'Miguel Rojas', url: '../../../../assets/500743.jpg', equipolvbp: 7, tipoJugador: 1},
                {codigo:546318, nombre: 'Odubel Herrera', url: '../../../../assets/546318.jpg', equipolvbp: 7, tipoJugador: 1},
                {codigo:660670, nombre: 'Ronald Acuña Jr.', url: '../../../../assets/660670.jpg', equipolvbp: 7, tipoJugador: 1},
                {codigo:570560, nombre: 'Yolmer Sanchez', url: '../../../../assets/570560.jpg', equipolvbp: 7, tipoJugador: 1},
                {codigo:541645, nombre: 'Avisail Garcia', url: '../../../../assets/541645.jpg', equipolvbp: 3, tipoJugador: 1},
                {codigo:500871, nombre: 'Eduardo Escobar ', url: '../../../../assets/500871.jpg', equipolvbp: 3, tipoJugador: 1},
                {codigo:541650, nombre: 'Hernan Perez', url: '../../../../assets/541650.jpg', equipolvbp: 3, tipoJugador: 1},
                {codigo:542583, nombre: 'Jesus Aguilar', url: '../../../../assets/542583.jpg', equipolvbp: 3, tipoJugador: 1},
                {codigo:445988, nombre: 'Martin Prado', url: '../../../../assets/445988.jpg', equipolvbp: 3, tipoJugador: 1},
                {codigo:503556, nombre: 'Marwin Gonzalez', url: '../../../../assets/503556.jpg', equipolvbp: 3, tipoJugador: 1},
                {codigo:600524, nombre: 'Renato Nuñez', url: '../../../../assets/600524.jpg', equipolvbp: 3, tipoJugador: 1},
                {codigo:506702, nombre: 'Sandy Leon', url: '../../../../assets/506702.jpg', equipolvbp: 3, tipoJugador: 1},
                {codigo:575929, nombre: 'Willson Contreras', url: '../../../../assets/575929.jpg', equipolvbp: 3, tipoJugador: 1},
                {codigo:467092, nombre: 'Wilson Ramos', url: '../../../../assets/467092.jpg', equipolvbp: 3, tipoJugador: 1},
                {codigo:517369, nombre: 'Jose Pirela', url: '../../../../assets/517369.jpg', equipolvbp: 2, tipoJugador: 1},
                {codigo:434671, nombre: 'Anibal Sanchez', url: '../../../../assets/434671.jpg', equipolvbp: 4, tipoJugador: 2},
                {codigo:501625, nombre: 'Jose Alvarez', url: '../../../../assets/501625.jpg', equipolvbp: 1, tipoJugador: 2},
                {codigo:471911, nombre: 'Carlos Carrasco', url: '../../../../assets/471911.jpg', equipolvbp: 1, tipoJugador: 2},
                {codigo:553878, nombre: 'Felipe Vazquez', url: '../../../../assets/553878.jpg', equipolvbp: 1, tipoJugador: 2},
                {codigo:608566, nombre: 'German Marquez', url: '../../../../assets/608566.jpg', equipolvbp: 1, tipoJugador: 2},
                {codigo:468504, nombre: 'Jhoulys Chacin', url: '../../../../assets/468504.jpg', equipolvbp: 1, tipoJugador: 2},
                {codigo:622608, nombre: 'Antonio Senzatela', url: '../../../../assets/622608.jpg', equipolvbp: 6, tipoJugador: 2},
                {codigo:593958, nombre: 'Eduardo Rodriguez', url: '../../../../assets/593958.jpg', equipolvbp: 6, tipoJugador: 2},
                {codigo:433587, nombre: 'Felix Hernandez', url: '../../../../assets/433587.jpg', equipolvbp: 6, tipoJugador: 2},
                {codigo:614179, nombre: 'Jose Ruiz', url: '../../../../assets/614179.jpg', equipolvbp: 6, tipoJugador: 2},
                {codigo:591693, nombre: 'Edubray Ramos', url: '../../../../assets/591693.jpg', equipolvbp: 7, tipoJugador: 2},
                {codigo:491646, nombre: 'Jeanmar Gomez', url: '../../../../assets/491646.jpg', equipolvbp: 7, tipoJugador: 2},
                {codigo:621237, nombre: 'Jose Alvarado', url: '../../../../assets/621237.jpg', equipolvbp: 7, tipoJugador: 2},
                {codigo:448855, nombre: 'Junior Guerra', url: '../../../../assets/448855.jpg', equipolvbp: 7, tipoJugador: 2},
                {codigo:501593, nombre: 'Luis Avilan', url: '../../../../assets/501593.jpg', equipolvbp: 5, tipoJugador: 2},
                {codigo:527048, nombre: 'Martin Perez', url: '../../../../assets/527048.jpg', equipolvbp: 6, tipoJugador: 2},
                {codigo:641154, nombre: 'Pablo Lopez', url: '../../../../assets/641154.jpg', equipolvbp: 2, tipoJugador: 2},
                {codigo:521655, nombre: 'Wilmer Font', url: '../../../../assets/521655.jpg', equipolvbp: 1, tipoJugador: 2},
                {codigo:630023, nombre: 'Yonny Chirinos', url: '../../../../assets/630023.jpg', equipolvbp: 4, tipoJugador: 2},
                {codigo:433589, nombre: 'Yusmeiro Petit', url: '../../../../assets/433589.jpg', equipolvbp: 6, tipoJugador: 2},
                {codigo:444468, nombre: 'Hector Rondon', url: '../../../../assets/444468.jpg', equipolvbp: 1, tipoJugador: 2},
                {codigo:650382, nombre: 'Darwinzon Hernandez', url: '../../../../assets/650382.jpg', equipolvbp: 5, tipoJugador: 2},
                {codigo:621592, nombre: 'Eduardo Jimenez', url: '../../../../assets/621592.jpg', equipolvbp: 7, tipoJugador: 2},
                {codigo:650859, nombre: 'Luis Rengifo', url: '../../../../assets/650859.jpg', equipolvbp: 6, tipoJugador: 1},
                {codigo:650333, nombre: 'Luis Arraez', url: '../../../../assets/650333.jpg', equipolvbp: 6, tipoJugador: 1},
                {codigo:545064, nombre: 'Jairo Díaz', url: '../../../../assets/545064.jpg', equipolvbp: 8, tipoJugador: 2},
                {codigo:622682, nombre: 'Victor Reyes', url: '../../../../assets/622682.jpg', equipolvbp: 1, tipoJugador: 1},
                // {codigo:660761, nombre: 'José Suarez', url: '../../../../assets/660761.jpg', equipolvbp: 4, tipoJugador: 2},
                // {codigo:622786, nombre: 'Jesús Tinoco', url: '../../../../assets/622786.jpg', equipolvbp: 6, tipoJugador: 2},
                {codigo:623993, nombre: 'Anthony Santander', url: '../../../../assets/623993.jpg', equipolvbp: 3, tipoJugador: 1},
                {codigo:541600, nombre: 'Wilfredo Tovar', url: '../../../../assets/541600.jpg', equipolvbp: 1, tipoJugador: 1},


];
  jugadoresFiltrados: { codigo: number; nombre: string; url: string; equipolvbp: number; }[];
  tituloEquipo: string;
  logoEquipo: string;
  allItems: { codigo: number; nombre: string; url: string; equipolvbp: number; tipoJugador: number; }[];



  constructor() { }

  ngOnInit() {
  }


  showMyImage(index) {
    this.jugadoresFiltrados = [];
    this.jugadoresFiltrados =  this.jugadores.filter(jugador => index === jugador.equipolvbp).sort(({ nombre: a }, { nombre: b }) => {
      if (a > b) {
        return 1;
      } else if (a < b) {
        return -1;
      } else if (a === b) {
        return 0;
      }});
    this.tituloEquipo = this.equipos[index-1].equipo;
    this.logoEquipo = this.equipos[index-1].url;
}

}
