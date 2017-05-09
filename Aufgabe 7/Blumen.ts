namespace Bienenschwarm_Classes {

    export class Square {
        _x: number;
        _y: number;
        _stalkColor: string;
        _petalColor: string;
        _fillColor: string;
        _fillColor1: string;

        ////////////////////////////////BLUMEN/////////////////////////////////////////
        function drawBlumeTulpe(_x: number, _y: number, _stalkColor: string, _petalColor: string): void {
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
        crc2.lineTo(_x, _y - 13);       //obere Punkt
        crc2.lineTo(_x - 7, _y - 26);   //Blattspitze
        crc2.lineTo(_x, _y - 5);        //untere Punkt
        crc2.stroke();
        crc2.closePath();
        crc2.fillStyle = _stalkColor;
        crc2.fill();
        //Stielblatt2
        crc2.beginPath();
        crc2.strokeStyle = _stalkColor;
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x, _y - 12);       //obere Punkt
        crc2.lineTo(_x + 7, _y - 20);   //Blattspitze
        crc2.lineTo(_x, _y - 5);        //untere Punkt
        crc2.stroke();
        crc2.closePath();
        crc2.fillStyle = _stalkColor;
        crc2.fill();
        //TulpenBlütenform
        crc2.beginPath();
        crc2.strokeStyle = "white";     //umrandet die Tulpe weiss
        crc2.arc(_x, _y - 40, 9, 0 * Math.PI, 1 * Math.PI); //Rundung der Tulpe
        crc2.lineTo(_x - 10, _y - 53);  //links oben der Punkt
        crc2.lineTo(_x - 5, _y - 45);
        crc2.lineTo(_x, _y - 53);       //Spitze in der Mitte
        crc2.lineTo(_x + 5, _y - 45);
        crc2.lineTo(_x + 10, _y - 53);  //rechts der Punkt
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = _petalColor;
        crc2.fill();
    }
    function drawBlumeBlue(_x: number, _y: number, _fillColor: string, _fillColor1: string, _stalkColor: string): void {
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
        crc2.lineTo(_x, _y + 30);       //obere Punkt
        crc2.lineTo(_x - 10, _y + 25);   //Blattspitze
        crc2.lineTo(_x, _y + 43);        //untere Punkt
        crc2.stroke();
        crc2.closePath();
        crc2.fillStyle = _stalkColor;
        crc2.fill();
        //Blüte
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
    function drawBlume3(_x: number, _y: number, _fillColor: string, _fillColor1: string, _stalkColor: string): void {
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
        crc2.lineTo(_x, _y + 36);       //obere Punkt
        crc2.lineTo(_x + 10, _y + 27);   //Blattspitze
        crc2.lineTo(_x, _y + 43);        //untere Punkt
        crc2.stroke();
        crc2.closePath();
        crc2.fillStyle = _stalkColor;
        crc2.fill();
        //Stielblatt2
        crc2.beginPath();
        crc2.strokeStyle = _stalkColor;
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x, _y + 36);       //obere Punkt
        crc2.lineTo(_x - 10, _y + 25);   //Blattspitze
        crc2.lineTo(_x, _y + 43);        //untere Punkt
        crc2.stroke();
        crc2.closePath();
        crc2.fillStyle = _stalkColor;
        crc2.fill();
        //Blüte
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

    setRandomFlower(): void {

        let flowerField: number = Math.floor((Math.random() * 3) + 0);
        let _x: number = Math.floor(Math.random() * (700 - 300)) + 300;
        let _y: number = Math.floor(Math.random() * (600 - 550)) + 550;

        switch(flowerField) {
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
    };

    drawFlower():void {}

}
}