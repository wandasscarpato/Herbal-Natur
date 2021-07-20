const URLGET = "nombre del archivo json"

$.getJSON(URLGET, function (respuesta, estado) {
    if(estado === "success"){
      let misDatos = respuesta;
      for (const dato of misDatos) {
        $(".productosLista").append(`<div class="productos">
                                <img src="${dato.img}" alt="">
                                <h3 class="quienesSomosSubTituloP">${dato.nombre}</h3>
                                <p> ${dato.precio}</p>
                            </div>`)
                            
      }  
    }
    });