namespace Abschlussaufgabe_Bild {
    window.addEventListener("load", bild);

    export let inhaltEins: CanvasRenderingContext2D;
    export let inhaltZwei: CanvasRenderingContext2D;
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
    nutzerAntwort = prompt("Grafzahl will Kr\u00fcmelmonster rechnen bei bringen und stellt zwei Teller mit Keksen hin" + "\r\n" + "auf dem ersten Teller sind" + "  " +  aGerundet +  "    " + "und auf dem zweiten Teller" + "  " + bGerundet + "\r\n" + "\r\n" + "Wie viele Kekse hat Kr\u00fcmelmonster insgesamt?" + "\r\n" + " ", nutzerAntwort);
    export let ausgabeVariation: string;
    export let ausgabeText: string;

    if (isNaN(nutzerAntwort)) { // wenn die NutzerAntwort keine Zahl ist
        ausgabeVariation = "dumm";
    }else if (nutzerAntwort != ergebnis) {  // wenn die NutzerAntwort nicht das richtige Ergebnis ist
        ausgabeVariation = "falsch";
    } else { // wenn die NutzerAntwort das richtige Ergebnis ist
        ausgabeVariation = "richtig";
    }

    //Zugriff auf Bilder
    let salat: HTMLElement = document.getElementById("Salat");
    let richtig: HTMLElement = document.getElementById("Richtig");
    let falsch: HTMLElement = document.getElementById("Falsch");
    //image.style.display = "none";
    
    switch (ausgabeVariation) {
        case "falsch": 
            ausgabeText = "Die Antwort ist leider falsch." + "\r\n" +  "Nun muss Kr%FCmelmonster Salat essen.";
            salat.style.display = "block";
            break;
        case "dumm":
            ausgabeText = "Grafzahl verzweifelt, da dir nicht mal Ziffern gel‰ufig sind?!";
            falsch.style.display = "block";
            break;
        case "richtig":
            ausgabeText = ergebnis + "Kekse ist richtig! Da freut sich Grazahl und erstrecht Kr%FCmelmonster. Omnomnom!";
            richtig.style.display = "block";
            break;
        default:
            ausgabeText = "Uuups, es ist ein Fehler unterlaufen.";
            break;
    }//schlieﬂt switch

    alert(ausgabeText);
 
    function bild(_event: Event): void { // malt cookie.canvas
        let canvasEins: HTMLCanvasElement;
        canvasEins = document.getElementById("richtigesErgebnis")[0];
        inhaltEins = canvasEins.getContext("2d");

        for (var i: number = 0; i < nutzerAntwort; i++) { //
            let c: Cookie = new Cookie(150, 150, "black");
            alleCookies.push(c);
            console.log(c);
            c.drawCookie(c);
            // alleCookies[i].drawCookie();

        } //schlieﬂt For-Schleife
    }//schlieﬂt function bild
    
    function bildZwei (_event: Event): void { // malt cookie.canvas
        let canvasZwei: HTMLCanvasElement;
        canvasZwei = document.getElementById("nutzerErgebnis")[0];
        inhaltZwei = canvasZwei.getContext("2d");

        for (var i: number = 0; i < ergebnis; i++) { //
            let c: Cookie = new Cookie(150, 150, "black");
            alleCookies.push(c);
            console.log(c);
            c.drawCookie(c);
            // alleCookies[i].drawCookie();

        } //schlieﬂt For-Schleife
    }//schlieﬂt function bildZwei

}//schlieﬂt namespace