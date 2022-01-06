//FUNCIONES

//Con esta función montamos la estructura principal del mundial
//Recibimos un array con los participantes y otros datos como el año, el deporte y el tipo.
function competition(participants, scope, year, sport, type){
        
    //Mensaje de Inicio
    let footballIcon = String.fromCodePoint(0x26BD);//Un icono para dar un poco de alegria al titulo
    console.log(footballIcon, footballIcon, `Campeonato ${scope} de ${sport} ${type} ${year}`,footballIcon, footballIcon,'\n');

    //Presentamos a los equipos participantes del mundial
    console.log("Equipos participantes del mundial:", participants.join(" - "), "\n");

    //Empieza la competicion
    console.log("¡Empieza el mundial!\n");
    let i = 1;
    //creamos una variable que nos servirá de marcador de número de rondas
    do {
        //Para que quede visualmente mejor vamos a designar un nombre a la rondas finales
        //En este ejemplo no hay problema ya que partimos con 16 participantes, pero incluyo la condicion para que funcionase todo igual fuesen cuales fueran el num de participantes inicial.
        if(participants.length <= 16){
        let roundName;
        switch(participants.length){
            case 16:
                roundName = "Octavos de final";
            break;
            case 8:
                roundName = "Cuartos de final";
            break;
            case 4:
                roundName = "Semifinales";
            break;
            case 2:
                roundName = "La gran final";
            break;
        }
        console.log("///RONDA " + i +  " " + roundName + "///"); //mostramos el titulo de la ronda
    }else{
        console.log("///RONDA " + i  + "///"); //mostramos el titulo de la ronda
    }

    i++; //Incrementamos el numero de la ronda
    participants = round(participants); //La función esta en la línea 51
    //lanzamos la función round con el array de participantes, esta función retorna los clasificados que se guardan en la misma variable
    }while(participants.length > 1) //Ponemos como condicion que las rondas se repitan mientras los participantes sean mas de 1
}



//Con esta función simulamos cada ronda de partidos
function round(allParticipants){
    //recibimos un array con todos los participantes que han llegado a esta ronda
    
    //1. Creamos las parejas que se van a enfrentar
    let teamPairs = pairOpponents(allParticipants); //La función esta en la línea 85

    let winners = [];
    //2. Se juegan todos los partidos
    for(let pair of teamPairs){
        //Recorremos el array de parejas
        //A cada pareja le decidmos que juegue un partido
         let matchPlayed = match(...pair); //La función esta en la línea 108
         //La función match nos devuelve un array con dos elementos:
        //El ganador -> que lo incluiremos en el array de clasificados
        winners.push(matchPlayed[0]);
        //El mensaje de la clasificacion para que lo pintemos.
        console.log(matchPlayed[1]);
    }

    if(winners.length === 1){
        //si en el array de ganadores solo hay uno significa que se ha acabado el mundial.
        //Anuncio de las ganadoras
        let ganadoras = winners[0];
        let trofeoIcon = String.fromCodePoint(0x1f3c6);
        let celebracionIcon = String.fromCodePoint(0x1f389);
        console.log(celebracionIcon, trofeoIcon, ganadoras, ' - Ganadoras del mundial 2022',trofeoIcon, celebracionIcon);
    }else{
    console.log("CLASIFICADOS: " + winners + "\n");
} 
return winners;

}

//Con esta función vamos a hacer parejas aleatorias de entre todos los participantes del array que recibimos.
function pairOpponents(teamsArray){
    //1. Mezclamos bien todos los equipos participantes para que sea totalmente aleatorio.
    function shuffle (array){
        //recorremos el array de equipos y vamos intercambiando posiciones de forma aleatoria.
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1)); 
            [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        }
        let shuffledParticipants = shuffle(teamsArray);

    //2. Hacemos parejas con los elementos del array "desordenado"
   function pairing(array){
        return array.reduce((result, value, index, sourceArray) => index % 2 === 0 ? [...result, sourceArray.slice(index, index + 2)] : result, [])
   }

   //Obtenemos como resultado un array con arrays con las parejas
   return pairing(shuffledParticipants);
}


//Con esta función simulamos un partido entre dos equipos
function match(teamOne, teamTwo){

    //Se realiza el partido y cada equipo marca x número de goles
    let teamOneGoals = goalsScored(); //La función esta en la línea 140
    let teamTwoGoals = goalsScored();
 
    //En caso de que nuestro partido resulte en empate deberemos añadir una prorroga para que se desempate.
    //Mientras que los resultados coincidan (empate) seguiremos en el bucle añadiendo prorrogas hasta un desempate.
     while(teamOneGoals == teamTwoGoals){
         teamOneGoals += extraTime(); //La función esta en la línea 147
         teamTwoGoals += extraTime();
     }

    //Comprobamos quien es el ganador
    let winnerTeam;
    if(teamOneGoals > teamTwoGoals){
        //Equipo 1 ganador
        winnerTeam = teamOne;
    }else{
        //Equipo 2 ganador
        winnerTeam = teamTwo;
    }

    //Preparamos los resultados que van a aparecer en pantalla
    let matchResult = `${teamOne}: ${teamOneGoals} - ${teamTwo}: ${teamTwoGoals} => ${winnerTeam}`;

    //Devolvemos el ganador y los resultados
    return [winnerTeam, matchResult];
}


//Con esta función generamos un numero aleatorio de goles marcados por un equipo
function goalsScored(){
    //Nos devuelve un numero de 0 a 4 que simula los goles mercados por un equipo durante el partido.
    //Se ha estipulado un máximo de 4 goles por partido ya que no suele marcarse de media más por equipo en un partido.
    return Math.floor(Math.random() * 5);
}

//Con esta función simulamos una prorroga en el partido 
function extraTime(){
    //En caso de empate en nuestro mundial tendriamos prorrogas del partido hasta tener un resultado dispar.
    //Esta función nos devuelve un numero X de 0 a 2 que simula los goles mercados por un equipo durante la prorroga.
    //He estipulado un máximo de 2 ya que el tiempo de prorroga es más limitado.
    return Math.floor(Math.random() * 3);
}



//CREAMOS NUESTRO MUNDIAL

//Recogemos los datos especificos de nuestro mundial: equipos participantes, el año, el deporte y el tipo
let participants = ["España", "Francia", "Italia", "Bélgica", "Alemania", "Inglaterra", "Gales", "Escocia","Dinamarca","Luxemburgo","Irlanda","Grecia","Suiza","Austria","Polonia","Rusia"];
let year = '2022';
let sport = 'futbol';
let type = 'femenino';
let scope = 'mundial';


//Iniciamos el mundial
competition(participants, scope, year, sport, type);

