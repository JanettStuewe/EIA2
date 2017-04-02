document.addEventListener('DOMContentLoaded', function () {
    var brett = 63;
    var zahl = 1;
    var reihenmaximum = 8;
    var k = 1;
    function Legende() {
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
    Legende();
});
//# sourceMappingURL=schachbrett.js.map