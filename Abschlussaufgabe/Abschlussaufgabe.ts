namespace Abschlussaufgabe_Bild {
    window.addEventListener("load", bild);

/////////////////CanvasVorbereitung
    export let crc2: CanvasRenderingContext2D; //Inhalt des Canvas welcher das richtige Ergebnis anzeigt
    export let inhaltZwei: CanvasRenderingContext2D; //Inhalt des Canvas welcher Ergebnis des Nutzers anzeigt
    export let alleCookies: Cookie[] = []; //Array wo die Cookies reingespeichert werden vom richtigen Ergebnis
    export let alleCookie: CookieZwei[] = [];//Array wo die Cookies reingespeichert werden vom Ergebnis des Nutzers

////////////////Rechenoperatoren plus Rechnung    
    //a:deklaiert eine gerundete, variable Zahl bis 10
    export let a: number = Math.random() * 10; // variable zahl bis 10
    a = Math.round(a); // rundet a auf 
    
    //b:deklaiert eine gerundete, variable Zahl bis 10
    export let b: number = Math.random() * 10; // variable zahl bis 10
    b = Math.round(b);
    
    //b und a werden zusammen addiert
    export let ergebnis: number; // richtige ergebnis von a und b
    ergebnis = a + b;
       
//////////////////AlertBox
    export let nutzerAntwort: string; 
    nutzerAntwort = prompt("Grafzahl will Kr\u00fcmelmonster rechnen bei bringen und stellt zwei Teller mit Keksen hin." + "\r\n" + "Auf dem ersten Teller sind" + "  " +  a +  "   " + "und auf dem zweiten Teller" + "  " + b + "  " + "Kekse." + "\r\n" + "\r\n" + "Wie viele Kekse hat Kr\u00fcmelmonster insgesamt?" + "\r\n" + " ", nutzerAntwort);
    let nutzerAntwortNumber = parseInt(nutzerAntwort);
    export let ausgabeVariation: string;
    export let ausgabeText: string;

   // let falsch: HTMLElement = document.getElementById("Falsch");
    //let richtig: HTMLElement = document.getElementById("Richtig");
   let salat: HTMLElement = document.getElementById("Salat"); 
    
///////////////Entscheidet wie auf welche Arten die Nutzereingabe geteilt wird
    if (isNaN(nutzerAntwortNumber)) { // wenn die NutzerAntwort keine Zahl ist
        //salat.style.display = "block";
        ausgabeVariation = "dumm";    
        
    }else if (nutzerAntwortNumber != ergebnis) {  // wenn die NutzerAntwort nicht das richtige Ergebnis ist
        ausgabeVariation = "falsch";        
        
    } else { // wenn die NutzerAntwort das richtige Ergebnis ist
        ausgabeVariation = "richtig";
        
    }

//////////////Entscheidet welcer Text in der Ausgabebox steht
    switch (ausgabeVariation) {   
        case "falsch": 
            ausgabeText = "Die Antwort ist leider falsch." + "\r\n" +  "Nun muss Kr\u00fcmelmonster Salat essen.";
            //salat.style.visibility = "visible";
            
            break;
        case "dumm":
            ausgabeText = "Grafzahl verzweifelt, da dir nicht mal Ziffern gel\u00e4ufig sind?!";
            //falsch.style.display = "block";
            break;
        case "richtig":
            ausgabeText = ergebnis + "Kekse ist richtig! Da freut sich Grazahl und erstrecht Kr\u00fcmelmonster. Omnomnom!";  
           // richtig.style.display = "block";
            break;
        default:
            ausgabeText = "Uuups, es ist ein Fehler unterlaufen.";
            break;
    }//schlieﬂt switch

    alert(ausgabeText);
 
////////////////Erste Canvas mit sovielen Cookie wie es richtig ist
    function bild(_event: Event): void { // malt cookie.canvas
        let canvasEins: HTMLCanvasElement;
        canvasEins = <HTMLCanvasElement>document.getElementById("richtigesErgebnis");
        crc2 = canvasEins.getContext("2d");

        for (var i: number = 0; i < ergebnis; i++) { //
            let c: Cookie = new Cookie("black"); 
            alleCookies.push(c);
            console.log(c);
            c.drawCookie();
            // alleCookies[i].drawCookie();

        } //schlieﬂt For-Schleife
    }//schlieﬂt function bild
    
   
////////////Zweiter Canvas mit so vielen Cookies wie Nutzer sagte
    function bildZwei (_event: Event): void { // malt cookie.canvas
        let canvasZwei: HTMLCanvasElement;
        canvasZwei = <HTMLCanvasElement>document.getElementById("nutzerErgebnis");
        inhaltZwei = canvasZwei.getContext("2d"); 

        for (var i: number = 0; i < nutzerAntwortNumber; i++) { //
            let k: CookieZwei = new CookieZwei("black");
            alleCookie.push(k);
            console.log(k);
            k.drawCookieZwei();
            //alleCookies[i].drawCookie();

        } //schlieﬂt For-Schleife
    }//schlieﬂt function bildZwei

}//schlieﬂt namespace