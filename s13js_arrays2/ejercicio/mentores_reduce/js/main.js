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

const getMentorsAverage = dataArray =>{
    dataArray.map((item) => {
        let {scores} = item
        let total = scores.reduce((accum, current) =>{
            return accum + current.score
        },0)
        console.log(total / scores.length)
    })
}
console.log(getMentorsAverage(mentorsArray))

//otra forma
const getMentorsAverage2 = scoresArray => {
    let total = scoresArray.reduce((accum, current) => {
        return accum + current.score
    },0)

    let average = total / scoresArray.length

    return average
}
 const getMentorsWhitAverage = dataArray =>{
    let mentorsLabelArray = dataArray.map(item =>{
        let scores = item.scores
        let average = getMentorsAverage2(scores)
        return `El promedio de ${item.name} es de ${average}`
    })
    return mentorsLabelArray
 }
 console.log(getMentorsWhitAverage(mentorsArray))

uglyArray=[
    [
        "Israel", "Salinas Martínez" 
    ],
    [
        "David", "Cermeño Moranchel" 
    ],
    [
        "Charles", "Silva" 
    ],
    [
        "Michael", "Villalba" 
    ]
]

let createNewArray = oldArray =>{
    let newArray = oldArray.reduce((accum, current) => {
        let [name, lastName] = current
        let personObject = {name, lastName}
        return [... accum, personObject]
    },[])
    return newArray
}

 console.log(createNewArray(uglyArray))