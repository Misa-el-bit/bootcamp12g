// Metodos de consulta a los nodos en DOM

//por Tagname
let navbar1 = document.getElementsByTagName("nav") //obtiene los elementos con un tagname especifico
console.log(navbar1)

//por ID
let navbar2 = document.getElementById("freddy") 
console.log(navbar2)

//por Clase
let navbar3 = document.getElementsByClassName("killer") 
console.log(navbar3)

//querySelector
let navbar = document.querySelector(".killer") // este metodo solamente es de consulta e imprime lo que contiene el nodo, en este caso si hay que especificar que se esta buscando, un Id o una clase
console.log(navbar)

let navbar4 = document.querySelectorAll(".killer") // querySelectorAll agrupa todos los elementos que contengan esa clase
console.log(navbar4)

// Metodos de creación y manipulación del DOM

//createElement
let parrafo = document.createElement("p") // se indica que se quere ccrear la etiqueta de parrafo
let body = document.querySelector("body") // se solicita obtener el body

body.appendChild(parrafo) // se da la instrucción para inyectar la etiiqueta parrafo creada, en el body

//crear un elemento con contenido 
//createTextNode
let textoParrafo = document.createTextNode("este es un parrafo") //createTextNode crea un nuevo nodo de texto
parrafo.appendChild(textoParrafo) // se da la instruccion de inyectar el nodo de texto creado en la etiqueta parrafo
parrafo.textContent = "este es el cambio" // textContent permite cambiar el texto que se encontraba anteriormente asignado a la etiqueta de parrafo

//ejem

let killers = ["jason", "freddy", "chuky"]
let body1 = document.querySelector("body") // se solicita obtener el body

killers.forEach( killer =>{ // se usa forEach para recorrer el array, ya que solo queremos ejecutar una accion por cada elemento del array  
    let myParagraph = document.createElement("p") // se crea la variable donde se almacena la etiqueta p que será creada por cada asesino dentro del aarray
    myParagraph.textContent = killer // se usa textContent para cambiar el texto que se encuentra en la etiqueta p y que corresponda a cada uno de los asesinos en el array
    body1.appendChild(myParagraph) //se usa appendChild para inyectar la etiqueta p creada, en el body
})
