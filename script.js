const testi = {
  domanda: ["Ti consideri una persona", "Preferisci", "Cosa porta lontano?", "Davanti ad un problema preferisci", "In una situazione nuova", "Quando parli", "La routine è", "Lavori meglio", "Nel lavoro cerchi", "Preferiresti", "Dai più importanza", "Responsabilità per me è", "domanda12", "domanda13", "domanda14", "domanda15", "domanda16", "domanda17", "domanda18", "domanda19", "domanda20", "Riguardo alla ricerca", "Per i miei interessi la storia è", "C’è un malato", "Il contatto con la natura è"],
  opzione_a: ["Introversa", "Coordinare", "Talento", "Risolverlo in autonomia", "Sondi il terreno", "Dici le cose me stanno", "Da evitare", "In un grande ufficio", "Stabilità", "Ricchezza", "Alle relazioni", "Da evitare", "opzione_a_12", "opzione_a_13", "opzione_a_14", "opzione_a_15", "opzione_a_16", "opzione_a_17", "opzione_a_18", "opzione_a_19", "opzione_a_20", "Contemplabile", "Necessaria", "Chiamo un medico", "Fondamentale"],
  opzione_b: ["Estroversa", "Mettere le mani in pasta", "Costanza", "Chiedere aiuto", "Ti butti a capofitto", "Fai il diplomatico", "Confortante", "All’aria aperta", "Flessibilità", "Realizzazione", "Agli obiettivi", "Ben accetta", "opzione_b_12", "opzione_b_13", "opzione_b_14", "opzione_b_15", "opzione_b_16", "opzione_b_17", "opzione_b_18", "opzione_b_19", "opzione_b_20", "Da escludere", "Non fondamentale", "Come posso aiutare?", "Viva il cemento "]
}

let domandeVar = 0;

let puntini = [];


//animazioneHome1
setTimeout(function(){document.getElementById("home1").style.height="0vw"} ,3500)


//slide pagina home3-------------------------------------------------------------------------

function scorrimentoSlide(slide) {
document.getElementsByClassName("slide")[slide-1].scrollIntoView({
  behavior: "smooth",
  block: "center",
  inline: "center"
});
}


//scopri3 mockup----------------------------------------------------------------------------------------------




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


function avanzamentoDomande(){
  if (domandeVar==0) {setTimeout(function(){document.getElementById("test1").style.opacity="100"} , 5500)}
  if (domandeVar<25) {
document.getElementById("domanda").innerHTML=testi.domanda[domandeVar];
document.getElementById("opzione1").innerHTML=testi.opzione_a[domandeVar];
document.getElementById("opzione2").innerHTML=testi.opzione_b[domandeVar];
document.getElementsByClassName("contatoreElement")[domandeVar].style.backgroundColor="white";

} else if (domandeVar==25) {
  document.getElementById("domanda").innerHTML="Scopri i risultati del test!";
  document.getElementById("opzione1").innerHTML="<i style='opacity:50%; padding-right:7vw'>inserisci la tua mail</i>";
  document.getElementById("opzione2").innerHTML="Invia";
} else if (domandeVar==26) {
  document.getElementById("domanda").innerHTML="Controlla la tua casella mail per vedere i risultati";
document.getElementById("opzione1").innerHTML="<a href='index.html'>Torna alla Home</a>";
document.getElementById("opzione2").style.display="none";
}
domandeVar++}

avanzamentoDomande();




// apertura e chiusura menu ------------------------------------------------------------------

function openMenu() {
  document.getElementById("menu").style.display = "flex";
}

function closeMenu() {
  document.getElementById("menu").style.display = "none";
}
