
# Crea tu propia competición

_Proyecto que te permite crear tu propia competición basada en una serie de parametros que tu elijas_

Autora: **Naroa Rebanal** 


### Guía de las funciones utilizadas 

Para la ejecucíon de la competición se hace uso de diversas funciones. A continuación se adjunta una guía para poder encontrarlas más facilmente.

1.Nombre de la función: competition  
Línea: 5 
Parámetros:  
   * participants -> array con los participantes  
   * scope -> el ambito de la competición (si es mundial, local, en un pais, escolar...)  
   * year -> el año en el que tiene lugar  
   * sport -> tipo de deporte que es  
   * type -> el tipo de competición (masculina, femenina, infantil...)  
Uso: Con esta función montamos la estructura principal de la competición  

2.Nombre de la función: round  
Línea: 51  
Parámetros: allParticipants -> array con los participantes de la ronda  
Uso: Con esta función simulamos cada ronda de partidos  

3.Nombre de la función: pairOpponents  
Línea: 85  
Parámetros: teamsArray -> un array con los participantes que tenemos que emparejar   
Uso: Con esta función vamos a hacer parejas aleatorias de entre todos los participantes del array que recibimos.  

4.Nombre de la función: shuffle  
Línea: 87  
Parámetros: array -> un array con los elementos que queremos mezclar  
Uso: Esta función mezcla de forma aleatoria y desordeena los elementos del array.  

5.Nombre de la función: pairing  
Línea:  98  
Parámetros: array -> un array con los elementos que queremos separar en parejas  
Uso: esta función divide el array en grupos de dos   

6.Nombre de la función: match  
Línea: 108  
Parámetros: teamOne, teamTwo -> los participantes  
Uso: Con esta función simulamos un partido entre dos participantes  

7.Nombre de la función: goalsScored  
Línea: 140  
Uso: Con esta función generamos un numero aleatorio de tantos marcados por un participante  

8.Nombre de la función: extra time  
Línea: 147  
Uso: Con esta función simulamos una prorroga en el partido  



### Lanzamiento de una competición de ejemplo

Datos específicos para la creación de la competición en las líneas 159 - 163  
Ejecutamos la función de ejemplo en la línea 167

