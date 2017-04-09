// habe manchen Kommilitonen Hilfestellungen gegeben und ihnen meinen code erkl�rt, welcher zustande kam mit hilfe vom tutor sascha
//hier deklariere ich meine hauptvariablen
var deck; //nachziehstapel
var cards; //karten im nachziehstapel
var hand; //handkarten
var ablage; //ablagestapel
// hier haben ich meinen c�variablen einen wert  plus klickfunktionen zu gewiesen
document.addEventListener("DOMContentLoaded", function () {
    deck = document.getElementById("Nachziehstapel"); //verbindet die variable deck mit dem div mit der id nachziehstapel
    deck.addEventListener("click", addHandkarten); //sagt das die funktion addhandkarte anspringen soll beim klick auf den nachziehstapel
    cards = ["Herz7", "Herz8", "Herz9", "Herz10", "HerzBube", "HerzDame", "HerzKoenig", "HerzAss",
        "Piek7", "Piek8", "Piek9", "Piek10", "PiekBube", "PiekDame", "PiekKoenig", "PiekAss",
        "Kreuz7", "Kreuz8", "Kreuz9", "Kreuz10", "KreuzBube", "KreuzDame", "KreuzKoenig", "KreuzAss",
        "Karo7", "Karo8", "Karo9", "Karo10", "KaroBube", "KaroDame", "KaroKoenig", "KaroAss"];
    hand = document.getElementsByClassName("Handkarten"); //verbindet die variable hand mit den divs mit der class handkarten
    for (var x = 0; x < hand.length; x++) {
        hand[x].addEventListener("click", addAblegestapel); //findet heraus welche handkarte 
    }
    ablage = document.getElementById("Ablegestapel"); //verbindet die variable ablage  mit dem div mit der id ablegestapel
});
/* Diese Funktion springt an, wenn das div vom abziehstapel angeklcikt wird  */
function addHandkarten() {
    var randomCard = cards.splice(Math.round(Math.random() * (cards.length - 1)), 1)[0]; //sucht eine randomcard (math.random) aus dem array(cards.lenght) und schneidet dieses heraus (splice)
    var freeHand = findEmpty(); //dekariert eine variable f�r die handkarten ohne inhalt
    if (freeHand != null) {
        freeHand.innerText = randomCard; //f�gt das random aus dem array herausgeschnitte st�ck in den text des divs ein, welches durch die funktion findepmty gefunden wurde
    }
    if (cards.length === 0) {
        deck.style.display = "none"; //und verschwindet vom bilschirm
    }
}
function findEmpty() {
    for (var i = 0; i < hand.length; i++) {
        if (hand[i].textContent === "") {
            return hand[i];
        }
    }
    return null; //wenn kein Inhalt, also die forSchleife null-Inhalt fand, dann wird die Arraynummer vom Handkartenstapel zum f�llen bereit gestellt, Zeile22/23
}
function addAblegestapel(_event) {
    var element = _event.target; //greift auf das angeklickte div zu und deren textinhalt
    ablage.textContent = element.textContent; //�bertr�gt den textinhalt des angeklickten divs auf das ablage div
    element.textContent = ""; //l�scht den inhalt aus der angeklcikten hankarte
    //element.parentNode.removeChild(element);
    //    let y:HTMLDivElement=<HTMLDivElement>.event.target
}
//# sourceMappingURL=MauMau.js.map