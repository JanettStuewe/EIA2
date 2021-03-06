namespace Aufgabe8_Wiese {

    export class Bee { //Superklasse
        x: number;
        y: number;
        size: number;
        color: string;
        geschwindigkeit: boolean;


        constructor(_x: number, _y: number, _geschwindigkeit: boolean) {
            this.x = _x;
            this.y = _y;
            this.move(); //beginnt direkt bei erstellung durch new und aufruf dieser klasse  Bee
            this.setRandomSize();
            this.setRandomColor();
        }

        setRandom(): void {
            this.setRandomPosition();
            this.setRandomSize();
            this.setRandomColor();
        }

        setRandomPosition(): void {
            this.x = Math.random() * 200; // m�gliche Schreibweise, hier sind variable Schl�ssel m�glich
            this.y = Math.random() * 200; // andere m�gliche Schreibweise mit literalem Schl�ssel    
        }

        setRandomSize(): void {
            this.size = Math.random() * 1 + 2;
        }

        setRandomColor(): void {
            this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
        }

        move(): void {
            // let i: number = 0;
            if (this.geschwindigkeit == true) {
                this.x += Math.random() * 5 - 3;
                this.y += Math.random() * 4 - 2;
            }
            else {
                this.x += Math.random() * 4 - 3;
                this.y += Math.random() * 4 - 2;
                //  let s: Bee = (alleBienen[i]);  
            }
        }

        start(): void {
            this.x = 950;
            this.y = 550;
        }

        overflow(): void {
            if (this.x >= 995)    //l�sst Bienen bei Rand�berschreitung wieder erscheinen
                this.x = -5;
            if (this.y <= 3)
                this.y = 597;
            if (this.x < -5)
                this.x = 995;
            if (this.y > 597)
                this.y = 3;
        }

        drawBiene(s: Bee): void {
            crc2.fillStyle = this.color;
            crc2.beginPath();
            crc2.arc(this.x, this.y, this.size, 0 * Math.PI, 2 * Math.PI); //oberste Kreis
            crc2.fill();
            crc2.closePath();
            crc2.strokeStyle = "black";
            crc2.moveTo(this.x + 2, this.y + 2);
            crc2.lineTo(this.x, this.y);
            crc2.stroke();
        } //drawBiene


    } //classes
} //namespace