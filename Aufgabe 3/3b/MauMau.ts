// habe manchen Kommilitonen Hilfestellungen gegeben und ihnen meinen code erklärt, welcher zustande kam mit hilfe vom tutor sascha

//hier deklariere ich meine hauptvariablen
let deck: HTMLElement; //nachziehstapel
let cards: string[];       //karten im nachziehstapel
let hand: NodeListOf<HTMLDivElement>;   //handkarten
let ablage: HTMLDivElement;     //ablagestapel

// hier haben ich meinen c´variablen einen wert  plus klickfunktionen zu gewiesen
document.addEventListener("DOMContentLoaded", function(): void {
    deck = document.getElementById("Nachziehstapel");   //verbindet die variable deck mit dem div mit der id nachziehstapel
    deck.addEventListener("click", addHandkarten);      //sagt das die funktion addhandkarte anspringen soll beim klick auf den nachziehstapel
    cards = ["Herz7", "Herz8", "Herz9", "Herz10", "HerzBube", "HerzDame", "HerzKoenig", "HerzAss",
        "Piek7", "Piek8", "Piek9", "Piek10", "PiekBube", "PiekDame", "PiekKoenig", "PiekAss",
        "Kreuz7", "Kreuz8", "Kreuz9", "Kreuz10", "KreuzBube", "KreuzDame", "KreuzKoenig", "KreuzAss",
        "Karo7", "Karo8", "Karo9", "Karo10", "KaroBube", "KaroDame", "KaroKoenig", "KaroAss"];
    hand = <NodeListOf<HTMLDivElement>>document.getElementsByClassName("Handkarten"); //verbindet die variable hand mit den divs mit der class handkarten
    for (let x: number = 0; x < hand.length; x++) { //durchläuft die handkarten.divs
        hand[x].addEventListener("click", addAblegestapel); //findet heraus welche handkarte 
    }
    ablage = <HTMLDivElement>document.getElementById("Ablegestapel"); //verbindet die variable ablage  mit dem div mit der id ablegestapel

});


/* Diese Funktion springt an, wenn das div vom abziehstapel angeklcikt wird  */
function addHandkarten(): void {

    let randomCard: string = cards.splice(Math.round(Math.random() * (cards.length - 1)), 1)[0]; //sucht eine randomcard (math.random) aus dem array(cards.lenght) und schneidet dieses heraus (splice)
    let freeHand: HTMLDivElement = findEmpty(); //dekariert eine variable für die handkarten ohne inhalt
    if (freeHand != null) { //nur wenn es eine freie handkarte gibt
        freeHand.innerText = randomCard; //fügt das random aus dem array herausgeschnitte stück in den text des divs ein, welches durch die funktion findepmty gefunden wurde
    }

    if (cards.length === 0) { //wenn keine karten mehr vorhanden sind, also der array nicht mehr enthält ist der nachziehstapel aufgebraucht
        deck.style.display = "none"; //und verschwindet vom bilschirm
    }
}

function findEmpty(): HTMLDivElement { //funktion die herausfindet ob und wenn ja welche der handkarten.divs leer ist

    for (let i: number = 0; i < hand.length; i++) { //durchläuft alle handkarten.divs
        if (hand[i].textContent === "") { //wenn Inhalt drin ist 
            return hand[i]; 
        }
    }

    return null; //wenn kein Inhalt, also die forSchleife null-Inhalt fand, dann wird die Arraynummer vom Handkartenstapel zum füllen bereit gestellt, Zeile22/23
}

function addAblegestapel(_event: Event): void {
    let element: HTMLDivElement = <HTMLDivElement>_event.target; //greift auf das angeklickte div zu und deren textinhalt
    ablage.textContent = element.textContent; //überträgt den textinhalt des angeklickten divs auf das ablage div
    element.textContent = ""; //löscht den inhalt aus der angeklcikten hankarte
    //element.parentNode.removeChild(element);
    //    let y:HTMLDivElement=<HTMLDivElement>.event.target
}