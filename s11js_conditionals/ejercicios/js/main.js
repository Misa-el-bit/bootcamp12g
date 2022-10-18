/*Input: kodemia doceava generación
Output: 13
Input: el pájaro dev
Output: 5
*/

/*function contadorVocales (texto){
    var contadorVocales = 0
    var vocales = ["a","e","i","o","u"]
    for (var i =0; i < texto.length; i++){
        if (vocales.indexOf(texto[i]) >= 0){
            ++contadorVocales;
        }
    }
    return contadorVocales
}

console.log(contadorVocales(prompt("Ingrese el texto")))*/

/*2.______________
Input: Más cuerdo es, el que acepta su propia locura
Output: 9
Input: Me volví loco, con largos intervalos de horrible cordura
Output: 9
*/
/*
function conteoPalabras(str) { 
    return str.split(" ").length;
  }
  
  console.log(conteoPalabras(prompt("Ingrese una frase")));
*/
 /*3. Palindromos______________
Input:Sé verla al revés
Output: true
Input: La mañana es fría
Output: false
Input:Yo hago yoga hoy
Output: true
Input: Y natación mañana
Output: false*/

var theString = prompt("ingresa un palindromo").toLowerCase().split(' ').join('') //se crea la variable que almacenara nuestro string y se le aplican los metodos toLowercase, para convertirla en minusculas, split(" ") para separarla por letra y join("") para volverla a unir pero sin espacios
console.log(theString)

function palindrom(theString){
    var reversedString = "" // se crea la variable que almacenara nuestra nueva cadena ahora invertida
    for(var i = theString.length - 1; i >= 0; i--){ //se utiliza un ciclo for para iterar nuestra cadena de atras hacia adelante e ir almacenando el cáracter en la variable(i)
        reversedString += theString[i] // se va concatenando cada caracter a nuestra nueva cadena para obtener la cadena ahora invertida
        console.log(reversedString)
    }return theString === reversedString ? console.log(true) : console.log(false) //se retorna un ternario para comparar si ambas cadenas tienen exactamente los mismos cáracteres 
}
(palindrom(theString))