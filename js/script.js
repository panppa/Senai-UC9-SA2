$(document).ready(function(){
    $("#radioBanner2").prop('checked', true);
    let slideAtual = 1
    let listaSlides = ["url(../../img/valorantBanner.png)", "url(../../img/csBanner.png)", "url(../../img/sonaBanner.png)"]

    setInterval(mudarSlideDireita, 5000)
/*resetar timer se botão clicado*/
    function mudarSlideEsquerda()  {
        
         if(slideAtual == 2){
            $("#bannerImg").css("background-image",listaSlides[1]);
            slideAtual = 1;

            $("#radioBanner0").prop('checked', false);
            $("#radioBanner1").prop('checked', true);
            $("#radioBanner2").prop('checked', false);

        }else if(slideAtual == 1){
            $("#bannerImg").css("background-image",listaSlides[0])
            slideAtual = 0;

            $("#radioBanner0").prop('checked', true);
            $("#radioBanner1").prop('checked', false);
            $("#radioBanner2").prop('checked', false);

        }else{
            $("#bannerImg").css("background-image",listaSlides[2])
            slideAtual = 2;

            $("#radioBanner0").prop('checked', false);
            $("#radioBanner1").prop('checked', false);
            $("#radioBanner2").prop('checked', true);

        }    

    }

    function mudarSlideDireita()  {
        
        if(slideAtual == 2){
           $("#bannerImg").css("background-image",listaSlides[0]);
           slideAtual = 0;

           $("#radioBanner0").prop('checked', true);
           $("#radioBanner1").prop('checked', false);
           $("#radioBanner2").prop('checked', false);

       }else if(slideAtual == 1){
           $("#bannerImg").css("background-image",listaSlides[2])
           slideAtual = 2;

           $("#radioBanner0").prop('checked', false);
           $("#radioBanner1").prop('checked', false);
           $("#radioBanner2").prop('checked', true);

       }else{
           $("#bannerImg").css("background-image",listaSlides[1])
           slideAtual = 1;

           $("#radioBanner0").prop('checked', false);
           $("#radioBanner1").prop('checked', true);
           $("#radioBanner2").prop('checked', false);

       }    

   }

    
    $("#bannerLeftArrow").click(function(){
        mudarSlideEsquerda()
    })

    $("#bannerRightArrow").click(function(){
        mudarSlideDireita()
    })



    $("#hamburguer").click(function(){
        if($("#hamburguer").hasClass("menu-ativo")){
            $("#hamburguer").removeClass("menu-ativo")
        }else{
            $("#hamburguer").addClass("menu-ativo")
        }
    })

})