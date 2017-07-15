var Aufgabe_4_Bild;
(function (Aufgabe_4_Bild) {
    window.addEventListener("load", init);
    var crc2;
    function init(_event) {
        var canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        //________________HINTERGRUND______________________________
        //Himmel_hellblau
        crc2.fillStyle = "blue";
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
        //Gras_gr�n
        //drawGras(500, 400, "#838b8b", "#838b8b");
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
})(Aufgabe_4_Bild || (Aufgabe_4_Bild = {}));
//DRAW A LINE
//        crc2.moveTo(0, 0);
//        crc2.lineTo(canvas.width, canvas.height);
//        crc2.stroke(); 
//# sourceMappingURL=Wiese.js.map