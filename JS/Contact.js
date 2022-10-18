$(function() {
     var menu_width = 290
     var menu = $(".menuLado")
     var menu_aberto = $(".menu-aberto")
     var menu_fechado = $(".menu-fechado")
     var porCima = $(".porCima")

     menu_aberto.click(function (e) {
          e.preventDefault();
          menu.css({"left": "0px"});
          porCima.css({"opacity": "1", "width": "100%"});
     });

     menu_fechado.click(function (e) {
         e.preventDefault();
         menu.css({"left": "-" + menu_width + "px"});
         porCima.css({"opacity": "0", "width": "0"});
     });
});

    var valor1 = document.getElementById('falaMedico')
    var valor2 = document.getElementById('oMapa')
    var valor3 = document.getElementById('nomeBotao')
    var valor4 = document.getElementById('button')
    var y

function alterar() {
    if(y === 1) {
        x1()
    }if(y === 2){
        x3() 
    }else{
        x2() 
    }}

function x1(){
            falaMedico.style.cssText= 'display: none';
            oMapa.style.cssText= 'display: none';
            button.style.cssText= 'display: none';
            y = 2      
}
function x2(){
            falaMedico.style.cssText= 'display: none'; 
            oMapa.style.cssText= 'display: block'; 
            nomeBotao.innerHTML= 'Voltar'
            y= 1
}
function x3(){
            falaMedico.style.cssText= 'display: none';
            oMapa.style.cssText= 'display: none';
        
            setTimeout(function(){falaMedico.style.cssText= 'display: block'; nomeBotao.innerHTML= 'Buscar'; button.style.cssText= 'display: block';}, 1000)
            y = 0
}

function giraBotao() {
          var x = document.getElementById('menuImg1')
          var y = document.getElementById('menuImg2').value

          if(x === clicked){
               
               menuImg1.style.cssText= 'animation: rotate 5s infinite';
       
               setTimeout(function(){menuImg1.style.cssText= 'animation: none'},1000)

          }
          if(y === clicked){
               
               menuImg2.style.cssText= 'animation: rotate 5s infinite';
       
               setTimeout(function(){menuImg2.style.cssText= 'animation: none'},1000)

          }

}
