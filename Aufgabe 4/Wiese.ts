namespace Aufgabe_4_Bild {
    window.addEventListener("load", init);
    let crc2: CanvasRenderingContext2D;

    function init(_event: Event): void {
        let canvas: HTMLCanvasElement;
        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");

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
        drawSonne (300, 80, "yellow", "yellow");
        

  //      //____________________VORDERGRUND_____________________________________
    //    //Blumen
      //  drawBlumeGelb(500, 400, "#838b8b", "#838b8b");
   //     drawBlumeRot(500, 400, "#838b8b", "#838b8b");
     //   drawBlumeLila(500, 400, "#838b8b", "#838b8b");
//
  //      //Steinhaufen plus Schwert
    //    drawBerghaufen(500, 400, "#838b8b", "#838b8b");
      //  drawSchwert(500, 400, "#838b8b", "#838b8b");

        //Gras_grün
        //drawGras(500, 400, "#838b8b", "#838b8b");
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
    function drawBaeume(_x: number, _y: number, _strokeColor: string, _fillColor: string ): void {
        //Baumstamm
        crc2.beginPath();
        crc2.fillStyle = _strokeColor;

        crc2.fillRect(_x , _y - 15, 40, 60);
        crc2.closePath();
        crc2.stroke();
        
        //Baumkrone
        crc2.beginPath();
        crc2.arc( _x + 20 , _y - 90, 80, 0 * Math.PI, 2 * Math.PI);
        crc2.arc( _x - 60 , _y - 130, 50, 0 * Math.PI, 2 * Math.PI);
        crc2.arc( _x + 60 , _y - 120 , 80, 0 * Math.PI, 2 * Math.PI);
        crc2.arc( _x + 20, _y - 240 , 80, 0 * Math.PI, 2 * Math.PI);
        crc2.arc( _x + 100, _y - 180, 70, 0 * Math.PI, 2 * Math.PI);
        crc2.arc( _x - 30 , _y - 200 , 80, 0 * Math.PI, 2 * Math.PI);
        crc2.arc( _x  + 80, _y - 260, 60, 0 * Math.PI, 2 * Math.PI);
//        crc2.arc( _x, _y, 40, 0 * Math.PI, 2 * Math.PI);
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _fillColor;
        crc2.fill();
        crc2.closePath();
        crc2.stroke();
    }
    
    function drawSonne(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
        crc2.beginPath();
        crc2.arc( _x, _y, 40, 0 * Math.PI, 2 * Math.PI);
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _fillColor;
        crc2.fill();
        crc2.closePath();
        crc2.stroke();
    }
    
    ////////////////////////////////ECALIBUR/////////////////////////////////////////
    function drawSteinhaufen(_x: number, _y: number, _strokeColor: string): void {
        crc2.beginPath();

        crc2.fill();
        crc2.closePath();
        crc2.stroke();
    }
    function drawSchwert(_x: number, _y: number, _strokeColor: string): void {
        crc2.beginPath();

        crc2.fill();
        crc2.closePath();
        crc2.stroke();
    }
    ////////////////////////////////BLUMEN/////////////////////////////////////////
    function drawBlumeGelb(_x: number, _y: number, _strokeColor: string): void {
        crc2.beginPath();

        crc2.fill();
        crc2.closePath();
        crc2.stroke();
    }
    function drawBlumeRot(_x: number, _y: number, _strokeColor: string): void {
        crc2.beginPath();

        crc2.fill();
        crc2.closePath();
        crc2.stroke();
    }
    function drawBlumeLila(_x: number, _y: number, _strokeColor: string): void {
        crc2.beginPath();

        crc2.fill();
        crc2.closePath();
        crc2.stroke();
    }
    ////////////////////////////////GRAS/////////////////////////////////////////
    function drawGras(_x: number, _y: number, _strokeColor: string): void {
        crc2.beginPath();

        crc2.fill();
        crc2.closePath();
        crc2.stroke();
    }
}
     //DRAW A LINE
    //        crc2.moveTo(0, 0);
    //        crc2.lineTo(canvas.width, canvas.height);
    //        crc2.stroke();