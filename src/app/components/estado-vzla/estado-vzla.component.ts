import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estado-vzla',
  templateUrl: './estado-vzla.component.html',
  styleUrls: ['./estado-vzla.component.css']
})
export class EstadoVzlaComponent implements OnInit {searchText: string;
  equipoSelecc= [];
  selectedImg;
  estados = [ {codigo: 1, url: '../../../../assets/ANZOATEGUI.png', estadoNac: 1, estado: 'Anzoategui'},
    {codigo: 2, url: '../../../../assets/AMAZONAS.png', estadoNac: 2, estado: 'Amazonas'},
    {codigo: 3, url: '../../../../assets/Apure.png', estadoNac: 3, estado: 'Apure'},
    {codigo: 4, url: '../../../../assets/ARAGUA.png', estadoNac: 4, estado: 'Aragua'},
    {codigo: 5, url: '../../../../assets/Barinas.png', estadoNac: 5, estado: 'Barinas'},
    {codigo: 6, url: '../../../../assets/BOLIVAR.png', estadoNac: 6, estado: 'Bolívar'},
    {codigo: 7, url: '../../../../assets/CARABOBO.png', estadoNac: 7, estado: 'Carabobo'},
    {codigo: 8, url: '../../../../assets/CAPITAL.png', estadoNac: 8, estado: 'Capital'},
    {codigo: 9, url: '../../../../assets/COJEDES.png', estadoNac: 9, estado: 'Cojedes'},
    {codigo: 10, url: '../../../../assets/DELTAAMACURO.png', estadoNac: 10, estado: 'Delta Amacuro'},
    {codigo: 11, url: '../../../../assets/FALCON.png', estadoNac: 11, estado: 'Falcón'},
    {codigo: 12, url: '../../../../assets/GUARICO.png', estadoNac: 12, estado: 'Guárico'},
    {codigo: 13, url: '../../../../assets/Lara.png', estadoNac: 13, estado: 'Lara'},
    {codigo: 14, url: '../../../../assets/Merida.png', estadoNac: 14, estado: 'Mérida'},
    {codigo: 15, url: '../../../../assets/MIRANDA.png', estadoNac: 15, estado: 'Miranda'},
    {codigo: 16, url: '../../../../assets/MONAGAS.png', estadoNac: 16, estado: 'Monagas'},
    {codigo: 17, url: '../../../../assets/NVAESPARTA.png', estadoNac: 17, estado: 'Nueva Esparta'},
    {codigo: 18, url: '../../../../assets/Portuguesa.png', estadoNac: 18, estado: 'Portuguesa'},
    {codigo: 19, url: '../../../../assets/SUCRE.png', estadoNac: 19, estado: 'Sucre'},
    {codigo: 20, url: '../../../../assets/Tachira.png', estadoNac: 20, estado: 'Táchira'},
    {codigo: 21, url: '../../../../assets/Trujillo.png', estadoNac: 21, estado: 'Trujillo'},
    {codigo: 22, url: '../../../../assets/VARGAS.png', estadoNac: 22, estado: 'Vargas'},
    {codigo: 23, url: '../../../../assets/YARACUY.png', estadoNac: 23, estado: 'Yaracuy'},
    {codigo: 24, url: '../../../../assets/Zulia.png', estadoNac: 24, estado: 'Zulia'}
  ];


