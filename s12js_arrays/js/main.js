//Mostrar en pantalla el siguiente string Hola soy {nombre} con cada uno de los nombres
var myArray =[
    "Antonio",
    "Carlos",
    "Alfred",
    "Wendy",
    "Susan"
]

for (i=0; i< myArray.length; i++){  // al poner .length indicamos que recorra todo el array
    console.log(`Hola soy ${myArray[i]}`)
}