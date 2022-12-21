$(".content-wrapper").load("vistas/home.html", () =>{
    $(".btn-danger").click( () => {
        alert("Significa peligro!!!")
    })
})

let availableTags = [
    "css",
    "js",
    "jquery",
]

$(".navbar-nav .nav-link").click( event => {
    let path = $(event.target).data("view-url")

    console.log( path )

    $(".content-wrapper").load(`vistas/${path}.html`)
})

const getTags = () =>{
    let tagString = $("#tag-input").val()
    console.log(tagString)
    tagString = tagString.replace(/ /gi,"")
    console.log(tagString)
    let tagsArray = tagString.split(",")
    console.log(tagsArray)
}

$("#get-tags").click(getTags)

$(".tag-popup").text(`suferencias: ${availableTags.join()}`)

//objetos
let kodersData = {
    koder1:{
        name:"Salvador",
        lastName:"jiménez",
        generation:"12g",
        score: 7
    },
    koder2:{
        name:"Itzi",
        lastName:"Del Toro",
        generation:"10g",
        score: 10
    },
    koder3:{
        name:"Rurick",
        lastName:"Maqueo",
        generation:"4g",
        score: 8
    },
    koder4:{
        name:"Wendy",
        lastName:"Ortega",
        generation:"12g",
        score: 8
    },
    koder5:{
        name:"Jorge",
        lastName:"Ochoa",
        generation:"4g",
        score: 9
    },
    koder6:{
        name:"Rose",
        lastName:"Ortega",
        generation:"3g",
        score: 10
    },
}

/*crear una funcion que devuelva un array con strings de la sig. forma:
[
"Hola soy {name} {lastName} y pertenezco a la generacion{}"
]
*/

const createKodersArray = (data) => {
    let labelsArray = [] //se crea un arreglo vacio que irá almacenando los strings formados 
    for(key in data){ // for in se usa para iterar en un objeto
        let koderObject = data[key] //esto nos permite tener acceso al objeto {name:"Jorge",lastName:"Ochoa",generation:"4g"}
        let {name, lastName, generation} = koderObject // se destructura el objeto para obtener las variables name, lastName y generation con los valores que se encuentren en el objeto
        let labelString = `Hola soy ${name} ${lastName} y pertenezco a la generacion ${generation}` //se crea el string con los datos provenietes de las variables creadas con la destructuración 
        labelsArray.push(labelString)
    }
    return labelsArray //se retorna el array con los strings almacenados en cada iteración
} 

let kodersLabels = createKodersArray(kodersData)
console.log(kodersLabels)


//object.property => value este se usa cuando sabemos el nombre especifico de la propiedad
//object[key] => value este se usa cuando no sabemos el nombre de la propiedad o cuando es dinamico

/*crear una funcion que devuelva un array con las generaciones sin repetir
[
    4g,
    10g,
    12g
]
*/

const getGenerations = (data) => {
    let generationsArray = []
    for(key in data ){
        let koderObject = data[key]
        let {generation} = koderObject
        !generationsArray.includes(generation) && generationsArray.push(generation)

    }
    return generationsArray
}

let nonRepitedGenerations = getGenerations(kodersData)
console.log(nonRepitedGenerations)

/*crear una funcion que devuelva el score promedio de los koders*/

const kodersAverages = (data) =>{
    let scoresArray  = Object.values(data) // se utiliza Object.values para obtener un array con los valores, en este caso los objetos de cada key  
    let totalScore = scoresArray.reduce((accum, item) =>{
        return accum + item.score //se suma al accum cada valor(score) encontrado en el objeto(item)
    },0)
    let average = totalScore / scoresArray.length // se divide el total de la suma anterior entre la longitud del array obtenido mediante Object.values
    return average //se retorna el resultado de la division anterior
}

let getAverage = kodersAverages(kodersData)
console.log(getAverage)

/*crear una funcion para ingresar elementos al DOM*/

const select = generationsArray =>{
    let select = $("#generation-select")
    generationsArray.forEach(generation => {
        let option = `<option value="">${generation}</option>`
        select.append(option);
    });
}
select(nonRepitedGenerations)
