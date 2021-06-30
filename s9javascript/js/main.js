/*window.alert("Hola koders")
console.log("Hola coders desde consola")
console.error("Houston tenemos un problema")
console.warn("Cuidado")
*/

/*prompt("Ingresa tu nombre")*/

/*var firstNumber = prompt("Ingresa un numero")
var secondNumber = prompt("Ahora ingresa otro numero")*/

/*Operadores de asignacion :

= -> Asignacion 
+= -> Asignacion con adicion 
-= -> Asignacion con sustracción
*= -> Asignacion con multiplicacion
/= -> Asignacion con división
%= -> Asignacion con Modulo 
*/

/*var foo //Declaracion

foo = "Lestat" //Asignacion
foo = "Armand" //Se puede reasignar el valor

var foo = "Lestat" //Asignacion con declaracion */

var name = prompt("Ingresa tu nombre")
var lasName = prompt("Ingresa tu apellido")


console.log(name)
console.log(lasName)
console.log( "Nombre completo:" + name + " " + lasName ) //concatenacion

/*Operadores de coparación:

== comparación
=== extrema comparación
!= Diferente
!== extremadamente diferente
> Mayor que
>= Mayor o igual que 
< Menor que
<= Menor o igual que 
*/

/*1- pedir 2 numeros al usuario y mostrar en consola
el resultado de aplicar todas las operaciones aritmeticas
*/
/*parseInt(secondNomber)*/
var firstNumber = parseInt(prompt("Ingresa un numero"))
var secondNumber = parseInt(prompt("Ahora ingresa otro numero"))

console.log(firstNumber + secondNumber)
console.log(firstNumber - secondNumber)
console.log(firstNumber * secondNumber)
console.log(firstNumber / secondNumber)
console.log(firstNumber % secondNumber)

/*2-pedir al usuario 2 numeros y escribir en la consola
si el primer número es mayor que el segundo*/

var firstNumber = prompt("ingresa un numero")
var secondNumber = prompt("Ingresa otro numero")

console.log(firstNumber>secondNumber)

/*3-pedir al usuario 2 letras y determinar si la primera 
aparece antes o despues en el alfabeto*/

var firstLetter = prompt("ingresa una letra")
var secondLetter = prompt("Ingresa otra letra")

console.log(firstLetter > secondLetter)
