namespace Abschlussaufgabe_Bild {
    window.addEventListener("load", bild);

    export let crc2: CanvasRenderingContext2D;
    export let alleCookies: Cookie[] = [];
    
    //a:deklaiert eine gerundete, variable Zahl bis 10, mit Typ number
    export let a: number = Math.random() * 10; // variable zahl bis 10
    export let aGerundet: string = a.toFixed(0); // rundet a auf 0 stellen nach dem komma
    export let a2: number;
    a2 = parseInt(aGerundet); //aGerundet in number wandeln
    
    //b:deklaiert eine gerundete, variable Zahl bis 10, mit Typ number
    export let b: number = Math.random() * 10; // variable zahl bis 10
    export let bGerundet: string = b.toFixed(0); // rundet b auf 0 stellen nach dem komma
    export let b2: number;
    b2 = parseInt(bGerundet);
    
    export let ergebnis: number; // richtige ergebnis von a und b
    ergebnis = a2 + b2;
    
    export let nutzerAntwort: any; //eigentlich number, aber prompt spackt sonst rum
    nutzerAntwort = parseInt;
    nutzerAntwort = prompt("Rechne die Aufgabebe aus!" + "\r\n" + aGerundet + "+" + bGerundet, nutzerAntwort);
    export let ausgabeVariation: string;
    export let ausgabeText: string;

    if (isNaN(nutzerAntwort)) { // wenn die NutzerAntwort keine Zahl ist
        ausgabeVariation = "dumm";
    }
    else if (nutzerAntwort != ergebnis) {  // wenn die NutzerAntwort nicht das richtige Ergebnis ist
        ausgabeVariation = "falsch";
    } else { // wenn die NutzerAntwort das richtige Ergebnis ist
        ausgabeVariation = "richtig";
    }

    switch (ausgabeVariation) {

        case "falsch":
            ausgabeText = "Die Antwort ist leider falsch." + "\r\n" + "Z%E4hle die Cookies für die richtige L%F6sung." ;
            break;
        case "dumm":
            ausgabeText = "Bitte die Zahl als Ziffer eintragen!";
            break;
        case "richtig":
            ausgabeText = "Super, deine Antwort war richtig!";
            break;
        default:
            ausgabeText = "Uuups, es ist ein Fehler unterlaufen.";
            break;
    }

    alert(ausgabeText);

    function bild(_event: Event): void { // malt cookie.canvas
        let canvas: HTMLCanvasElement;
        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");

        for (var i: number = 0; i < ergebnis; i++) { //
            let c: Cookie = new Cookie(150, 150, "black");
            alleCookies.push(c);
            console.log(c);
            c.drawCookie(c);
            // alleCookies[i].drawCookie();

        } //schließt For-Schleife
    }//schließt function bild

}//schließt namespace