window.onload = function () {
    var brett = 63;
    var zahl = 1;
    var reihenmaximum = 8;
    var k = 1;
    function Schachbrett() {
        for (var i = 0; i < reihenmaximum; i++) {
            if (i % 2 == 0) {
                for (var z = 0; z < reihenmaximum; z++) {
                    if (z % 2 == 0) {
                        var elem = document.createElement("div");
                        document.body.appendChild(elem);
                        elem.className = "black";
                        elem.textContent = (k + "");
                        k = k * 2;
                    }
                    else {
                        var elem = document.createElement("div");
                        document.body.appendChild(elem);
                        elem.className = "white";
                        elem.textContent = (k + "");
                        k = k * 2;
                    }
                }
            }
            else {
                for (var z = 0; z < reihenmaximum; z++) {
                    if (z % 2 == 0) {
                        var elem = document.createElement("div");
                        document.body.appendChild(elem);
                        elem.className = "white";
                        elem.textContent = (k + "");
                        k = k * 2;
                    }
                    else {
                        var elem = document.createElement("div");
                        document.body.appendChild(elem);
                        elem.className = "black";
                        elem.textContent = (k + "");
                        k = k * 2;
                    }
                }
            }
        }
    }
    Schachbrett();
    var obereDivReihe = document.getElementsByTagName("div");
    for (var i = 0; i < 9; i++) {
        obereDivReihe[i].addEventListener("click", function () {
            this.classList.toggle("farbe");
            summeK();
        });
    }
    var farbeDivs = document.getElementsByClassName("farbe");
    var summe = 0;
    var toolTip = document.getElementById("tooltip");
    function summeK() {
        if (farbeDivs.length == 0) {
            toolTip.style.display = "none";
        }
        else {
            toolTip.style.display = "inline-block";
        }
        for (var i = 0; i < farbeDivs.length; i++) {
            summe += Number(farbeDivs[i].textContent);
            toolTip.textContent = "Summe der selektierten Reisk�rner:" + "\r\n" + "Dezimal: " + summe.toString() + "\r\n" + "Hexadezimal: " + summe.toString(16);
        }
    }
    document.getElementById("tooltip").addEventListener("mousemove", function (event) {
        var x = event.clientX;
        var y = event.clientY;
        toolTip.style.left = (event.x + 10) + "px";
        toolTip.style.top = (event.y + 10) + "px";
    });
};
//# sourceMappingURL=schachbrett.js.map