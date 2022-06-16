const testi = {
  domanda: ["Ti consideri una persona", "Preferisci", "Cosa porta lontano?", "Davanti ad un problema preferisci", "In una situazione nuova", "Quando parli", "La routine è", "Lavori meglio", "Nel lavoro cerchi", "Preferiresti", "Dai più importanza", "Responsabilità per me è", "Ti riesce meglio", "Ti concentri di più su", "Di solito preferisci", "La tua personalità", "Se devi risolvere un problema complesso", "Quanto apprezzi insegnare agli altri", "Ti piace stare a contatto con i bambini", "Quanto ti interessa aiutare gli altri", "È importante avere un lavoro che possa fare la differenza", "Riguardo alla ricerca", "Per i miei interessi la storia è", "C’è un malato", "Il contatto con la natura è"],
  opzione_a: ["Introversa", "Coordinare", "Talento", "Risolverlo in autonomia", "Sondi il terreno", "Dici le cose me stanno", "Da evitare", "In un grande ufficio", "Stabilità", "Ricchezza", "Alle relazioni", "Da evitare", "Un ragionamento logico", "Le tue prestazioni", "Improvvisare", "Rifletto sulle soluzioni", "Intrigante!", "Poco", "Poco", "Poco", "Poco", "Contemplabile", "Necessaria", "Chiamo un medico", "Fondamentale"],
  opzione_b: ["Estroversa", "Mettere le mani in pasta", "Costanza", "Chiedere aiuto", "Ti butti a capofitto", "Fai il diplomatico", "Confortante", "All’aria aperta", "Flessibilità", "Realizzazione", "Agli obiettivi", "Ben accetta", "Un approccio creativo", "Il risultato finale", "Pianificare", "Agisco d’istinto", "Mi viene l’ansia", "Molto", "Molto", "Molto", "Molto", "Da escludere", "Non fondamentale", "Come posso aiutare?", "Viva il cemento "]
}

let domandeVar = 0;

let puntini = [];


console.log("Nella sezione test usa 'skip()' per abbreviare il test");
console.log("OrientaMentor - Sito vetrina - 16 giugno 2022 - Versione 3");




//slide pagina home3-------------------------------------------------------------------------

function scorrimentoSlide(slide) {
  document.getElementsByClassName("slide")[slide - 1].scrollIntoView({
    behavior: "smooth",
    block: "center",
    inline: "center"
  });
}


//scopri3 mockup----------------------------------------------------------------------------------------------
function mockup1(numero) {
  document.getElementById("mockup1").style.backgroundImage = "url(assets/mockupCell" + numero + ".png)";
}

function mockup2(numero) {
  document.getElementById("mockup2").style.backgroundImage = "url(assets/mockupPc" + numero + ".png)";
}






function skip() {
  domandeVar=24;
}


// apertura e chiusura menu ------------------------------------------------------------------

function openMenu() {
  document.getElementById("menu").style.display = "flex";
}

function closeMenu() {
  document.getElementById("menu").style.display = "none";
}

//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\



//animazioneHome1
setTimeout(function() {
  document.getElementById("home1").style.height = "0vw"
}, 3500);

// contatore avanzamento domande----------------------------------------------------------------------------------------
function creaContatore() {
  for (let i = 0; i < testi.domanda.length; i++) {
    puntini[i] = document.createElement("div", "aaaaaa");
    document.getElementById("contatore").appendChild(puntini[i]);
    puntini[i].classList.add("contatoreElement");

    if (i == 7 || i == 12 || i == 16 || i == 21) {
      puntini[i].style.marginLeft = "2vw";
    }
  }
};

creaContatore();

// funzionamento del test --------------------------------------------------------------------

function aggiornaDomande() {
  document.getElementById("domanda").innerHTML = testi.domanda[domandeVar];
  document.getElementById("opzione1").innerHTML = testi.opzione_a[domandeVar];
  document.getElementById("opzione2").innerHTML = testi.opzione_b[domandeVar];


  if (domandeVar > 0) {

    document.getElementsByClassName("contatoreElement")[domandeVar - 1].style.backgroundColor = "white";
  }

  domandeVar++;


}

function avanzamentoDomande(pippo) {
  if (domandeVar == 0) {
    setTimeout(function() {
      document.getElementById("test1").style.opacity = "100"
    }, 5500);
  }

  if (domandeVar == 7 || domandeVar == 12 || domandeVar == 16 || domandeVar == 21) {
    document.getElementById("test1").style.opacity = "0";
    setTimeout(function() {
      aggiornaDomande();
      document.getElementById("test1").style.opacity = "100"
    }, 5500);
      if (window.innerWidth < 380) {
    document.getElementById("sfondoTest1").style.background = "url(assets/AnimazioneTest" + domandeVar + "SE.gif)";}
    else if (window.innerWidth < 600) {
  document.getElementById("sfondoTest1").style.background = "url(assets/AnimazioneTest" + domandeVar + "12.gif)";}
  else if (window.innerWidth < 800) {
document.getElementById("sfondoTest1").style.background = "url(assets/AnimazioneTest" + domandeVar + "IPADVER.gif)";}
else if (window.innerWidth < 1080) {
document.getElementById("sfondoTest1").style.background = "url(assets/AnimazioneTest" + domandeVar + "IPADOR.gif)";}
else if (window.innerWidth < 3000) {
document.getElementById("sfondoTest1").style.background = "url(assets/AnimazioneTest" + domandeVar + "FHD.gif)"; console.log("aaaaaa")}
  }
  else if (domandeVar < 25) {
  aggiornaDomande();
  }



  if (domandeVar == 25) {
    document.getElementById("domanda").innerHTML = "Scopri i risultati del test!";
    document.getElementById("opzione1").innerHTML = "<input placeholder='mail' style='  background-color: inherit; border-width: 0; color:white'> </input>";
    document.getElementById("opzione1").style.width= "30vw";
    document.getElementById("opzione2").innerHTML = "Invia";
    domandeVar++;
  } else if (domandeVar == 26 && pippo == 2) {

    document.getElementById("domanda").innerHTML = "Controlla la tua casella mail per vedere i risultati";
    document.getElementById("opzione1").innerHTML = "<a href='index.html'>Torna alla Home</a>";
    document.getElementById("opzione2").style.display = "none";
  }
}

avanzamentoDomande();
