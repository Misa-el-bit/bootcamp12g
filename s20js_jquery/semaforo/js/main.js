$(document).ready(() =>{
    let element = $("body");
    let go = $("#go")
    let wait = $("#wait")
    let stop = $("#stop")
    /*
    go.click( () => { 
        element.addClass("bg-success").removeClass("bg-warning bg-danger");
    });

    wait.click( () => { 
        element.addClass("bg-warning").removeClass("bg-success bg-danger");
    });

    stop.click( () => { 
        element.addClass("bg-danger").removeClass("bg-warning bg-success");
    });
    */
    // usando style
    go.click( () => { 
        element.css("background", "green");
    });

    wait.click( () => { 
        element.css("background", "orange");
    });

    stop.click( () => { 
        element.css("background", "red");
    });
    
})