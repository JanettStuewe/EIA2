namespace Bienenschwarm_Classes {
    window.addEventListener("load", Wiese);

    export let inhalt: CanvasRenderingContext2D;
    let imgData: ImageData;
    let alleBienen: Bee[] = [];
    let n: number = 10;


    function Wiese(_event: Event): void {
        let canvas: HTMLCanvasElement;
        canvas = document.getElementsByTagName("canvas")[0];
        inhalt = canvas.getContext("2d");

        for (let i: number = 0; i < n; i++) {
            let s: Bee = { x: 0, y: 0, size: 0, color: "#0000ff", geschwindigkeit: true }; // default-values
            s.x = Math.random() * 200; // mögliche Schreibweise, hier sind variable Schlüssel möglich
            s.y = Math.random() * 200; // andere mögliche Schreibweise mit literalem Schlüssel
            s.size = Math.random() * 1 + 2;
            s.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
            alleBienen[i] = s;
            if (i % 2 == 0) {
                s.geschwindigkeit = true;
            }
            else {
                s.geschwindigkeit = false;
            }
            alleBienen[i] = s;
        }

        //________________HINTERGRUND______________________________
        //Himmel_hellblau
        inhalt.fillStyle = "#b0e2ff";
        inhalt.fillRect(0, 0, canvas.width, canvas.height);

        //Berge_großers
        drawBerg(850, 210, "#919191", "#919191");
        drawBergSpitze(850, 210, "#e0eeee", "#e0eeee");

        //Berge_klein
        drawKleinenBerg(500, 400, "#cccccc", "#cccccc");
        drawKleinenBergSpitze(500, 400, "#f0ffff", "#f0ffff");

        //Wiese_grün
        inhalt.fillStyle = "#b3ee3a";
        inhalt.fillRect(0, 500, canvas.width, canvas.height);

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
        for (var i: number = 0; i < 10; i++) {
            let flowerField: number = Math.floor((Math.random() * 3) + 0);
            let _x: number = Math.floor(Math.random() * (700 - 300)) + 300;
            let _y: number = Math.floor(Math.random() * (600 - 550)) + 550;

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
        imgData = inhalt.getImageData(0, 0, 1000, 600);
        //Bienenstart
        for (let i: number = 0; i < n; i++) {
            let s: Bee = alleBienen[i];
            s.x = 950;
            s.y = 550;
        }

        window.setTimeout(Animation, 26);
        canvas.addEventListener("click", drawNeuesBienchen);    //wenn auf den Canvas geklickt wird, springt die Funktion Animation an, welche eine weitere Biene aus dem Bienenkorb heraus fliegen lässt
        canvas.addEventListener("touch", drawNeuesBienchen);    //wenn jmd auf den Canvas toucht, springt die Funktion Animation an, welche eine weitere Biene aus dem Bienenkorb heraus fliegen lässt  

        drawNeuesBienchen();
        Animation();
    }
    function drawNeuesBienchen(): void {
            let bee: Bee = { x: 950, y: 550, size: 2, color: "red", geschwindigkeit: true };
            alleBienen.push(bee);

        }

        //Animation der Bienen
        function Animation(): void {
            inhalt.putImageData(imgData, 0, 0);   //Hintergrundbild aufrufen

            for (let i: number = 0; i < alleBienen.length; i++) {
                let s: Bee = alleBienen[i];
                if (s.geschwindigkeit == true) {
                    s.x += Math.random() * 5 - 3;
                    s.y += Math.random() * 4 - 2;
                }
                else {
                    s.x += Math.random() * 4 - 3;
                    s.y += Math.random() * 4 - 2;
                    alleBienen[i] = s;
                }


                if (s.x >= 995)    //lässt Bienen bei Randüberschreitung wieder erscheinen
                    s.x = -5;
                if (s.y <= 3)
                    s.y = 597;
                if (s.x < -5)
                    s.x = 995;
                if (s.y > 597)
                    s.y = 3;
                drawBiene(s);  //Malen der Bienen an der neuen Position
            }
            window.setTimeout(Animation, 20);
        }
        /////////////////////////////GROßER BERG/////////////////////////////////////////////   
        function drawBerg(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
            inhalt.beginPath();
            inhalt.fillStyle = _fillColor;
            inhalt.strokeStyle = _strokeColor;
            inhalt.moveTo(_x - 348, _y + 320);    //punkt unten links des berges
            inhalt.lineTo(_x + 90, _y - 200);     //oberepunkt/spitze des berges
            inhalt.lineTo(_x + 300, _y + 320);     //punkt unten rechts vom berg
            inhalt.closePath();
            inhalt.fill();
            inhalt.stroke();
        }
        function drawBergSpitze(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
            inhalt.beginPath();
            inhalt.fillStyle = _fillColor;
            inhalt.strokeStyle = _strokeColor;
            inhalt.moveTo(_x - 80, _y + 0);    //punkt unten links des berges
            inhalt.lineTo(_x + 90, _y - 200);     //oberepunkt/spitze des berges
            inhalt.lineTo(_x + 180, _y + 0);     //punkt unten rechts vom berg
            inhalt.closePath();
            inhalt.fill();
            inhalt.stroke();
        }

        ////////////////////////////////////KLEINER BERG//////////////////////////////////
        function drawKleinenBerg(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
            inhalt.beginPath();
            inhalt.fillStyle = _fillColor;
            inhalt.strokeStyle = _strokeColor;
            inhalt.moveTo(_x - 380, _y + 220);    //punkt unten links des berges
            inhalt.lineTo(_x + 90, _y - 200);     //oberepunkt/spitze des berges
            inhalt.lineTo(_x + 300, _y + 220);     //punkt unten rechts vom berg
            inhalt.closePath();
            inhalt.fill();
            inhalt.stroke();
        }
        function drawKleinenBergSpitze(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
            inhalt.beginPath();
            inhalt.fillStyle = _fillColor;
            inhalt.strokeStyle = _strokeColor;
            inhalt.moveTo(_x - 60, _y - 67);    //punkt unten links des berges
            inhalt.lineTo(_x + 90, _y - 200);     //oberepunkt/spitze des berges
            inhalt.lineTo(_x + 156, _y - 67);     //punkt unten rechts vom berg
            inhalt.closePath();
            inhalt.fill();
            inhalt.stroke();
        }


        ////////////////////////////////BÄUME/////////////////////////////////////////
        function drawBaeume(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
            //Baumstamm
            inhalt.beginPath();
            inhalt.fillStyle = _strokeColor;

            inhalt.fillRect(_x, _y - 15, 40, 60);
            inhalt.closePath();
            inhalt.stroke();

            //Baumkrone
            inhalt.beginPath();
            inhalt.arc(_x + 20, _y - 90, 80, 0 * Math.PI, 2 * Math.PI);
            inhalt.arc(_x - 60, _y - 130, 50, 0 * Math.PI, 2 * Math.PI);
            inhalt.arc(_x + 60, _y - 120, 80, 0 * Math.PI, 2 * Math.PI);
            inhalt.arc(_x + 20, _y - 240, 80, 0 * Math.PI, 2 * Math.PI);
            inhalt.arc(_x + 100, _y - 180, 70, 0 * Math.PI, 2 * Math.PI);
            inhalt.arc(_x - 30, _y - 200, 80, 0 * Math.PI, 2 * Math.PI);
            inhalt.arc(_x + 80, _y - 260, 60, 0 * Math.PI, 2 * Math.PI);
            //        inhalt.arc( _x, _y, 40, 0 * Math.PI, 2 * Math.PI);
            inhalt.fillStyle = _fillColor;
            inhalt.strokeStyle = _fillColor;
            inhalt.fill();
            inhalt.closePath();
            inhalt.stroke();
        }

        function drawSonne(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
            inhalt.beginPath();
            inhalt.arc(_x, _y, 40, 0 * Math.PI, 2 * Math.PI);
            inhalt.fillStyle = _fillColor;
            inhalt.strokeStyle = _fillColor;
            inhalt.fill();
            inhalt.closePath();
            inhalt.stroke();
        }


        ////////////////////////////////BLUMEN/////////////////////////////////////////
        function drawBlumeTulpe(_x: number, _y: number, _stalkColor: string, _petalColor: string): void {
            //Stiel
            inhalt.beginPath();
            inhalt.strokeStyle = _stalkColor;
            inhalt.moveTo(_x, _y);
            inhalt.lineTo(_x, _y - 32);
            inhalt.stroke();
            inhalt.closePath();
            //Stielblatt1
            inhalt.beginPath();
            inhalt.strokeStyle = _stalkColor;
            inhalt.moveTo(_x, _y);
            inhalt.lineTo(_x, _y - 13);       //obere Punkt
            inhalt.lineTo(_x - 7, _y - 26);   //Blattspitze
            inhalt.lineTo(_x, _y - 5);        //untere Punkt
            inhalt.stroke();
            inhalt.closePath();
            inhalt.fillStyle = _stalkColor;
            inhalt.fill();
            //Stielblatt2
            inhalt.beginPath();
            inhalt.strokeStyle = _stalkColor;
            inhalt.moveTo(_x, _y);
            inhalt.lineTo(_x, _y - 12);       //obere Punkt
            inhalt.lineTo(_x + 7, _y - 20);   //Blattspitze
            inhalt.lineTo(_x, _y - 5);        //untere Punkt
            inhalt.stroke();
            inhalt.closePath();
            inhalt.fillStyle = _stalkColor;
            inhalt.fill();
            //TulpenBlütenform
            inhalt.beginPath();
            inhalt.strokeStyle = "white";     //umrandet die Tulpe weiss
            inhalt.arc(_x, _y - 40, 9, 0 * Math.PI, 1 * Math.PI); //Rundung der Tulpe
            inhalt.lineTo(_x - 10, _y - 53);  //links oben der Punkt
            inhalt.lineTo(_x - 5, _y - 45);
            inhalt.lineTo(_x, _y - 53);       //Spitze in der Mitte
            inhalt.lineTo(_x + 5, _y - 45);
            inhalt.lineTo(_x + 10, _y - 53);  //rechts der Punkt
            inhalt.closePath();
            inhalt.stroke();
            inhalt.fillStyle = _petalColor;
            inhalt.fill();
        }
        function drawBlumeBlue(_x: number, _y: number, _fillColor: string, _fillColor1: string, _stalkColor: string): void {
            //Stiel
            inhalt.beginPath();
            inhalt.strokeStyle = _stalkColor;
            inhalt.moveTo(_x, _y);
            inhalt.lineTo(_x, _y + 50);
            inhalt.stroke();
            inhalt.closePath();
            //Stielblatt
            inhalt.beginPath();
            inhalt.strokeStyle = _stalkColor;
            inhalt.moveTo(_x, _y);
            inhalt.lineTo(_x, _y + 30);       //obere Punkt
            inhalt.lineTo(_x - 10, _y + 25);   //Blattspitze
            inhalt.lineTo(_x, _y + 43);        //untere Punkt
            inhalt.stroke();
            inhalt.closePath();
            inhalt.fillStyle = _stalkColor;
            inhalt.fill();
            //Blüte
            inhalt.beginPath();
            inhalt.fillStyle = _fillColor;
            inhalt.strokeStyle = "#66ccff";
            inhalt.arc(_x, _y, 10, 0 * Math.PI, 2 * Math.PI);
            inhalt.arc(_x - 10, _y, 7, 0 * Math.PI, 2 * Math.PI);
            inhalt.arc(_x + 10, _y, 7, 0 * Math.PI, 2 * Math.PI);
            inhalt.arc(_x, _y + 10, 7, 0 * Math.PI, 2 * Math.PI);
            inhalt.arc(_x, _y - 10, 7, 0 * Math.PI, 2 * Math.PI);
            inhalt.closePath();
            inhalt.fill();
            inhalt.beginPath();
            inhalt.fillStyle = _fillColor1;
            inhalt.arc(_x, _y, 5, 0 * Math.PI, 2 * Math.PI);
            inhalt.fill();
            inhalt.stroke();
            inhalt.closePath();

        }
        function drawBlume3(_x: number, _y: number, _fillColor: string, _fillColor1: string, _stalkColor: string): void {
            //Stiel
            inhalt.beginPath();
            inhalt.strokeStyle = _stalkColor;
            inhalt.moveTo(_x, _y);
            inhalt.lineTo(_x, _y + 50);
            inhalt.stroke();
            inhalt.closePath();
            //Stielblatt1
            inhalt.beginPath();
            inhalt.strokeStyle = _stalkColor;
            inhalt.moveTo(_x, _y);
            inhalt.lineTo(_x, _y + 36);       //obere Punkt
            inhalt.lineTo(_x + 10, _y + 27);   //Blattspitze
            inhalt.lineTo(_x, _y + 43);        //untere Punkt
            inhalt.stroke();
            inhalt.closePath();
            inhalt.fillStyle = _stalkColor;
            inhalt.fill();
            //Stielblatt2
            inhalt.beginPath();
            inhalt.strokeStyle = _stalkColor;
            inhalt.moveTo(_x, _y);
            inhalt.lineTo(_x, _y + 36);       //obere Punkt
            inhalt.lineTo(_x - 10, _y + 25);   //Blattspitze
            inhalt.lineTo(_x, _y + 43);        //untere Punkt
            inhalt.stroke();
            inhalt.closePath();
            inhalt.fillStyle = _stalkColor;
            inhalt.fill();
            //Blüte
            inhalt.beginPath();
            inhalt.fillStyle = _fillColor;
            inhalt.strokeStyle = "white";
            inhalt.arc(_x, _y, 10, 0 * Math.PI, 2 * Math.PI);
            inhalt.arc(_x - 10, _y, 7, 0 * Math.PI, 2 * Math.PI);
            inhalt.arc(_x + 10, _y, 7, 0 * Math.PI, 2 * Math.PI);
            inhalt.arc(_x, _y + 10, 7, 0 * Math.PI, 2 * Math.PI);
            inhalt.arc(_x, _y - 10, 7, 0 * Math.PI, 2 * Math.PI);
            inhalt.closePath();
            inhalt.fill();
            inhalt.beginPath();
            inhalt.fillStyle = _fillColor1;
            inhalt.arc(_x, _y, 5, 0 * Math.PI, 2 * Math.PI);
            inhalt.fill();
            inhalt.stroke();
            inhalt.closePath();

        }
        function drawBienenkorb(_x: number, _y: number): void {
            inhalt.fillStyle = "brown";
            inhalt.fillRect(_x, _y, 50, 50);
            inhalt.beginPath();
            inhalt.arc(955, 525, 25, 0 * Math.PI, 2 * Math.PI); //oberste Kreis
            inhalt.fill();
            inhalt.closePath();
            inhalt.beginPath();
            inhalt.arc(933, 550, 10, 0 * Math.PI, 2 * Math.PI); //linke Seite
            inhalt.arc(933, 532, 10, 0 * Math.PI, 2 * Math.PI);
            inhalt.arc(933, 567, 10, 0 * Math.PI, 2 * Math.PI);
            inhalt.fill();
            inhalt.closePath();
            inhalt.beginPath();
            inhalt.arc(978, 550, 10, 0 * Math.PI, 2 * Math.PI); //rechte Seite
            inhalt.arc(978, 532, 10, 0 * Math.PI, 2 * Math.PI);
            inhalt.arc(978, 567, 10, 0 * Math.PI, 2 * Math.PI);
            inhalt.fill();
            inhalt.closePath();
        }

        function drawBienenkorbBlack(_x: number, _y: number): void {
            inhalt.fillStyle = "black";
            inhalt.fillRect(944, 547, 11, 11);

        }
        function drawBiene(s: Bee): void {
            inhalt.fillStyle = s.color;
            inhalt.beginPath();
            inhalt.arc(s.x, s.y, s.size, 0 * Math.PI, 2 * Math.PI); //oberste Kreis
            inhalt.fill();
            inhalt.closePath();
            inhalt.strokeStyle = "black";
            inhalt.moveTo(s.x + 2, s.y + 2);
            inhalt.lineTo(s.x, s.y);
            inhalt.stroke();
        }
    }