  jugadores = [ {codigo:408234, nombre: 'Miguel Cabrera', url: '../../../../assets/408234.jpg', estadoNac: 4, tipoJugador: 1},
                // {codigo:471865, nombre: 'Carlos Gonzalez ', url: '../../../../assets/471865.jpg', estadoNac: 24, tipoJugador: 1},
                {codigo:542255, nombre: 'Ender Inciarte', url: '../../../../assets/542255.jpg', estadoNac: 24, tipoJugador: 1},
                {codigo:520471, nombre: 'Freddy Galvis', url: '../../../../assets/520471.jpg', estadoNac: 11, tipoJugador: 1},
                {codigo:596059, nombre: 'Rougned Odor', url: '../../../../assets/596059.jpg', estadoNac: 24, tipoJugador: 1},
                {codigo:444482, nombre: 'David Peralta', url: '../../../../assets/444482.jpg', estadoNac: 7, tipoJugador: 1},
                {codigo:553869, nombre: 'Elias Diaz', url: '../../../../assets/553869.jpg', estadoNac: 24, tipoJugador: 1},
                {codigo:553882, nombre: 'Omar Narvaez', url: '../../../../assets/553882.jpg', estadoNac: 4, tipoJugador: 1},
                {codigo:642731, nombre: 'Thairo Estrada', url: '../../../../assets/642731.jpg', estadoNac: 7, tipoJugador: 1},
                {codigo:527038, nombre: 'Wilmer Flores', url: '../../../../assets/527038.jpg', estadoNac: 7, tipoJugador: 1},
                {codigo:514917, nombre: 'Cesar Hernandez', url: '../../../../assets/514917.jpg', estadoNac: 7, tipoJugador: 1},
                {codigo:545121, nombre: 'Ildemaro Vargas', url: '../../../../assets/545121.jpg', estadoNac: 16, tipoJugador: 1},
                {codigo:444489, nombre: 'Manny Piña', url: '../../../../assets/444489.jpg', estadoNac: 13, tipoJugador: 1},
                {codigo:553902, nombre: 'Willians Astudillo', url: '../../../../assets/553902.jpg', estadoNac: 1, tipoJugador: 1},
                {codigo:501303, nombre: 'Ehire Adrianza', url: '../../../../assets/501303.jpg', estadoNac: 15, tipoJugador: 1},
                {codigo:606115, nombre: 'Orlando Arcia', url: '../../../../assets/606115.jpg', estadoNac: 1, tipoJugador: 1},
                {codigo:452678, nombre: 'Asdrubal Cabrera ', url: '../../../../assets/452678.jpg', estadoNac: 1, tipoJugador: 1},
                {codigo:553993, nombre: 'Eugenio Suarez', url: '../../../../assets/553993.jpg', estadoNac: 6, tipoJugador: 1},
                // {codigo:467827, nombre: 'Gerardo Parra', url: '../../../../assets/467827.jpg', estadoNac: 24, tipoJugador: 1},
                {codigo:650402, nombre: 'Gleyber Torres', url: '../../../../assets/650402.jpg', estadoNac: 8, tipoJugador: 1},
                {codigo:602922, nombre: 'Jose Rondon', url: '../../../../assets/602922.jpg', estadoNac: 15, tipoJugador: 1},
                {codigo:462101, nombre: 'Elvis Andrus', url: '../../../../assets/462101.jpg', estadoNac: 4, tipoJugador: 1},
                // {codigo:465041, nombre: 'Francisco Cervelli', url: '../../../../assets/465041.jpg', estadoNac: 7, tipoJugador: 1},
                // {codigo:491696, nombre: 'Jesus Sucre', url: '../../../../assets/491696.jpg', estadoNac: 19, tipoJugador: 1},
                {codigo:514888, nombre: 'Jose Altuve', url: '../../../../assets/514888.jpg', estadoNac: 4, tipoJugador: 1},
                {codigo:606299, nombre: 'Jose Peraza', url: '../../../../assets/606299.jpg', estadoNac: 5, tipoJugador: 1},
                {codigo:467055, nombre: 'Pablo Sandoval', url: '../../../../assets/467055.jpg', estadoNac: 7, tipoJugador: 1},
                {codigo:455139, nombre: 'Robinson Chirinos', url: '../../../../assets/455139.jpg', estadoNac: 11, tipoJugador: 1},
                // {codigo:500208, nombre: 'Yangervis Solarte', url: '../../../../assets/500208.jpg', estadoNac: 7, tipoJugador: 1},
                {codigo:500874, nombre: 'Jose Martinez', url: '../../../../assets/500874.jpg', estadoNac: 22, tipoJugador: 1},
                {codigo:500743, nombre: 'Miguel Rojas', url: '../../../../assets/500743.jpg', estadoNac: 15, tipoJugador: 1},
                // {codigo:546318, nombre: 'Odubel Herrera', url: '../../../../assets/546318.jpg', estadoNac: 24, tipoJugador: 1},
                {codigo:660670, nombre: 'Ronald Acuña Jr.', url: '../../../../assets/660670.jpg', estadoNac: 22, tipoJugador: 1},
                {codigo:570560, nombre: 'Yolmer Sanchez', url: '../../../../assets/570560.jpg', estadoNac: 4, tipoJugador: 1},
                {codigo:541645, nombre: 'Avisail Garcia', url: '../../../../assets/541645.jpg', estadoNac: 1, tipoJugador: 1},
                {codigo:500871, nombre: 'Eduardo Escobar ', url: '../../../../assets/500871.jpg', estadoNac: 15, tipoJugador: 1},
                {codigo:541650, nombre: 'Hernan Perez', url: '../../../../assets/541650.jpg', estadoNac: 15, tipoJugador: 1},
                {codigo:542583, nombre: 'Jesus Aguilar', url: '../../../../assets/542583.jpg', estadoNac: 4, tipoJugador: 1},
                // {codigo:445988, nombre: 'Martin Prado', url: '../../../../assets/445988.jpg', estadoNac: 4, tipoJugador: 1},
                {codigo:503556, nombre: 'Marwin Gonzalez', url: '../../../../assets/503556.jpg', estadoNac: 6, tipoJugador: 1},
                {codigo:600524, nombre: 'Renato Nuñez', url: '../../../../assets/600524.jpg', estadoNac: 7, tipoJugador: 1},
                {codigo:506702, nombre: 'Sandy Leon', url: '../../../../assets/506702.jpg', estadoNac: 24, tipoJugador: 1},
                {codigo:575929, nombre: 'Willson Contreras', url: '../../../../assets/575929.jpg', estadoNac: 7, tipoJugador: 1},
                {codigo:467092, nombre: 'Wilson Ramos', url: '../../../../assets/467092.jpg', estadoNac: 7, tipoJugador: 1},
                // {codigo:517369, nombre: 'Jose Pirela', url: '../../../../assets/517369.jpg', estadoNac: 21, tipoJugador: 1},
                // {codigo:434671, nombre: 'Anibal Sanchez', url: '../../../../assets/434671.jpg', estadoNac: 4, tipoJugador: 2},
                {codigo:501625, nombre: 'Jose Alvarez', url: '../../../../assets/501625.jpg', estadoNac: 1, tipoJugador: 2},
                {codigo:471911, nombre: 'Carlos Carrasco', url: '../../../../assets/471911.jpg', estadoNac: 13, tipoJugador: 2},
                // {codigo:553878, nombre: 'Felipe Vazquez', url: '../../../../assets/553878.jpg', estadoNac: 23, tipoJugador: 2},
                {codigo:608566, nombre: 'German Marquez', url: '../../../../assets/608566.jpg', estadoNac: 6, tipoJugador: 2},
                {codigo:468504, nombre: 'Jhoulys Chacin', url: '../../../../assets/468504.jpg', estadoNac: 24, tipoJugador: 2},
                {codigo:622608, nombre: 'Antonio Senzatela', url: '../../../../assets/622608.jpg', estadoNac: 7, tipoJugador: 2},
                {codigo:593958, nombre: 'Eduardo Rodriguez', url: '../../../../assets/593958.jpg', estadoNac: 7, tipoJugador: 2},
                {codigo:433587, nombre: 'Felix Hernandez', url: '../../../../assets/433587.jpg', estadoNac: 7, tipoJugador: 2},
                {codigo:614179, nombre: 'Jose Ruiz', url: '../../../../assets/614179.jpg', estadoNac: 7, tipoJugador: 2},
                {codigo:591693, nombre: 'Edubray Ramos', url: '../../../../assets/591693.jpg', estadoNac: 8, tipoJugador: 2},
                {codigo:491646, nombre: 'Jeanmar Gomez', url: '../../../../assets/491646.jpg', estadoNac: 8, tipoJugador: 2},
                {codigo:621237, nombre: 'Jose Alvarado', url: '../../../../assets/621237.jpg', estadoNac: 24, tipoJugador: 2},
                {codigo:448855, nombre: 'Junior Guerra', url: '../../../../assets/448855.jpg', estadoNac: 6, tipoJugador: 2},
                {codigo:501593, nombre: 'Luis Avilan', url: '../../../../assets/501593.jpg', estadoNac: 8, tipoJugador: 2},
                {codigo:527048, nombre: 'Martin Perez', url: '../../../../assets/527048.jpg', estadoNac: 18, tipoJugador: 2},
                {codigo:641154, nombre: 'Pablo Lopez', url: '../../../../assets/641154.jpg', estadoNac: 24, tipoJugador: 2},
                {codigo:521655, nombre: 'Wilmer Font', url: '../../../../assets/521655.jpg', estadoNac: 22, tipoJugador: 2},
                {codigo:630023, nombre: 'Yonny Chirinos', url: '../../../../assets/630023.jpg', estadoNac: 24, tipoJugador: 2},
                {codigo:433589, nombre: 'Yusmeiro Petit', url: '../../../../assets/433589.jpg', estadoNac: 24, tipoJugador: 2},
                {codigo:444468, nombre: 'Hector Rondon', url: '../../../../assets/444468.jpg', estadoNac: 15, tipoJugador: 2},
                {codigo:650382, nombre: 'Darwinzon Hernandez', url: '../../../../assets/650382.jpg', estadoNac: 6, tipoJugador: 2},
                {codigo:621592, nombre: 'Eduardo Jiménez', url: '../../../../assets/621592.jpg', estadoNac: 19, tipoJugador: 2},
                {codigo:650859, nombre: 'Luis Rengifo', url: '../../../../assets/650859.jpg', estadoNac: 7, tipoJugador: 2},
                {codigo:650333, nombre: 'Luis Arraez', url: '../../../../assets/650333.jpg', estadoNac: 23, tipoJugador: 1},
                {codigo:545064, nombre: 'Jairo Díaz', url: '../../../../assets/545064.jpg', estadoNac: 1, tipoJugador: 2},
                {codigo:622682, nombre: 'Victor Reyes', url: '../../../../assets/622682.jpg', estadoNac: 1, tipoJugador: 1},
                {codigo:623993, nombre: 'Anthony Santander', url: '../../../../assets/623993.jpg', estadoNac: 17, tipoJugador: 1},
                {codigo:541600, nombre: 'Wilfredo Tovar', url: '../../../../assets/541600.jpg', estadoNac: 15, tipoJugador: 1},
                // {codigo:660761, nombre: 'José Suarez', url: '../../../../assets/660761.jpg', estadoNac: 7, tipoJugador: 2},
                // {codigo:622786, nombre: 'Jesús Tinoco', url: '../../../../assets/622786.jpg', estadoNac: 16, tipoJugador: 2},
                // {codigo:600858, nombre: 'Humberto Arteaga', url: '../../../../assets/600858.jpg', estadoNac: 2, tipoJugador: 1},
                {codigo:640470, nombre: 'Adbert Alzolay ', url: '../../../../assets/640470.jpg', estadoNac: 6, tipoJugador: 2},




];
  jugadoresFiltrados: { codigo: number; nombre: string; url: string; estadoNac: number; }[];
  tituloEquipo: string;
  estado: string;
  allItems: { codigo: number; nombre: string; url: string; estadoNac: number; tipoJugador: number; }[];
  estadoNombre: string;
  sumatoria: number;



  constructor() { }

  ngOnInit() {
  }


  showMyImage(index) {
    this.jugadoresFiltrados = [];
    this.sumatoria = 0;
    this.jugadoresFiltrados =  this.jugadores.filter(jugador => index ===  jugador.estadoNac).sort(({ nombre: a }, { nombre: b }) => {
      if (a > b) {
        return 1;
      } else if (a < b) {
        return -1;
      } else if (a === b) {
        return 0;
      }});

    this.sumatoria = this.jugadoresFiltrados.length;
    this.tituloEquipo = this.estados[index-1].estado;
    this.estado = this.estados[index-1].url;
    this.estadoNombre = this.estados[index-1].estado;
}

// onSearchChange() {
//   this.allItems = [];
// if (this.searchText) {
//   this.allItems = this.jugadores.filter(jugador =>
//     jugador.nombre && jugador.nombre.toLowerCase().includes(this.searchText));
//     } else {
//       this.allItems = this.jugadores;
//     }
//     return this.allItems;
//   }

}
