var texto = null;
var agregar =null;
var tam = 40;
$(document).ready(function () {
    $('.bhide').click(function(){
        $('.hide').hide();
    })
    
    $(".bshow").click(function () {
        $(".hide").show();
    });

    $(".btoggle").click(function () {
        $(".hide").toggle();
    });
    $(".bslidehide").click(function () {
      $(".shide").slideDown("slow");
    });

    $(".bslideshow").click(function () {
      $(".shide").slideUp("fast");
    });

    $(".bslidetoggle").click(function () {
      $(".shide").slideToggle();
    });

    $(".fin").click(function () {
      $(".fhide").fadeIn("slow");
    });

    $(".fout").click(function () {
      $(".fhide").fadeOut("slow");
    });


    $(".fin2").click(function () {
      $(".fhide2").fadeIn("slow");
    });

    $(".fout2").click(function () {
      $(".fhide2").fadeOut("slow");
    });

    $(".agregarclase").click(function () {
      $(".dummy").addClass('fhide2');
    });

    $(".agregartexto").click(function () {
      texto = document.getElementById("textoag").value;
      agregar = "<h3>"+texto +"</h3>";
      $(".tit1").after(agregar);
    });
    $(".agregartexto2").click(function () {
      texto = document.getElementById("textoag2").value;
      agregar = "<h6>" + texto + "</h6>";
      $(".tit2").append(agregar);
    });
    $(".agregartexto3").click(function () {
      texto = document.getElementById("textoag3").value;
      $(".tit3").html(texto);
    });
    $(".alertatexto2").click(function () {
      alert($(".tit3").text());
    });
    $(".tamanob").click(function () {
        tam=tam+10;
      $(".tamano").attr("style","font-size:"+tam+"px");
    });
    $(".distamanob").click(function () {
      tam = tam - 5;
      $(".tamano").attr("style", "font-size:" + tam + "px");
    });

    $(".alertatexto").click(function () {
      alert($("#alert").val());
    });

});
