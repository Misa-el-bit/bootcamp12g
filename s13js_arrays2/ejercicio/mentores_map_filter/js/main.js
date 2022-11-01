/*Usando el sig array, realizar lo siguiente:
-obtener el score promedio de cada materia (HTML, CSS, JS, ReactJs)
-obtener el promedio individual de cada mentor 
-crear un array de strings con la siguiente forma:
"Mi nombre es {nombre} y mi promedio es {promedio}"
-obtener la lista de mentores cuyo promedio sea mayor de 9
*/
var mentorsArray = [
    {
        name: "Israel Salinas Martínez",
        scores:[
            {
                signature: "HTML",
                score: 8
            },
            {
                signature: "CSS",
                score: 10
            },
            {
                signature: "JS",
                score: 8
            },
            {
                signature: "ReactJS",
                score: 8
            }
        ],
        
    },
    {
        name: "David Cermeño Moranchel",
        scores:[
            {
                signature: "HTML",
                score: 8
            },
            {
                signature: "CSS",
                score: 7
            },
            {
                signature: "JS",
                score: 10
            },
            {
                signature: "ReactJS",
                score: 10
            }
        ],
        
    },
    {
        name: "Charles Silva",
        scores:[
            {
                signature: "HTML",
                score: 9
            },
            {
                signature: "CSS",
                score: 9
            },
            {
                signature: "JS",
                score: 10
            },
            {
                signature: "ReactJS",
                score: 9
            }
        ],  
    },
    {
        name: "Michael Villalba Sotelo",
        scores:[
            {
                signature: "HTML",
                score: 8
            },
            {
                signature: "CSS",
                score: 10
            },
            {
                signature: "JS",
                score: 9
            },
            {
                signature: "ReactJS",
                score: 10
            }
        ],  
    },
]
/*
-crear un array de strings con la siguiente forma:
"Mi nombre es {nombre} y mi promedio es {promedio}"
usando map
*/

const createLabelsArray = dataArray => {
    let labelsArray = dataArray.map( item => {
        let {name} = item
        return `Mi nombre es ${name} y mi promedio es {promedio}`
    })
    return labelsArray
}

console.log(createLabelsArray(mentorsArray))

const getMentorNamesArray = dataArray =>{
    let mentorNames = dataArray.map(item =>{
        return item.name // este return pertenece al callback, solo funciona en el mismo callback y sirve para agregar algo al array nuevo
    })
    return mentorNames // este return regresa el resultado de mapear el array deseado
}
console.log(getMentorNamesArray(mentorsArray))

/*
obtener los mentores cuya calificación en html sea mayor que 8
*/

const getBestAtHtml = dataArray =>{
    let result = dataArray.filter((item) => { //es importante crear una variable que guarde el array que nos regresa el metodo filter
        return item.scores[0].score > 8
    })
    return result
}
console.log(getBestAtHtml(mentorsArray))

/*
crear un nuevo array con las iniciales de cada mentor
[I,S,M]
*/

/*
crear un array con los mentores cuyo nombre comience con una vocal
*/

const getInitalsNames = dataArray =>{
    let initials = dataArray.map(item =>{
        let name = item.name // se extrae el nombre de cada item (objeto)
        let nameArray = name.split(" ") //se usa split para separar el nombre por palabras
        let initialsString = "" // se crea un string vacio que almacenara las iniciales
        nameArray.forEach(word => { // se usa un foreach para recorrer cada palabra en el array 
            initialsString += `${word.charAt(0).toUpperCase()}. ` // tomar el primer caracter de cada palabra y convertirlo a mayuscula y agregarlo a nuestro string vacio 
        });
        return initialsString // retornamos nuestro forEach 
    })
    return initials //retornamos nuestro map
    
}
console.log(getInitalsNames(mentorsArray))

const vowelNames = dataArray =>{
    let initWhitVowel = dataArray.filter(item =>{
        let name = item.name // se extrae el nombre de cada item (objeto) y se guarda en una variable
        let firstLeter = name.charAt(0) //se usa charAt para obtener el primer cáracter
        return firstLeter.match(/["aeiou"]/gi) // se retorna el nombre (array con objeto) que coincida (match) con una vocal
    })
    return initWhitVowel //se retorna nuestro filter
}
console.log(vowelNames(mentorsArray))