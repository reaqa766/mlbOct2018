import * as functions from 'firebase-functions';
import * as  admin from 'firebase-admin';
import axios from 'axios'

interface Equipo {
  idCampeonato: string, // listo
  esPago: boolean, // listo
  manager: string, // listo
  liga: string, // listo
  jugadores: string[], // listo
  logo: string, //listo
  puntos: { fecha: string, puntos: number }[] //listo
}

const subirABdd = async () => {

  const equipos = [
    {
      logo: "../../../assets/LOGOS FANTASY EQUIPOS/Liga Fantasy VD VZLA/Los Calienta Banca FVDVZLA.png", nombre: "Los Calienta Bancas",
      jugadores: [], esPago: "false", liga: 'VDVzla', idCampeonato: '1', paisDeResidencia: "Venezuela", manager: "Julio Revetti", managerId: ''
    },
    {
      logo: "../../../assets/LOGOS FANTASY EQUIPOS/Liga Fantasy VD VZLA/Marineros de la Sabana FVDVZLA.png", nombre: "Marineros de la Sabana",
      jugadores: [], esPago: "false", liga: 'VDVzla', idCampeonato: '1', paisDeResidencia: "Venezuela", manager: "Alberto Aponte", managerId: ''
    },
    {
      logo: "../../../assets/LOGOS FANTASY EQUIPOS/Liga Fantasy VD VZLA/Miranda Cats FVDVZLA.png", nombre: "Cats Miranda",
      jugadores: [], esPago: "false", liga: 'VDVzla', idCampeonato: '1', paisDeResidencia: "Venezuela", manager: "Alberto Bonfanti", managerId: ''
    },
    {
      logo: "../../../assets/LOGOS FANTASY EQUIPOS/Liga Fantasy VD VZLA/Azulejos FVDVZLA.png", nombre: "Azulejos",
      jugadores: [], esPago: "false", liga: 'VDVzla', idCampeonato: '1', paisDeResidencia: "Venezuela", manager: "Oscar Calles", managerId: ''
    },
    {
      logo: "../../../assets/LOGOS FANTASY EQUIPOS/Liga Fantasy VD VZLA/Pikachu Bol FVDVZLA.png", nombre: "Pikacho Bol",
      jugadores: [], esPago: "false", liga: 'VDVzla', idCampeonato: '1', paisDeResidencia: "Venezuela", manager: "Carlos Rodriguez", managerId: 'OyUVECymwPZCmg9zfqb55m9yKOA3'
    },
    {
      logo: "../../../assets/LOGOS FANTASY EQUIPOS/Liga Fantasy VD VZLA/The Block FVDVZLA.png", nombre: "The Block",
      jugadores: [], esPago: "false", liga: 'VDVzla', idCampeonato: '1', paisDeResidencia: "Venezuela", manager: "Christian Chiacchio", managerId: ''
    },
    {
      logo: "../../../assets/LOGOS FANTASY EQUIPOS/Liga Fantasy VD VZLA/Los Juanchos FVDVZLA.png", nombre: "Los Juanchos",
      jugadores: [], esPago: "false", liga: 'VDVzla', idCampeonato: '1', paisDeResidencia: "Venezuela", manager: "Franklin Ojeda", managerId: ''
    },
    {
      logo: "../../../assets/LOGOS FANTASY EQUIPOS/Liga Fantasy VD VZLA/Los Vikingos de La Guaira FVDVZLA.png", nombre: "Vikings of the Guaira",
      jugadores: [], esPago: "false", liga: 'VDVzla', idCampeonato: '1', paisDeResidencia: "Venezuela", manager: "Joaquin Figueredo", managerId: ''
    },
    {
      logo: "../../../assets/LOGOS FANTASY EQUIPOS/Liga Fantasy VD VZLA/La Pedrera FVDVZLA.png", nombre: "La Pedrera",
      jugadores: [], esPago: "false", liga: 'VDVzla', idCampeonato: '1', paisDeResidencia: "Venezuela", manager: "Andrew Montilla", managerId: ''
    },
    {
      logo: "../../../assets/LOGOS FANTASY EQUIPOS/Liga Fantasy VD VZLA/Los Chapines FVDVZLA.png", nombre: "Chapines",
      jugadores: [], esPago: "false", liga: 'VDVzla', idCampeonato: '1', paisDeResidencia: "Guatemala", manager: "Mark Colina", managerId: ''
    }
    , {
      logo: "../../../assets/LOGOS FANTASY EQUIPOS/Liga FANTASY VD/Guerreros del Centro FVD.png", nombre: "Guerreros del Centro B.B.C.",
      jugadores: [], esPago: "false", liga: 'VD', idCampeonato: '1', paisDeResidencia: "", manager: "Antonio Hernandez", managerId: ''
    },
    {
      logo: "../../../assets/LOGOS FANTASY EQUIPOS/Liga FANTASY VD/The Chuchos FVD.png", nombre: "The Chuchos",
      jugadores: [], esPago: "false", liga: 'VD', idCampeonato: '1', paisDeResidencia: "", manager: "Alex Arias", managerId: ''
    },
    {
      logo: "../../../assets/LOGOS FANTASY EQUIPOS/Liga FANTASY VD/Arepa Power FVD.png", nombre: "Arepa Power",
      jugadores: [], esPago: "false", liga: 'VD', idCampeonato: '1', paisDeResidencia: "", manager: "Anthony Cedeño", managerId: ''
    },
    {
      logo: "../../../assets/LOGOS FANTASY EQUIPOS/Liga FANTASY VD/Centinelas FVD.png", nombre: "Centinelas",
      jugadores: [], esPago: "false", liga: 'VD', idCampeonato: '1', paisDeResidencia: "", manager: "Cesar Medina", managerId: ''
    },
    {
      logo: "../../../assets/LOGOS FANTASY EQUIPOS/Liga FANTASY VD/Ticodel FVD.png", nombre: "Ticodel",
      jugadores: [], esPago: "false", liga: 'VD', idCampeonato: '1', paisDeResidencia: "", manager: "Victor Delgado", managerId: ''
    },
    {
      logo: "../../../assets/LOGOS FANTASY EQUIPOS/Liga FANTASY VD/Los Camellos de Falcon FVD.png", nombre: "Los Camellos de Falcón",
      jugadores: [], esPago: "false", liga: 'VD', idCampeonato: '1', paisDeResidencia: "", manager: "Efrain Leon", managerId: ''
    },
    {
      logo: "../../../assets/LOGOS FANTASY EQUIPOS/Liga FANTASY VD/Esto se llama Beisbol FVD.png", nombre: "Estosellamabeisbol",
      jugadores: [], esPago: "false", liga: 'VD', idCampeonato: '1', paisDeResidencia: "", manager: "Leandro Cisneros", managerId: ''
    },
    {
      logo: "../../../assets/LOGOS FANTASY EQUIPOS/Liga FANTASY VD/Aguizuela FVD.png", nombre: "Aguizuela BBC",
      jugadores: [], esPago: "false", liga: 'VD', idCampeonato: '1', paisDeResidencia: "", manager: "Eduardo Villarroel", managerId: ''
    },
    {
      logo: "../../../assets/LOGOS FANTASY EQUIPOS/Liga FANTASY VD/Gringo23 FVD.png", nombre: "Gringo23",
      jugadores: [], esPago: "false", liga: 'VD', idCampeonato: '1', paisDeResidencia: "", manager: "Jorge Corona", managerId: ''
    },
    {
      logo: "../../../assets/LOGOS FANTASY EQUIPOS/Liga FANTASY VD/Team GRA FVD.png", nombre: "Team G. R. A.",
      jugadores: [], esPago: "false", liga: 'VD', idCampeonato: '1', paisDeResidencia: "", manager: "Carlos Torrealba", managerId: ''
    }
    , {
      logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD ESTE/Los Monstrones FVD ESTE.png", nombre: "Los Monstrones",
      jugadores: [], esPago: "false", liga: "VDEste", idCampeonato: '1', paisDeResidencia: "", manager: "", managerId: ''
    },
    {
      logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD ESTE/Panteras BBC FVD ESTE.png", nombre: "Panteras BBC",
      jugadores: [], esPago: "false", liga: "VDEste", idCampeonato: '1', paisDeResidencia: "", manager: "", managerId: ''
    },
    {
      logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD ESTE/Indios de Barcelona FVD ESTE.png", nombre: "Indios de Barcelona",
      jugadores: [], esPago: "false", liga: "VDEste", idCampeonato: '1', paisDeResidencia: "", manager: "", managerId: ''
    },
    {
      logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD ESTE/Monster FVD ESTE.png", nombre: "Monster",
      jugadores: [], esPago: "false", liga: "VDEste", idCampeonato: '1', paisDeResidencia: "", manager: "", managerId: ''
    },
    {
      logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD ESTE/Brothers Patriots FVD ESTE.png", nombre: "Brohter' Patriots",
      jugadores: [], esPago: "false", liga: "VDEste", idCampeonato: '1', paisDeResidencia: "", manager: "", managerId: ''
    },
    {
      logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD ESTE/Vengadores FVD ESTE.png", nombre: "Vengadores MLB",
      jugadores: [], esPago: "false", liga: "VDEste", idCampeonato: '1', paisDeResidencia: "", manager: "", managerId: ''
    },
    {
      logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD ESTE/Los Gigantes FVD ESTE.png", nombre: "Los Gigantes",
      jugadores: [], esPago: "false", liga: "VDEste", idCampeonato: '1', paisDeResidencia: "", manager: "", managerId: ''
    },
    {
      logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD ESTE/Los Chiclosos FVD ESTE.png", nombre: "Los Chiclosos",
      jugadores: [], esPago: "false", liga: "VDEste", idCampeonato: '1', paisDeResidencia: "", manager: "", managerId: ''
    },
    {
      logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD ESTE/Noctambulos FVD ESTE.png", nombre: "Noctambulos",
      jugadores: [], esPago: "false", liga: "VDEste", idCampeonato: '1', paisDeResidencia: "", manager: "", managerId: ''
    },
    {
      logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD ESTE/Los Dragones FVD ESTE.png", nombre: "Los Dragones",
      jugadores: [], esPago: "false", liga: "VDEste", idCampeonato: '1', paisDeResidencia: "", manager: "", managerId: ''
    }
    , {
      logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD OESTE/Niño Team  FVDOESTE.png", nombre: "Niño Team",
      jugadores: [], esPago: "false", liga: "VDOeste", idCampeonato: '1', paisDeResidencia: "", manager: "", managerId: ''
    },
    {
      logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD OESTE/Los Roba Señas  FVDOESTE.png", nombre: "Los Roba Señas de Cooperstpwn",
      jugadores: [], esPago: "false", liga: "VDOeste", idCampeonato: '1', paisDeResidencia: "", manager: "", managerId: ''
    },
    {
      logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD OESTE/HardeWell Team  FVDOESTE.png", nombre: "Hardwell Team",
      jugadores: [], esPago: "false", liga: "VDOeste", idCampeonato: '1', paisDeResidencia: "", manager: "", managerId: ''
    },
    {
      logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD OESTE/Chapi Team  FVDOESTE.png", nombre: "Chapi Team",
      jugadores: [], esPago: "false", liga: "VDOeste", idCampeonato: '1', paisDeResidencia: "", manager: "", managerId: ''
    },
    {
      logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD OESTE/Money Ball  FVDOESTE.png", nombre: "Moneyball Inc.",
      jugadores: [], esPago: "false", liga: "VDOeste", idCampeonato: '1', paisDeResidencia: "", manager: "", managerId: ''
    },
    {
      logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD OESTE/Perfume FeyAlegria  FVDOESTE.png", nombre: "Perfume de Feyalegria",
      jugadores: [], esPago: "false", liga: "VDOeste", idCampeonato: '1', paisDeResidencia: "", manager: "", managerId: ''
    },
    {
      logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD OESTE/The Walkers  FVDOESTE.png", nombre: "The Walkers",
      jugadores: [], esPago: "false", liga: "VDOeste", idCampeonato: '1', paisDeResidencia: "", manager: "", managerId: ''
    },
    {
      logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD OESTE/Navegantes del Este  FVDOESTE.png", nombre: "Navegantes del Este",
      jugadores: [], esPago: "false", liga: "VDOeste", idCampeonato: '1', paisDeResidencia: "", manager: "", managerId: ''
    },
    {
      logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD OESTE/Los Bad Boys  FVDOESTE.png", nombre: "Los Bad Boys",
      jugadores: [], esPago: "false", liga: "VDOeste", idCampeonato: '1', paisDeResidencia: "", manager: "", managerId: ''
    },
    {
      logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD OESTE/Los Macrofagos  FVDOESTE .png", nombre: "Los Macrofagos",
      jugadores: [], esPago: "false", liga: "VDOeste", idCampeonato: '1', paisDeResidencia: "", manager: "", managerId: ''
    }
    , {
      logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD NORTE/Alberto Mosalve Team  FVD NORTE.png", nombre: "Alberto Monsalve Team",
      jugadores: [], esPago: "false", liga: "VDNorte", idCampeonato: '1', paisDeResidencia: "", manager: "", managerId: ''
    },
    {
      logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD NORTE/Tucacas BBC  FVD NORTE.png", nombre: "Tucacas BBC",
      jugadores: [], esPago: "false", liga: "VDNorte", idCampeonato: '1', paisDeResidencia: "", manager: "", managerId: ''
    },
    {
      logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD NORTE/Broncos FVD NORTE.png", nombre: "Broncos",
      jugadores: [], esPago: "false", liga: "VDNorte", idCampeonato: '1', paisDeResidencia: "", manager: "", managerId: ''
    },
    {
      logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD NORTE/Los Chonchis  FVD NORTE.png", nombre: "Los Chonchis",
      jugadores: [], esPago: "false", liga: "VDNorte", idCampeonato: '1', paisDeResidencia: "", manager: "", managerId: ''
    },
    {
      logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD NORTE/Leones del Valle  FVD NORTE.png", nombre: "Leones del Valle",
      jugadores: [], esPago: "false", liga: "VDNorte", idCampeonato: '1', paisDeResidencia: "", manager: "", managerId: ''
    },
    {
      logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD NORTE/Machiques Power  FVD NORTE.png", nombre: "Machique's Power",
      jugadores: [], esPago: "false", liga: "VDNorte", idCampeonato: '1', paisDeResidencia: "", manager: "", managerId: ''
    },
    {
      logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD NORTE/Oscar Team  FVD NORTE .png", nombre: "OscarTeam",
      jugadores: [], esPago: "false", liga: "VDNorte", idCampeonato: '1', paisDeResidencia: "", manager: "", managerId: ''
    },
    {
      logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD NORTE/Paredes Team  FVD NORTE.png", nombre: "Paredes Team",
      jugadores: [], esPago: "false", liga: "VDNorte", idCampeonato: '1', paisDeResidencia: "", manager: "", managerId: ''
    },
    {
      logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD NORTE/Isotops Team  FVD NORTE.png", nombre: "Isotopos Team",
      jugadores: [], esPago: "false", liga: "VDNorte", idCampeonato: '1', paisDeResidencia: "", manager: "", managerId: ''
    },
    {
      logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD NORTE/Cangrejeros de Vzla   FVD NORTER.png", nombre: "Cangrejeros de Vzla",
      jugadores: [], esPago: "false", liga: "VDNorte", idCampeonato: '1', paisDeResidencia: "", manager: "", managerId: ''
    }
    , {
      logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD SUR/El Cojedeño FVD SUR.png", nombre: "El Cojedeño",
      jugadores: [], esPago: "false", liga: "VDSur", idCampeonato: '1', paisDeResidencia: "", manager: "", managerId: ''
    },
    {
      logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD SUR/Delgados BBC  FVD SUR.png", nombre: "Delgados BBC",
      jugadores: [], esPago: "false", liga: "VDSur", idCampeonato: '1', paisDeResidencia: "", manager: "", managerId: ''
    },
    {
      logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD SUR/Blue Sox  FVD SUR.png", nombre: "Blue Sox",
      jugadores: [], esPago: "false", liga: "VDSur", idCampeonato: '1', paisDeResidencia: "", manager: "", managerId: ''
    },
    {
      logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD SUR/D Prada  FVD SUR.png", nombre: "D.Prada",
      jugadores: [], esPago: "false", liga: "VDSur", idCampeonato: '1', paisDeResidencia: "", manager: "", managerId: ''
    },
    {
      logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD SUR/MLB en Santiago  FVD SUR.png", nombre: "MLB en Santiago",
      jugadores: [], esPago: "false", liga: "VDSur", idCampeonato: '1', paisDeResidencia: "", manager: "", managerId: ''
    },
    {
      logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD SUR/Pumas VZLA  FVD SUR.png", nombre: "Pumas Vzla",
      jugadores: [], esPago: "false", liga: "VDSur", idCampeonato: '1', paisDeResidencia: "", manager: "", managerId: ''
    },
    {
      logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD SUR/Delfines de Margarita  FVD SUR .png", nombre: "Delfines de Margarita",
      jugadores: [], esPago: "false", liga: "VDSur", idCampeonato: '1', paisDeResidencia: "", manager: "", managerId: ''
    },
    {
      logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD SUR/Osos de Carabobo  FVD SUR.png", nombre: "Los Osos de Carabobo",
      jugadores: [], esPago: "false", liga: "VDSur", idCampeonato: '1', paisDeResidencia: "", manager: "", managerId: ''
    },
    {
      logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD SUR/El Tarron Sport  FVD SUR.png", nombre: "El Tarron Sport",
      jugadores: [], esPago: "false", liga: "VDSur", idCampeonato: '1', paisDeResidencia: "", manager: "", managerId: ''
    },
    {
      logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VENEDOMPRO ESTE/The Nuñez team FVENEDOMPRO ESTE.png", nombre: "The Nuñez Team",
      jugadores: [], esPago: "false", liga: "VDSur", idCampeonato: '1', paisDeResidencia: "", manager: "", managerId: ''
    }
    , {
      logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD  CENTRO/Bravos de Ararure FVD CENTRO.png", nombre: "Bravos de Araure",
      jugadores: [], esPago: "false", liga: "VDCentro", idCampeonato: '1', paisDeResidencia: "", manager: "", managerId: ''
    },
    {
      logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD  CENTRO/Anthony BBC FVD CENTRO .png", nombre: "Anthony BBC",
      jugadores: [], esPago: "false", liga: "VDCentro", idCampeonato: '1', paisDeResidencia: "", manager: "", managerId: ''
    },
    {
      logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD  CENTRO/Gatos de Maracaibo FVD CENTRO.png", nombre: "Gatos de Maracaibo",
      jugadores: [], esPago: "false", liga: "VDCentro", idCampeonato: '1', paisDeResidencia: "", manager: "", managerId: ''
    },
    {
      logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD  CENTRO/La Elegancia FVD CENTRO.png", nombre: "La Elegancia",
      jugadores: [], esPago: "false", liga: "VDCentro", idCampeonato: '1', paisDeResidencia: "", manager: "", managerId: ''
    },
    {
      logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD  CENTRO/The Power Family FVD CENTRO .png", nombre: "The Power Family",
      jugadores: [], esPago: "false", liga: "VDCentro", idCampeonato: '1', paisDeResidencia: "", manager: "", managerId: ''
    },
    {
      logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD  CENTRO/Team Peque FVD CENTRO .png", nombre: "Team Peque",
      jugadores: [], esPago: "false", liga: "VDCentro", idCampeonato: '1', paisDeResidencia: "", manager: "", managerId: ''
    },
    {
      logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD  CENTRO/Los Guti Baseball FVD CENTRO .png", nombre: "Los Gutiz Baseball",
      jugadores: [], esPago: "false", liga: "VDCentro", idCampeonato: '1', paisDeResidencia: "", manager: "", managerId: ''
    },
    {
      logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD  CENTRO/Chacalaca BBC FVD CENTRO .png", nombre: "Chacalaca BBC",
      jugadores: [], esPago: "false", liga: "VDCentro", idCampeonato: '1', paisDeResidencia: "", manager: "", managerId: ''
    },
    {
      logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD  CENTRO/Latin Power Team FVD CENTRO .png", nombre: "Latinpower Team",
      jugadores: [], esPago: "false", liga: "VDCentro", idCampeonato: '1', paisDeResidencia: "", manager: "", managerId: ''
    },
    {
      logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD  CENTRO/Gloriosos de Trujillo FVD CENTRO.png", nombre: "Los Gloriosos de Trujillo",
      jugadores: [], esPago: "false", liga: "VDCentro", idCampeonato: '1', paisDeResidencia: "", manager: "", managerId: ''
    },
    {
      logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VENEDOMPRO OESTE/Los Estrada FVENEDOMPRO OESTE.png", nombre: "Los Estrada",
      jugadores: [], esPaga: "true", liga: 'Venedompro Oeste', paisDeResidencia: "", manager: "Daniel Estrada", managerId: ''
    },
    {
      logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VENEDOMPRO OESTE/Paseo City FVENEDOMPRO OESTE.png", nombre: "Paseo City",
      jugadores: [], esPaga: "true", liga: "Venedompro Oeste", idCampeonato: '1', paisDeResidencia: "", manager: "", managerId: ''
    },
    {
      logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VENEDOMPRO OESTE/Mi Familia SBC  FVENEDOMPRO OESTE.png", nombre: "Mi Familia SBC",
      jugadores: [], esPaga: "true", liga: "Venedompro Oeste", idCampeonato: '1', paisDeResidencia: "", manager: "", managerId: ''
    },
    {
      logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VENEDOMPRO OESTE/Los Pajaros Rojos FVENEDOMPRO OESTE.png", nombre: "Los Pájaros Rojos",
      jugadores: [], esPaga: "true", liga: "Venedompro Oeste", idCampeonato: '1', paisDeResidencia: "", manager: "", managerId: ''
    },
    {
      logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VENEDOMPRO OESTE/Halp9779 FVENEDOMPRO OESTE.png", nombre: "Halp9779",
      jugadores: [], esPaga: "true", liga: "Venedompro Oeste", idCampeonato: '1', paisDeResidencia: "", manager: "", managerId: ''
    },
    {
      logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VENEDOMPRO OESTE/Pesqueros de Sucre FVENEDOMPRO OESTE.png", nombre: "Pesqueros de Sucre",
      jugadores: [], esPaga: "true", liga: "Venedompro Oeste", idCampeonato: '1', paisDeResidencia: "", manager: "", managerId: ''
    },
    {
      logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VENEDOMPRO OESTE/Los Triunfadores FVENEDOMPRO OESTE.png", nombre: "Los Triunfadores",
      jugadores: [], esPaga: "true", liga: "Venedompro Oeste", idCampeonato: '1', paisDeResidencia: "", manager: "", managerId: ''
    },
    {
      logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VENEDOMPRO OESTE/The Black Bull FVENEDOMPRO OESTE.png", nombre: "The Black Bull",
      jugadores: [], esPaga: "true", liga: "Venedompro Oeste", idCampeonato: '1', paisDeResidencia: "", manager: "", managerId: ''
    },
    {
      logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VENEDOMPRO ESTE/Los Nuevos Mutantes FVENEDOMPRO ESTE.png", nombre: "Los Mutantes",
      jugadores: [], esPaga: "true", liga: "Venedompro Este", idCampeonato: '1', paisDeResidencia: "", manager: "", managerId: ''
    },
    {
      logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VENEDOMPRO ESTE/Roceros de Maracay FVENEDOMPRO ESTE.png", nombre: "Ronceros de Maracay",
      jugadores: [], esPaga: "true", liga: "Venedompro Este", idCampeonato: '1', paisDeResidencia: "", manager: "", managerId: ''
    },
    {
      logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VENEDOMPRO ESTE/Los Monstrones FVENEDOMPRO ESTE.png", nombre: "Los Monstrones",
      jugadores: [], esPaga: "true", liga: "Venedompro Este", idCampeonato: '1', paisDeResidencia: "", manager: "", managerId: ''
    },
    {
      logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VENEDOMPRO ESTE/Padres FVENEDOMPRO ESTE.png", nombre: "Padres",
      jugadores: [], esPaga: "true", liga: "Venedompro Este", idCampeonato: '1', paisDeResidencia: "", manager: "", managerId: ''
    },
    {
      logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VENEDOMPRO ESTE/Diablos Rojos FVENEDOMPRO ESTE.png", nombre: "Diablos Rojos",
      jugadores: [], esPaga: "true", liga: "Venedompro Este", idCampeonato: '1', paisDeResidencia: "", manager: "", managerId: ''
    },
    {
      logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VENEDOMPRO ESTE/Atelticos del Jarillo FVENEDOMPRO ESTE.png", nombre: "Atléticos Del Jarillo",
      jugadores: [], esPaga: "true", liga: "Venedompro Este", idCampeonato: '1', paisDeResidencia: "", manager: "", managerId: ''
    },
    {
      logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VENEDOMPRO ESTE/The Golden FVENEDOMPRO ESTE.png", nombre: "The Golden",
      jugadores: [], esPaga: "true", liga: "Venedompro Este", idCampeonato: '1', paisDeResidencia: "", manager: "", managerId: ''
    },
    {
      logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VENEDOMPRO ESTE/Niño Team FVENEDOMPRO ESTE.png", nombre: "Niño Team",
      jugadores: [], esPaga: "true", liga: "Venedompro Este", idCampeonato: '1', paisDeResidencia: "", manager: "", managerId: ''
    },
    {
      logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VENEDOMPRO ESTE/The Nuñez team FVENEDOMPRO ESTE.png", nombre: "The Nuñez Team",
      jugadores: [], esPaga: "true", liga: "Venedompro Este", idCampeonato: '1', paisDeResidencia: "", manager: "", managerId: ''
    },
    {
      logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VENEDOMPRO ESTE/Bombarderos del Tuy FVENEDOMPRO ESTE.png", nombre: "Bombarderos del Tuy",
      jugadores: [], esPaga: "true", liga: "Venedompro Este", idCampeonato: '1', paisDeResidencia: "", manager: "", managerId: ''
    },
    {
      logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VENEDOMPRO ESTE/Tiburones de Miamai FVENEDOMPRO ESTE.png", nombre: "Tiburones de Miami",
      jugadores: [], esPaga: "true", liga: "Venedompro Este", idCampeonato: '1', paisDeResidencia: "", manager: "", managerId: ''
    },
    {
      logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VENEDOMPRO SUR/Team Reales Primos FVENEDOMPRO SUR.png", nombre: "Team Reales Primos",
      jugadores: [], esPaga: "true", liga: "Venedompro Sur", idCampeonato: '1', paisDeResidencia: "", manager: "", managerId: ''
    },
    {
      logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VENEDOMPRO SUR/Isafit Team FVENEDOMPRO SUR.png", nombre: "Isafit Team",
      jugadores: [], esPaga: "true", liga: "Venedompro Sur", idCampeonato: '1', paisDeResidencia: "", manager: "", managerId: ''
    },
    {
      logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VENEDOMPRO SUR/Team Madrid FVENEDOMPRO SUR.png", nombre: "Team Madrid",
      jugadores: [], esPaga: "true", liga: "Venedompro Sur", idCampeonato: '1', paisDeResidencia: "", manager: "", managerId: ''
    },
    {
      logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VENEDOMPRO SUR/Perros Locos FVENEDOMPRO SUR.png", nombre: "Perros Locos",
      jugadores: [], esPaga: "true", liga: "Venedompro Sur", idCampeonato: '1', paisDeResidencia: "", manager: "", managerId: ''
    },
    {
      logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VENEDOMPRO SUR/Miller Baseball Club FVENEDOMPRO SUR.png", nombre: "Miller Baseball",
      jugadores: [], esPaga: "true", liga: "Venedompro Sur", idCampeonato: '1', paisDeResidencia: "", manager: "", managerId: ''
    },
    {
      logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VENEDOMPRO SUR/San Mateo  MLB FVENEDOMPRO SUR.png", nombre: "San Mateo MLB",
      jugadores: [], esPaga: "true", liga: "Venedompro Sur", idCampeonato: '1', paisDeResidencia: "", manager: "", managerId: ''
    },
    {
      logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VENEDOMPRO SUR/Colorado Soy FVENEDOMPRO SUR.png", nombre: "PanaBrothers",
      jugadores: [], esPaga: "true", liga: "Venedompro Sur", idCampeonato: '1', paisDeResidencia: "", manager: "", managerId: ''
    },
    {
      logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VENEDOMPRO SUR/Los Orientales del Pilar FVENEDOMPRO SUR.png", nombre: "Los Orientales del Pilar",
      jugadores: [], esPaga: "true", liga: "Venedompro Sur", idCampeonato: '1', paisDeResidencia: "", manager: "", managerId: ''
    }
  ]

  const datosOriginalesNOTOCAR = [
    {
      nombre: "VDVzla",
      esPago: "false",
      logo: "",
      equipos: [{
        logo: "../../../assets/LOGOS FANTASY EQUIPOS/Liga Fantasy VD VZLA/Los Calienta Banca FVDVZLA.png", nombre: "Los Calienta Bancas",
        jugadores: [], esPago: "false", liga: 'VDVzla', idCampeonato: '1', paisDeResidencia: "Venezuela", manager: "Julio Revetti"
      },
      {
        logo: "../../../assets/LOGOS FANTASY EQUIPOS/Liga Fantasy VD VZLA/Marineros de la Sabana FVDVZLA.png", nombre: "Marineros de la Sabana",
        jugadores: [], esPago: "false", liga: 'VDVzla', idCampeonato: '1', paisDeResidencia: "Venezuela", manager: "Alberto Aponte"
      },
      {
        logo: "../../../assets/LOGOS FANTASY EQUIPOS/Liga Fantasy VD VZLA/Miranda Cats FVDVZLA.png", nombre: "Cats Miranda",
        jugadores: [], esPago: "false", liga: 'VDVzla', idCampeonato: '1', paisDeResidencia: "Venezuela", manager: "Alberto Bonfanti"
      },
      {
        logo: "../../../assets/LOGOS FANTASY EQUIPOS/Liga Fantasy VD VZLA/Azulejos FVDVZLA.png", nombre: "Azulejos",
        jugadores: [], esPago: "false", liga: 'VDVzla', idCampeonato: '1', paisDeResidencia: "Venezuela", manager: "Oscar Calles"
      },
      {
        logo: "../../../assets/LOGOS FANTASY EQUIPOS/Liga Fantasy VD VZLA/Pikachu Bol FVDVZLA.png", nombre: "Pikacho Bol",
        jugadores: [], esPago: "false", liga: 'VDVzla', idCampeonato: '1', paisDeResidencia: "Venezuela", manager: "Carlos Rodriguez"
      },
      {
        logo: "../../../assets/LOGOS FANTASY EQUIPOS/Liga Fantasy VD VZLA/The Block FVDVZLA.png", nombre: "The Block",
        jugadores: [], esPago: "false", liga: 'VDVzla', idCampeonato: '1', paisDeResidencia: "Venezuela", manager: "Christian Chiacchio"
      },
      {
        logo: "../../../assets/LOGOS FANTASY EQUIPOS/Liga Fantasy VD VZLA/Los Juanchos FVDVZLA.png", nombre: "Los Juanchos",
        jugadores: [], esPago: "false", liga: 'VDVzla', idCampeonato: '1', paisDeResidencia: "Venezuela", manager: "Franklin Ojeda"
      },
      {
        logo: "../../../assets/LOGOS FANTASY EQUIPOS/Liga Fantasy VD VZLA/Los Vikingos de La Guaira FVDVZLA.png", nombre: "Vikings of the Guaira",
        jugadores: [], esPago: "false", liga: 'VDVzla', idCampeonato: '1', paisDeResidencia: "Venezuela", manager: "Joaquin Figueredo"
      },
      {
        logo: "../../../assets/LOGOS FANTASY EQUIPOS/Liga Fantasy VD VZLA/La Pedrera FVDVZLA.png", nombre: "La Pedrera",
        jugadores: [], esPago: "false", liga: 'VDVzla', idCampeonato: '1', paisDeResidencia: "Venezuela", manager: "Andrew Montilla"
      },
      {
        logo: "../../../assets/LOGOS FANTASY EQUIPOS/Liga Fantasy VD VZLA/Los Chapines FVDVZLA.png", nombre: "Chapines",
        jugadores: [], esPago: "false", liga: 'VDVzla', idCampeonato: '1', paisDeResidencia: "Guatemala", manager: "Mark Colina"
      }]
    },
    {
      nombre: "VD",
      esPaga: "false",
      logo: "",
      equipos: [{
        logo: "../../../assets/LOGOS FANTASY EQUIPOS/Liga FANTASY VD/Guerreros del Centro FVD.png", nombre: "Guerreros del Centro B.B.C.",
        jugadores: [], esPago: "false", liga: 'VD', idCampeonato: '1', paisDeResidencia: "", manager: "Antonio Hernandez"
      },
      {
        logo: "../../../assets/LOGOS FANTASY EQUIPOS/Liga FANTASY VD/The Chuchos FVD.png", nombre: "The Chuchos",
        jugadores: [], esPago: "false", liga: 'VD', idCampeonato: '1', paisDeResidencia: "", manager: "Alex Arias"
      },
      {
        logo: "../../../assets/LOGOS FANTASY EQUIPOS/Liga FANTASY VD/Arepa Power FVD.png", nombre: "Arepa Power",
        jugadores: [], esPago: "false", liga: 'VD', idCampeonato: '1', paisDeResidencia: "", manager: "Anthony Cedeño"
      },
      {
        logo: "../../../assets/LOGOS FANTASY EQUIPOS/Liga FANTASY VD/Centinelas FVD.png", nombre: "Centinelas",
        jugadores: [], esPago: "false", liga: 'VD', idCampeonato: '1', paisDeResidencia: "", manager: "Cesar Medina"
      },
      {
        logo: "../../../assets/LOGOS FANTASY EQUIPOS/Liga FANTASY VD/Ticodel FVD.png", nombre: "Ticodel",
        jugadores: [], esPago: "false", liga: 'VD', idCampeonato: '1', paisDeResidencia: "", manager: "Victor Delgado"
      },
      {
        logo: "../../../assets/LOGOS FANTASY EQUIPOS/Liga FANTASY VD/Los Camellos de Falcon FVD.png", nombre: "Los Camellos de Falcón",
        jugadores: [], esPago: "false", liga: 'VD', idCampeonato: '1', paisDeResidencia: "", manager: "Efrain Leon"
      },
      {
        logo: "../../../assets/LOGOS FANTASY EQUIPOS/Liga FANTASY VD/Esto se llama Beisbol FVD.png", nombre: "Estosellamabeisbol",
        jugadores: [], esPago: "false", liga: 'VD', idCampeonato: '1', paisDeResidencia: "", manager: "Leandro Cisneros"
      },
      {
        logo: "../../../assets/LOGOS FANTASY EQUIPOS/Liga FANTASY VD/Aguizuela FVD.png", nombre: "Aguizuela BBC",
        jugadores: [], esPago: "false", liga: 'VD', idCampeonato: '1', paisDeResidencia: "", manager: "Eduardo Villarroel"
      },
      {
        logo: "../../../assets/LOGOS FANTASY EQUIPOS/Liga FANTASY VD/Gringo23 FVD.png", nombre: "Gringo23",
        jugadores: [], esPago: "false", liga: 'VD', idCampeonato: '1', paisDeResidencia: "", manager: "Jorge Corona"
      },
      {
        logo: "../../../assets/LOGOS FANTASY EQUIPOS/Liga FANTASY VD/Team GRA FVD.png", nombre: "Team G. R. A.",
        jugadores: [], esPago: "false", liga: 'VD', idCampeonato: '1', paisDeResidencia: "", manager: "Carlos Torrealba"
      }]
    },
    {
      nombre: "VDEste",
      esPaga: "false",
      logo: "",
      equipos: [{
        logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD ESTE/Los Monstrones FVD ESTE.png", nombre: "Los Monstrones",
        jugadores: [], esPago: "false", liga: "VDEste", idCampeonato: '1', paisDeResidencia: "", manager: ""
      },
      {
        logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD ESTE/Panteras BBC FVD ESTE.png", nombre: "Panteras BBC",
        jugadores: [], esPago: "false", liga: "VDEste", idCampeonato: '1', paisDeResidencia: "", manager: ""
      },
      {
        logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD ESTE/Indios de Barcelona FVD ESTE.png", nombre: "Indios de Barcelona",
        jugadores: [], esPago: "false", liga: "VDEste", idCampeonato: '1', paisDeResidencia: "", manager: ""
      },
      {
        logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD ESTE/Monster FVD ESTE.png", nombre: "Monster",
        jugadores: [], esPago: "false", liga: "VDEste", idCampeonato: '1', paisDeResidencia: "", manager: ""
      },
      {
        logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD ESTE/Brothers Patriots FVD ESTE.png", nombre: "Brohter' Patriots",
        jugadores: [], esPago: "false", liga: "VDEste", idCampeonato: '1', paisDeResidencia: "", manager: ""
      },
      {
        logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD ESTE/Vengadores FVD ESTE.png", nombre: "Vengadores MLB",
        jugadores: [], esPago: "false", liga: "VDEste", idCampeonato: '1', paisDeResidencia: "", manager: ""
      },
      {
        logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD ESTE/Los Gigantes FVD ESTE.png", nombre: "Los Gigantes",
        jugadores: [], esPago: "false", liga: "VDEste", idCampeonato: '1', paisDeResidencia: "", manager: ""
      },
      {
        logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD ESTE/Los Chiclosos FVD ESTE.png", nombre: "Los Chiclosos",
        jugadores: [], esPago: "false", liga: "VDEste", idCampeonato: '1', paisDeResidencia: "", manager: ""
      },
      {
        logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD ESTE/Noctambulos FVD ESTE.png", nombre: "Noctambulos",
        jugadores: [], esPago: "false", liga: "VDEste", idCampeonato: '1', paisDeResidencia: "", manager: ""
      },
      {
        logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD ESTE/Los Dragones FVD ESTE.png", nombre: "Los Dragones",
        jugadores: [], esPago: "false", liga: "VDEste", idCampeonato: '1', paisDeResidencia: "", manager: ""
      }]
    },
    {
      nombre: "VDOeste",
      esPaga: "false",
      logo: "",
      equipos: [{
        logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD OESTE/Niño Team  FVDOESTE.png", nombre: "Niño Team",
        jugadores: [], esPago: "false", liga: "VDOeste", idCampeonato: '1', paisDeResidencia: "", manager: ""
      },
      {
        logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD OESTE/Los Roba Señas  FVDOESTE.png", nombre: "Los Roba Señas de Cooperstpwn",
        jugadores: [], esPago: "false", liga: "VDOeste", idCampeonato: '1', paisDeResidencia: "", manager: ""
      },
      {
        logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD OESTE/HardeWell Team  FVDOESTE.png", nombre: "Hardwell Team",
        jugadores: [], esPago: "false", liga: "VDOeste", idCampeonato: '1', paisDeResidencia: "", manager: ""
      },
      {
        logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD OESTE/Chapi Team  FVDOESTE.png", nombre: "Chapi Team",
        jugadores: [], esPago: "false", liga: "VDOeste", idCampeonato: '1', paisDeResidencia: "", manager: ""
      },
      {
        logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD OESTE/Money Ball  FVDOESTE.png", nombre: "Moneyball Inc.",
        jugadores: [], esPago: "false", liga: "VDOeste", idCampeonato: '1', paisDeResidencia: "", manager: ""
      },
      {
        logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD OESTE/Perfume FeyAlegria  FVDOESTE.png", nombre: "Perfume de Feyalegria",
        jugadores: [], esPago: "false", liga: "VDOeste", idCampeonato: '1', paisDeResidencia: "", manager: ""
      },
      {
        logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD OESTE/The Walkers  FVDOESTE.png", nombre: "The Walkers",
        jugadores: [], esPago: "false", liga: "VDOeste", idCampeonato: '1', paisDeResidencia: "", manager: ""
      },
      {
        logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD OESTE/Navegantes del Este  FVDOESTE.png", nombre: "Navegantes del Este",
        jugadores: [], esPago: "false", liga: "VDOeste", idCampeonato: '1', paisDeResidencia: "", manager: ""
      },
      {
        logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD OESTE/Los Bad Boys  FVDOESTE.png", nombre: "Los Bad Boys",
        jugadores: [], esPago: "false", liga: "VDOeste", idCampeonato: '1', paisDeResidencia: "", manager: ""
      },
      {
        logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD OESTE/Los Macrofagos  FVDOESTE .png", nombre: "Los Macrofagos",
        jugadores: [], esPago: "false", liga: "VDOeste", idCampeonato: '1', paisDeResidencia: "", manager: ""
      }]
    },
    {
      nombre: "VDNorte",
      esPago: "false",
      logo: "",
      equipos: [{
        logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD NORTE/Alberto Mosalve Team  FVD NORTE.png", nombre: "Alberto Monsalve Team",
        jugadores: [], esPago: "false", liga: "VDNorte", idCampeonato: '1', paisDeResidencia: "", manager: ""
      },
      {
        logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD NORTE/Tucacas BBC  FVD NORTE.png", nombre: "Tucacas BBC",
        jugadores: [], esPago: "false", liga: "VDNorte", idCampeonato: '1', paisDeResidencia: "", manager: ""
      },
      {
        logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD NORTE/Broncos FVD NORTE.png", nombre: "Broncos",
        jugadores: [], esPago: "false", liga: "VDNorte", idCampeonato: '1', paisDeResidencia: "", manager: ""
      },
      {
        logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD NORTE/Los Chonchis  FVD NORTE.png", nombre: "Los Chonchis",
        jugadores: [], esPago: "false", liga: "VDNorte", idCampeonato: '1', paisDeResidencia: "", manager: ""
      },
      {
        logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD NORTE/Leones del Valle  FVD NORTE.png", nombre: "Leones del Valle",
        jugadores: [], esPago: "false", liga: "VDNorte", idCampeonato: '1', paisDeResidencia: "", manager: ""
      },
      {
        logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD NORTE/Machiques Power  FVD NORTE.png", nombre: "Machique's Power",
        jugadores: [], esPago: "false", liga: "VDNorte", idCampeonato: '1', paisDeResidencia: "", manager: ""
      },
      {
        logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD NORTE/Oscar Team  FVD NORTE .png", nombre: "OscarTeam",
        jugadores: [], esPago: "false", liga: "VDNorte", idCampeonato: '1', paisDeResidencia: "", manager: ""
      },
      {
        logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD NORTE/Paredes Team  FVD NORTE.png", nombre: "Paredes Team",
        jugadores: [], esPago: "false", liga: "VDNorte", idCampeonato: '1', paisDeResidencia: "", manager: ""
      },
      {
        logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD NORTE/Isotops Team  FVD NORTE.png", nombre: "Isotopos Team",
        jugadores: [], esPago: "false", liga: "VDNorte", idCampeonato: '1', paisDeResidencia: "", manager: ""
      },
      {
        logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD NORTE/Cangrejeros de Vzla   FVD NORTER.png", nombre: "Cangrejeros de Vzla",
        jugadores: [], esPago: "false", liga: "VDNorte", idCampeonato: '1', paisDeResidencia: "", manager: ""
      }]
    },
    {
      nombre: "VDSur",
      esPaga: "false",
      logo: "",
      equipos: [{
        logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD SUR/El Cojedeño FVD SUR.png", nombre: "El Cojedeño",
        jugadores: [], esPago: "false", liga: "VDSur", idCampeonato: '1', paisDeResidencia: "", manager: ""
      },
      {
        logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD SUR/Delgados BBC  FVD SUR.png", nombre: "Delgados BBC",
        jugadores: [], esPago: "false", liga: "VDSur", idCampeonato: '1', paisDeResidencia: "", manager: ""
      },
      {
        logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD SUR/Blue Sox  FVD SUR.png", nombre: "Blue Sox",
        jugadores: [], esPago: "false", liga: "VDSur", idCampeonato: '1', paisDeResidencia: "", manager: ""
      },
      {
        logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD SUR/D Prada  FVD SUR.png", nombre: "D.Prada",
        jugadores: [], esPago: "false", liga: "VDSur", idCampeonato: '1', paisDeResidencia: "", manager: ""
      },
      {
        logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD SUR/MLB en Santiago  FVD SUR.png", nombre: "MLB en Santiago",
        jugadores: [], esPago: "false", liga: "VDSur", idCampeonato: '1', paisDeResidencia: "", manager: ""
      },
      {
        logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD SUR/Pumas VZLA  FVD SUR.png", nombre: "Pumas Vzla",
        jugadores: [], esPago: "false", liga: "VDSur", idCampeonato: '1', paisDeResidencia: "", manager: ""
      },
      {
        logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD SUR/Delfines de Margarita  FVD SUR .png", nombre: "Delfines de Margarita",
        jugadores: [], esPago: "false", liga: "VDSur", idCampeonato: '1', paisDeResidencia: "", manager: ""
      },
      {
        logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD SUR/Osos de Carabobo  FVD SUR.png", nombre: "Los Osos de Carabobo",
        jugadores: [], esPago: "false", liga: "VDSur", idCampeonato: '1', paisDeResidencia: "", manager: ""
      },
      {
        logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD SUR/El Tarron Sport  FVD SUR.png", nombre: "El Tarron Sport",
        jugadores: [], esPago: "false", liga: "VDSur", idCampeonato: '1', paisDeResidencia: "", manager: ""
      },
      {
        logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VENEDOMPRO ESTE/The Nuñez team FVENEDOMPRO ESTE.png", nombre: "The Nuñez Team",
        jugadores: [], esPago: "false", liga: "VDSur", idCampeonato: '1', paisDeResidencia: "", manager: ""
      }]
    },
    {
      nombre: "VDCentro",
      esPaga: "false",
      logo: "",
      equipos: [{
        logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD  CENTRO/Bravos de Ararure FVD CENTRO.png", nombre: "Bravos de Araure",
        jugadores: [], esPago: "false", liga: "VDCentro", idCampeonato: '1', paisDeResidencia: "", manager: ""
      },
      {
        logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD  CENTRO/Anthony BBC FVD CENTRO .png", nombre: "Anthony BBC",
        jugadores: [], esPago: "false", liga: "VDCentro", idCampeonato: '1', paisDeResidencia: "", manager: ""
      },
      {
        logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD  CENTRO/Gatos de Maracaibo FVD CENTRO.png", nombre: "Gatos de Maracaibo",
        jugadores: [], esPago: "false", liga: "VDCentro", idCampeonato: '1', paisDeResidencia: "", manager: ""
      },
      {
        logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD  CENTRO/La Elegancia FVD CENTRO.png", nombre: "La Elegancia",
        jugadores: [], esPago: "false", liga: "VDCentro", idCampeonato: '1', paisDeResidencia: "", manager: ""
      },
      {
        logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD  CENTRO/The Power Family FVD CENTRO .png", nombre: "The Power Family",
        jugadores: [], esPago: "false", liga: "VDCentro", idCampeonato: '1', paisDeResidencia: "", manager: ""
      },
      {
        logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD  CENTRO/Team Peque FVD CENTRO .png", nombre: "Team Peque",
        jugadores: [], esPago: "false", liga: "VDCentro", idCampeonato: '1', paisDeResidencia: "", manager: ""
      },
      {
        logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD  CENTRO/Los Guti Baseball FVD CENTRO .png", nombre: "Los Gutiz Baseball",
        jugadores: [], esPago: "false", liga: "VDCentro", idCampeonato: '1', paisDeResidencia: "", manager: ""
      },
      {
        logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD  CENTRO/Chacalaca BBC FVD CENTRO .png", nombre: "Chacalaca BBC",
        jugadores: [], esPago: "false", liga: "VDCentro", idCampeonato: '1', paisDeResidencia: "", manager: ""
      },
      {
        logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD  CENTRO/Latin Power Team FVD CENTRO .png", nombre: "Latinpower Team",
        jugadores: [], esPago: "false", liga: "VDCentro", idCampeonato: '1', paisDeResidencia: "", manager: ""
      },
      {
        logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD  CENTRO/Gloriosos de Trujillo FVD CENTRO.png", nombre: "Los Gloriosos de Trujillo",
        jugadores: [], esPago: "false", liga: "VDCentro", idCampeonato: '1', paisDeResidencia: "", manager: ""
      }]
    },
    {
      nombre: "Venedompro Oeste",
      esPaga: "true",
      logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGAS/LIGA FANTASY VENEDOMPRO OESTE.png",
      equipos: [{
        logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VENEDOMPRO OESTE/Los Estrada FVENEDOMPRO OESTE.png", nombre: "Los Estrada",
        jugadores: [], esPaga: "true", liga: 'Venedompro Oeste', paisDeResidencia: "", manager: "Daniel Estrada"
      },
      {
        logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VENEDOMPRO OESTE/Paseo City FVENEDOMPRO OESTE.png", nombre: "Paseo City",
        jugadores: [], esPaga: "true", liga: "Venedompro Oeste", idCampeonato: '1', paisDeResidencia: "", manager: ""
      },
      {
        logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VENEDOMPRO OESTE/Mi Familia SBC  FVENEDOMPRO OESTE.png", nombre: "Mi Familia SBC",
        jugadores: [], esPaga: "true", liga: "Venedompro Oeste", idCampeonato: '1', paisDeResidencia: "", manager: ""
      },
      {
        logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VENEDOMPRO OESTE/Los Pajaros Rojos FVENEDOMPRO OESTE.png", nombre: "Los Pájaros Rojos",
        jugadores: [], esPaga: "true", liga: "Venedompro Oeste", idCampeonato: '1', paisDeResidencia: "", manager: ""
      },
      {
        logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VENEDOMPRO OESTE/Halp9779 FVENEDOMPRO OESTE.png", nombre: "Halp9779",
        jugadores: [], esPaga: "true", liga: "Venedompro Oeste", idCampeonato: '1', paisDeResidencia: "", manager: ""
      },
      {
        logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VENEDOMPRO OESTE/Pesqueros de Sucre FVENEDOMPRO OESTE.png", nombre: "Pesqueros de Sucre",
        jugadores: [], esPaga: "true", liga: "Venedompro Oeste", idCampeonato: '1', paisDeResidencia: "", manager: ""
      },
      {
        logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VENEDOMPRO OESTE/Los Triunfadores FVENEDOMPRO OESTE.png", nombre: "Los Triunfadores",
        jugadores: [], esPaga: "true", liga: "Venedompro Oeste", idCampeonato: '1', paisDeResidencia: "", manager: ""
      },
      {
        logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VENEDOMPRO OESTE/The Black Bull FVENEDOMPRO OESTE.png", nombre: "The Black Bull",
        jugadores: [], esPaga: "true", liga: "Venedompro Oeste", idCampeonato: '1', paisDeResidencia: "", manager: ""
      }]
    },
    {
      nombre: "Venedompro Este",
      esPaga: "true",
      logo: "",
      equipos: [{
        logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VENEDOMPRO ESTE/Los Nuevos Mutantes FVENEDOMPRO ESTE.png", nombre: "Los Mutantes",
        jugadores: [], esPaga: "true", liga: "Venedompro Este", idCampeonato: '1', paisDeResidencia: "", manager: ""
      },
      {
        logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VENEDOMPRO ESTE/Roceros de Maracay FVENEDOMPRO ESTE.png", nombre: "Ronceros de Maracay",
        jugadores: [], esPaga: "true", liga: "Venedompro Este", idCampeonato: '1', paisDeResidencia: "", manager: ""
      },
      {
        logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VENEDOMPRO ESTE/Los Monstrones FVENEDOMPRO ESTE.png", nombre: "Los Monstrones",
        jugadores: [], esPaga: "true", liga: "Venedompro Este", idCampeonato: '1', paisDeResidencia: "", manager: ""
      },
      {
        logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VENEDOMPRO ESTE/Padres FVENEDOMPRO ESTE.png", nombre: "Padres",
        jugadores: [], esPaga: "true", liga: "Venedompro Este", idCampeonato: '1', paisDeResidencia: "", manager: ""
      },
      {
        logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VENEDOMPRO ESTE/Diablos Rojos FVENEDOMPRO ESTE.png", nombre: "Diablos Rojos",
        jugadores: [], esPaga: "true", liga: "Venedompro Este", idCampeonato: '1', paisDeResidencia: "", manager: ""
      },
      {
        logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VENEDOMPRO ESTE/Atelticos del Jarillo FVENEDOMPRO ESTE.png", nombre: "Atléticos Del Jarillo",
        jugadores: [], esPaga: "true", liga: "Venedompro Este", idCampeonato: '1', paisDeResidencia: "", manager: ""
      },
      {
        logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VENEDOMPRO ESTE/The Golden FVENEDOMPRO ESTE.png", nombre: "The Golden",
        jugadores: [], esPaga: "true", liga: "Venedompro Este", idCampeonato: '1', paisDeResidencia: "", manager: ""
      },
      {
        logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VENEDOMPRO ESTE/Niño Team FVENEDOMPRO ESTE.png", nombre: "Niño Team",
        jugadores: [], esPaga: "true", liga: "Venedompro Este", idCampeonato: '1', paisDeResidencia: "", manager: ""
      },
      {
        logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VENEDOMPRO ESTE/The Nuñez team FVENEDOMPRO ESTE.png", nombre: "The Nuñez Team",
        jugadores: [], esPaga: "true", liga: "Venedompro Este", idCampeonato: '1', paisDeResidencia: "", manager: ""
      },
      {
        logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VENEDOMPRO ESTE/Bombarderos del Tuy FVENEDOMPRO ESTE.png", nombre: "Bombarderos del Tuy",
        jugadores: [], esPaga: "true", liga: "Venedompro Este", idCampeonato: '1', paisDeResidencia: "", manager: ""
      },
      {
        logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VENEDOMPRO ESTE/Tiburones de Miamai FVENEDOMPRO ESTE.png", nombre: "Tiburones de Miami",
        jugadores: [], esPaga: "true", liga: "Venedompro Este", idCampeonato: '1', paisDeResidencia: "", manager: ""
      }]
    },
    {
      nombre: "Venedompro Sur",
      esPaga: "true",
      logo: "",
      equipos: [{
        logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VENEDOMPRO SUR/Team Reales Primos FVENEDOMPRO SUR.png", nombre: "Team Reales Primos",
        jugadores: [], esPaga: "true", liga: "Venedompro Sur", idCampeonato: '1', paisDeResidencia: "", manager: ""
      },
      {
        logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VENEDOMPRO SUR/Isafit Team FVENEDOMPRO SUR.png", nombre: "Isafit Team",
        jugadores: [], esPaga: "true", liga: "Venedompro Sur", idCampeonato: '1', paisDeResidencia: "", manager: ""
      },
      {
        logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VENEDOMPRO SUR/Team Madrid FVENEDOMPRO SUR.png", nombre: "Team Madrid",
        jugadores: [], esPaga: "true", liga: "Venedompro Sur", idCampeonato: '1', paisDeResidencia: "", manager: ""
      },
      {
        logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VENEDOMPRO SUR/Perros Locos FVENEDOMPRO SUR.png", nombre: "Perros Locos",
        jugadores: [], esPaga: "true", liga: "Venedompro Sur", idCampeonato: '1', paisDeResidencia: "", manager: ""
      },
      {
        logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VENEDOMPRO SUR/Miller Baseball Club FVENEDOMPRO SUR.png", nombre: "Miller Baseball",
        jugadores: [], esPaga: "true", liga: "Venedompro Sur", idCampeonato: '1', paisDeResidencia: "", manager: ""
      },
      {
        logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VENEDOMPRO SUR/San Mateo  MLB FVENEDOMPRO SUR.png", nombre: "San Mateo MLB",
        jugadores: [], esPaga: "true", liga: "Venedompro Sur", idCampeonato: '1', paisDeResidencia: "", manager: ""
      },
      {
        logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VENEDOMPRO SUR/Colorado Soy FVENEDOMPRO SUR.png", nombre: "PanaBrothers",
        jugadores: [], esPaga: "true", liga: "Venedompro Sur", idCampeonato: '1', paisDeResidencia: "", manager: ""
      },
      {
        logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VENEDOMPRO SUR/Los Orientales del Pilar FVENEDOMPRO SUR.png", nombre: "Los Orientales del Pilar",
        jugadores: [], esPaga: "true", liga: "Venedompro Sur", idCampeonato: '1', paisDeResidencia: "", manager: ""
      }]
    }
  ];
};
