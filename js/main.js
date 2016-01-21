window.onload="myFunction()";

function myFunction() {
//contenu
var plateau = document.getElementById("scene");
alert(plateau);
var joueur = document.getElementsByClassName("joueur");
var vide = document.getElementsByClassName("vide");

//mécanique
var joueur1 = [];
var vide1 = [];
var positionBat = 0;
var attJ = document.createAttribute("src");
attJ.value = "img/footballer1.png";
var attV = document.createAttribute("src");
attV.value = "img/footballergris.png";


//création vide
for (i=0; i<20; i++) {
  vide1[i]=document.createElement("img");
  vide1[i].className="vide";
  vide1[i].style.left= 1.5+ i*5 +"%";
  vide1[i].setAttributeNode(attV);
  plateau.appendChild(vide1[i]);

}

//création joueur
for (i=0; i<20; i++) {
  joueur1[i]=document.createElement("img");
  joueur1[i].className="joueur";
  joueur1[i].style.left= 1.5+ i*5 +"%";

  plateau.appendChild(joueur1[i]);
}

joueur1.style.top="0";
joueur2.style.bottom="0";

joueur1[3].style.left= "200px";

};
