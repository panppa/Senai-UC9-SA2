$(document).ready(function(){
   /*
    let slideAtual = 1
    let listaSlides = ["banner-f1", "banner-cs", "banner-lol"]

    setInterval(mudarSlide, 5000)
    function mudarSlide()
        if(slideAtual > 0){
            $("#carrossel").removeClass(listaSlides[slideAtual - 1])
        }else{
            $("#carrossel").removeClass(listaSlides[listaSlides.length - 1])
        }      
        

        //exibir slide atual
        $("#carrossel").addClass(listaSlides[slideAtual])

        //indicar qual slide atual
        console.log("Slide atual é", slideAtual)
        slideAtual ++

        if(slideAtual > listaSlides.length - 1){
            slideAtual = 0
        }

    }*/







    $("#hamburguer").click(function(){
        if($("#hamburguer").hasClass("menu-ativo")){
            $("#hamburguer").removeClass("menu-ativo")
        }else{
            $("#hamburguer").addClass("menu-ativo")
        }
    })

})