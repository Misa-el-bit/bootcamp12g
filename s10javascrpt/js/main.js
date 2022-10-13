/*
//Primero se crea la funcion, esta es para sumar 2 numeros
function sumarDosNumeros(numero1, numero2){ 
    var resultado = numero1 + numero2
    console.log(resultado)
    return resultado //Con esto podemos regresar el resultado de la operacion de arriba (linea4)
}

//Se crean 2 variables para obtener datos (parametros) mediante un prompt
var valor1 = parseInt(prompt("Ingresa el primer número"))
var valor2 = parseInt(prompt("Ingresa el segundo número"))

//Ahora se llama o invoca la función con los valores (argumentos) que se recibieron del propmt
sumarDosNumeros(valor1,valor2)

var suma= sumarDosNumeros(4,9) //aqui estamos diciendo que que el valor de suma 
//va a ser igual a lo que sea que regrese la función sumarDosNumeros pasando como argumentos (4 y 9)  
console.log(suma)
*/
/*
    // Return //
function evaluarSiEsMayor(numero1,numero2){ 
    var result;
    if(numero1 > numero2){
        result = true
    } else{
        result = false
    }
    return result
    //return {suma: result, evaluacion:true} //tambien se puede devolver un objeto
}
*/
/*
1-Solicitar nombre y apellidos al usuario
2-Guardar el nombre en una variable
3-Guardar el apellido en una variable
4-Transformar el nombre a minusculas 
5-Tansformar el apellido a mayusculas
6-Juntar el nombre y apellidos transformados en un solo texto
7-Devolver ese texto como resultado
*/
var name = prompt("ingresa tu nombre")//solicitar nombre 
var lastName = prompt("ingresa tu apellido")//solicitar apellidos

function transformText(name, lastName){
    var nameTransformed = name.toLowerCase()//convirte el nombre a minusculas
    var lastNameTransformed = lastName.toUpperCase()//convierte el apellido a mayusculas
    var completeName = nameTransformed + " " + lastNameTransformed //junta el nombre y apellidos en un solo string
    
    return completeName //devuelve el string concatenado 
}
console.log(transformText(name,lastName))//imprime en consola

 