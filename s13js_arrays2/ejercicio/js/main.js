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

//crear una funcion para obtener las calificaciones de todos los mentores
const getMentorsScores = mentors => { //mentors representa a el array, en este caso seria mentorsArray
    let mentorsQuant = mentors.length
    let htmlTotal = 0 
    let cssTotal = 0 
    let jsTotal = 0
    let reactTotal = 0
    mentors.forEach(mentor => { //mentor representa cada uno de los objetos que se encuentran en el array(mentors)
        console.log(mentor.scores)
        let scores = mentor.scores
        scores.forEach( score => {
            let signature = score.signature
            console.log("Signature", signature)
            let value = score.score
            console.log("Value", value)
            switch(signature){
                case "HTML":
                    htmlTotal += value
                    break
                case "CSS":
                    cssTotal += value
                    break
                case "JS":
                    jsTotal += value
                    break
                case "ReactJS":
                    reactTotal += value
                    break
                default: 
                console.log("Asignatura no registrada")
            }
        })
        let htmlAverage = htmlTotal / mentorsQuant
        let cssAverage = cssTotal / mentorsQuant
        let jsAverage = jsTotal / mentorsQuant
        let reactAverage = reactTotal / mentorsQuant

        console.log(htmlAverage)
        console.log(cssAverage)
        console.log(jsAverage)
        console.log(reactAverage)
        
        return {htmlAverage, cssAverage, jsAverage , reactAverage}
        
    });
}
getMentorsScores(mentorsArray)

//obtener el promedio individual de cada mentor
const getMentorAverage = scoresArray =>{
    let scoreTotal = 0
    let signaturesQnty = scoresArray.length
    scoresArray.forEach(mentorScore => {
        let value = mentorScore.score
        scoreTotal += value
    });
    let mentorAverage = scoreTotal / signaturesQnty
    console.log("promedio del mentor:", mentorAverage)
    return mentorAverage
}

mentorsArray.forEach( mentor =>{
    getMentorAverage(mentor.scores)
})

//crear un array de strings con la siguiente forma:"Mi nombre es {nombre} y mi promedio es {promedio}"

const createLabelsArray = mentorsArray =>{
    let labelsArray = []
    mentorsArray.forEach(mentor=>{
        let mentorName = mentor.name
        let mentorAverage = getMentorAverage(mentor.scores)
        console.log("name", mentorName, "average", mentorAverage )
        let label = `Hola, soy ${mentorName} y mi promedio es ${mentorAverage}`
        labelsArray.push(label) 
    })
    return labelsArray
}

console.log(createLabelsArray(mentorsArray))

//obtener la lista de mentores cuyo promedio sea mayor de 9.5
const getHighestAverage = mentorsArray =>{
    let highestAverage = []
    mentorsArray.forEach(mentor =>{
        let average = getMentorAverage(mentor.scores)
        average > 9 && highestAverage.push(mentor)
    })
    console.log(highestAverage)
}   

getHighestAverage(mentorsArray)