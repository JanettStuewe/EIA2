namespace Aufgabe8_Wiese {

    export class Blume {
        x: number;
        y: number;
        type: string;

        constructor(_x: number, _y: number, _type: string) {
            this.x = _x;
            this.y = _y;
            this.type = _type;
        }

        draw(): void {
            let flowerField: number = Math.floor((Math.random() * 3) + 0);
            switch (flowerField) {
                case 0:
                    this.drawBlumeTulpe();
                    break;
                case 1:
                    this.drawBlumeBlue();
                    break;
                case 2:
                    this.drawBlume3();
                    break;
            }
        }

        ////////////////////////////////BLUMEN/////////////////////////////////////////
        
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


        setRandomFlower(): void {
            let sort: number = Math.round(Math.random() * 2);
            this.x = Math.floor(Math.random() * (700 - 300)) + 300;
            this.y = Math.floor(Math.random() * (600 - 550)) + 550;
            this.type = sorts[sort];
            this.draw();
        }//setRandomFlower
    }//class
}//namespace