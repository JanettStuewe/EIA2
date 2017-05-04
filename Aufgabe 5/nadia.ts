namespace Aufg4_Canvas {

    window.addEventListener("load", init);

    let crc2: CanvasRenderingContext2D;
    let x: number[] = [];
    let y: number[] = [];
    let n: number = 10;
    let _menge: number = 1;

    function init(_event: Event): void {
        let canvas: HTMLCanvasElement;
        canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);

        crc2 = canvas.getContext("2d");



        zeichneHimmel();

        zeichneBerg(1100, 510, "grey");
        zeichneBerg(900, 510, "darkgrey");
        zeichneBerg(1000, 650, "lightgrey");
        zeichneBerg(680, 650, "lightgrey");

        wolkenZusammen(1000, 640, 15, 0);

        machsGruen();

        sonnenStrahlen(25, 190);
        sonnenStrahlen(75, 250);
        sonnenStrahlen(90, 190);
        sonnenStrahlen(175, 250);
        sonnenStrahlen(225, 190);
        sonnenStrahlen(240, 250);
        sonnenStrahlen(300, 190);
        sonnenStrahlen(390, 190);
        sonnenStrahlen(225, 70);
        sonnenStrahlen(190, 15);
        sonnenStrahlen(280, 50);
        zeichneSonne();

        zuckerwatte(420, 75, 25, 0);
        zuckerwatte(455, 85, 25, 0);
        zuckerwatte(455, 65, 25, 0);
        zuckerwatte(475, 75, 25, 0);

        zuckerwatte(700, 100, 35, 0);
        zuckerwatte(740, 80, 35, 0);
        zuckerwatte(750, 110, 35, 0);
        zuckerwatte(770, 90, 25, 0);

        baumstamm(1200, 360, 50, 150);
        baumKrone(1170, 340, 35, 0);

        baumstamm(1300, 360, 50, 150);
        baumKrone(1270, 340, 35, 0);

        zeichneKorb(1250, 420, 7);

        drawSweetRandom();

        let imgData: ImageData = crc2.getImageData(0, 0, canvas.width, canvas.height);
        for (let i: number = 0; i < n; i++) {
            x[i] = 1250;
            y[i] = 420;
        }

        biene(1250, 420);
        window.setTimeout(animate, 20);
        canvas.addEventListener("click", animate);
    }

    function biene(_x: number, _y: number): void {

        crc2.beginPath();
        crc2.rect(_x, _y, 10, 10);
        crc2.closePath();
        crc2.fillStyle = " black ";
        crc2.fill();

        if (x[i].y > crc2.canvas.width + 5) {

            x[i].y = 0 - 5;

        }
    }


    function animate(): void {
        console.log("Animate called");

        crc2.putImageData(imgData, 0, 0);

        for (let i: number = 0; i < n; i++) {
            x[i] += Math.random() * 2 - 2;
            y[i] += Math.random() * 4 - 2;
            biene(x[i], y[i]);

        }


        window.setTimeout(animate, 20);
    }



}

function erstelleBienen(_menge: number): void {
    for (let i: number = 0; i < _menge; i++) {
        let x: number = Math.random(0, crc2.canvas.width);
        let y: number = Math.random(0, crc2.canvas.height);

        biene(x, y);
    }
}

