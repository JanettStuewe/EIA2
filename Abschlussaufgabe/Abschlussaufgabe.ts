namespace Abschlussaufgabe_Bild {

    ////////////////Rechenoperatoren    
    export let a: number;
    export let b: number;
    export let ergebnis: number;
    //////////////AlertVorbereitung
    export let nutzerAntwort: string;
    let nutzerAntwortNumber: number;
    //////////////Bildvariablen
    let salat: HTMLImageElement;
    let falsch: HTMLImageElement;
    let richtig: HTMLImageElement;
    /////////////////CanvasVorbereitung
    export let canvasEins: HTMLCanvasElement;
    export let canvasZwei: HTMLCanvasElement;
    
    export let crc2: CanvasRenderingContext2D; //Inhalt des Canvas welcher das richtige Ergebnis anzeigt
    export let inhaltZwei: CanvasRenderingContext2D; //Inhalt des Canvas welcher Ergebnis des Nutzers anzeigt
    
    export let alleCookies: Cookie[]; //Array wo die Cookies reingespeichert werden vom richtigen Ergebnis
    export let alleCookie: CookieZwei[];//Array wo die Cookies reingespeichert werden vom Ergebnis des Nutzers


    window.addEventListener("load", init);
    function init(): void {
        a = Math.random() * 10; // variable zahl bis 10
        a = Math.round(a);
        b = Math.random() * 10; // variable zahl bis 10
        b = Math.round(b);
        ergebnis = a + b;
        nutzerAntwort = prompt("Graf Zahl will Kr\u00fcmelmonster rechnen beibringen und stellt zwei Teller mit Keksen hin." + "\r\n" + "Auf dem ersten Teller sind" + "  " + a + "   " + "und auf dem zweiten Teller" + "  " + b + "  " + "Kekse." + "\r\n" + "\r\n" + "Wie viele Kekse hat Kr\u00fcmelmonster insgesamt?" + "\r\n" + " ", nutzerAntwort);
        nutzerAntwortNumber = parseInt(nutzerAntwort);
        salat = <HTMLImageElement>document.getElementById("Salat");
        falsch = <HTMLImageElement>document.getElementById("Falsch");
        richtig = <HTMLImageElement>document.getElementById("Richtig");

        canvasEins = <HTMLCanvasElement>document.getElementById("richtigesErgebnis");
        crc2 = canvasEins.getContext("2d");
        canvasZwei = <HTMLCanvasElement>document.getElementById("nutzerErgebnis");
        inhaltZwei = canvasZwei.getContext("2d");
        alleCookies = []; //Array wo die Cookies reingespeichert werden vom richtigen Ergebnis
        alleCookie = [];//Array wo die Cookies reingespeichert werden vom Ergebnis des Nutzers

        promptIt();
        bild();
        bildZwei();
    }

    //////////////////AlertBox
    function promptIt(): void {
        let ausgabeVariation: string;
        let ausgabeText: string;
        ///////////////Entscheidet wie auf welche Arten die Nutzereingabe geteilt wird
        if (isNaN(nutzerAntwortNumber)) { // wenn die NutzerAntwort keine Zahl ist
            ausgabeVariation = "dumm";

        } else if (nutzerAntwortNumber != ergebnis) {  // wenn die NutzerAntwort nicht das richtige Ergebnis ist
            //salat.style.visibility = "visible";
            ausgabeVariation = "falsch";

        } else { // wenn die NutzerAntwort das richtige Ergebnis ist
            ausgabeVariation = "richtig";

        }

        //////////////Entscheidet welcer Text in der Ausgabebox steht
        switch (ausgabeVariation) {
            case "falsch":
                ausgabeText = "Die Antwort ist leider falsch." + "\r\n" + "Nun muss Kr\u00fcmelmonster Salat essen.";
                salat.style.display = "block";
                break;
            case "dumm":
                ausgabeText = "Graf Zahl verzweifelt, da dir nicht mal Ziffern gel\u00e4ufig sind?!";
                falsch.style.display = "block";
                break;
            case "richtig":
                ausgabeText = ergebnis + "Kekse ist richtig! Da freut sich Graf Zahl und erstrecht Kr\u00fcmelmonster. Omnomnom!";
                richtig.style.display = "block";
                break;
            default:
                ausgabeText = "Uuups, es ist ein Fehler unterlaufen.";
                break;
        }//schlieﬂt switch

        alert(ausgabeText);

    } //schlieﬂt promptIt
    
    
    ////////////////Erste Canvas mit sovielen Cookie wie es richtig ist
    function bild(): void { // malt cookie.canvas
        for (let i: number = 0; i < ergebnis; i++) { //
            let c: Cookie = new Cookie("black");
            alleCookies.push(c);
            console.log(c);
            c.drawCookie();
            // alleCookies[i].drawCookie();

        } //schlieﬂt For-Schleife
    }//schlieﬂt function bild


    ////////////Zweiter Canvas mit so vielen Cookies wie Nutzer sagte
    function bildZwei(): void { // malt cookie.canvas
        for (let i: number = 0; i < nutzerAntwortNumber; i++) { //
            let k: CookieZwei = new CookieZwei("black");
            alleCookie.push(k);
            console.log(k);
            k.drawCookieZwei();
            //alleCookies[i].drawCookie();

        } //schlieﬂt For-Schleife
    }//schlieﬂt function bildZwei

}//schlieﬂt namespace