let palyaWidth = window.innerWidth;
let w = parseInt(palyaWidth * 0.85);

let sorrend = [""];
let hanyadik = 0;
let lepesek = [0];
let gyoztesLo = "";

function Kiiratas(X) {
  let lovakNevei = document.querySelector("#induloLovak").innerHTML;

  lovakNevei += X; //lovakNevei=lovakNevei+gyumolcsok
  document.querySelector("#induloLovak").innerHTML = lovakNevei;
  //console.log(lovakNevei);
}

function KiiratasDisplay(X) {
  let lovakNevei = document.querySelector("#display").innerHTML;

  lovakNevei += X; //lovakNevei=lovakNevei+gyumolcsok
  document.querySelector("#display").innerHTML = lovakNevei;
  //console.log(lovakNevei);
}

function kovetkezo() {
  location.reload();
}

function bekeres() {
  onTippje = prompt("Tippeljen az egyik lóra");
  let ervenyesLoNev = "Érvényes fogadás!";
  document.getElementById("tippeltLo").innerHTML = "Az Ön tippje: " + onTippje;
  for (i = 0; i < hossz; i++) {
    if (onTippje.toUpperCase() == lovak[i].toUpperCase()) {
      i = hossz;
      document.getElementById("startButton").style.display = "block";
      document.getElementById("bekeresButton").style.display = "none";
      document.getElementById("katt").style.display = "none";
      document.getElementById("nincsIlyen").innerHTML = ervenyesLoNev;
    } else {
      document.getElementById("nincsIlyen").innerHTML =
        "Nincs ilyen nevű ló!! Te ökör!!!";
    }
  }
}

document.getElementById("startButton").style.display = "none";
document.getElementById("kovetkezoButton").style.display = "none";

let lovak = [];
for (i = 0; i < 5; i++) {
  lovak[i] = lovakLista[Math.round(Math.random() * lovakLista.length)];
  console.log(Math.round(Math.random() * lovakLista.length));
}
let hossz = lovak.length;
let br = "<br />";
let felsorolas = "<h2>";
felsorolas += "<ol>";
for (i = 0; i < hossz; i++) {
  //i<=hossz-1 i=i+1 i+=2
  felsorolas += "<li>" + lovak[i] + "</li>";
}
felsorolas += "</ol></h2>";

Kiiratas(felsorolas);

KiiratasDisplay(felsorolas);
//console.log(felsorolas);

function futas() {
  score = 70;
  let vege = 0;
  //let lep = 0;
  document.getElementById("startButton").style.display = "none";
  for (i = 0; i < hossz; i++) {
    //lépések feltöltése 0-val
    lepesek[i] = 0;
  }
  vege = false;
  //lep = 0;
  while (!vege) {
    //lovak szaladnak  1-3 között
    for (i = 0; i < hossz; i++) {
      lepesek[i] = lepesek[i] + Math.round(Math.random() * 2) + 1;
      //lep++;
      if (lepesek[i] >= score) {
        vege = true;
        gyoztesLo = lovak[i];
        galopp();
      }
    }
  }
}
function eredmenyKiiras() {
  let szoveg = "";

  //document.querySelector("#induloLovak") = lovakNevei;
  if (onTippje.toUpperCase() == gyoztesLo.toUpperCase()) {
    szoveg = "ÖN NYERT!!!";
  } else {
    szoveg = "Sajnos most nem nyert!!";
  }
  document.getElementById("gyoztes").innerHTML =
    "A győztes ló neve: " + gyoztesLo + "! " + szoveg;

  document.getElementById("kovetkezoButton").style.display = "block";
  document.getElementById("nincsIlyen").style.display = "none";
}
//document.getElementById("katt").style.display = "block";

//Verseny grafiku++)

