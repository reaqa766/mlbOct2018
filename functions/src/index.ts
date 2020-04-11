import * as functions from 'firebase-functions';
import * as  admin from 'firebase-admin';
import axios from 'axios'

export const actualizarPuntos = functions.https.onRequest(async (request, response) => {
  // Obtengo la fecha del post y me meto en el campeonato
  const {idCampeonato, fecha} = request.body;
  try {
    const campeonatoDoc = await admin.firestore().collection('campeonatos').doc(idCampeonato).get();
    const { tipoLigas } = campeonatoDoc.data()
    // Me meto en cada tipo de liga
    for (const tipo of tipoLigas) {
      const { ligas } = tipo;
      // Me meto en cada liga
      for (const liga of ligas) {
        // Me meto en cada equipo
        for (const equipo of liga.equipos) {
          const personIds = equipo.jugadores.map(({id}) => id).join(',');
          // Por cada equipo, obtengo los jugadores y los mappeo con la bdd de MLB
          const { data: jugadoresAPI } = await axios.get(`https://statsapi.mlb.com/api/v1/people?personIds=${personIds}&season=2019&hydrate=stats(type=gameLog,season,season=2019,gameType=R)`)

          // Filtro jugadores activos
          const jugadoresFiltrados = jugadoresAPI.map(({people}) => people).filter(player =>{
            if(player.stats && player.stats.length !== 0 && player.stats[0].splits && player.stats[0].splits.length !== 0){
              for(let i = 0; i < player.stats[0].splits.length; i++){
                if(player.stats[0].splits[i].date === this.dia){
                  return true;
                }
              }
              return false;
            }
          })
          // Se ordenan por nombre
          .sort(({fullName: a}, {fullName: b}) => {
            if (a > b) {
              return 1;
            } else if (a < b) {
              return -1;
            } else if (a === b) {
              return 0;
            }
          });
        // Calculo los puntos de la fecha
          const jugadores = jugadoresFiltrados.map(jugadorArray => {
            const jugador = {...jugadorArray};
            // Busco la fecha deseada y la guardo en indexStatDate
            jugador.stats[0].splits.forEach((split, index) => {
              if(split.date == fecha) {
                jugador.indexStatDate = index;
              }
            })
            const selectedSplit = jugador.stats[0].splits[jugador.indexStatDate];
            // Calculo de una manera si es Pitcher
            if(jugador.primaryPosition.name == "Pitcher") {
              jugador.Nro_innings = Number(selectedSplit.stat.inningsPitched).valueOf();

              if(selectedSplit.stat.earnedRuns==0){jugador.cero_carreras_permitidas = Math.round(7/9*jugador.Nro_innings)}
              else if (selectedSplit.stat.earnedRuns==1){ (jugador.una_carreras_permitidas = Math.round(5/9*jugador.Nro_innings ))}
              else if(selectedSplit.stat.earnedRuns==2){ (jugador.dos_carreras_permitidas = Math.round(3/9*jugador.Nro_innings ))}
              else if (selectedSplit.stat.earnedRuns>=3) { (jugador.tres_carreras_permitidas = 0)};


              if(selectedSplit.stat.strikeOuts>=0 && selectedSplit.stat.strikeOuts<=4 ){ (jugador.cuatro_ponches_realizados = 1)}
              else if (selectedSplit.stat.strikeOuts>=5 && selectedSplit.stat.strikeOuts<=10){ (jugador.diez_ponches_realizados =2 )}
              else if(selectedSplit.stat.strikeOuts>=11 && selectedSplit.stat.strikeOuts<15){ (jugador.quince_ponches_realizados =5 )}
              else if (selectedSplit.stat.strikeOuts>=15) { (jugador.masquince_ponches_realizados = 10)};

              jugador.sumaParcial = (jugador.cero_carreras_permitidas || 0) +
                  (jugador.una_carreras_permitidas || 0) +
                  (jugador.dos_carreras_permitidas || 0) +
                  (jugador.tres_carreras_permitidas || 0) +
                  (jugador.cuatro_ponches_realizados || 0) +
                  (jugador.diez_ponches_realizados || 0) +
                  (jugador.quince_ponches_realizados || 0) +
                  (jugador.masquince_ponches_realizados || 0) +
                  (selectedSplit.stat.wins * 3 || 0) +
                  (selectedSplit.stat.saves* 2 || 0) +
                  (selectedSplit.stat.losses * -3);
            } else {
              // Calculo de otra manera si no es Pitcher
              const {hits, doubles, triples, homeRuns, rbi, runs, baseOnBalls, strikeOuts, stolenBases, caughtStealing} = selectedSplit.stat
              jugador.sumaParcial = (hits * 1) + (doubles * 2) +
              (triples * 3) + (homeRuns * 4) + (rbi * 2) +
              (runs * 1) + (baseOnBalls * 1) + (strikeOuts * -2) +
              (stolenBases * 1) + (caughtStealing * -2);
            }
            return jugador;
          })
          // Revisas si la fecha existe, si no existe, la agregas {fecha: date, puntos: int}
          // Las fechas siguen la forma: YYYY-MM-DD
          const indexFechaBuscada = equipo.fechas.indexOf(fecha);
          // Se calculan los puntos de la fecha
          const puntos = jugadores.reduce((acumulado, jugador) => acumulado + jugador.sumaParcial, 0);
          // Si existe, se modifica
          if(indexFechaBuscada !== -1) {
            equipo.fechas[indexFechaBuscada] = {fecha, puntos}
          } else {
            // Si no, se agrega
            equipo.fechas.push = {fecha, puntos}
          }
        }
      }
    }
  } catch (error) {
    console.log(error);
  }
});
