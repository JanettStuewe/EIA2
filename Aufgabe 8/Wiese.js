var Aufgabe8_Wiese;
(function (Aufgabe8_Wiese) {
    window.addEventListener("load", Wiese);
    var imgData;
    Aufgabe8_Wiese.alleBienen = [];
    Aufgabe8_Wiese.alleBlumen = []; //fertiege blumen abgespeichert
    Aufgabe8_Wiese.sorts = ["tulpe", "blue", "3"]; //Liste aller verf�gbaren Blumenarten
    var n = 10;
    function Wiese(_event) {
        var canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        Aufgabe8_Wiese.crc2 = canvas.getContext("2d");
        //________________HINTERGRUND______________________________
        //Himmel_hellblau
        Aufgabe8_Wiese.crc2.fillStyle = "#b0e2ff";
        Aufgabe8_Wiese.crc2.fillRect(0, 0, canvas.width, canvas.height);
        //Berge_gro�ers
        drawBerg(850, 210, "#919191", "#919191");
        drawBergSpitze(850, 210, "#e0eeee", "#e0eeee");
        //Berge_klein
        drawKleinenBerg(500, 400, "#cccccc", "#cccccc");
        drawKleinenBergSpitze(500, 400, "#f0ffff", "#f0ffff");
        //Wiese_gr�n
        Aufgabe8_Wiese.crc2.fillStyle = "#b3ee3a";
        Aufgabe8_Wiese.crc2.fillRect(0, 500, canvas.width, canvas.height);
        //____________________MITTE__________________________________________
        drawBaeume(20, 460, "#a0522d", "#006400");
        drawBaeume(800, 500, "#a0522d", "#006400");
        drawBaeume(144, 551, "#a0522d", "#008000");
        drawSonne(300, 80, "yellow", "yellow");
        //____________________VORDERGRUND_____________________________________
        drawBienenkorb(930, 530);
        drawBienenkorbBlack(950, 550);
        //Blumenwiese
        for (var i = 0; i < 10; i++) {
            var fr = new Aufgabe8_Wiese.BlumeTulpe();
            Aufgabe8_Wiese.alleBlumen.push(fr);
            console.log(fr);
            Aufgabe8_Wiese.alleBlumen[i].draw();
        }
        for (var i = 0; i < 10; i++) {
            var fr = new Aufgabe8_Wiese.BlumeBlue();
            Aufgabe8_Wiese.alleBlumen.push(fr);
            console.log(fr);
            Aufgabe8_Wiese.alleBlumen[i].draw();
        }
        for (var i = 0; i < 10; i++) {
            var fr = new Aufgabe8_Wiese.Blume3();
            Aufgabe8_Wiese.alleBlumen.push(fr);
            console.log(fr);
            Aufgabe8_Wiese.alleBlumen[i].draw();
        }
        //Hintergrundbild speichern
        imgData = Aufgabe8_Wiese.crc2.getImageData(0, 0, 1000, 600);
        //Bienenstart
        for (var i_1 = 0; i_1 < n; i_1++) {
            var s = new Aufgabe8_Wiese.Bee(950, 550, true);
            Aufgabe8_Wiese.alleBienen.push(s);
            var h = new Aufgabe8_Wiese.HonigBiene(950, 550, true);
            Aufgabe8_Wiese.alleBienen.push(h);
        }
        canvas.addEventListener("click", drawNeuesBienchen); //wenn auf den Canvas geklickt wird, springt die Funktion Animation an, welche eine weitere Biene aus dem Bienenkorb heraus fliegen l�sst
        canvas.addEventListener("touch", drawNeuesBienchen); //wenn jmd auf den Canvas toucht, springt die Funktion Animation an, welche eine weitere Biene aus dem Bienenkorb heraus fliegen l�sst  
        drawNeuesBienchen();
        Animation();
    }
    function drawNeuesBienchen() {
        var bee = new Aufgabe8_Wiese.Bee(0, 0, (Math.round(Math.random())) == 1);
        bee.start();
        Aufgabe8_Wiese.alleBienen.push(bee); // per Superklasse erstellte Biene wird nun in den array alleBienen abgespeichert
    }
    //Animation der Bienen
    function Animation() {
        Aufgabe8_Wiese.crc2.putImageData(imgData, 0, 0); //Hintergrundbild aufrufen
        for (var i = 0; i < Aufgabe8_Wiese.alleBienen.length; i++) {
            var s = (Aufgabe8_Wiese.alleBienen[i]);
            s.move();
            s.overflow();
            s.drawBiene(s); //Malen der Bienen an der neuen Position
        }
        window.setTimeout(Animation, 20);
    }
    /////////////////////////////GRO�ER BERG/////////////////////////////////////////////   
    function drawBerg(_x, _y, _strokeColor, _fillColor) {
        Aufgabe8_Wiese.crc2.beginPath();
        Aufgabe8_Wiese.crc2.fillStyle = _fillColor;
        Aufgabe8_Wiese.crc2.strokeStyle = _strokeColor;
        Aufgabe8_Wiese.crc2.moveTo(_x - 348, _y + 320); //punkt unten links des berges
        Aufgabe8_Wiese.crc2.lineTo(_x + 90, _y - 200); //oberepunkt/spitze des berges
        Aufgabe8_Wiese.crc2.lineTo(_x + 300, _y + 320); //punkt unten rechts vom berg
        Aufgabe8_Wiese.crc2.closePath();
        Aufgabe8_Wiese.crc2.fill();
        Aufgabe8_Wiese.crc2.stroke();
    }
    function drawBergSpitze(_x, _y, _strokeColor, _fillColor) {
        Aufgabe8_Wiese.crc2.beginPath();
        Aufgabe8_Wiese.crc2.fillStyle = _fillColor;
        Aufgabe8_Wiese.crc2.strokeStyle = _strokeColor;
        Aufgabe8_Wiese.crc2.moveTo(_x - 80, _y + 0); //punkt unten links des berges
        Aufgabe8_Wiese.crc2.lineTo(_x + 90, _y - 200); //oberepunkt/spitze des berges
        Aufgabe8_Wiese.crc2.lineTo(_x + 180, _y + 0); //punkt unten rechts vom berg
        Aufgabe8_Wiese.crc2.closePath();
        Aufgabe8_Wiese.crc2.fill();
        Aufgabe8_Wiese.crc2.stroke();
    }
    ////////////////////////////////////KLEINER BERG//////////////////////////////////
    function drawKleinenBerg(_x, _y, _strokeColor, _fillColor) {
        Aufgabe8_Wiese.crc2.beginPath();
        Aufgabe8_Wiese.crc2.fillStyle = _fillColor;
        Aufgabe8_Wiese.crc2.strokeStyle = _strokeColor;
        Aufgabe8_Wiese.crc2.moveTo(_x - 380, _y + 220); //punkt unten links des berges
        Aufgabe8_Wiese.crc2.lineTo(_x + 90, _y - 200); //oberepunkt/spitze des berges
        Aufgabe8_Wiese.crc2.lineTo(_x + 300, _y + 220); //punkt unten rechts vom berg
        Aufgabe8_Wiese.crc2.closePath();
        Aufgabe8_Wiese.crc2.fill();
        Aufgabe8_Wiese.crc2.stroke();
    }
    function drawKleinenBergSpitze(_x, _y, _strokeColor, _fillColor) {
        Aufgabe8_Wiese.crc2.beginPath();
        Aufgabe8_Wiese.crc2.fillStyle = _fillColor;
        Aufgabe8_Wiese.crc2.strokeStyle = _strokeColor;
        Aufgabe8_Wiese.crc2.moveTo(_x - 60, _y - 67); //punkt unten links des berges
        Aufgabe8_Wiese.crc2.lineTo(_x + 90, _y - 200); //oberepunkt/spitze des berges
        Aufgabe8_Wiese.crc2.lineTo(_x + 156, _y - 67); //punkt unten rechts vom berg
        Aufgabe8_Wiese.crc2.closePath();
        Aufgabe8_Wiese.crc2.fill();
        Aufgabe8_Wiese.crc2.stroke();
    }
    ////////////////////////////////B�UME/////////////////////////////////////////
    function drawBaeume(_x, _y, _strokeColor, _fillColor) {
        //Baumstamm
        Aufgabe8_Wiese.crc2.beginPath();
        Aufgabe8_Wiese.crc2.fillStyle = _strokeColor;
        Aufgabe8_Wiese.crc2.fillRect(_x, _y - 15, 40, 60);
        Aufgabe8_Wiese.crc2.closePath();
        Aufgabe8_Wiese.crc2.stroke();
        //Baumkrone
        Aufgabe8_Wiese.crc2.beginPath();
        Aufgabe8_Wiese.crc2.arc(_x + 20, _y - 90, 80, 0 * Math.PI, 2 * Math.PI);
        Aufgabe8_Wiese.crc2.arc(_x - 60, _y - 130, 50, 0 * Math.PI, 2 * Math.PI);
        Aufgabe8_Wiese.crc2.arc(_x + 60, _y - 120, 80, 0 * Math.PI, 2 * Math.PI);
        Aufgabe8_Wiese.crc2.arc(_x + 20, _y - 240, 80, 0 * Math.PI, 2 * Math.PI);
        Aufgabe8_Wiese.crc2.arc(_x + 100, _y - 180, 70, 0 * Math.PI, 2 * Math.PI);
        Aufgabe8_Wiese.crc2.arc(_x - 30, _y - 200, 80, 0 * Math.PI, 2 * Math.PI);
        Aufgabe8_Wiese.crc2.arc(_x + 80, _y - 260, 60, 0 * Math.PI, 2 * Math.PI);
        //        crc2.arc( _x, _y, 40, 0 * Math.PI, 2 * Math.PI);
        Aufgabe8_Wiese.crc2.fillStyle = _fillColor;
        Aufgabe8_Wiese.crc2.strokeStyle = _fillColor;
        Aufgabe8_Wiese.crc2.fill();
        Aufgabe8_Wiese.crc2.closePath();
        Aufgabe8_Wiese.crc2.stroke();
    }
    function drawSonne(_x, _y, _strokeColor, _fillColor) {
        Aufgabe8_Wiese.crc2.beginPath();
        Aufgabe8_Wiese.crc2.arc(_x, _y, 40, 0 * Math.PI, 2 * Math.PI);
        Aufgabe8_Wiese.crc2.fillStyle = _fillColor;
        Aufgabe8_Wiese.crc2.strokeStyle = _fillColor;
        Aufgabe8_Wiese.crc2.fill();
        Aufgabe8_Wiese.crc2.closePath();
        Aufgabe8_Wiese.crc2.stroke();
    }
    function drawBienenkorb(_x, _y) {
        Aufgabe8_Wiese.crc2.fillStyle = "brown";
        Aufgabe8_Wiese.crc2.fillRect(_x, _y, 50, 50);
        Aufgabe8_Wiese.crc2.beginPath();
        Aufgabe8_Wiese.crc2.arc(955, 525, 25, 0 * Math.PI, 2 * Math.PI); //oberste Kreis
        Aufgabe8_Wiese.crc2.fill();
        Aufgabe8_Wiese.crc2.closePath();
        Aufgabe8_Wiese.crc2.beginPath();
        Aufgabe8_Wiese.crc2.arc(933, 550, 10, 0 * Math.PI, 2 * Math.PI); //linke Seite
        Aufgabe8_Wiese.crc2.arc(933, 532, 10, 0 * Math.PI, 2 * Math.PI);
        Aufgabe8_Wiese.crc2.arc(933, 567, 10, 0 * Math.PI, 2 * Math.PI);
        Aufgabe8_Wiese.crc2.fill();
        Aufgabe8_Wiese.crc2.closePath();
        Aufgabe8_Wiese.crc2.beginPath();
        Aufgabe8_Wiese.crc2.arc(978, 550, 10, 0 * Math.PI, 2 * Math.PI); //rechte Seite
        Aufgabe8_Wiese.crc2.arc(978, 532, 10, 0 * Math.PI, 2 * Math.PI);
        Aufgabe8_Wiese.crc2.arc(978, 567, 10, 0 * Math.PI, 2 * Math.PI);
        Aufgabe8_Wiese.crc2.fill();
        Aufgabe8_Wiese.crc2.closePath();
    }
    function drawBienenkorbBlack(_x, _y) {
        Aufgabe8_Wiese.crc2.fillStyle = "black";
        Aufgabe8_Wiese.crc2.fillRect(944, 547, 11, 11);
    }
})(Aufgabe8_Wiese || (Aufgabe8_Wiese = {}));
//# sourceMappingURL=Wiese.js.map