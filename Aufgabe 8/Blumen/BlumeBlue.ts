namespace Aufgabe8_Wiese {

    export class BlumeBlue extends Blume {

        constructor() {
            super();
            this.drawBlumeBlue();
        }
        drawBlumeBlue(): void {
            //Stiel
            crc2.beginPath();
            crc2.strokeStyle = "#006400";
            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x, this.y + 50);
            crc2.stroke();
            crc2.closePath();
            //Stielblatt
            crc2.beginPath();
            crc2.strokeStyle = "#006400";
            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x, this.y + 30);       //obere Punkt
            crc2.lineTo(this.x - 10, this.y + 25);   //Blattspitze
            crc2.lineTo(this.x, this.y + 43);        //untere Punkt
            crc2.stroke();
            crc2.closePath();
            crc2.fillStyle = "#006400";
            crc2.fill();
            //Blüte
            crc2.beginPath();
            crc2.fillStyle = "blue";
            crc2.strokeStyle = "#66ccff";
            crc2.arc(this.x, this.y, 10, 0 * Math.PI, 2 * Math.PI);
            crc2.arc(this.x - 10, this.y, 7, 0 * Math.PI, 2 * Math.PI);
            crc2.arc(this.x + 10, this.y, 7, 0 * Math.PI, 2 * Math.PI);
            crc2.arc(this.x, this.y + 10, 7, 0 * Math.PI, 2 * Math.PI);
            crc2.arc(this.x, this.y - 10, 7, 0 * Math.PI, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.fillStyle = "white";
            crc2.arc(this.x, this.y, 5, 0 * Math.PI, 2 * Math.PI);
            crc2.fill();
            crc2.stroke();
            crc2.closePath();

        }
    }
}