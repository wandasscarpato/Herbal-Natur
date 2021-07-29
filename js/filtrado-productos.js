//CATEGORIA//
$(".fil1").click(function(){
var catProducto = $(this).attr('category');
//ocultar productos//
$('.productos').hide();
//mostrar productos//
$('.productos[category="'+catProducto+'"]').show();
$('.productos[category2="'+catProducto+'"]').show();
$('.productos[category3="'+catProducto+'"]').show();
$('.productos[category4="'+catProducto+'"]').show();
$('.productos[category5="'+catProducto+'"]').show();
$('.productos[category6="'+catProducto+'"]').show();
});

//TIPOS//
$(".fil2").click(function(){
    var tipeProducto = $(this).attr('tipos');
    //ocultar productos//
    $('.productos').hide();
    //mostrar productos//
    $('.productos[tipos="'+tipeProducto+'"]').show();
    $('.productos[tipos2="'+tipeProducto+'"]').show();
    $('.productos[tipos3="'+tipeProducto+'"]').show();
    $('.productos[tipos4="'+tipeProducto+'"]').show();
    $('.productos[tipos5="'+tipeProducto+'"]').show();
    $('.productos[tipos6="'+tipeProducto+'"]').show();
    $('.productos[tipos7="'+tipeProducto+'"]').show();
    console.log(tipeProducto);
    });


//INGREDIENTES//
$(".fil3").click(function(){
    var ingProducto = $(this).attr('ingredientes');
    //ocultar productos//
    $('.productos').hide();
    //mostrar productos//
    $('.productos[ingredientes="'+ingProducto+'"]').show();
    });