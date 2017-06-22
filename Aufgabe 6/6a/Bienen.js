var Bienenschwarm_Classes;
(function (Bienenschwarm_Classes) {
    window.addEventListener("load", Wiese);
    var imgData;
    var alleBienen = [];
    var n = 10;
    function Wiese(_event) {
        var canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        Bienenschwarm_Classes.inhalt = canvas.getContext("2d");
        for (var i_1 = 0; i_1 < n; i_1++) {
            var s = { x: 0, y: 0, size: 0, color: "#0000ff", geschwindigkeit: true }; // default-values
            s.x = Math.random() * 200; // m�gliche Schreibweise, hier sind variable Schl�ssel m�glich
            s.y = Math.random() * 200; // andere m�gliche Schreibweise mit literalem Schl�ssel
            s.size = Math.random() * 1 + 2;
            s.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
            alleBienen[i_1] = s;
            if (i_1 % 2 == 0) {
                s.geschwindigkeit = true;
            }
            else {
                s.geschwindigkeit = false;
            }
            alleBienen[i_1] = s;
        }
        //________________HINTERGRUND______________________________
        //Himmel_hellblau
        Bienenschwarm_Classes.inhalt.fillStyle = "#b0e2ff";
        Bienenschwarm_Classes.inhalt.fillRect(0, 0, canvas.width, canvas.height);
        //Berge_gro�ers
        drawBerg(850, 210, "#919191", "#919191");
        drawBergSpitze(850, 210, "#e0eeee", "#e0eeee");
        //Berge_klein
        drawKleinenBerg(500, 400, "#cccccc", "#cccccc");
        drawKleinenBergSpitze(500, 400, "#f0ffff", "#f0ffff");
        //Wiese_gr�n
        Bienenschwarm_Classes.inhalt.fillStyle = "#b3ee3a";
        Bienenschwarm_Classes.inhalt.fillRect(0, 500, canvas.width, canvas.height);
        //____________________MITTE__________________________________________
        drawBaeume(20, 460, "#a0522d", "#006400");
        drawBaeume(800, 500, "#a0522d", "#006400");
        drawBaeume(144, 551, "#a0522d", "#008000");
        drawSonne(300, 80, "yellow", "yellow");
        //____________________VORDERGRUND_____________________________________
        //Blumen
        drawBlumeTulpe(100, 590, "#006400", "red");
        drawBlumeBlue(19, 560, "blue", "white", "#006400");
        drawBlume3(50, 500, "#DF7CF3", "#722F80", "#006400");
        drawBienenkorb(930, 530);
        drawBienenkorbBlack(950, 550);
        //Blumenwiese
        for (var i = 0; i < 10; i++) {
            var flowerField = Math.floor((Math.random() * 3) + 0);
            var _x = Math.floor(Math.random() * (700 - 300)) + 300;
            var _y = Math.floor(Math.random() * (600 - 550)) + 550;
            switch (flowerField) {
                case 0:
                    drawBlumeTulpe(_x, _y - 35, "#006400", "red");
                    break;
                case 1:
                    drawBlumeBlue(_x, _y - 35, "blue", "white", "#006400");
                    break;
                case 2:
                    drawBlume3(_x, _y - 35, "#DF7CF3", "#722F80", "#006400");
                    break;
                default:
                    break;
            }
        }
        //Hintergrundbild speichern
        imgData = Bienenschwarm_Classes.inhalt.getImageData(0, 0, 1000, 600);
        //Bienenstart
        for (var i_2 = 0; i_2 < n; i_2++) {
            var s = alleBienen[i_2];
            s.x = 950;
            s.y = 550;
        }
        window.setTimeout(Animation, 26);
        canvas.addEventListener("click", drawNeuesBienchen); //wenn auf den Canvas geklickt wird, springt die Funktion Animation an, welche eine weitere Biene aus dem Bienenkorb heraus fliegen l�sst
        canvas.addEventListener("touch", drawNeuesBienchen); //wenn jmd auf den Canvas toucht, springt die Funktion Animation an, welche eine weitere Biene aus dem Bienenkorb heraus fliegen l�sst  
        drawNeuesBienchen();
        Animation();
    }
    function drawNeuesBienchen() {
        var bee = { x: 950, y: 550, size: 2, color: "red", geschwindigkeit: true };
        alleBienen.push(bee);
    }
    //Animation der Bienen
    function Animation() {
        Bienenschwarm_Classes.inhalt.putImageData(imgData, 0, 0); //Hintergrundbild aufrufen
        for (var i = 0; i < alleBienen.length; i++) {
            var s = alleBienen[i];
            if (s.geschwindigkeit == true) {
                s.x += Math.random() * 5 - 3;
                s.y += Math.random() * 4 - 2;
            }
            else {
                s.x += Math.random() * 4 - 3;
                s.y += Math.random() * 4 - 2;
                alleBienen[i] = s;
            }
            if (s.x >= 995)
                s.x = -5;
            if (s.y <= 3)
                s.y = 597;
            if (s.x < -5)
                s.x = 995;
            if (s.y > 597)
                s.y = 3;
            drawBiene(s); //Malen der Bienen an der neuen Position
        }
        window.setTimeout(Animation, 20);
    }
    /////////////////////////////GRO�ER BERG/////////////////////////////////////////////   
    function drawBerg(_x, _y, _strokeColor, _fillColor) {
        Bienenschwarm_Classes.inhalt.beginPath();
        Bienenschwarm_Classes.inhalt.fillStyle = _fillColor;
        Bienenschwarm_Classes.inhalt.strokeStyle = _strokeColor;
        Bienenschwarm_Classes.inhalt.moveTo(_x - 348, _y + 320); //punkt unten links des berges
        Bienenschwarm_Classes.inhalt.lineTo(_x + 90, _y - 200); //oberepunkt/spitze des berges
        Bienenschwarm_Classes.inhalt.lineTo(_x + 300, _y + 320); //punkt unten rechts vom berg
        Bienenschwarm_Classes.inhalt.closePath();
        Bienenschwarm_Classes.inhalt.fill();
        Bienenschwarm_Classes.inhalt.stroke();
    }
    function drawBergSpitze(_x, _y, _strokeColor, _fillColor) {
        Bienenschwarm_Classes.inhalt.beginPath();
        Bienenschwarm_Classes.inhalt.fillStyle = _fillColor;
        Bienenschwarm_Classes.inhalt.strokeStyle = _strokeColor;
        Bienenschwarm_Classes.inhalt.moveTo(_x - 80, _y + 0); //punkt unten links des berges
        Bienenschwarm_Classes.inhalt.lineTo(_x + 90, _y - 200); //oberepunkt/spitze des berges
        Bienenschwarm_Classes.inhalt.lineTo(_x + 180, _y + 0); //punkt unten rechts vom berg
        Bienenschwarm_Classes.inhalt.closePath();
        Bienenschwarm_Classes.inhalt.fill();
        Bienenschwarm_Classes.inhalt.stroke();
    }
    ////////////////////////////////////KLEINER BERG//////////////////////////////////
    function drawKleinenBerg(_x, _y, _strokeColor, _fillColor) {
        Bienenschwarm_Classes.inhalt.beginPath();
        Bienenschwarm_Classes.inhalt.fillStyle = _fillColor;
        Bienenschwarm_Classes.inhalt.strokeStyle = _strokeColor;
        Bienenschwarm_Classes.inhalt.moveTo(_x - 380, _y + 220); //punkt unten links des berges
        Bienenschwarm_Classes.inhalt.lineTo(_x + 90, _y - 200); //oberepunkt/spitze des berges
        Bienenschwarm_Classes.inhalt.lineTo(_x + 300, _y + 220); //punkt unten rechts vom berg
        Bienenschwarm_Classes.inhalt.closePath();
        Bienenschwarm_Classes.inhalt.fill();
        Bienenschwarm_Classes.inhalt.stroke();
    }
    function drawKleinenBergSpitze(_x, _y, _strokeColor, _fillColor) {
        Bienenschwarm_Classes.inhalt.beginPath();
        Bienenschwarm_Classes.inhalt.fillStyle = _fillColor;
        Bienenschwarm_Classes.inhalt.strokeStyle = _strokeColor;
        Bienenschwarm_Classes.inhalt.moveTo(_x - 60, _y - 67); //punkt unten links des berges
        Bienenschwarm_Classes.inhalt.lineTo(_x + 90, _y - 200); //oberepunkt/spitze des berges
        Bienenschwarm_Classes.inhalt.lineTo(_x + 156, _y - 67); //punkt unten rechts vom berg
        Bienenschwarm_Classes.inhalt.closePath();
        Bienenschwarm_Classes.inhalt.fill();
        Bienenschwarm_Classes.inhalt.stroke();
    }
    ////////////////////////////////B�UME/////////////////////////////////////////
    function drawBaeume(_x, _y, _strokeColor, _fillColor) {
        //Baumstamm
        Bienenschwarm_Classes.inhalt.beginPath();
        Bienenschwarm_Classes.inhalt.fillStyle = _strokeColor;
        Bienenschwarm_Classes.inhalt.fillRect(_x, _y - 15, 40, 60);
        Bienenschwarm_Classes.inhalt.closePath();
        Bienenschwarm_Classes.inhalt.stroke();
        //Baumkrone
        Bienenschwarm_Classes.inhalt.beginPath();
        Bienenschwarm_Classes.inhalt.arc(_x + 20, _y - 90, 80, 0 * Math.PI, 2 * Math.PI);
        Bienenschwarm_Classes.inhalt.arc(_x - 60, _y - 130, 50, 0 * Math.PI, 2 * Math.PI);
        Bienenschwarm_Classes.inhalt.arc(_x + 60, _y - 120, 80, 0 * Math.PI, 2 * Math.PI);
        Bienenschwarm_Classes.inhalt.arc(_x + 20, _y - 240, 80, 0 * Math.PI, 2 * Math.PI);
        Bienenschwarm_Classes.inhalt.arc(_x + 100, _y - 180, 70, 0 * Math.PI, 2 * Math.PI);
        Bienenschwarm_Classes.inhalt.arc(_x - 30, _y - 200, 80, 0 * Math.PI, 2 * Math.PI);
        Bienenschwarm_Classes.inhalt.arc(_x + 80, _y - 260, 60, 0 * Math.PI, 2 * Math.PI);
        //        inhalt.arc( _x, _y, 40, 0 * Math.PI, 2 * Math.PI);
        Bienenschwarm_Classes.inhalt.fillStyle = _fillColor;
        Bienenschwarm_Classes.inhalt.strokeStyle = _fillColor;
        Bienenschwarm_Classes.inhalt.fill();
        Bienenschwarm_Classes.inhalt.closePath();
        Bienenschwarm_Classes.inhalt.stroke();
    }
    function drawSonne(_x, _y, _strokeColor, _fillColor) {
        Bienenschwarm_Classes.inhalt.beginPath();
        Bienenschwarm_Classes.inhalt.arc(_x, _y, 40, 0 * Math.PI, 2 * Math.PI);
        Bienenschwarm_Classes.inhalt.fillStyle = _fillColor;
        Bienenschwarm_Classes.inhalt.strokeStyle = _fillColor;
        Bienenschwarm_Classes.inhalt.fill();
        Bienenschwarm_Classes.inhalt.closePath();
        Bienenschwarm_Classes.inhalt.stroke();
    }
    ////////////////////////////////BLUMEN/////////////////////////////////////////
    function drawBlumeTulpe(_x, _y, _stalkColor, _petalColor) {
        //Stiel
        Bienenschwarm_Classes.inhalt.beginPath();
        Bienenschwarm_Classes.inhalt.strokeStyle = _stalkColor;
        Bienenschwarm_Classes.inhalt.moveTo(_x, _y);
        Bienenschwarm_Classes.inhalt.lineTo(_x, _y - 32);
        Bienenschwarm_Classes.inhalt.stroke();
        Bienenschwarm_Classes.inhalt.closePath();
        //Stielblatt1
        Bienenschwarm_Classes.inhalt.beginPath();
        Bienenschwarm_Classes.inhalt.strokeStyle = _stalkColor;
        Bienenschwarm_Classes.inhalt.moveTo(_x, _y);
        Bienenschwarm_Classes.inhalt.lineTo(_x, _y - 13); //obere Punkt
        Bienenschwarm_Classes.inhalt.lineTo(_x - 7, _y - 26); //Blattspitze
        Bienenschwarm_Classes.inhalt.lineTo(_x, _y - 5); //untere Punkt
        Bienenschwarm_Classes.inhalt.stroke();
        Bienenschwarm_Classes.inhalt.closePath();
        Bienenschwarm_Classes.inhalt.fillStyle = _stalkColor;
        Bienenschwarm_Classes.inhalt.fill();
        //Stielblatt2
        Bienenschwarm_Classes.inhalt.beginPath();
        Bienenschwarm_Classes.inhalt.strokeStyle = _stalkColor;
        Bienenschwarm_Classes.inhalt.moveTo(_x, _y);
        Bienenschwarm_Classes.inhalt.lineTo(_x, _y - 12); //obere Punkt
        Bienenschwarm_Classes.inhalt.lineTo(_x + 7, _y - 20); //Blattspitze
        Bienenschwarm_Classes.inhalt.lineTo(_x, _y - 5); //untere Punkt
        Bienenschwarm_Classes.inhalt.stroke();
        Bienenschwarm_Classes.inhalt.closePath();
        Bienenschwarm_Classes.inhalt.fillStyle = _stalkColor;
        Bienenschwarm_Classes.inhalt.fill();
        //TulpenBl�tenform
        Bienenschwarm_Classes.inhalt.beginPath();
        Bienenschwarm_Classes.inhalt.strokeStyle = "white"; //umrandet die Tulpe weiss
        Bienenschwarm_Classes.inhalt.arc(_x, _y - 40, 9, 0 * Math.PI, 1 * Math.PI); //Rundung der Tulpe
        Bienenschwarm_Classes.inhalt.lineTo(_x - 10, _y - 53); //links oben der Punkt
        Bienenschwarm_Classes.inhalt.lineTo(_x - 5, _y - 45);
        Bienenschwarm_Classes.inhalt.lineTo(_x, _y - 53); //Spitze in der Mitte
        Bienenschwarm_Classes.inhalt.lineTo(_x + 5, _y - 45);
        Bienenschwarm_Classes.inhalt.lineTo(_x + 10, _y - 53); //rechts der Punkt
        Bienenschwarm_Classes.inhalt.closePath();
        Bienenschwarm_Classes.inhalt.stroke();
        Bienenschwarm_Classes.inhalt.fillStyle = _petalColor;
        Bienenschwarm_Classes.inhalt.fill();
    }
    function drawBlumeBlue(_x, _y, _fillColor, _fillColor1, _stalkColor) {
        //Stiel
        Bienenschwarm_Classes.inhalt.beginPath();
        Bienenschwarm_Classes.inhalt.strokeStyle = _stalkColor;
        Bienenschwarm_Classes.inhalt.moveTo(_x, _y);
        Bienenschwarm_Classes.inhalt.lineTo(_x, _y + 50);
        Bienenschwarm_Classes.inhalt.stroke();
        Bienenschwarm_Classes.inhalt.closePath();
        //Stielblatt
        Bienenschwarm_Classes.inhalt.beginPath();
        Bienenschwarm_Classes.inhalt.strokeStyle = _stalkColor;
        Bienenschwarm_Classes.inhalt.moveTo(_x, _y);
        Bienenschwarm_Classes.inhalt.lineTo(_x, _y + 30); //obere Punkt
        Bienenschwarm_Classes.inhalt.lineTo(_x - 10, _y + 25); //Blattspitze
        Bienenschwarm_Classes.inhalt.lineTo(_x, _y + 43); //untere Punkt
        Bienenschwarm_Classes.inhalt.stroke();
        Bienenschwarm_Classes.inhalt.closePath();
        Bienenschwarm_Classes.inhalt.fillStyle = _stalkColor;
        Bienenschwarm_Classes.inhalt.fill();
        //Bl�te
        Bienenschwarm_Classes.inhalt.beginPath();
        Bienenschwarm_Classes.inhalt.fillStyle = _fillColor;
        Bienenschwarm_Classes.inhalt.strokeStyle = "#66ccff";
        Bienenschwarm_Classes.inhalt.arc(_x, _y, 10, 0 * Math.PI, 2 * Math.PI);
        Bienenschwarm_Classes.inhalt.arc(_x - 10, _y, 7, 0 * Math.PI, 2 * Math.PI);
        Bienenschwarm_Classes.inhalt.arc(_x + 10, _y, 7, 0 * Math.PI, 2 * Math.PI);
        Bienenschwarm_Classes.inhalt.arc(_x, _y + 10, 7, 0 * Math.PI, 2 * Math.PI);
        Bienenschwarm_Classes.inhalt.arc(_x, _y - 10, 7, 0 * Math.PI, 2 * Math.PI);
        Bienenschwarm_Classes.inhalt.closePath();
        Bienenschwarm_Classes.inhalt.fill();
        Bienenschwarm_Classes.inhalt.beginPath();
        Bienenschwarm_Classes.inhalt.fillStyle = _fillColor1;
        Bienenschwarm_Classes.inhalt.arc(_x, _y, 5, 0 * Math.PI, 2 * Math.PI);
        Bienenschwarm_Classes.inhalt.fill();
        Bienenschwarm_Classes.inhalt.stroke();
        Bienenschwarm_Classes.inhalt.closePath();
    }
    function drawBlume3(_x, _y, _fillColor, _fillColor1, _stalkColor) {
        //Stiel
        Bienenschwarm_Classes.inhalt.beginPath();
        Bienenschwarm_Classes.inhalt.strokeStyle = _stalkColor;
        Bienenschwarm_Classes.inhalt.moveTo(_x, _y);
        Bienenschwarm_Classes.inhalt.lineTo(_x, _y + 50);
        Bienenschwarm_Classes.inhalt.stroke();
        Bienenschwarm_Classes.inhalt.closePath();
        //Stielblatt1
        Bienenschwarm_Classes.inhalt.beginPath();
        Bienenschwarm_Classes.inhalt.strokeStyle = _stalkColor;
        Bienenschwarm_Classes.inhalt.moveTo(_x, _y);
        Bienenschwarm_Classes.inhalt.lineTo(_x, _y + 36); //obere Punkt
        Bienenschwarm_Classes.inhalt.lineTo(_x + 10, _y + 27); //Blattspitze
        Bienenschwarm_Classes.inhalt.lineTo(_x, _y + 43); //untere Punkt
        Bienenschwarm_Classes.inhalt.stroke();
        Bienenschwarm_Classes.inhalt.closePath();
        Bienenschwarm_Classes.inhalt.fillStyle = _stalkColor;
        Bienenschwarm_Classes.inhalt.fill();
        //Stielblatt2
        Bienenschwarm_Classes.inhalt.beginPath();
        Bienenschwarm_Classes.inhalt.strokeStyle = _stalkColor;
        Bienenschwarm_Classes.inhalt.moveTo(_x, _y);
        Bienenschwarm_Classes.inhalt.lineTo(_x, _y + 36); //obere Punkt
        Bienenschwarm_Classes.inhalt.lineTo(_x - 10, _y + 25); //Blattspitze
        Bienenschwarm_Classes.inhalt.lineTo(_x, _y + 43); //untere Punkt
        Bienenschwarm_Classes.inhalt.stroke();
        Bienenschwarm_Classes.inhalt.closePath();
        Bienenschwarm_Classes.inhalt.fillStyle = _stalkColor;
        Bienenschwarm_Classes.inhalt.fill();
        //Bl�te
        Bienenschwarm_Classes.inhalt.beginPath();
        Bienenschwarm_Classes.inhalt.fillStyle = _fillColor;
        Bienenschwarm_Classes.inhalt.strokeStyle = "white";
        Bienenschwarm_Classes.inhalt.arc(_x, _y, 10, 0 * Math.PI, 2 * Math.PI);
        Bienenschwarm_Classes.inhalt.arc(_x - 10, _y, 7, 0 * Math.PI, 2 * Math.PI);
        Bienenschwarm_Classes.inhalt.arc(_x + 10, _y, 7, 0 * Math.PI, 2 * Math.PI);
        Bienenschwarm_Classes.inhalt.arc(_x, _y + 10, 7, 0 * Math.PI, 2 * Math.PI);
        Bienenschwarm_Classes.inhalt.arc(_x, _y - 10, 7, 0 * Math.PI, 2 * Math.PI);
        Bienenschwarm_Classes.inhalt.closePath();
        Bienenschwarm_Classes.inhalt.fill();
        Bienenschwarm_Classes.inhalt.beginPath();
        Bienenschwarm_Classes.inhalt.fillStyle = _fillColor1;
        Bienenschwarm_Classes.inhalt.arc(_x, _y, 5, 0 * Math.PI, 2 * Math.PI);
        Bienenschwarm_Classes.inhalt.fill();
        Bienenschwarm_Classes.inhalt.stroke();
        Bienenschwarm_Classes.inhalt.closePath();
    }
    function drawBienenkorb(_x, _y) {
        Bienenschwarm_Classes.inhalt.fillStyle = "brown";
        Bienenschwarm_Classes.inhalt.fillRect(_x, _y, 50, 50);
        Bienenschwarm_Classes.inhalt.beginPath();
        Bienenschwarm_Classes.inhalt.arc(955, 525, 25, 0 * Math.PI, 2 * Math.PI); //oberste Kreis
        Bienenschwarm_Classes.inhalt.fill();
        Bienenschwarm_Classes.inhalt.closePath();
        Bienenschwarm_Classes.inhalt.beginPath();
        Bienenschwarm_Classes.inhalt.arc(933, 550, 10, 0 * Math.PI, 2 * Math.PI); //linke Seite
        Bienenschwarm_Classes.inhalt.arc(933, 532, 10, 0 * Math.PI, 2 * Math.PI);
        Bienenschwarm_Classes.inhalt.arc(933, 567, 10, 0 * Math.PI, 2 * Math.PI);
        Bienenschwarm_Classes.inhalt.fill();
        Bienenschwarm_Classes.inhalt.closePath();
        Bienenschwarm_Classes.inhalt.beginPath();
        Bienenschwarm_Classes.inhalt.arc(978, 550, 10, 0 * Math.PI, 2 * Math.PI); //rechte Seite
        Bienenschwarm_Classes.inhalt.arc(978, 532, 10, 0 * Math.PI, 2 * Math.PI);
        Bienenschwarm_Classes.inhalt.arc(978, 567, 10, 0 * Math.PI, 2 * Math.PI);
        Bienenschwarm_Classes.inhalt.fill();
        Bienenschwarm_Classes.inhalt.closePath();
    }
    function drawBienenkorbBlack(_x, _y) {
        Bienenschwarm_Classes.inhalt.fillStyle = "black";
        Bienenschwarm_Classes.inhalt.fillRect(944, 547, 11, 11);
    }
    function drawBiene(s) {
        Bienenschwarm_Classes.inhalt.fillStyle = s.color;
        Bienenschwarm_Classes.inhalt.beginPath();
        Bienenschwarm_Classes.inhalt.arc(s.x, s.y, s.size, 0 * Math.PI, 2 * Math.PI); //oberste Kreis
        Bienenschwarm_Classes.inhalt.fill();
        Bienenschwarm_Classes.inhalt.closePath();
        Bienenschwarm_Classes.inhalt.strokeStyle = "black";
        Bienenschwarm_Classes.inhalt.moveTo(s.x + 2, s.y + 2);
        Bienenschwarm_Classes.inhalt.lineTo(s.x, s.y);
        Bienenschwarm_Classes.inhalt.stroke();
    }
})(Bienenschwarm_Classes || (Bienenschwarm_Classes = {}));
//# sourceMappingURL=Bienen.js.map