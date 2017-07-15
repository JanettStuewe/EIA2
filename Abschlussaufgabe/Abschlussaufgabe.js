var Abschlussaufgabe_Bild;
(function (Abschlussaufgabe_Bild) {
    window.addEventListener("load", bild);
    Abschlussaufgabe_Bild.alleCookies = [];
    //a:deklaiert eine gerundete, variable Zahl bis 10, mit Typ number
    Abschlussaufgabe_Bild.a = Math.random() * 10; // variable zahl bis 10
    Abschlussaufgabe_Bild.aGerundet = Abschlussaufgabe_Bild.a.toFixed(0); // rundet a auf 0 stellen nach dem komma
    Abschlussaufgabe_Bild.a2 = parseInt(Abschlussaufgabe_Bild.aGerundet); //aGerundet in number wandeln
    //b:deklaiert eine gerundete, variable Zahl bis 10, mit Typ number
    Abschlussaufgabe_Bild.b = Math.random() * 10; // variable zahl bis 10
    Abschlussaufgabe_Bild.bGerundet = Abschlussaufgabe_Bild.b.toFixed(0); // rundet b auf 0 stellen nach dem komma
    Abschlussaufgabe_Bild.b2 = parseInt(Abschlussaufgabe_Bild.bGerundet);
    Abschlussaufgabe_Bild.ergebnis = Abschlussaufgabe_Bild.a2 + Abschlussaufgabe_Bild.b2;
    Abschlussaufgabe_Bild.nutzerAntwort = parseInt;
    Abschlussaufgabe_Bild.nutzerAntwort = prompt("Rechne die Aufgabebe aus!" + "\r\n" + Abschlussaufgabe_Bild.aGerundet + "+" + Abschlussaufgabe_Bild.bGerundet, Abschlussaufgabe_Bild.nutzerAntwort);
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
            Abschlussaufgabe_Bild.ausgabeText = "Die Antwort ist leider falsch." + "\r\n" + "Z%E4hle die Cookies f�r die richtige L%F6sung.";
            break;
        case "dumm":
            Abschlussaufgabe_Bild.ausgabeText = "Bitte die Zahl als Ziffer eintragen!";
            break;
        case "richtig":
            Abschlussaufgabe_Bild.ausgabeText = "Super, deine Antwort war richtig!";
            break;
        default:
            Abschlussaufgabe_Bild.ausgabeText = "Uuups, es ist ein Fehler unterlaufen.";
            break;
    }
    alert(Abschlussaufgabe_Bild.ausgabeText);
    function bild(_event) {
        var canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        Abschlussaufgabe_Bild.crc2 = canvas.getContext("2d");
        for (var i = 0; i < Abschlussaufgabe_Bild.ergebnis; i++) {
            var c = new Abschlussaufgabe_Bild.Cookie(150, 150, "black");
            Abschlussaufgabe_Bild.alleCookies.push(c);
            console.log(c);
            c.drawCookie(c);
        } //schlie�t For-Schleife
    } //schlie�t function bild
})(Abschlussaufgabe_Bild || (Abschlussaufgabe_Bild = {})); //schlie�t namespace
//# sourceMappingURL=Abschlussaufgabe.js.map