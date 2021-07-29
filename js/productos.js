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
function cargarJSON() {
  fetch("../productos.json")
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      var queryString = window.location.search;
      var urlParams = new URLSearchParams(queryString);
      var ParamCate = urlParams.get("categoria");
      let html = "";
      data.forEach(function (productos) {
        if (
          ParamCate == productos.cate ||
          ParamCate == productos.cate2 ||
          ParamCate == productos.cate3 ||
          ParamCate == productos.cate4 ||
          ParamCate == productos.cate5 ||
          ParamCate == productos.cate6
        ) {
          html += `
           <div class="productos" category="${productos.cate}" category2="${productos.cate2}" category3="${productos.cate3}" category4="${productos.cate4}" category5="${productos.cate5}" category6="${productos.cate6}" tipos="${productos.tipos}" tipos2="${productos.tipos2}" tipos3="${productos.tipos3}" tipos4="${productos.tipos4}" tipos5="${productos.tipos5}" tipos6="${productos.tipos6}" tipos7="${productos.tipos7}" ingredientes="${productos.ingredientes}">
           <a href="../views/producto.html?producto=${productos.ID}">
           <div>
              <img src="../img/producto1.png" alt="Producto">
               <h3 class="quienesSomosSubTituloP"> ${productos.nombre}</h3>
           </div>
               </a>
           </div>
           `;
        } else if (ParamCate == null) {
          html += `
           <div class="productos" category="${productos.cate}" category2="${productos.cate2}" category3="${productos.cate3}" category4="${productos.cate4}" category5="${productos.cate5}" category6="${productos.cate6}" tipos="${productos.tipos}" tipos2="${productos.tipos2}" tipos3="${productos.tipos3}" tipos4="${productos.tipos4}" tipos5="${productos.tipos5}" tipos6="${productos.tipos6}" tipos7="${productos.tipos7}" ingredientes="${productos.ingredientes}">
           <a href="../views/producto.html?producto=${productos.ID}">
           <div>
              <img src="../img/producto1.png" alt="Producto">
               <h3 class="quienesSomosSubTituloP"> ${productos.nombre}</h3>
           </div>
               </a>
           </div>
           `;
        }
      });
      if (html.length == 0) {
        html += `No hay productos para mostrar`;
      }
      var prod = document.querySelector("#productosLista");
      prod.innerHTML = html;
    });
}
