/* 1- Comparar 2 strings y determinar cual de las dos es el mas largo 
imput: "string" , "some large string"
output: "el string (string) es el mas largo"
-Solicitar 2 strings
-Obtener el total de caracteres de cada string (.length)
-Comparar cual tiene más caracteres y mostrar el mensaje
*/

/*
function largestString (){
    var firstString = prompt("Ingrese un texto")
    var secondString = prompt("Ingrese otro texto")
    var firstLength = firstString.length
    var secondlength = secondString.length
    if (firstLength > secondlength){
         console.log("El primer string es mayor")
    }   else if (secondlength > firstLength){
         console.log("El segundo string es mayor")
    }   else {
         console.log("Ambos strings son iguales")
    }
    return largestString
}

largestString()
*/

/* 2- Obtener un nuevo string (deducir lo que se debe hacer con base en el input y el ouuput)
Imput: "a very large string"
Ouput: "A VeRy lArGe sTrInG"
-Solicitar un string
-Obtener la longitud del string ( .length)
-Identificar si el caracter es par (.toUppercase) o inpar (.to Lowercase)
-Mostrar el nuevo string
*/

var cadena = prompt("Ingrese un texto")

function upperAndLow (){
    var size = cadena.length
    var newString = ""
    for ( i= 0; i< size; i++){
        if (i %2 === 0){
            newString += cadena[i].toUpperCase()
        } else {
            newString += cadena[i].toLowerCase()
        }
    }
    return console.log(newString)
}

upperAndLow()


/* 3- Obtener un nuevo string (deducir lo que se debe hacer con base en el input y el ouuput)
Input: "Kodemia"
output: "aimedoK"
- Solicitar un string
-Obtener la longitud del string ( .length)
-Recorrer el string de atrás hacia adelante
-Mostrar el nuevo órden del string
*/ 

/*function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
console.log(reverseString(prompt("Ingrese el nombre")));*/


