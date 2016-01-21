function myFunction() {
  //contenu
  var plateau = document.getElementById("scene");
  var joueur = document.getElementsByClassName("joueur");
  var vide = document.getElementsByClassName("vide");

  //mécanique
  var joueur1 = [];
  var vide1 = [];
  var positionBat = 0;


  //création vide
  for (i = 0; i < 12; i++) {
    vide1[i] = document.createElement("img");
    vide1[i].className = "vide";
    vide1[i].style.left = 1.5 + i * 8 + "%";
    vide1[i].src = "img/footballergris.png";
    plateau.appendChild(vide1[i]);

  }

  //création joueur
  for (i = 0; i < 12; i++) {
    joueur1[i] = document.createElement("img");
    joueur1[i].className = "joueur";
    joueur1[i].style.left = 1.5 + i * 8 + "%";
    joueur1[i].src = "img/footballer1.png";
    plateau.appendChild(joueur1[i]);
  }

};

myFunction();
