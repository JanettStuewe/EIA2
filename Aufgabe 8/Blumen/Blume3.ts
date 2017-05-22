namespace Aufgabe8_Wiese {

    export class Blume3 extends Blume {

        constructor() {
            super();
            this.drawBlume3();
        }
        drawBlume3(): void {
            //Stiel
            crc2.beginPath();
            crc2.strokeStyle = "#006400";
            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x, this.y + 50);
            crc2.stroke();
            crc2.closePath();
            //Stielblatt1
            crc2.beginPath();
            crc2.strokeStyle = "#006400";
            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x, this.y + 36);       //obere Punkt
            crc2.lineTo(this.x + 10, this.y + 27);   //Blattspitze
            crc2.lineTo(this.x, this.y + 43);        //untere Punkt
            crc2.stroke();
            crc2.closePath();
            crc2.fillStyle = "#006400";
            crc2.fill();
            //Stielblatt2
            crc2.beginPath();
            crc2.strokeStyle = "#006400";
            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x, this.y + 36);       //obere Punkt
            crc2.lineTo(this.x - 10, this.y + 25);   //Blattspitze
            crc2.lineTo(this.x, this.y + 43);        //untere Punkt
            crc2.stroke();
            crc2.closePath();
            crc2.fillStyle = "#006400";
            crc2.fill();
            //Blüte
            crc2.beginPath();
            crc2.fillStyle = "#DF7CF3";
            crc2.strokeStyle = "white";
            crc2.arc(this.x, this.y, 10, 0 * Math.PI, 2 * Math.PI);
            crc2.arc(this.x - 10, this.y, 7, 0 * Math.PI, 2 * Math.PI);
            crc2.arc(this.x + 10, this.y, 7, 0 * Math.PI, 2 * Math.PI);
            crc2.arc(this.x, this.y + 10, 7, 0 * Math.PI, 2 * Math.PI);
            crc2.arc(this.x, this.y - 10, 7, 0 * Math.PI, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.fillStyle = "#722F80";
            crc2.arc(this.x, this.y, 5, 0 * Math.PI, 2 * Math.PI);
            crc2.fill();
            crc2.stroke();
            crc2.closePath();

        }
    }
}