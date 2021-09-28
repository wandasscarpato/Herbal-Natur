fetch("../productos.json")
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    let html = "";
    let img = "";
    let sugerencia = "";
    let tipo;
    let nombre;
    let contador = 0;
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    var ParamProd = urlParams.get("producto");

    data.forEach(function (productos) {
      if (productos.ID == ParamProd) {
        tipo = productos.tipo;
        nombre = productos.nombre;
        img=`<img src="${productos.img}"/>`
        html += `
        <article class="productoImagen"><img src="${productos.img}" alt="${productos.nombre}"/></article>
        <article class="productoDescripcion">
      <div class="productoDescripcionTit">
      <span class="productoDescripcionTitulo">
      ${productos.nombre}
      </span>
  </div>
  <div id="productoDescripcionCaracteristicas" class="productoDescripcionCaracteristicas">
      ${productos.descripcion}
  </div>
  <div class="productoDescripcionRecomendado">
      <span class="productoDescripcionSubtitulo">Recomendado para cabellos:</span>
      <ul>
        `;
        if (productos.graso) {
          html += `<li>Graso</li>`;
        }
        if (productos.normal) {
          html += `<li>Normal</li>`;
        }
        if (productos.seco) {
          html += `<li>Seco</li>`;
        }
        if (productos.frizz) {
          html += `<li>Con frizz</li>`;
        }
        if (productos.teñido) {
          html += `<li>Teñido</li>`;
        }
        if (productos.dañado) {
          html += `<li>Dañado</li>`;
        }
        html += `
      </ul>
  </div>
  <div class="productoDescripcionPresentacion">
      <span class="productoDescripcionSubtitulo">Presentación.</span>
      <ul>`;

        if (productos.ml250) {
          html += `<li>250ml</li>`;
        }
        if (productos.ml500) {
          html += `<li>500ml</li>`;
        }
        if (productos.ml1100) {
          html += `<li>1100ml</li>`;
        }
        if (productos.lts5) {
          html += `<li>lts5</li>`;
        }
        html += `</ul>
  </div>
  <div class="productoDescripcionWpp">
      <span class="productoDescripcionSubtitulo">¿Te interesa este producto? Hacé tu pedido por
          WhatsApp.</span> <br>
      <a href="https://wa.me/1169508119"><button class="btnComprar"><i class="fab fa-whatsapp"></i>Comprar</button></a>
  </div>
  </article>

         `;
      }
      let prod = data.filter(function (el) {
        if (el.tipo == tipo) {
          return true;
        } else {
          return false;
        }
      });
      prod.forEach(function (prod) {
        if (prod.nombre != nombre && contador < 4) {
          contador++;
          sugerencia += `<li>
        <a href="../views/producto.html?producto=${prod.ID}">
        <h2>${prod.nombre}</h2>
        <img src="${prod.img}" alt="">
        </a>
        </li>`;
        }
      });
    });

    var prod = document.querySelector(".producto");
    prod.innerHTML = html;
   
    var suge = document.querySelector(".slider");
    suge.innerHTML = sugerencia;
  });
