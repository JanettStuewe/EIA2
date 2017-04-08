let deck: HTMLElement;
let cards: string[];
let hand: NodeListOf<HTMLDivElement>;
let ablage: HTMLDivElement;

document.addEventListener("DOMContentLoaded", function(): void {
    deck = document.getElementById("Nachziehstapel");
    deck.addEventListener("click", addHandkarten);
    cards = ["Herz7", "Herz8", "Herz9", "Herz10", "HerzBube", "HerzDame", "HerzKoenig", "HerzAss",
        "Piek7", "Piek8", "Piek9", "Piek10", "PiekBube", "PiekDame", "PiekKoenig", "PiekAss",
        "Kreuz7", "Kreuz8", "Kreuz9", "Kreuz10", "KreuzBube", "KreuzDame", "KreuzKoenig", "KreuzAss",
        "Karo7", "Karo8", "Karo9", "Karo10", "KaroBube", "KaroDame", "KaroKoenig", "KaroAss"];
    hand = <NodeListOf<HTMLDivElement>>document.getElementsByClassName("Handkarten");
    for (let x: number = 0; x < hand.length; x++) {
        hand[x].addEventListener("click", addAblegestapel);
    }
    ablage = <HTMLDivElement>document.getElementById("Ablegestapel");

});



function addHandkarten(): void {

    let randomCard: string = cards.splice(Math.round(Math.random() * (cards.length - 1)), 1)[0];
    let freeHand: HTMLDivElement = findEmpty();
    if (freeHand != null) {
        freeHand.innerText = randomCard;
    }

    if (cards.length === 0) {
        deck.style.display = "none";
    }
}

function findEmpty(): HTMLDivElement {

    for (let i: number = 0; i < hand.length; i++) {
        if (hand[i].textContent === "") { //wenn Inhalt drin ist
            return hand[i];
        }
    }

    return null; //wenn kein Inhalt, also die forSchleife null-Inhalt fand, dann wird die Arraynummer vom Handkartenstapel zum füllen bereit gestellt, Zeile22/23
}

function addAblegestapel(_event: Event): void {
    let element: HTMLDivElement = <HTMLDivElement>_event.target;
    ablage.textContent = element.textContent; 
    element.textContent = "";
    //element.parentNode.removeChild(element);
//    let y:HTMLDivElement=<HTMLDivElement>.event.target
}