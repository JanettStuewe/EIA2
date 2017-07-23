var Abschlussaufgabe_Bild;
(function (Abschlussaufgabe_Bild) {
    var nutzerAntwortNumber;
    //////////////Bildvariablen
    var salat;
    var falsch;
    var richtig;
    window.addEventListener("load", init);
    function init() {
        Abschlussaufgabe_Bild.a = Math.random() * 10; // variable zahl bis 10
        Abschlussaufgabe_Bild.a = Math.round(Abschlussaufgabe_Bild.a);
        Abschlussaufgabe_Bild.b = Math.random() * 10; // variable zahl bis 10
        Abschlussaufgabe_Bild.b = Math.round(Abschlussaufgabe_Bild.b);
        Abschlussaufgabe_Bild.ergebnis = Abschlussaufgabe_Bild.a + Abschlussaufgabe_Bild.b;
        Abschlussaufgabe_Bild.nutzerAntwort = prompt("Graf Zahl will Kr\u00fcmelmonster rechnen beibringen und stellt zwei Teller mit Keksen hin." + "\r\n" + "Auf dem ersten Teller sind" + "  " + Abschlussaufgabe_Bild.a + "   " + "und auf dem zweiten Teller" + "  " + Abschlussaufgabe_Bild.b + "  " + "Kekse." + "\r\n" + "\r\n" + "Wie viele Kekse hat Kr\u00fcmelmonster insgesamt?" + "\r\n" + " ", Abschlussaufgabe_Bild.nutzerAntwort);
        nutzerAntwortNumber = parseInt(Abschlussaufgabe_Bild.nutzerAntwort);
        salat = document.getElementById("Salat");
        falsch = document.getElementById("Falsch");
        richtig = document.getElementById("Richtig");
        Abschlussaufgabe_Bild.canvasEins = document.getElementById("richtigesErgebnis");
        Abschlussaufgabe_Bild.crc2 = Abschlussaufgabe_Bild.canvasEins.getContext("2d");
        Abschlussaufgabe_Bild.canvasZwei = document.getElementById("nutzerErgebnis");
        Abschlussaufgabe_Bild.inhaltZwei = Abschlussaufgabe_Bild.canvasZwei.getContext("2d");
        Abschlussaufgabe_Bild.alleCookies = []; //Array wo die Cookies reingespeichert werden vom richtigen Ergebnis
        Abschlussaufgabe_Bild.alleCookie = []; //Array wo die Cookies reingespeichert werden vom Ergebnis des Nutzers
        promptIt();
        bild();
        bildZwei();
    }
    //////////////////AlertBox
    function promptIt() {
        var ausgabeVariation;
        var ausgabeText;
        ///////////////Entscheidet wie auf welche Arten die Nutzereingabe geteilt wird
        if (isNaN(nutzerAntwortNumber)) {
            ausgabeVariation = "dumm";
        }
        else if (nutzerAntwortNumber != Abschlussaufgabe_Bild.ergebnis) {
            //salat.style.visibility = "visible";
            ausgabeVariation = "falsch";
        }
        else {
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
                ausgabeText = Abschlussaufgabe_Bild.ergebnis + "Kekse ist richtig! Da freut sich Graf Zahl und erstrecht Kr\u00fcmelmonster. Omnomnom!";
                richtig.style.display = "block";
                break;
            default:
                ausgabeText = "Uuups, es ist ein Fehler unterlaufen.";
                break;
        } //schlie�t switch
        alert(ausgabeText);
    } //schlie�t promptIt
    ////////////////Erste Canvas mit sovielen Cookie wie es richtig ist
    function bild() {
        for (var i = 0; i < Abschlussaufgabe_Bild.ergebnis; i++) {
            var c = new Abschlussaufgabe_Bild.Cookie("black");
            Abschlussaufgabe_Bild.alleCookies.push(c);
            console.log(c);
            c.drawCookie();
        } //schlie�t For-Schleife
    } //schlie�t function bild
    ////////////Zweiter Canvas mit so vielen Cookies wie Nutzer sagte
    function bildZwei() {
        for (var i = 0; i < nutzerAntwortNumber; i++) {
            var k = new Abschlussaufgabe_Bild.CookieZwei("black");
            Abschlussaufgabe_Bild.alleCookie.push(k);
            console.log(k);
            k.drawCookieZwei();
        } //schlie�t For-Schleife
    } //schlie�t function bildZwei
})(Abschlussaufgabe_Bild || (Abschlussaufgabe_Bild = {})); //schlie�t namespace
//# sourceMappingURL=Abschlussaufgabe.js.map