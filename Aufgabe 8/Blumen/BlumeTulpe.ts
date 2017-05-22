namespace Aufgabe8_Wiese {

    export class BlumeTulpe extends Blume {

        constructor() {
            super();
            this.drawBlumeTulpe();
        }
        
       drawBlumeTulpe(): void {
            //Stiel
            crc2.beginPath();
            crc2.strokeStyle = "#006400";
            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x, this.y - 32);
            crc2.stroke();
            crc2.closePath();
            //Stielblatt1
            crc2.beginPath();
            crc2.strokeStyle = "#006400";
            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x, this.y - 13);       //obere Punkt
            crc2.lineTo(this.x - 7, this.y - 26);   //Blattspitze
            crc2.lineTo(this.x, this.y - 5);        //untere Punkt
            crc2.stroke();
            crc2.closePath();
            crc2.fillStyle = "#006400";
            crc2.fill();
            //Stielblatt2
            crc2.beginPath();
            crc2.strokeStyle = "#006400";
            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x, this.y - 12);       //obere Punkt
            crc2.lineTo(this.x + 7, this.y - 20);   //Blattspitze
            crc2.lineTo(this.x, this.y - 5);        //untere Punkt
            crc2.stroke();
            crc2.closePath();
            crc2.fillStyle = "#006400";
            crc2.fill();
            //TulpenBlütenform
            crc2.beginPath();
            crc2.strokeStyle = "white";     //umrandet die Tulpe weiss
            crc2.arc(this.x, this.y - 40, 9, 0 * Math.PI, 1 * Math.PI); //Rundung der Tulpe
            crc2.lineTo(this.x - 10, this.y - 53);  //links oben der Punkt
            crc2.lineTo(this.x - 5, this.y - 45);
            crc2.lineTo(this.x, this.y - 53);       //Spitze in der Mitte
            crc2.lineTo(this.x + 5, this.y - 45);
            crc2.lineTo(this.x + 10, this.y - 53);  //rechts der Punkt
            crc2.closePath();
            crc2.stroke();
            crc2.fillStyle = "red";
            crc2.fill();
        }
    }
}