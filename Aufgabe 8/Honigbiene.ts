namespace Aufgabe8_Wiese {

    export class HonigBiene extends Bee { //Subklasse

        xtarget: number;
        ytarget: number;
        speed: number;

        constructor(_x: number, _y: number, _geschwindigkeit: boolean) {
            super(_x, _y, _geschwindigkeit);
            this.speed = 0.02;
            this.start(); //greift auf superklasse zu
            this.setRandomFlowerTarget();
        }

        setRandomFlowerTarget(): void {
            let flowertarget: number = Math.round(Math.random() * (alleBlumen.length - 1));
            this.xtarget = alleBlumen[flowertarget].x;
            this.ytarget = alleBlumen[flowertarget].y;
            console.log(alleBlumen[flowertarget].x);
        }
        
        move(): void {
            let xDiff: number = this.xtarget - this.x - 5;
            let yDiff: number = this.ytarget - this.y - 15;
            if (Math.abs(xDiff) < 1 && Math.abs(yDiff) < 1) {
                this.setRandomFlowerTarget();
                console.log("Angeflogen");
            }
            else {
                this.x += xDiff * this.speed;
                this.y += yDiff * this.speed;
            }

        }

        drawBiene(s: Bee): void {
            crc2.fillStyle = "white";
            crc2.beginPath();
            crc2.arc(this.x, this.y, 4, 0 * Math.PI, 2 * Math.PI); //oberste Kreis
            crc2.fill();
            crc2.closePath();
            crc2.strokeStyle = "black";
            crc2.moveTo(this.x + 2, this.y + 2);
            crc2.lineTo(this.x, this.y);
            crc2.stroke();
        } //drawHonigBiene  
    }
}