var Abschlussaufgabe_Bild;
(function (Abschlussaufgabe_Bild) {
    window.addEventListener("load", bild);
    var crc2;
    function bild(_event) {
        var canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        //________________HINTERGRUND______________________________
        drawCookie(50, 50, "black");
    }
    var name = "";
    var alter = "";
    var eingabe = "";
    var text = "";
    name = prompt("Rechne die Aufgabebe aus!", name);
    alter = prompt("Bitte geben Sie Ihr Alter ein!", alter);
    name;
    if (isNaN(name)) {
        eingabe = "dumm";
    }
    else if (name < 18) {
        eingabe = "jung";
    }
    else {
        eingabe = "ok";
    }
    switch (eingabe) {
        case "jung":
            text = "Du bist leider zu jung!";
            break;
        case "dumm":
            text = "Bitte die Zahl als Ziffer eintragen!";
            break;
        default:
            text = "Hallo, " + name;
            break;
    }
    alert(text);
    function drawCookie(_x, _y, _schokostueckchen) {
        crc2.beginPath();
        crc2.arc(_x, _y, 50, 0 * Math.PI, 2 * Math.PI);
        crc2.fillStyle = "brown";
        crc2.strokeStyle = "brown";
        crc2.fill();
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = _schokostueckchen;
        crc2.arc(_x + 15, _y + 5, 10, 0 * Math.PI, 2 * Math.PI);
        crc2.fill();
        crc2.stroke();
        crc2.closePath();
        crc2.beginPath();
        crc2.fillStyle = _schokostueckchen;
        crc2.arc(_x - 10, _y - 10, 10, 0 * Math.PI, 2 * Math.PI);
        crc2.fill();
        crc2.stroke();
        crc2.closePath();
        crc2.beginPath();
        crc2.fillStyle = _schokostueckchen;
        crc2.arc(_x - 20, _y - 35, 10, 0 * Math.PI, 2 * Math.PI);
        crc2.fill();
        crc2.stroke();
        crc2.closePath();
        crc2.beginPath();
        crc2.fillStyle = _schokostueckchen;
        crc2.arc(_x - 43, _y - 5, 10, 0 * Math.PI, 2 * Math.PI);
        crc2.fill();
        crc2.stroke();
        crc2.closePath();
        crc2.beginPath();
        crc2.fillStyle = _schokostueckchen;
        crc2.arc(_x + 20, _y + 30, 10, 0 * Math.PI, 2 * Math.PI);
        crc2.fill();
        crc2.stroke();
        crc2.closePath();
        crc2.beginPath();
        crc2.fillStyle = _schokostueckchen;
        crc2.arc(_x + 40, _y + 10, 10, 0 * Math.PI, 2 * Math.PI);
        crc2.fill();
        crc2.stroke();
        crc2.closePath();
        crc2.beginPath();
        crc2.fillStyle = _schokostueckchen;
        crc2.arc(_x + 30, _y - 30, 10, 0 * Math.PI, 2 * Math.PI);
        crc2.fill();
        crc2.stroke();
        crc2.closePath();
        crc2.beginPath();
        crc2.fillStyle = _schokostueckchen;
        crc2.arc(_x - 20, _y + 35, 10, 0 * Math.PI, 2 * Math.PI);
        crc2.fill();
        crc2.stroke();
        crc2.closePath();
    }
})(Abschlussaufgabe_Bild || (Abschlussaufgabe_Bild = {}));
//# sourceMappingURL=old.js.map