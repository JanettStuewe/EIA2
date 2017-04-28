var Bienenschwarm;
(function (Bienenschwarm) {
    window.addEventListener("load", Wiese);
    var crc2;
    var imgData;
    var x = [];
    var y = [];
    var n = 10;
    function Wiese(_event) {
        var canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        //________________HINTERGRUND______________________________
        //Himmel_hellblau
        crc2.fillStyle = "#b0e2ff";
        crc2.fillRect(0, 0, canvas.width, canvas.height);
        //Berge_gro�ers
        drawBerg(850, 210, "#919191", "#919191");
        drawBergSpitze(850, 210, "#e0eeee", "#e0eeee");
        //Berge_klein
        drawKleinenBerg(500, 400, "#cccccc", "#cccccc");
        drawKleinenBergSpitze(500, 400, "#f0ffff", "#f0ffff");
        //Wiese_gr�n
        crc2.fillStyle = "#b3ee3a";
        crc2.fillRect(0, 500, canvas.width, canvas.height);
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
        //gemaltes Bild abspeichern
        imgData = crc2.getImageData(0, 0, 1000, 600);
        //Startposition f�r n Bienen in Array abspeichern
        for (var i_1 = 0; i_1 < n; i_1++) {
            x[i_1] = 950;
            y[i_1] = 550;
        }
        window.setTimeout(Animation, 26);
        canvas.addEventListener("click", neuesBienchen);
        canvas.addEventListener("touch", neuesBienchen);
        //Funktion um eine neue Biene nach Klick zu starten, neue x- und y-Position ins Array hinzuf�gen
        function neuesBienchen() {
            x.push(950);
            y.push(550);
        }
        //Funktion f�r die Animation der Bienen
        function Animation() {
            //gespeichertes Hintergrundbild erneut aufrufen
            crc2.putImageData(imgData, 0, 0);
            //Position der Bienen durch zwei Zufallszahlen bestimmen
            for (var i_2 = 0; i_2 < x.length; i_2++) {
                x[i_2] += Math.random() * 1 - 1;
                y[i_2] += Math.random() * 2 - 1;
                //if-Abfragen um die Bienen beim erreichen eines Bildrandes auf der anderen Seite wieder erscheinen zu lassen
                if (x[i_2] >= 995)
                    x[i_2] = -5;
                if (y[i_2] <= 3)
                    y[i_2] = 597;
                if (x[i_2] < -5)
                    x[i_2] = 995;
                if (y[i_2] > 597)
                    y[i_2] = 3;
                //Malen der Bienen an der neuen Position
                drawBiene(x[i_2], y[i_2]);
            }
            window.setTimeout(Animation, 20);
        }
    }
    /////////////////////////////GRO�ER BERG/////////////////////////////////////////////   
    function drawBerg(_x, _y, _strokeColor, _fillColor) {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(_x - 348, _y + 320); //punkt unten links des berges
        crc2.lineTo(_x + 90, _y - 200); //oberepunkt/spitze des berges
        crc2.lineTo(_x + 300, _y + 320); //punkt unten rechts vom berg
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }
    function drawBergSpitze(_x, _y, _strokeColor, _fillColor) {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(_x - 80, _y + 0); //punkt unten links des berges
        crc2.lineTo(_x + 90, _y - 200); //oberepunkt/spitze des berges
        crc2.lineTo(_x + 180, _y + 0); //punkt unten rechts vom berg
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }
    ////////////////////////////////////KLEINER BERG//////////////////////////////////
    function drawKleinenBerg(_x, _y, _strokeColor, _fillColor) {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(_x - 380, _y + 220); //punkt unten links des berges
        crc2.lineTo(_x + 90, _y - 200); //oberepunkt/spitze des berges
        crc2.lineTo(_x + 300, _y + 220); //punkt unten rechts vom berg
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }
    function drawKleinenBergSpitze(_x, _y, _strokeColor, _fillColor) {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(_x - 60, _y - 67); //punkt unten links des berges
        crc2.lineTo(_x + 90, _y - 200); //oberepunkt/spitze des berges
        crc2.lineTo(_x + 156, _y - 67); //punkt unten rechts vom berg
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }
    ////////////////////////////////B�UME/////////////////////////////////////////
    function drawBaeume(_x, _y, _strokeColor, _fillColor) {
        //Baumstamm
        crc2.beginPath();
        crc2.fillStyle = _strokeColor;
        crc2.fillRect(_x, _y - 15, 40, 60);
        crc2.closePath();
        crc2.stroke();
        //Baumkrone
        crc2.beginPath();
        crc2.arc(_x + 20, _y - 90, 80, 0 * Math.PI, 2 * Math.PI);
        crc2.arc(_x - 60, _y - 130, 50, 0 * Math.PI, 2 * Math.PI);
        crc2.arc(_x + 60, _y - 120, 80, 0 * Math.PI, 2 * Math.PI);
        crc2.arc(_x + 20, _y - 240, 80, 0 * Math.PI, 2 * Math.PI);
        crc2.arc(_x + 100, _y - 180, 70, 0 * Math.PI, 2 * Math.PI);
        crc2.arc(_x - 30, _y - 200, 80, 0 * Math.PI, 2 * Math.PI);
        crc2.arc(_x + 80, _y - 260, 60, 0 * Math.PI, 2 * Math.PI);
        //        crc2.arc( _x, _y, 40, 0 * Math.PI, 2 * Math.PI);
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _fillColor;
        crc2.fill();
        crc2.closePath();
        crc2.stroke();
    }
    function drawSonne(_x, _y, _strokeColor, _fillColor) {
        crc2.beginPath();
        crc2.arc(_x, _y, 40, 0 * Math.PI, 2 * Math.PI);
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _fillColor;
        crc2.fill();
        crc2.closePath();
        crc2.stroke();
    }
    ////////////////////////////////BLUMEN/////////////////////////////////////////
    function drawBlumeTulpe(_x, _y, _stalkColor, _petalColor) {
        //Stiel
        crc2.beginPath();
        crc2.strokeStyle = _stalkColor;
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x, _y - 32);
        crc2.stroke();
        crc2.closePath();
        //Stielblatt1
        crc2.beginPath();
        crc2.strokeStyle = _stalkColor;
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x, _y - 13); //obere Punkt
        crc2.lineTo(_x - 7, _y - 26); //Blattspitze
        crc2.lineTo(_x, _y - 5); //untere Punkt
        crc2.stroke();
        crc2.closePath();
        crc2.fillStyle = _stalkColor;
        crc2.fill();
        //Stielblatt2
        crc2.beginPath();
        crc2.strokeStyle = _stalkColor;
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x, _y - 12); //obere Punkt
        crc2.lineTo(_x + 7, _y - 20); //Blattspitze
        crc2.lineTo(_x, _y - 5); //untere Punkt
        crc2.stroke();
        crc2.closePath();
        crc2.fillStyle = _stalkColor;
        crc2.fill();
        //TulpenBl�tenform
        crc2.beginPath();
        crc2.strokeStyle = "white"; //umrandet die Tulpe weiss
        crc2.arc(_x, _y - 40, 9, 0 * Math.PI, 1 * Math.PI); //Rundung der Tulpe
        crc2.lineTo(_x - 10, _y - 53); //links oben der Punkt
        crc2.lineTo(_x - 5, _y - 45);
        crc2.lineTo(_x, _y - 53); //Spitze in der Mitte
        crc2.lineTo(_x + 5, _y - 45);
        crc2.lineTo(_x + 10, _y - 53); //rechts der Punkt
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = _petalColor;
        crc2.fill();
    }
    function drawBlumeBlue(_x, _y, _fillColor, _fillColor1, _stalkColor) {
        //Stiel
        crc2.beginPath();
        crc2.strokeStyle = _stalkColor;
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x, _y + 50);
        crc2.stroke();
        crc2.closePath();
        //Stielblatt
        crc2.beginPath();
        crc2.strokeStyle = _stalkColor;
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x, _y + 30); //obere Punkt
        crc2.lineTo(_x - 10, _y + 25); //Blattspitze
        crc2.lineTo(_x, _y + 43); //untere Punkt
        crc2.stroke();
        crc2.closePath();
        crc2.fillStyle = _stalkColor;
        crc2.fill();
        //Bl�te
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = "#66ccff";
        crc2.arc(_x, _y, 10, 0 * Math.PI, 2 * Math.PI);
        crc2.arc(_x - 10, _y, 7, 0 * Math.PI, 2 * Math.PI);
        crc2.arc(_x + 10, _y, 7, 0 * Math.PI, 2 * Math.PI);
        crc2.arc(_x, _y + 10, 7, 0 * Math.PI, 2 * Math.PI);
        crc2.arc(_x, _y - 10, 7, 0 * Math.PI, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = _fillColor1;
        crc2.arc(_x, _y, 5, 0 * Math.PI, 2 * Math.PI);
        crc2.fill();
        crc2.stroke();
        crc2.closePath();
    }
    function drawBlume3(_x, _y, _fillColor, _fillColor1, _stalkColor) {
        //Stiel
        crc2.beginPath();
        crc2.strokeStyle = _stalkColor;
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x, _y + 50);
        crc2.stroke();
        crc2.closePath();
        //Stielblatt1
        crc2.beginPath();
        crc2.strokeStyle = _stalkColor;
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x, _y + 36); //obere Punkt
        crc2.lineTo(_x + 10, _y + 27); //Blattspitze
        crc2.lineTo(_x, _y + 43); //untere Punkt
        crc2.stroke();
        crc2.closePath();
        crc2.fillStyle = _stalkColor;
        crc2.fill();
        //Stielblatt2
        crc2.beginPath();
        crc2.strokeStyle = _stalkColor;
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x, _y + 36); //obere Punkt
        crc2.lineTo(_x - 10, _y + 25); //Blattspitze
        crc2.lineTo(_x, _y + 43); //untere Punkt
        crc2.stroke();
        crc2.closePath();
        crc2.fillStyle = _stalkColor;
        crc2.fill();
        //Bl�te
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = "white";
        crc2.arc(_x, _y, 10, 0 * Math.PI, 2 * Math.PI);
        crc2.arc(_x - 10, _y, 7, 0 * Math.PI, 2 * Math.PI);
        crc2.arc(_x + 10, _y, 7, 0 * Math.PI, 2 * Math.PI);
        crc2.arc(_x, _y + 10, 7, 0 * Math.PI, 2 * Math.PI);
        crc2.arc(_x, _y - 10, 7, 0 * Math.PI, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = _fillColor1;
        crc2.arc(_x, _y, 5, 0 * Math.PI, 2 * Math.PI);
        crc2.fill();
        crc2.stroke();
        crc2.closePath();
    }
    function drawBienenkorb(_x, _y) {
        crc2.fillStyle = "brown";
        crc2.fillRect(_x, _y, 50, 50);
        crc2.beginPath();
        crc2.arc(955, 525, 25, 0 * Math.PI, 2 * Math.PI); //oberste Kreis
        crc2.fill();
        crc2.closePath();
        crc2.beginPath();
        crc2.arc(933, 550, 10, 0 * Math.PI, 2 * Math.PI); //linke Seite
        crc2.arc(933, 532, 10, 0 * Math.PI, 2 * Math.PI);
        crc2.arc(933, 567, 10, 0 * Math.PI, 2 * Math.PI);
        crc2.fill();
        crc2.closePath();
        crc2.beginPath();
        crc2.arc(978, 550, 10, 0 * Math.PI, 2 * Math.PI); //rechte Seite
        crc2.arc(978, 532, 10, 0 * Math.PI, 2 * Math.PI);
        crc2.arc(978, 567, 10, 0 * Math.PI, 2 * Math.PI);
        crc2.fill();
        crc2.closePath();
    }
    function drawBienenkorbBlack(_x, _y) {
        crc2.beginPath();
        crc2.fillStyle = "black";
        crc2.fillRect(550, 950, 130, 130);
        crc2.fill();
        crc2.closePath();
    }
    function drawBiene(_x, _y) {
        crc2.fillStyle = "yellow";
        crc2.fillRect(_x, _y, 10, 10);
    }
})(Bienenschwarm || (Bienenschwarm = {}));
//# sourceMappingURL=Bienen.js.map