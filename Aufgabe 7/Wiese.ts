namespace Aufgabe7_Wiese {
    window.addEventListener("load", Wiese);

    export let crc2: CanvasRenderingContext2D;
    let imgData: ImageData;
    export let alleBienen: Bee[] = [];
    let alleBlumen: Blume[] = [];   //fertiege blumen abgespeichert
    export let sorts: string[] = ["tulpe", "blue", "3"]; //Liste aller verfügbaren Blumenarten
    let n: number = 10;


    function Wiese(_event: Event): void {
        let canvas: HTMLCanvasElement;
        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");

        for (let i: number = 0; i < n; i++) {
            let s: Bee = new Bee(0, 0, (i % 2) == 0); // default-values
            alleBienen[i] = s;
        }

        //________________HINTERGRUND______________________________
        //Himmel_hellblau
        crc2.fillStyle = "#b0e2ff";
        crc2.fillRect(0, 0, canvas.width, canvas.height);

        //Berge_großers
        drawBerg(850, 210, "#919191", "#919191");
        drawBergSpitze(850, 210, "#e0eeee", "#e0eeee");

        //Berge_klein
        drawKleinenBerg(500, 400, "#cccccc", "#cccccc");
        drawKleinenBergSpitze(500, 400, "#f0ffff", "#f0ffff");

        //Wiese_grün
        crc2.fillStyle = "#b3ee3a";
        crc2.fillRect(0, 500, canvas.width, canvas.height);

        //____________________MITTE__________________________________________
        drawBaeume(20, 460, "#a0522d", "#006400");
        drawBaeume(800, 500, "#a0522d", "#006400");
        drawBaeume(144, 551, "#a0522d", "#008000");
        drawSonne(300, 80, "yellow", "yellow");


        //____________________VORDERGRUND_____________________________________

        let f: Blume = new Blume(100, 590, "Tulpe");
        f.draw();
        let f1: Blume = new Blume(19, 560, "Blue");
        f1.draw();
        let f2: Blume = new Blume(50, 500, "3");
        f2.draw();

        drawBienenkorb(930, 530);
        drawBienenkorbBlack(950, 550);

        //Blumenwiese
        for (var i: number = 0; i < 10; i++) {
            let fr: Blume = new Blume(0, 0, "");
            fr.setRandomFlower();
            alleBlumen[i] = fr;
            console.log(fr);

        }

        //Hintergrundbild speichern
        imgData = crc2.getImageData(0, 0, 1000, 600);
        //Bienenstart
        for (let i: number = 0; i < n; i++) {
            let s: Bee = alleBienen[i];
            s.start();
        }

        canvas.addEventListener("click", drawNeuesBienchen);    //wenn auf den Canvas geklickt wird, springt die Funktion Animation an, welche eine weitere Biene aus dem Bienenkorb heraus fliegen lässt
        canvas.addEventListener("touch", drawNeuesBienchen);    //wenn jmd auf den Canvas toucht, springt die Funktion Animation an, welche eine weitere Biene aus dem Bienenkorb heraus fliegen lässt  

        drawNeuesBienchen();
        Animation();
    }

    function drawNeuesBienchen(): void {
        let bee: Bee = new Bee(0, 0, (Math.round(Math.random())) == 1);
        bee.start();
        alleBienen.push(bee);

    }

    //Animation der Bienen
    function Animation(): void {
        crc2.putImageData(imgData, 0, 0);   //Hintergrundbild aufrufen

        for (let i: number = 0; i < alleBienen.length; i++) {
            let s: Bee = (alleBienen[i]);
            s.setRandomSpeed();
            s.overflow();
            s.drawBiene(s);  //Malen der Bienen an der neuen Position
        }
        window.setTimeout(Animation, 20);
    }
    /////////////////////////////GROßER BERG/////////////////////////////////////////////   
    function drawBerg(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(_x - 348, _y + 320);    //punkt unten links des berges
        crc2.lineTo(_x + 90, _y - 200);     //oberepunkt/spitze des berges
        crc2.lineTo(_x + 300, _y + 320);     //punkt unten rechts vom berg
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }
    function drawBergSpitze(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(_x - 80, _y + 0);    //punkt unten links des berges
        crc2.lineTo(_x + 90, _y - 200);     //oberepunkt/spitze des berges
        crc2.lineTo(_x + 180, _y + 0);     //punkt unten rechts vom berg
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }

    ////////////////////////////////////KLEINER BERG//////////////////////////////////
    function drawKleinenBerg(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(_x - 380, _y + 220);    //punkt unten links des berges
        crc2.lineTo(_x + 90, _y - 200);     //oberepunkt/spitze des berges
        crc2.lineTo(_x + 300, _y + 220);     //punkt unten rechts vom berg
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }
    function drawKleinenBergSpitze(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(_x - 60, _y - 67);    //punkt unten links des berges
        crc2.lineTo(_x + 90, _y - 200);     //oberepunkt/spitze des berges
        crc2.lineTo(_x + 156, _y - 67);     //punkt unten rechts vom berg
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }

    ////////////////////////////////BÄUME/////////////////////////////////////////
    function drawBaeume(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
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

    function drawSonne(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
        crc2.beginPath();
        crc2.arc(_x, _y, 40, 0 * Math.PI, 2 * Math.PI);
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _fillColor;
        crc2.fill();
        crc2.closePath();
        crc2.stroke();
    }

    function drawBienenkorb(_x: number, _y: number): void {
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

    function drawBienenkorbBlack(_x: number, _y: number): void {
        crc2.fillStyle = "black";
        crc2.fillRect(944, 547, 11, 11);

    }

}