function plusBiene(_event: MouseEvent): void {
    for (let i: number = 0; i < 1; i++) {
        let x: number = Math.random(_event.offsetX, _event.offsetX);
        let y: number = Math.random(_event.offsetY, _event.offsetY);

        erstelleBienen(x, y);
    }

    function drawSweetRandom(): void {
        let numberSweets: any = Math.floor((Math.random() * 30) + 5);
        let _x: number;
        let _y: number;
        let _p: number;
        let _radius: number;
        let _winkel: number;

        for (var i: number = 0; i < numberSweets; i++) {
            _x = Math.round((Math.random() * crc2.canvas.width) - 30);
            _y = Math.round((Math.random() * 200) + 520);
            _p = Math.round((Math.random() * 3) + 0);
            switch (_p) {
                case 0:
                    drawDropsBlume(_x, _y, 10, 0);
                    break;
                case 1:
                    drawBonBon(_x, _y, 12, 0);
                    break;
                case 2:
                    drawlollipop(_x, _y, 5, 0);
                    break;
                default:
                    break;
            }
        }


        function zeichneKorb(_x: number, _y: number, _radius: number): void {

            crc2.beginPath();
            crc2.rect(_x, _y, 25, 25);
            crc2.closePath();
            crc2.fillStyle = " brown ";
            crc2.fill();

            crc2.moveTo(0, 0);
            crc2.beginPath();
            crc2.arc(_x + 12, _y - 3, _radius, 0, 2 * Math.PI);
            crc2.fillStyle = "#FFFFFF";
            crc2.fill();
            crc2.closePath();

            crc2.moveTo(0, 0);
            crc2.beginPath();
            crc2.arc(_x + 2, _y + 4, _radius, 0, 2 * Math.PI);
            crc2.fillStyle = "#FFFFFF";
            crc2.fill();
            crc2.closePath();

            crc2.moveTo(0, 0);
            crc2.beginPath();
            crc2.arc(_x - 2, _y + 15, _radius, 0, 2 * Math.PI);
            crc2.fillStyle = "#FFFFFF";
            crc2.fill();
            crc2.closePath();

            crc2.moveTo(0, 0);
            crc2.beginPath();
            crc2.arc(_x + 1, _y + 24, _radius, 0, 2 * Math.PI);
            crc2.fillStyle = "#FFFFFF";
            crc2.fill();
            crc2.closePath();

            crc2.moveTo(0, 0);
            crc2.beginPath();
            crc2.arc(_x + 12, _y + 30, _radius, 0, 2 * Math.PI);
            crc2.fillStyle = "#FFFFFF";
            crc2.fill();
            crc2.closePath();

            crc2.moveTo(0, 0);
            crc2.beginPath();
            crc2.arc(_x + 18, _y + 35, _radius, 0, 2 * Math.PI);
            crc2.fillStyle = "#FFFFFF";
            crc2.fill();
            crc2.closePath();

        }

        function zeichneBerg(_x: number, _y: number, _farbe: any): void {

            crc2.beginPath();
            crc2.fillStyle = _farbe;
            crc2.strokeStyle = _farbe;
            crc2.moveTo(_x, _y);
            crc2.lineTo(_x + 200, _y - 350);
            crc2.lineTo(_x + 400, _y);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

        }

        function zeichneHimmel(): void {
            crc2.beginPath();
            crc2.rect(0, 0, crc2.canvas.width, crc2.canvas.height);
            crc2.closePath();
            crc2.fillStyle = "#C4E4F5";
            crc2.fill();

        }

        function zeichneSonne(): void {

            crc2.moveTo(0, 0);
            crc2.beginPath();
            crc2.arc(0, 0, 150, 0, 2 * Math.PI);
            crc2.fillStyle = "#ffff00";
            crc2.fill();
            crc2.strokeStyle = "#C4E4F5";
            crc2.lineWidth = 10;
            crc2.stroke();
            crc2.closePath();

        }

        function sonnenStrahlen(_x: number, _y: number): void {


            crc2.beginPath();
            crc2.moveTo(0, 0);
            crc2.lineTo(_x, _y);
            crc2.closePath();
            crc2.strokeStyle = "#ffff00";
            crc2.lineWidth = 5;
            crc2.stroke();
        }

        function machsGruen(): void {

            crc2.beginPath();
            crc2.rect(0, 510, crc2.canvas.width, 200);
            crc2.closePath();
            crc2.fillStyle = "    #7cfc00";
            crc2.fill();

        }

        function zuckerwatte(_x: number, _y: number, _radius: number, _winkel: number): void {

            crc2.moveTo(0, 0);
            crc2.beginPath();
            crc2.arc(_x, _y, _radius, _winkel, 2 * Math.PI);
            crc2.fillStyle = "#FFFFFF";
            crc2.fill();
            crc2.closePath();

        }

        function wolkenZusammen(_x: number, _y: number, _radius: number, _winkel: number): void {

            crc2.moveTo(0, 0);
            crc2.beginPath();
            crc2.arc(_x, _y, _radius, _winkel, 2 * Math.PI);
            crc2.fillStyle = "#FFFFFF";
            crc2.fill();
            crc2.closePath();

            crc2.moveTo(0, 0);
            crc2.beginPath();
            crc2.arc(_x + 15, _y + 10, _radius, _winkel, 2 * Math.PI);
            crc2.fillStyle = "#FFFFFF";
            crc2.fill();
            crc2.closePath();

            crc2.moveTo(0, 0);
            crc2.beginPath();
            crc2.arc(_x + 20, _y + 10, _radius, _winkel, 2 * Math.PI);
            crc2.fillStyle = "#FFFFFF";
            crc2.fill();
            crc2.closePath();

        }

        function baumstamm(_x: number, _y: number, _width: number, _height: number): void {

            crc2.beginPath();
            crc2.rect(_x, _y, _width, _height);
            crc2.closePath();
            crc2.fillStyle = " #ffa54f ";
            crc2.fill();

        }


        function drawDropsBlume(_x: number, _y: number, _radius: number, _winkel: number): void {

            crc2.moveTo(0, 0);
            crc2.beginPath();
            crc2.arc(_x - 3, _y + 10, _radius, _winkel, 2 * Math.PI);
            crc2.fillStyle = "#e066ff";
            crc2.fill();
            crc2.closePath();

            crc2.moveTo(0, 0);
            crc2.beginPath();
            crc2.arc(_x + 7, _y + 9, _radius, _winkel, 2 * Math.PI);
            crc2.fillStyle = "#ff6347";
            crc2.fill();
            crc2.closePath();

            crc2.moveTo(0, 0);
            crc2.beginPath();
            crc2.arc(_x + 10, _y, _radius, _winkel, 2 * Math.PI);
            crc2.fillStyle = "#e066ff";
            crc2.fill();
            crc2.closePath();

            crc2.moveTo(0, 0);
            crc2.beginPath();
            crc2.arc(_x + 3, _y - 8, _radius, _winkel, 2 * Math.PI);
            crc2.fillStyle = "#ff6347";
            crc2.fill();
            crc2.closePath();

            crc2.moveTo(0, 0);
            crc2.beginPath();
            crc2.arc(_x - 8, _y - 8, _radius, _winkel, 2 * Math.PI);
            crc2.fillStyle = "#e066ff";
            crc2.fill();
            crc2.closePath();

            crc2.moveTo(0, 0);
            crc2.beginPath();
            crc2.arc(_x - 12, _y, _radius, _winkel, 2 * Math.PI);
            crc2.fillStyle = "#ff6347";
            crc2.fill();
            crc2.closePath();

            crc2.moveTo(0, 0);
            crc2.beginPath();
            crc2.arc(_x, _y, _radius, _winkel, 2 * Math.PI);
            crc2.fillStyle = "#FFFFFF";
            crc2.fill();
            crc2.closePath();
        }

        function drawBonBon(_x: number, _y: number, _radius: number, _winkel: number): void {

            crc2.beginPath();

            crc2.fillStyle = " #c71585 ";
            crc2.strokeStyle = "#c71585";
            crc2.moveTo(_x, _y);
            crc2.lineTo(_x + 15, _y - 15);
            crc2.lineTo(_x + 15, _y + 15);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.beginPath();
            crc2.fillStyle = " #c71585 ";
            crc2.strokeStyle = "#c71585";
            crc2.moveTo(_x, _y);
            crc2.lineTo(_x - 15, _y + 15);
            crc2.lineTo(_x - 15, _y - 15);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.moveTo(0, 0);
            crc2.beginPath();
            crc2.arc(_x, _y, _radius, _winkel, 2 * Math.PI);
            crc2.fillStyle = "#ff69b4";
            crc2.fill();
            crc2.closePath();


        }

        function drawlollipop(_x: number, _y: number, _radius: number, _winkel: number): void {

            crc2.moveTo(0, 0);
            crc2.beginPath();
            crc2.arc(_x, _y, _radius + 20, _winkel, 2 * Math.PI);
            crc2.fillStyle = "#8b0000";
            crc2.fill();
            crc2.closePath();

            crc2.moveTo(0, 0);
            crc2.beginPath();
            crc2.arc(_x, _y, _radius + 15, _winkel, 2 * Math.PI);
            crc2.fillStyle = "#FFFFFF";
            crc2.fill();
            crc2.closePath();

            crc2.moveTo(0, 0);
            crc2.beginPath();
            crc2.arc(_x, _y, _radius + 10, _winkel, 2 * Math.PI);
            crc2.fillStyle = "#8b0000";
            crc2.fill();
            crc2.closePath();

            crc2.moveTo(0, 0);
            crc2.beginPath();
            crc2.arc(_x, _y, _radius + 5, _winkel, 2 * Math.PI);
            crc2.fillStyle = "#FFFFFF";
            crc2.fill();
            crc2.closePath();

            crc2.moveTo(0, 0);
            crc2.beginPath();
            crc2.arc(_x, _y, _radius, _winkel, 2 * Math.PI);
            crc2.fillStyle = "#8b0000";
            crc2.fill();
            crc2.closePath();


        }

        function baumKrone(_x: number, _y: number, _radius: number, _winkel: number): void {

            crc2.moveTo(0, 0);
            crc2.beginPath();
            crc2.arc(_x, _y, _radius, _winkel, 2 * Math.PI);
            crc2.fillStyle = "#008b00";
            crc2.fill();
            crc2.closePath();

            crc2.moveTo(0, 0);
            crc2.beginPath();
            crc2.arc(_x + 20, _y - 20, _radius, _winkel, 2 * Math.PI);
            crc2.fillStyle = "#008b00";
            crc2.fill();
            crc2.closePath();

            crc2.moveTo(0, 0);
            crc2.beginPath();
            crc2.arc(_x + 20, _y + 20, _radius, _winkel, 2 * Math.PI);
            crc2.fillStyle = "#008b00";
            crc2.fill();
            crc2.closePath();

            crc2.moveTo(0, 0);
            crc2.beginPath();
            crc2.arc(_x + 30, _y + 35, _radius, _winkel, 2 * Math.PI);
            crc2.fillStyle = "#008b00";
            crc2.fill();
            crc2.closePath();

            crc2.moveTo(0, 0);
            crc2.beginPath();
            crc2.arc(_x + 30, _y - 30, _radius, _winkel, 2 * Math.PI);
            crc2.fillStyle = "#008b00";
            crc2.fill();
            crc2.closePath();

            crc2.moveTo(0, 0);
            crc2.beginPath();
            crc2.arc(_x + 50, _y - 50, _radius, _winkel, 2 * Math.PI);
            crc2.fillStyle = "#008b00";
            crc2.fill();
            crc2.closePath();

            crc2.moveTo(0, 0);
            crc2.beginPath();
            crc2.arc(_x + 80, _y - 30, _radius, _winkel, 2 * Math.PI);
            crc2.fillStyle = "#008b00";
            crc2.fill();
            crc2.closePath();

            crc2.moveTo(0, 0);
            crc2.beginPath();
            crc2.arc(_x + 45, _y, _radius, _winkel, 2 * Math.PI);
            crc2.fillStyle = "#008b00";
            crc2.fill();
            crc2.closePath();

            crc2.moveTo(0, 0);
            crc2.beginPath();
            crc2.arc(_x + 90, _y, _radius, _winkel, 2 * Math.PI);
            crc2.fillStyle = "#008b00";
            crc2.fill();
            crc2.closePath();

            crc2.moveTo(0, 0);
            crc2.beginPath();
            crc2.arc(_x + 80, _y + 30, _radius, _winkel, 2 * Math.PI);
            crc2.fillStyle = "#008b00";
            crc2.fill();
            crc2.closePath();
        }
    }