//Peticiones Ajax con Jquery
const postSample = () =>{
    $.ajax({
        method: "POST",
        url: "https://blog-12g-3c125-default-rtdb.firebaseio.com/.json",
        data: JSON.stringify({name:"12va generacion"}),
        success : response => {
            console.log(response)
        },
        error: error =>{
            console.log ("hay un error")
            console.log(error)
        },
        async:false
    
    })
}

const getSample = () =>{
    $.ajax({
        method: "GET",
        url: "https://blog-12g-3c125-default-rtdb.firebaseio.com/.json",
        success : response => {
            console.log(response)
        },
        error: error =>{
            console.log ("hay un error")
            console.log(error)
        },
        async:false
    })
}

//ejercicio mascotas

//guardar una mascota
const BASE_URL = `https://blog-12g-3c125-default-rtdb.firebaseio.com/misael`

const savePet = petData =>{
    $.ajax({
        method: "POST",
        url: `${BASE_URL}/pets.json`,
        data: JSON.stringify(petData),
        success : response => {
            console.log(response)
        },
        error: error =>{
            console.log ("hay un error")
            console.log(error)
        },
        async:false
    
    })
}

//obtener todas las mascotas
const getAllPets = () =>{
    let result
    $.ajax({
        method: "GET",
        url: `${BASE_URL}/pets.json`,
        success : response => {
            console.log(response)
            result = response
        },
        error: error =>{
            console.log ("hay un error")
            console.log(error)
        },
        async:false
    })
    return result
}

//let allPets = getAllPets()
//console.log(allPets)

const getPetById = petId =>{
    let result
    $.ajax({
        method: "GET",
        url: `${BASE_URL}/pets/${petId}.json`,
        success : response => {
            console.log(response)
            result = response
        },
        error: error =>{
            console.log ("hay un error")
            console.log(error)
        },
        async:false
    })
    return result  
}

$("#save-pet").click(() => {
    let petObject = {}
    $("#pet-form input").each(function (){
        let property = $(this).attr("name")
        let value = $(this).val()
        petObject = {...petObject, [property] : value}
    })
    console.log(petObject)
    savePet(petObject)
    printAllPets(getAllPets)
})


// Borrar una mascota
const deletePet = event =>{
    let petKey = $(event.target).data("pet-key")
    $.ajax({
        method: "DELETE",
        url: `${BASE_URL}/pets/${petKey}.json`,
        success : response => {
            console.log(response)
            result = response
        },
        error: error =>{
            console.log ("hay un error")
            console.log(error)
        },
        async:false
    })
} 

//Imprimir las cards con las mascotas

const printAllPets = petsData =>{
    $(".pets-wrapper").empty()
    for(pet in petsData){
        let {name, specie, age, picture} = petsData[pet]
        let petHtml = `
        <div class="col-12 col-md-6 pet-card">
            <div class="card">
                <img src=${picture} class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${name}</h5>
                    <p class="card-text">Especie: ${specie}</p>
                    <p class="card-text">Edad: ${age}</p>
                    <a href="#" class="btn btn-danger btn-delete-pet" data-pet-key =${pet}>Delete Pet</a>
                </div>
            </div>  
        </div>  
        `
        $(".pets-wrapper").append(petHtml)
    }
    $(".btn-delete-pet").click(deletePet)
    $(".btn-delete-pet").click( event =>{
        $(event.target).closest(".pet-card").remove()
    })
}

//imprimir todas las mascotas desde el principio
printAllPets()


// Filtro por especie

$(".filter-radio-set input[type='radio']").click(event =>{
    petsCollection = getAllPets()
    let filterOption = $(event.target).val()
    console.log(petsCollection)
    console.log(filterOption)

    let filterResult = Object.keys(petsCollection).reduce((accum, current)=>{
        let petObject = petsCollection[current]
        return petObject.specie && petObject.specie.toLowerCase() === filterOption.toLowerCase() ? {...accum,[current]: petObject} : accum
    },{}) 
    console.log(filterResult)
    printAllPets(filterResult)
})

let petsCollection = getAllPets()
printAllPets(petsCollection)