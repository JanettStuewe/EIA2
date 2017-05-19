var Aufgabe7_Wiese;
(function (Aufgabe7_Wiese) {
    window.addEventListener("load", Wiese);
    var imgData;
    Aufgabe7_Wiese.alleBienen = [];
    var alleBlumen = []; //fertiege blumen abgespeichert
    Aufgabe7_Wiese.sorts = ["tulpe", "blue", "3"]; //Liste aller verf�gbaren Blumenarten
    var n = 10;
    function Wiese(_event) {
        var canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        Aufgabe7_Wiese.crc2 = canvas.getContext("2d");
        for (var i_1 = 0; i_1 < n; i_1++) {
            var s = new Aufgabe7_Wiese.Bee(0, 0, (i_1 % 2) == 0); // default-values
            Aufgabe7_Wiese.alleBienen[i_1] = s;
        }
        //________________HINTERGRUND______________________________
        //Himmel_hellblau
        Aufgabe7_Wiese.crc2.fillStyle = "#b0e2ff";
        Aufgabe7_Wiese.crc2.fillRect(0, 0, canvas.width, canvas.height);
        //Berge_gro�ers
        drawBerg(850, 210, "#919191", "#919191");
        drawBergSpitze(850, 210, "#e0eeee", "#e0eeee");
        //Berge_klein
        drawKleinenBerg(500, 400, "#cccccc", "#cccccc");
        drawKleinenBergSpitze(500, 400, "#f0ffff", "#f0ffff");
        //Wiese_gr�n
        Aufgabe7_Wiese.crc2.fillStyle = "#b3ee3a";
        Aufgabe7_Wiese.crc2.fillRect(0, 500, canvas.width, canvas.height);
        //____________________MITTE__________________________________________
        drawBaeume(20, 460, "#a0522d", "#006400");
        drawBaeume(800, 500, "#a0522d", "#006400");
        drawBaeume(144, 551, "#a0522d", "#008000");
        drawSonne(300, 80, "yellow", "yellow");
        //____________________VORDERGRUND_____________________________________
        var f = new Aufgabe7_Wiese.Blume(100, 590, "Tulpe");
        f.draw();
        var f1 = new Aufgabe7_Wiese.Blume(19, 560, "Blue");
        f1.draw();
        var f2 = new Aufgabe7_Wiese.Blume(50, 500, "3");
        f2.draw();
        drawBienenkorb(930, 530);
        drawBienenkorbBlack(950, 550);
        //Blumenwiese
        for (var i = 0; i < 10; i++) {
            var fr = new Aufgabe7_Wiese.Blume(0, 0, "");
            fr.setRandomFlower();
            alleBlumen[i] = fr;
            console.log(fr);
        }
        //Hintergrundbild speichern
        imgData = Aufgabe7_Wiese.crc2.getImageData(0, 0, 1000, 600);
        //Bienenstart
        for (var i_2 = 0; i_2 < n; i_2++) {
            var s = Aufgabe7_Wiese.alleBienen[i_2];
            s.start();
        }
        canvas.addEventListener("click", drawNeuesBienchen); //wenn auf den Canvas geklickt wird, springt die Funktion Animation an, welche eine weitere Biene aus dem Bienenkorb heraus fliegen l�sst
        canvas.addEventListener("touch", drawNeuesBienchen); //wenn jmd auf den Canvas toucht, springt die Funktion Animation an, welche eine weitere Biene aus dem Bienenkorb heraus fliegen l�sst  
        drawNeuesBienchen();
        Animation();
    }
    function drawNeuesBienchen() {
        var bee = new Aufgabe7_Wiese.Bee(0, 0, (Math.round(Math.random())) == 1);
        bee.start();
        Aufgabe7_Wiese.alleBienen.push(bee);
    }
    //Animation der Bienen
    function Animation() {
        Aufgabe7_Wiese.crc2.putImageData(imgData, 0, 0); //Hintergrundbild aufrufen
        for (var i = 0; i < Aufgabe7_Wiese.alleBienen.length; i++) {
            var s = (Aufgabe7_Wiese.alleBienen[i]);
            s.setRandomSpeed();
            s.overflow();
            s.drawBiene(s); //Malen der Bienen an der neuen Position
        }
        window.setTimeout(Animation, 20);
    }
    /////////////////////////////GRO�ER BERG/////////////////////////////////////////////   
    function drawBerg(_x, _y, _strokeColor, _fillColor) {
        Aufgabe7_Wiese.crc2.beginPath();
        Aufgabe7_Wiese.crc2.fillStyle = _fillColor;
        Aufgabe7_Wiese.crc2.strokeStyle = _strokeColor;
        Aufgabe7_Wiese.crc2.moveTo(_x - 348, _y + 320); //punkt unten links des berges
        Aufgabe7_Wiese.crc2.lineTo(_x + 90, _y - 200); //oberepunkt/spitze des berges
        Aufgabe7_Wiese.crc2.lineTo(_x + 300, _y + 320); //punkt unten rechts vom berg
        Aufgabe7_Wiese.crc2.closePath();
        Aufgabe7_Wiese.crc2.fill();
        Aufgabe7_Wiese.crc2.stroke();
    }
    function drawBergSpitze(_x, _y, _strokeColor, _fillColor) {
        Aufgabe7_Wiese.crc2.beginPath();
        Aufgabe7_Wiese.crc2.fillStyle = _fillColor;
        Aufgabe7_Wiese.crc2.strokeStyle = _strokeColor;
        Aufgabe7_Wiese.crc2.moveTo(_x - 80, _y + 0); //punkt unten links des berges
        Aufgabe7_Wiese.crc2.lineTo(_x + 90, _y - 200); //oberepunkt/spitze des berges
        Aufgabe7_Wiese.crc2.lineTo(_x + 180, _y + 0); //punkt unten rechts vom berg
        Aufgabe7_Wiese.crc2.closePath();
        Aufgabe7_Wiese.crc2.fill();
        Aufgabe7_Wiese.crc2.stroke();
    }
    ////////////////////////////////////KLEINER BERG//////////////////////////////////
    function drawKleinenBerg(_x, _y, _strokeColor, _fillColor) {
        Aufgabe7_Wiese.crc2.beginPath();
        Aufgabe7_Wiese.crc2.fillStyle = _fillColor;
        Aufgabe7_Wiese.crc2.strokeStyle = _strokeColor;
        Aufgabe7_Wiese.crc2.moveTo(_x - 380, _y + 220); //punkt unten links des berges
        Aufgabe7_Wiese.crc2.lineTo(_x + 90, _y - 200); //oberepunkt/spitze des berges
        Aufgabe7_Wiese.crc2.lineTo(_x + 300, _y + 220); //punkt unten rechts vom berg
        Aufgabe7_Wiese.crc2.closePath();
        Aufgabe7_Wiese.crc2.fill();
        Aufgabe7_Wiese.crc2.stroke();
    }
    function drawKleinenBergSpitze(_x, _y, _strokeColor, _fillColor) {
        Aufgabe7_Wiese.crc2.beginPath();
        Aufgabe7_Wiese.crc2.fillStyle = _fillColor;
        Aufgabe7_Wiese.crc2.strokeStyle = _strokeColor;
        Aufgabe7_Wiese.crc2.moveTo(_x - 60, _y - 67); //punkt unten links des berges
        Aufgabe7_Wiese.crc2.lineTo(_x + 90, _y - 200); //oberepunkt/spitze des berges
        Aufgabe7_Wiese.crc2.lineTo(_x + 156, _y - 67); //punkt unten rechts vom berg
        Aufgabe7_Wiese.crc2.closePath();
        Aufgabe7_Wiese.crc2.fill();
        Aufgabe7_Wiese.crc2.stroke();
    }
    ////////////////////////////////B�UME/////////////////////////////////////////
    function drawBaeume(_x, _y, _strokeColor, _fillColor) {
        //Baumstamm
        Aufgabe7_Wiese.crc2.beginPath();
        Aufgabe7_Wiese.crc2.fillStyle = _strokeColor;
        Aufgabe7_Wiese.crc2.fillRect(_x, _y - 15, 40, 60);
        Aufgabe7_Wiese.crc2.closePath();
        Aufgabe7_Wiese.crc2.stroke();
        //Baumkrone
        Aufgabe7_Wiese.crc2.beginPath();
        Aufgabe7_Wiese.crc2.arc(_x + 20, _y - 90, 80, 0 * Math.PI, 2 * Math.PI);
        Aufgabe7_Wiese.crc2.arc(_x - 60, _y - 130, 50, 0 * Math.PI, 2 * Math.PI);
        Aufgabe7_Wiese.crc2.arc(_x + 60, _y - 120, 80, 0 * Math.PI, 2 * Math.PI);
        Aufgabe7_Wiese.crc2.arc(_x + 20, _y - 240, 80, 0 * Math.PI, 2 * Math.PI);
        Aufgabe7_Wiese.crc2.arc(_x + 100, _y - 180, 70, 0 * Math.PI, 2 * Math.PI);
        Aufgabe7_Wiese.crc2.arc(_x - 30, _y - 200, 80, 0 * Math.PI, 2 * Math.PI);
        Aufgabe7_Wiese.crc2.arc(_x + 80, _y - 260, 60, 0 * Math.PI, 2 * Math.PI);
        //        crc2.arc( _x, _y, 40, 0 * Math.PI, 2 * Math.PI);
        Aufgabe7_Wiese.crc2.fillStyle = _fillColor;
        Aufgabe7_Wiese.crc2.strokeStyle = _fillColor;
        Aufgabe7_Wiese.crc2.fill();
        Aufgabe7_Wiese.crc2.closePath();
        Aufgabe7_Wiese.crc2.stroke();
    }
    function drawSonne(_x, _y, _strokeColor, _fillColor) {
        Aufgabe7_Wiese.crc2.beginPath();
        Aufgabe7_Wiese.crc2.arc(_x, _y, 40, 0 * Math.PI, 2 * Math.PI);
        Aufgabe7_Wiese.crc2.fillStyle = _fillColor;
        Aufgabe7_Wiese.crc2.strokeStyle = _fillColor;
        Aufgabe7_Wiese.crc2.fill();
        Aufgabe7_Wiese.crc2.closePath();
        Aufgabe7_Wiese.crc2.stroke();
    }
    function drawBienenkorb(_x, _y) {
        Aufgabe7_Wiese.crc2.fillStyle = "brown";
        Aufgabe7_Wiese.crc2.fillRect(_x, _y, 50, 50);
        Aufgabe7_Wiese.crc2.beginPath();
        Aufgabe7_Wiese.crc2.arc(955, 525, 25, 0 * Math.PI, 2 * Math.PI); //oberste Kreis
        Aufgabe7_Wiese.crc2.fill();
        Aufgabe7_Wiese.crc2.closePath();
        Aufgabe7_Wiese.crc2.beginPath();
        Aufgabe7_Wiese.crc2.arc(933, 550, 10, 0 * Math.PI, 2 * Math.PI); //linke Seite
        Aufgabe7_Wiese.crc2.arc(933, 532, 10, 0 * Math.PI, 2 * Math.PI);
        Aufgabe7_Wiese.crc2.arc(933, 567, 10, 0 * Math.PI, 2 * Math.PI);
        Aufgabe7_Wiese.crc2.fill();
        Aufgabe7_Wiese.crc2.closePath();
        Aufgabe7_Wiese.crc2.beginPath();
        Aufgabe7_Wiese.crc2.arc(978, 550, 10, 0 * Math.PI, 2 * Math.PI); //rechte Seite
        Aufgabe7_Wiese.crc2.arc(978, 532, 10, 0 * Math.PI, 2 * Math.PI);
        Aufgabe7_Wiese.crc2.arc(978, 567, 10, 0 * Math.PI, 2 * Math.PI);
        Aufgabe7_Wiese.crc2.fill();
        Aufgabe7_Wiese.crc2.closePath();
    }
    function drawBienenkorbBlack(_x, _y) {
        Aufgabe7_Wiese.crc2.fillStyle = "black";
        Aufgabe7_Wiese.crc2.fillRect(944, 547, 11, 11);
    }
})(Aufgabe7_Wiese || (Aufgabe7_Wiese = {}));
//# sourceMappingURL=Wiese.js.map