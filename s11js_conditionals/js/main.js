/*
// Crear una funcion que me indique si un string comienza con vocal, consonante, numero o un caracter especial
//se crea la variable en la que se solicita un string
var someString = prompt("Escribe una oracion")

function startWhit (someString){
    var firstLetter = someString.charAt(0) //se crea una variable para obtener el primer caracter del string usando chartAt(0)
    if(firstLetter.match(/["aeiou"]/gi)){ //se utiliza el metodo match para verificar que el valo de la variable coincida con alguno de los indicados en la expresion regular
        console.log("La oracion inicia con vocal")
    }else if(firstLetter.match(/["bcdfghjklmnñpqrstvwxyz"]/gi)){
        console.log("La oracion inicia con una consonante")
    }else if(firstLetter.match(/["0123456789"]/gi)){
        console.log("La oracion inicia con un número")
    }else{
        console.log("La oracion inicia con un simbolo ")
    }
    
}

console.log(startWhit(someString))
*/
//_________________________________
/*
Input: anaconda 8
output: true

Input: belzeebub 9
Output: true

Input: koder 5
Output: false

Input: cerveza 7
Output: false
*/
/*
// numero de cáracteres
var string = prompt("ingresa un string") //se crea la variable que almacenara nuestra texto
var lengthString = string.length //se crea la variable para almacenar la longitud de del texto(string)
console.log(lengthString)

function isLongerThat(lengthString){
   var result
   if(lengthString >= 8){
    result = true
   }else{
    result = false
   }
   return result
    
}

console.log(isLongerThat(lengthString))
*/
/*
//inicia y termina con la misma letra
var anotherString = prompt("ingresa tu texto") //se crea la variable que almacenara nuestra texto
var firstLetter = anotherString.charAt(0) // se crea una variable para almacenar el primer cáracter del string, usando charAt
var lastLetter = anotherString.charAt(anotherString.length-1) //se crea una variable para almacenar el último cáracter del string, usando charAt y length-1

function startAndFinish (anotherString){
    return firstLetter === lastLetter ? console.log(true) : console.log(false)
}
startAndFinish(anotherString)
*/
/*
// se repite la primer letra?
var someOtherString = prompt("ingresa tu texto") //se crea la variable que almacenara nuestro string

function repitedLetters (someOtherString){
    var counter = 0 // se crea la variable counter para almacenar el número de veces que se repite el cáracter  
    for (i = 1; i < someOtherString.length; i ++ ){ // se utiliza un ciclo for para recorer el string, en este caso se innicia a recorer a partir del indice 1 (i=1)
        if (someOtherString[i] === someOtherString.charAt(0)){ //si el primer caracter del string es igual a otro en el mismo string (se repite)
            ++counter;  // agrega al contador
        }
    }
    return counter > 0 ? true : false //se retorna un ternario
}
console.log(repitedLetters(someOtherString))
*/

//_________________________________
// crear una funcion que genere un string con "n" caracteres aleatorios, con la unica condicion 
//de que no haya caracteres repetidos en el string
/*
var charOfString = parseInt(prompt ("Cuantos caracteres tendrá el string?")) //obtener el número de caracteres que tendra el string
//rango : 48-90   //definir un rango numérico que determine el código asccii de los caracteres que estaran disponibles
function createRandomString (charsOfString){ // 
    var newString = ""   //creamos una variable para guardar la cadena nueva
    for( i = 0; i < charsOfString; i++ ){  //repetir n veces
        newString += createChar( newString ) //si el caracter no existe, lo agregamos a la cadena de resultado
    }
    console.log("result", newString)
    console.log("length", newString.length)
    return newString
}
console.log(createRandomString(charOfString))

function createChar(someString){ //funcion para obtener un número aleatoreo
    console.log(someString)
    var randomCharCode = Math.floor( Math.random() * (91 - 48) + 48 )  //se usa math.random para obtener un número aleatorio y se usa math.floor para redondear los núeros obtenidos a enteros
    var character = String.fromCharCode (randomCharCode)  //se usa String.fromCharCode para obtener el caracter correspondiente al número obtenido anteriormente y almacenamos en una variable el caracter obtenido
    if(!someString.includes(character)){  //evaluamos si el caracter no existe en la cadena de resultado
        return character  
    }else{
        console.log("repeated")
        return createChar(someString)  //si el caracter existe en la cadena, debemos generar un nuevo caracter, para eso se retorna de nuevo la funcion (recursividad) para que se ejecute nuevamente
    }       
}
/*
//version simplificada____________ternario
var charOfString = parseInt(prompt ("Cuantos caracteres tendrá el string?")) //obtener el número de caracteres que tendra el string
function createRandomString (charsOfString){
    var newString = ""   //creamos una variable para guardar la cadena resultante
    //rango : 48-90   //definir un rango numérico que determine el código asccii de los caracteres que estaran disponibles
    for( i = 0; i < charsOfString; i++ ){  //repetir n veces
        newString += evaluateChar( newString ) //si el caracter no existe, lo agregamos a la cadena de resultado
    }
    console.log("result", newString)
    console.log("length", newString.length)
}

function createChar(someString){
    var randomCharCode = Math.floor( Math.random() * (91 - 48) + 48 )  //obtener de forma aleatoria algún número dentro de ese rango
    var character = String.fromCharCode (randomCharCode)  //obtener el caracter correspondiente al número seleccionado y almacenamos en una variable el caracter obtenido  
    return !someString.includes(character) ? character: evaluateChar(someString) //evaluamos si el caracter existe en la cadena de resultado y si el caracter existe en la cadena, debemos generar un nuevo caracter
} 
console.log(createRandomString(charOfString))  
*/
/*
// version usando while___________
var charOfString = parseInt(prompt ("Cuantos caracteres tendrá el string?")) //obtener el número de caracteres que tendra el string
function createRandomString (charsOfString){
    var newString = ""   //creamos una variable para guardar la cadena resultante
    
    while (newString.length < charsOfString){
        newString += createChar(newString)
    }
    console.log("result", newString)
    console.log("length", newString.length)
}
console.log(createRandomString(charOfString))
function createChar(someString){
    var randomCharCode = Math.floor( Math.random() * (91 - 48) + 48 )  //obtener de forma aleatoria algún número dentro de ese rango
    var character = String.fromCharCode (randomCharCode)  //obtener el caracter correspondiente al número seleccionado y almacenamos en una variable el caracter obtenido  
    return !someString.includes(character) ? character: createChar(someString) //evaluamos si el caracter existe en la cadena de resultado y si el caracter existe en la cadena, debemos generar un nuevo caracter
}
*/
