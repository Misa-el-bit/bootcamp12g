/* 1- Comparar 2 strings y determinar cual de las dos es el mas largo 
imput: "string" , "some large string"
output: "el string (string) es el mas largo"
-Solicitar 2 strings
-Obtener el total de caracteres de cada string (.length)
-Comparar cual tiene más caracteres y mostrar el mensaje
*/

/*
var string1 = prompt("ingresa un string")
var string2 = prompt("ingresa otro string")

function largestString(string1,string2){
    var lengthString1 = string1.length
    var lengthString2 = string2.length
    if(lengthString1 > lengthString2){
        console.log("El primer string es más grande")
    }
    else if(lengthString1 < lengthString2){
        console.log("El segundo string es mas grande")
    }
    else{
        console.log("Ambos strings son iguales")
    }
    
    return largestString
}
 
largestString(string1,string2)
*/

/* 2- Obtener un nuevo string (deducir lo que se debe hacer con base en el input y el ouuput)
Imput: "a very large string"
Ouput: "A VeRy lArGe sTrInG"
-Solicitar un string
-Obtener la longitud del string ( .length)
-Identificar si el caracter es par (.toUpperCase) o inpar (.to LowerCase)
-Mostrar el nuevo string
*/
/*
var cadena = prompt("Ingrese un texto")

function upperAndLow(){
    var size = cadena.length //se obtiene el la longitud de la cadena
    var newString = "" //se crea la variable que almacenara el nuevo string
    for ( i= 0; i< size; i++){ //se recorre la cadena caracter por caracter
        if (i %2 === 0){ //se compara si el modulo/residuo es igual a 0 para saber si es un numero par
            newString += cadena[i].toUpperCase() //se agrega el caracter en mayusculas o minuscular según su residuo en el nuevo string
        } else {
            newString += cadena[i].toLowerCase()
        }
    }
    return newString // se retorna el nuevo string formado con los cáracteres en mayusculas o minusculas 
}

console.log(upperAndLow(cadena))
*/

/* 3- Obtener un nuevo string (deducir lo que se debe hacer con base en el input y el ouuput)
Input: "Kodemia"
output: "aimedoK"
- Solicitar un string
-Obtener la longitud del string ( .length)
-Recorrer el string de atrás hacia adelante
-Mostrar el nuevo órden del string
*/
/*
function reverseString(str) { //esta funcion requiere un string como parametro 
    var newString = "" //se crea la variable que almacenara el nuevo string
    for (var i = str.length - 1; i >= 0; i--) { //se crea la variable i(indice) que rrecorre el string de atras hacia adelante y almacena el indice 
        newString += str[i]; //se indica que a la nueva string se le agrege el cáracter que esta almacenado en la variable i(indice)
    }
    return newString; // se retorna el nuevo string como valor
}
console.log(reverseString(prompt("Ingrese el nombre"))); //se ejecuta la funcion al mismo tiempo que se solicita mediante prompt un string el cual nuestro parametro
*/

