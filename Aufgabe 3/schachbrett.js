window.onload = function () {
    //hier deklariere ich variablen und gebe ihnen einen wert
    var brett = 63; //es werden 64 schachbrettfelder
    var reihenmaximum = 8; //es werden pro reihe max. 8 schachbrettfelder neben einander gelegt
    var k = 1; //es beginnt mit einem reiskorn
    function Schachbrett() {
        for (var i = 0; i < reihenmaximum; i++) {
            if (i % 2 == 0) {
                for (var z = 0; z < reihenmaximum; z++) {
                    if (z % 2 == 0) {
                        var elem = document.createElement("div"); //hier wird eine variable elem deklariert und ihm wird gesagt das er ein neues div erstellt im dokument
                        document.body.appendChild(elem); //hier wird das neue div in den body eingef�gt
                        elem.className = "textMittig";
                        elem.className = "black"; //hier wird dem neuen div die cssKlasse zugewiesen "black" welches es schwarz macht
                        elem.textContent = (k + ""); //hier wird dem neuen div der Textinhalt(=Anzahl der Reisk�rner auf dem Feld) gegeben
                        k = k * 2; //hier wird der Textinhalt berechnet, in dem vom vorheriegen schahbrettfeld die zahl genommen wird und verdoppelt wird
                    }
                    else {
                        var elem = document.createElement("div"); //hier wird eine variable elem deklariert und ihm wird gesagt das er ein neues div erstellt im dokument
                        document.body.appendChild(elem); //hier wird das neue div in den body eingef�gt
                        elem.className = "textMittig";
                        elem.className = "white"; //hier wird dem neuen div die cssKlasse zugewiesen "white" welches es wei� macht
                        elem.textContent = (k + ""); //hier wird dem neuen div der Textinhalt(=Anzahl der Reisk�rner auf dem Feld) gegeben
                        k = k * 2; //hier wird der Textinhalt berechnet, in dem vom vorheriegen schahbrettfeld die zahl genommen wird und verdoppelt wird
                    }
                }
            }
            else {
                for (var z = 0; z < reihenmaximum; z++) {
                    if (z % 2 == 0) {
                        var elem = document.createElement("div"); //hier wird eine variable elem deklariert und ihm wird gesagt das er ein neues div erstellt im dokument
                        document.body.appendChild(elem); //hier wird das neue div in den body eingef�gt
                        elem.className = "textMittig";
                        elem.className = "white"; //hier wird dem neuen div die cssKlasse zugewiesen "white" welches es wei� macht
                        elem.textContent = (k + ""); //hier wird dem neuen div der Textinhalt(=Anzahl der Reisk�rner auf dem Feld) gegeben
                        k = k * 2; //hier wird der Textinhalt berechnet, in dem vom vorheriegen schahbrettfeld die zahl genommen wird und verdoppelt wird
                    }
                    else {
                        var elem = document.createElement("div"); //hier wird eine variable elem deklariert und ihm wird gesagt das er ein neues div erstellt im dokument
                        document.body.appendChild(elem); //hier wird das neue div in den body eingef�gt
                        elem.className = "textMittig";
                        elem.className = "black"; //hier wird dem neuen div die cssKlasse zugewiesen "black" welches es schwarz macht
                        elem.textContent = (k + ""); //hier wird dem neuen div der Textinhalt(=Anzahl der Reisk�rner auf dem Feld) gegeben
                        k = k * 2; //hier wird der Textinhalt berechnet, in dem vom vorheriegen schahbrettfeld die zahl genommen wird und verdoppelt wird
                    }
                }
            }
        }
    }
    Schachbrett();
    var obereDivReihe = document.getElementsByTagName("div");
    // Gibt den Feldern in der ersten Reihe bei einem Klick die Klasse "farbe", wodurch sie rot werden
    for (var i = 0; i < 9; i++) {
        obereDivReihe[i].addEventListener("click", function () {
            this.classList.toggle("farbe"); //f�rbt genau dieses angeklickte div durch die cssKlasse farbe ein
            summeK(); // hier wird der funktion summeK bei aktivierung gesagt welches div angeklickt worden ist
        });
    }
    var roteDivs = document.getElementsByClassName("farbe");
    var summe = 0; // wird die summe aller angeklickten divs nachher ergeben 
    var toolTip = document.getElementById("tooltip"); // div im html mit id wo die summe der angeklickten divs nacher angezeigt wird
    function summeK() {
        if (roteDivs.length == 0) {
            toolTip.style.display = "none"; //dann ist auch das tooltip.div nicht da 
        }
        else {
            toolTip.style.display = "inline-block"; //wenn nicht 0 divs angeklickt sind, dann wird das tooltip.div angezeigt
        }
        for (var i = 0; i < roteDivs.length; i++) {
            summe += Number(roteDivs[i].textContent); //der nummerninhat der angeklickten divs summiert sich
            var hexa = summe.toString(16); //berechnet die hexadezimalzahl aus der summe der reisk�rner der angeklickten divs
            var dezi = summe.toString(); //berechnet die dezimalzahl aus der summe der reisk�rner der angeklickten divs
            toolTip.textContent = "Summe vom Reis:" + "\r\n" /* absatz */ + "Dezimal: " + dezi + "\r\n" + "Hexadezimal: " + hexa; //schreibt in das tooltip.div die ben�tigten zahlen
        }
    }
    document.addEventListener("mousemove", function (Event) {
        document.getElementById("tooltip").style.left = (Event.clientX + 10) + "px";
        document.getElementById("tooltip").style.top = (Event.clientY + 10) + "px";
    });
};
//# sourceMappingURL=schachbrett.js.map