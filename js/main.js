
$(function () {
  $('[data-toggle="tooltip"]').tooltip('show')
})




// FONCTION NAJIB

function myFunction() {
  //contenu
  var plateau = document.getElementById("scene");
  var joueur = document.getElementsByClassName("joueur");
  var vide = document.getElementsByClassName("vide");
  var speed = 5;
  var animtimer;

  //mécanique
  var joueur1 = [];
  var vide1 = [];
  var positionBat = 0;


  //création joueur
  for (i = 0; i < 12; i++) {
    joueur1[i] = document.createElement("img");
    joueur1[i].className = "joueur";
    joueur1[i].style.left = 20 + i * 5 + "%";
    joueur1[i].src = "img/footballer1.png";
    plateau.appendChild(joueur1[i]);
  }

  //création vide
  for (i = 0; i < 12; i++) {
    vide1[i] = document.createElement("img");
    vide1[i].className = "vide";
    vide1[i].style.left = 20 + i * 5 + "%";
    vide1[i].src = "img/footpetit.png";
    plateau.appendChild(vide1[i]);
  }

  var goOpac= function(numero) {
    var JrNum= vide[numero];
      var opac = 0;
    var initanimup = function() {
        JrNum.style.opacity=opac;
        opac += 0;
        if (opac<=1){
          clearTimeout(animtimer);
        }
    };
    var animtimer = setInterval(initanimup,speed);
  };

goOpac(0);

};

myFunction();
