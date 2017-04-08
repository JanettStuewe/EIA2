var deck;
var cards;
var hand;
var ablage;
document.addEventListener("DOMContentLoaded", function () {
    deck = document.getElementById("Nachziehstapel");
    deck.addEventListener("click", addHandkarten);
    cards = ["Herz7", "Herz8", "Herz9", "Herz10", "HerzBube", "HerzDame", "HerzKoenig", "HerzAss",
        "Piek7", "Piek8", "Piek9", "Piek10", "PiekBube", "PiekDame", "PiekKoenig", "PiekAss",
        "Kreuz7", "Kreuz8", "Kreuz9", "Kreuz10", "KreuzBube", "KreuzDame", "KreuzKoenig", "KreuzAss",
        "Karo7", "Karo8", "Karo9", "Karo10", "KaroBube", "KaroDame", "KaroKoenig", "KaroAss"];
    hand = document.getElementsByClassName("Handkarten");
    for (var x = 0; x < hand.length; x++) {
        hand[x].addEventListener("click", addAblegestapel);
    }
    ablage = document.getElementById("Ablegestapel");
});
function addHandkarten() {
    var randomCard = cards.splice(Math.round(Math.random() * (cards.length - 1)), 1)[0];
    var freeHand = findEmpty();
    if (freeHand != null) {
        freeHand.innerText = randomCard;
    }
    if (cards.length === 0) {
        deck.style.display = "none";
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
    var element = _event.target;
    ablage.textContent = element.textContent;
    element.textContent = "";
    //element.parentNode.removeChild(element);
    //    let y:HTMLDivElement=<HTMLDivElement>.event.target
}
//# sourceMappingURL=MauMau.js.map