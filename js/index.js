fetch("./categorias.json")
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    let html = "";
    data.forEach(function (categorias) {
        html+=`
        <a href="./views/productos.html?categoria=${categorias.nombre}">
        <div>
        <img src="${categorias.imagen}">
        <span>${categorias.texto}</span>
        </div>
        </a>`
    })
    
    
    var cate = document.querySelector(".indexCategorias");
    cate.innerHTML = html;
  });
