//Arrow functions
/*
const sumar = () =>{
    return 2 + 4
}

console.log(sumar())
*/
//parametrizada

const sumar = ( a, b ) =>{
    return a + b
}

//Return implicito 
/*
const sumar = ( a, b ) => a + b //cuando en una arrow function lo que se ejecuta se puede reducir a una linea, no se necesitan las llaves ni el return
*/


//console.log(sumar( 4, 5 ))

let result = sumar( 7 , 2 )

console.log(result)

//_________________
let namesArray = [
    "Israel Salinas",
    "David Moranchel",
    "Carlos Silva",
    "Michael Villalba"
]

const splitNames = (someArray) =>{ //Se crea una funcion anonima que tiene como parametro un array
    let splittedNames = [] // se crea una variable que almacena un nuevo array vacio 
    for( let i=0; i < someArray.length; i++){ // se recorre el array con los nombres 
        splittedNames.push(someArray[i].split("  ")) //se van agregando al nuevo array vacio los nombres usando .push(), se usa .split() para separar por palabras cada item 
    }
    return splittedNames // se retorna el nuevo array ya con los nombres separados 
}

let otherArray = splitNames(namesArray) //se declara una variable cuyo valor es la función slitNames() y se le pasa el parametro de names array

console.log(otherArray)

const printItems = (array) => { //se crea la funcion para imprimir los items y se le pasa como argumento un array
    for( let i =0; i < array.length; i++){//se recorre el array
        console.log(array[i]) //se imprime cada uno de los items del array 
    }
}
/*
const printItems = array =>{ //en las arrow function con un solo parametro no es necesario colocar parentesis
    for( let i =0; i < array.length; i++){
        console.log(array[i])
    }
}
*/
printItems(namesArray)
printItems(splitNames(namesArray)) // ejecutamos printItems usando como argumento el array que retorna splitNames

/* Una funcion que regrese un número aleatorio desde 0 hasta array.length*/

const getRandomIndex = namesArray =>{
    return Math.floor( Math.random() * namesArray.length) //se usa math.random para obtener un número aleatorio y se usa math.floor para redondear los núeros obtenidos a enteros
}

let randomIndex = getRandomIndex(namesArray)
console.log(randomIndex)

/*
//simplificada
const getRandomIndex = namesArray => Math.floor( Math.random() * namesArray.length)

let randomIndex = getRandomIndex(namesArray)
console.log(randomIndex)
*/

/* Una funcion que regrese un nombre aleatorio desde 0 hasta array.length*/
const printNameByIndex = (array, index) =>{
    return namesArray[index]
}

/*
const printNameByIndex = (array, index) => array[index]
*/

let printName = printNameByIndex(namesArray, getRandomIndex(namesArray))

console.log(printName)