namespace Abschlussaufgabe_Bild {
    window.addEventListener("load", bild);

    export let crc2: CanvasRenderingContext2D;
    export let inhaltZwei: CanvasRenderingContext2D; //Bei den Cookies ist halt crc2, ist dies hier überhaupt sinnvoll?
    export let alleCookies: Cookie[] = [];
    
    //a:deklaiert eine gerundete, variable Zahl bis 10
    export let a: number = Math.random() * 10; // variable zahl bis 10
    a = Math.round(a); // rundet a auf 
    
    //b:deklaiert eine gerundete, variable Zahl bis 10
    export let b: number = Math.random() * 10; // variable zahl bis 10
    b = Math.round(b);
    
    export let ergebnis: number; // richtige ergebnis von a und b
    ergebnis = a + b;
       
    export let nutzerAntwort: any; //eigentlich number, aber prompt spackt sonst rum
    nutzerAntwort = parseInt;
    nutzerAntwort = prompt("Grafzahl will Kr\u00fcmelmonster rechnen bei bringen und stellt zwei Teller mit Keksen hin." + "\r\n" + "Auf dem ersten Teller sind" + "  " +  a +  "   " + "und auf dem zweiten Teller" + "  " + b + "  " + "Kekse." + "\r\n" + "\r\n" + "Wie viele Kekse hat Kr\u00fcmelmonster insgesamt?" + "\r\n" + " ", nutzerAntwort);
    export let ausgabeVariation: string;
    export let ausgabeText: string;

    if (isNaN(nutzerAntwort)) { // wenn die NutzerAntwort keine Zahl ist
        ausgabeVariation = "dumm";
    }else if (nutzerAntwort != ergebnis) {  // wenn die NutzerAntwort nicht das richtige Ergebnis ist
        ausgabeVariation = "falsch";
    } else { // wenn die NutzerAntwort das richtige Ergebnis ist
        ausgabeVariation = "richtig";
    }


    switch (ausgabeVariation) {   
        case "falsch": 
            ausgabeText = "Die Antwort ist leider falsch." + "\r\n" +  "Nun muss Kr%FCmelmonster Salat essen.";
            let salat: HTMLElement = document.getElementById("Salat");        
            salat.style.display = "block";
            break;
        case "dumm":
            ausgabeText = "Grafzahl verzweifelt, da dir nicht mal Ziffern geläufig sind?!";
            let falsch: HTMLElement = document.getElementById("Falsch");        
            falsch.style.display = "block";
            break;
        case "richtig":
            ausgabeText = ergebnis + "Kekse ist richtig! Da freut sich Grazahl und erstrecht Kr%FCmelmonster. Omnomnom!";  
            let richtig: HTMLElement = document.getElementById("Richtig");
            richtig.style.display = "block";
            break;
        default:
            ausgabeText = "Uuups, es ist ein Fehler unterlaufen.";
            break;
    }//schließt switch

    alert(ausgabeText);
 
    function bild(_event: Event): void { // malt cookie.canvas
        let canvasEins: HTMLCanvasElement;
        canvasEins = <HTMLCanvasElement>document.getElementById("richtigesErgebnis");
        crc2 = canvasEins.getContext("2d");

        for (var i: number = 0; i < nutzerAntwort; i++) { //
            let c: Cookie = new Cookie("black");
            alleCookies.push(c);
            console.log(c);
            c.drawCookie();
            // alleCookies[i].drawCookie();

        } //schließt For-Schleife
    }//schließt function bild
    
    function bildZwei (_event: Event): void { // malt cookie.canvas
        let canvasZwei: HTMLCanvasElement;
        canvasZwei = <HTMLCanvasElement>document.getElementById("nutzerErgebnis");
        inhaltZwei = canvasZwei.getContext("2d"); //wie ich beim deklarieren von inhaltZwei bereits mich fragte, da bei Cookoie.ts mein Cookie mit crc2 erstellt wird, ist es überhaupt sinnvoll ein zweiten inhalt zu deklarieren?

        for (var i: number = 0; i < ergebnis; i++) { //
            let c: Cookie = new Cookie("black");
            alleCookies.push(c);
            console.log(c);
            c.drawCookie();
            // alleCookies[i].drawCookie();

        } //schließt For-Schleife
    }//schließt function bildZwei

}//schließt namespace