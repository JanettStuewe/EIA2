var Abschlussaufgabe_Bild;
(function (Abschlussaufgabe_Bild) {
    window.addEventListener("load", bild);
    Abschlussaufgabe_Bild.alleCookies = []; //Array wo die Cookies reingespeichert werden vom richtigen Ergebnis
    Abschlussaufgabe_Bild.alleCookie = []; //Array wo die Cookies reingespeichert werden vom Ergebnis des Nutzers
    ////////////////Rechenoperatoren plus Rechnung    
    //a:deklaiert eine gerundete, variable Zahl bis 10
    Abschlussaufgabe_Bild.a = Math.random() * 10; // variable zahl bis 10
    Abschlussaufgabe_Bild.a = Math.round(Abschlussaufgabe_Bild.a); // rundet a auf 
    //b:deklaiert eine gerundete, variable Zahl bis 10
    Abschlussaufgabe_Bild.b = Math.random() * 10; // variable zahl bis 10
    Abschlussaufgabe_Bild.b = Math.round(Abschlussaufgabe_Bild.b);
    Abschlussaufgabe_Bild.ergebnis = Abschlussaufgabe_Bild.a + Abschlussaufgabe_Bild.b;
    Abschlussaufgabe_Bild.nutzerAntwort = prompt("Grafzahl will Kr\u00fcmelmonster rechnen bei bringen und stellt zwei Teller mit Keksen hin." + "\r\n" + "Auf dem ersten Teller sind" + "  " + Abschlussaufgabe_Bild.a + "   " + "und auf dem zweiten Teller" + "  " + Abschlussaufgabe_Bild.b + "  " + "Kekse." + "\r\n" + "\r\n" + "Wie viele Kekse hat Kr\u00fcmelmonster insgesamt?" + "\r\n" + " ", Abschlussaufgabe_Bild.nutzerAntwort);
    var nutzerAntwortNumber = parseInt(Abschlussaufgabe_Bild.nutzerAntwort);
    // let falsch: HTMLElement = document.getElementById("Falsch");
    //let richtig: HTMLElement = document.getElementById("Richtig");
    var salat = document.getElementById("Salat");
    ///////////////Entscheidet wie auf welche Arten die Nutzereingabe geteilt wird
    if (isNaN(nutzerAntwortNumber)) {
        Abschlussaufgabe_Bild.ausgabeVariation = "dumm";
    }
    else if (nutzerAntwortNumber != Abschlussaufgabe_Bild.ergebnis) {
        //salat.style.visibility = "visible";
        Abschlussaufgabe_Bild.ausgabeVariation = "falsch";
    }
    else {
        Abschlussaufgabe_Bild.ausgabeVariation = "richtig";
    }
    //////////////Entscheidet welcer Text in der Ausgabebox steht
    switch (Abschlussaufgabe_Bild.ausgabeVariation) {
        case "falsch":
            Abschlussaufgabe_Bild.ausgabeText = "Die Antwort ist leider falsch." + "\r\n" + "Nun muss Kr\u00fcmelmonster Salat essen.";
            salat.style.display = "block";
            break;
        case "dumm":
            Abschlussaufgabe_Bild.ausgabeText = "Grafzahl verzweifelt, da dir nicht mal Ziffern gel\u00e4ufig sind?!";
            //falsch.style.display = "block";
            break;
        case "richtig":
            Abschlussaufgabe_Bild.ausgabeText = Abschlussaufgabe_Bild.ergebnis + "Kekse ist richtig! Da freut sich Grazahl und erstrecht Kr\u00fcmelmonster. Omnomnom!";
            // richtig.style.display = "block";
            break;
        default:
            Abschlussaufgabe_Bild.ausgabeText = "Uuups, es ist ein Fehler unterlaufen.";
            break;
    } //schlie�t switch
    alert(Abschlussaufgabe_Bild.ausgabeText);
    ////////////////Erste Canvas mit sovielen Cookie wie es richtig ist
    function bild(_event) {
        var canvasEins;
        canvasEins = document.getElementById("richtigesErgebnis");
        Abschlussaufgabe_Bild.crc2 = canvasEins.getContext("2d");
        for (var i = 0; i < Abschlussaufgabe_Bild.ergebnis; i++) {
            var c = new Abschlussaufgabe_Bild.Cookie("black");
            Abschlussaufgabe_Bild.alleCookies.push(c);
            console.log(c);
            c.drawCookie();
        } //schlie�t For-Schleife
    } //schlie�t function bild
    ////////////Zweiter Canvas mit so vielen Cookies wie Nutzer sagte
    function bildZwei(_event) {
        var canvasZwei;
        canvasZwei = document.getElementById("nutzerErgebnis");
        Abschlussaufgabe_Bild.inhaltZwei = canvasZwei.getContext("2d");
        for (var i = 0; i < nutzerAntwortNumber; i++) {
            var k = new Abschlussaufgabe_Bild.CookieZwei("black");
            Abschlussaufgabe_Bild.alleCookie.push(k);
            console.log(k);
            k.drawCookieZwei();
        } //schlie�t For-Schleife
    } //schlie�t function bildZwei
})(Abschlussaufgabe_Bild || (Abschlussaufgabe_Bild = {})); //schlie�t namespace
//# sourceMappingURL=Abschlussaufgabe.js.map