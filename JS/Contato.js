$(function() {
var menu_width = 290;
var menu = $(".menuLado");
var menu_aberto = $(".menu-aberto");
var menu_fechado = $(".menu-fechado");
var porCima = $(".porCima"); 

menu_aberto.click(function (e) {
e.preventDefault();
menu.css({"right": "0px"});
porCima.css({"opacity": "1", "width": "100%"});
});

menu_fechado.click(function (e) {
e.preventDefault();
menu.css({"right": "-" + menu_width + "px"});
porCima.css({"opacity": "0", "width": "0"});
});
});
