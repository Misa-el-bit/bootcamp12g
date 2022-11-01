/*/Destructuring o asignacion destructurante
let myObject = {
    name: "Ikki",
    alias: "El pajaro Dev"
}
//para extraer a las propiedades del objeto de forma tradicional
let birdName = myObject.name
let birdAlias = myObject.alias

// usanndo destructuracion 

let { birdName:name, birdAlias:alias} = myObject
//simplificado 
//let { name, alias } = myObject //esto significa que crearemos una variable llamada name y alias y estas se buscara a si mismas dentro de las propiedades del objeto
*/
//_______________
/*
output:
mentorsArray = [
    {
        name: "Israel"
        lastName: "Salinas Martínez"
    }
]
*/
let dataArray =[
    [
        "Israel",
        "Salinas Martinez"
    ],
    [
        "David",
        "Cermeño Moranchel"
    ],
    [
        "Charles",
        "Silva"
    ],
    [
        "Michael",
        "Villalva Sotelo"
    ]
]
/*
//usando for
//primero se recorre cada item y crear los objetos individuales
const objectFromArray = arrayToConvert => ({name: arrayToConvert[0], lastname: arrayToConvert[1]})

const createMentorsArray = dataArray =>{
    let mentorsArray =[]
    for(i=0 ; i< dataArray.length; i++){
        let item = dataArray[i]
        console.log(item)
        let object = objectFromArray(item)
        console.log(object)
        mentorsArray.push(object)
    }
    return mentorsArray
}
 let result = createMentorsArray(dataArray)
 console.log(result)
*/
//Usando foreach
/*
let elements = (array, index) => array[index]; //se crea la funcion que requiere un array y un indice y retorna el valor que hay en el indice de dicho array
let object = dataArray => { //se crea la funcion que creara nuestro objeto
    let arrayPerson = [] //se crea un array nuevo vacio
    dataArray.forEach(element => { //se usa foreach para recorrer cada elemento del array
        arrayPerson.push({ //se usa .push para ir agregando al array vacio un objeto 
            name:elements(element,0),// se crea la propidad name, y se le asigna el valor que se encuentre en el elemento del array en la posicion 0
            lastname:elements(element,1)// se crea la propidad lastname, y se le asigna el valor que se encuentre en el elemento del array en la posicion 1
        })
    });
    return arrayPerson //se retorna el array con los objetos que se agregaron
}
console.log(object(dataArray))
*/

// Ciclo forEach
let namesArray = [
    "Ivan",
    "Ángel",
    "Alejandra"
]

namesArray.forEach((name, index, arr) => {
    let resultString = `El nombre ${index} es ${name}`
    console.log(resultString)
})