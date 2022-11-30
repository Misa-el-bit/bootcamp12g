//$("etiqueta", "#id", ".clase")
$(document).ready(()=>{ //selector o jquery function
    
    $("h1").html("Esto es desde Jquery") //seleciona por etiqueta
    $(".header").html("Esto es desde Jquery") //selecciona por clases
    $("#header").html("Esto es desde Jquery") //selecciona por Id
    document.querySelector("h2").innerHTML = ("Esto es desde javaScript") //esto es usando javascrip puro

    //Agregar un atributo a un elemento
    $("h1").attr( "dataset" , "2"); 
    $("h1").attr({"dataset":"2", arial: "test"})//agregar 2 o más atributos al elemento seleccionado

    //Agregar y remover clases 

    $("p").addClass("display-4"); //agregar una clase a un elemento 
    $("p").removeClass("display-4"); //quitar una clase al elemento seleccionado
    $("p").css("color", "red") //agregar styleinline (etiqueta style en html) a un elemento

    const parrafo = $("p"); //se puede asignar un elemento seleccionado a auna variable
    parrafo.addClass("display-4")

    $(".content-list li").css("color", "blue")

    //Agregar u Ocultar Nodos
    $("p").hide();
    //$("ul").remove();

    //Extraer el Contenido de un elemento
    const valueInput = $("input").val()
    console.log(valueInput)

    //Anidar un nodo dentro de otro
    const li = document.createElement("li")
    $(li).appendTo(".content-list").text("test")

    //Crear un listener

    $("#agregar").click( () => { 
        $("#contenido").addClass("text-center")
    });

    $("#quitar").click( () => { 
        $("#contenido").removeClass("text-center")
    });

    $("#toggle").click( () => { 
        $("#contenido").toggleClass("text-center")
    });

    //Ejemplo de input

    let input = $("#name")
    let contenido =$("#content")
    $(input).keyup( () => { 
        let value = input.val()
        contenido.text(value)
    });
    
    $("form").submit(()=>{
        console.log("unsubmit")
        event.preventDefault()
    })
    /*
    //crear un elemento dinamico 
    let elemento = $("#element");
    let agregar = $("#agregar");
    let quitar = $("#quitar");
    let toggle = $("#toggle");

    quitar.click( () => { 
        elemento.hide(1000);
    });

    agregar.click( () => { 
        elemento.show(1000);
    });

    toggle.click( () => {   
        elemento.toggle(1000);
    });
    */
})