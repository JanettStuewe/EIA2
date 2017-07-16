var Abschlussaufgabe_Bild;
(function (Abschlussaufgabe_Bild) {
    window.addEventListener("load", bild);
    Abschlussaufgabe_Bild.alleCookies = [];
    //a:deklaiert eine gerundete, variable Zahl bis 10
    Abschlussaufgabe_Bild.a = Math.random() * 10; // variable zahl bis 10
    Abschlussaufgabe_Bild.a = Math.round(Abschlussaufgabe_Bild.a); // rundet a auf 
    //b:deklaiert eine gerundete, variable Zahl bis 10
    Abschlussaufgabe_Bild.b = Math.random() * 10; // variable zahl bis 10
    Abschlussaufgabe_Bild.b = Math.round(Abschlussaufgabe_Bild.b);
    Abschlussaufgabe_Bild.ergebnis = Abschlussaufgabe_Bild.a + Abschlussaufgabe_Bild.b;
    Abschlussaufgabe_Bild.nutzerAntwort = parseInt;
    Abschlussaufgabe_Bild.nutzerAntwort = prompt("Grafzahl will Kr\u00fcmelmonster rechnen bei bringen und stellt zwei Teller mit Keksen hin." + "\r\n" + "Auf dem ersten Teller sind" + "  " + Abschlussaufgabe_Bild.a + "   " + "und auf dem zweiten Teller" + "  " + Abschlussaufgabe_Bild.b + "  " + "Kekse." + "\r\n" + "\r\n" + "Wie viele Kekse hat Kr\u00fcmelmonster insgesamt?" + "\r\n" + " ", Abschlussaufgabe_Bild.nutzerAntwort);
    if (isNaN(Abschlussaufgabe_Bild.nutzerAntwort)) {
        Abschlussaufgabe_Bild.ausgabeVariation = "dumm";
    }
    else if (Abschlussaufgabe_Bild.nutzerAntwort != Abschlussaufgabe_Bild.ergebnis) {
        Abschlussaufgabe_Bild.ausgabeVariation = "falsch";
    }
    else {
        Abschlussaufgabe_Bild.ausgabeVariation = "richtig";
    }
    switch (Abschlussaufgabe_Bild.ausgabeVariation) {
        case "falsch":
            Abschlussaufgabe_Bild.ausgabeText = "Die Antwort ist leider falsch." + "\r\n" + "Nun muss Kr%FCmelmonster Salat essen.";
            var salat = document.getElementById("Salat");
            salat.style.display = "block";
            break;
        case "dumm":
            Abschlussaufgabe_Bild.ausgabeText = "Grafzahl verzweifelt, da dir nicht mal Ziffern gel�ufig sind?!";
            var falsch = document.getElementById("Falsch");
            falsch.style.display = "block";
            break;
        case "richtig":
            Abschlussaufgabe_Bild.ausgabeText = Abschlussaufgabe_Bild.ergebnis + "Kekse ist richtig! Da freut sich Grazahl und erstrecht Kr%FCmelmonster. Omnomnom!";
            var richtig = document.getElementById("Richtig");
            richtig.style.display = "block";
            break;
        default:
            Abschlussaufgabe_Bild.ausgabeText = "Uuups, es ist ein Fehler unterlaufen.";
            break;
    } //schlie�t switch
    alert(Abschlussaufgabe_Bild.ausgabeText);
    function bild(_event) {
        var canvasEins;
        canvasEins = document.getElementById("richtigesErgebnis");
        Abschlussaufgabe_Bild.crc2 = canvasEins.getContext("2d");
        for (var i = 0; i < Abschlussaufgabe_Bild.nutzerAntwort; i++) {
            var c = new Abschlussaufgabe_Bild.Cookie("black");
            Abschlussaufgabe_Bild.alleCookies.push(c);
            console.log(c);
            c.drawCookie();
        } //schlie�t For-Schleife
    } //schlie�t function bild
    function bildZwei(_event) {
        var canvasZwei;
        canvasZwei = document.getElementById("nutzerErgebnis");
        Abschlussaufgabe_Bild.inhaltZwei = canvasZwei.getContext("2d"); //wie ich beim deklarieren von inhaltZwei bereits mich fragte, da bei Cookoie.ts mein Cookie mit crc2 erstellt wird, ist es �berhaupt sinnvoll ein zweiten inhalt zu deklarieren?
        for (var i = 0; i < Abschlussaufgabe_Bild.ergebnis; i++) {
            var c = new Abschlussaufgabe_Bild.Cookie("black");
            Abschlussaufgabe_Bild.alleCookies.push(c);
            console.log(c);
            c.drawCookie();
        } //schlie�t For-Schleife
    } //schlie�t function bildZwei
})(Abschlussaufgabe_Bild || (Abschlussaufgabe_Bild = {})); //schlie�t namespace
//# sourceMappingURL=Abschlussaufgabe.js.map