function lo1Move(szam, ido) {
  let id;
  let loszama = szam;
  let lo = document.getElementById(loszama);

  let pos = 60;
  clearInterval(id);
  id = setInterval(frame, ido);
  function frame() {
    if (pos == w) {
      clearInterval(id);
      document.getElementById("loKep").src = "img/lo2.gif";
      sorrend[hanyadik] = lovak[0];
      hanyadik++;
      if (hanyadik == 5) {
        eredmeny();
      }
    } else {
      pos++;
      lo.style.left = pos + "px";
    }
  }
}
function lo2Move(szam, ido) {
  let id;
  let loszama = szam;
  let lo = document.getElementById(loszama);

  let pos = 60;
  clearInterval(id);
  id = setInterval(frame, ido);
  function frame() {
    if (pos == w) {
      clearInterval(id);
      document.getElementById("loKep2").src = "img/lo2.gif";
      sorrend[hanyadik] = lovak[1];
      hanyadik++;
      if (hanyadik == 5) {
        eredmeny();
        eredmenyKiiras();
      }
    } else {
      pos++;
      lo.style.left = pos + "px";
    }
  }
}
function lo3Move(szam, ido) {
  let id;
  let loszama = szam;
  let lo = document.getElementById(loszama);

  let pos = 60;
  clearInterval(id);
  id = setInterval(frame, ido);
  function frame() {
    if (pos == w) {
      clearInterval(id);
      document.getElementById("loKep3").src = "img/lo2.gif";
      sorrend[hanyadik] = lovak[2];
      hanyadik++;
      if (hanyadik == 5) {
        eredmeny();
        eredmenyKiiras();
      }
    } else {
      pos++;
      lo.style.left = pos + "px";
    }
  }
}
function lo4Move(szam, ido) {
  let id;
  let loszama = szam;
  let lo = document.getElementById(loszama);

  let pos = 60;
  clearInterval(id);
  id = setInterval(frame, ido);
  function frame() {
    if (pos == w) {
      clearInterval(id);
      document.getElementById("loKep4").src = "img/lo2.gif";
      sorrend[hanyadik] = lovak[3];
      hanyadik++;
      if (hanyadik == 5) {
        eredmeny();
        eredmenyKiiras();
      }
    } else {
      pos++;
      lo.style.left = pos + "px";
    }
  }
}
function lo5Move(szam, ido) {
  let id;
  let loszama = szam;
  let lo = document.getElementById(loszama);

  let pos = 60;
  clearInterval(id);
  id = setInterval(frame, ido);
  function frame() {
    if (pos == w) {
      clearInterval(id);
      document.getElementById("loKep5").src = "img/lo2.gif";
      sorrend[hanyadik] = lovak[4];
      hanyadik++;
      if (hanyadik == 5) {
        eredmeny();
        eredmenyKiiras();
      }
    } else {
      pos++;
      lo.style.left = pos + "px";
    }
  }
}

function galopp() {
  //console.log(lepesek);
  sebesseg1 = 100 - lepesek[0];
  sebesseg2 = 100 - lepesek[1];
  sebesseg3 = 100 - lepesek[2];
  sebesseg4 = 100 - lepesek[3];
  sebesseg5 = 100 - lepesek[4];
  lo1Move("lo1", sebesseg1);
  lo2Move("lo2", sebesseg2);
  lo3Move("lo3", sebesseg3);
  lo4Move("lo4", sebesseg4);
  lo5Move("lo5", sebesseg5);
}
function Kiiratas3(X) {
  let lovakNevei3 = document.querySelector("#eredmenyJelzo").innerHTML;
  lovakNevei3 += X;
  document.querySelector("#eredmenyJelzo").innerHTML = lovakNevei3;
  
}
function eredmeny() {
  
  let felsorolas2 = "";
  felsorolas2 += "<h3><ol>";
    for (i = 0; i < sorrend.length; i++) {
    //i<=hossz-1 i=i+1 i+=2
      felsorolas2 += "<li>" + sorrend[i] + "</li>";
    }
      felsorolas2 += "</ol></h3>";

Kiiratas3(felsorolas2);
}

