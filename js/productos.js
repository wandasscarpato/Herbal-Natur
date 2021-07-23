/*const URLGET = "nombre del archivo json"

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
    });*/
    cargarJSON();
    function cargarJSON(){
      fetch('../productos.json')
        .then(function(res){
          return res.json();
        })
        .then(function(data){
          let html='';
          data.forEach(function (productos){
           html+=`
           <div class="productos">
              <img src="../img/producto1.png" alt="Producto">
               <h3 class="quienesSomosSubTituloP"> ${productos.nombre}
              </h3>
           </div>
           `;
          });
          var prod=document.querySelector("#productosLista");
          prod.innerHTML=html;
         })
}
