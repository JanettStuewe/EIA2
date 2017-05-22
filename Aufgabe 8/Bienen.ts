namespace Aufgabe8_Wiese {

    export class Bee {
        size: number;
        color: string;
        geschwindigkeit: boolean;
        position: Position;


        constructor(_x: number, _y: number, _geschwindigkeit: boolean) {
            this.position = {
                x: _x,
                y: _y
            };
            this.setRandomSpeed();
            this.setRandomSize();
            this.setRandomColor();
        }

        setRandom(): void {
            this.setRandomPosition();
            this.setRandomSize();
            this.setRandomColor();
        }

        setRandomPosition(): void {
            this.position.x = Math.random() * 200; // mögliche Schreibweise, hier sind variable Schlüssel möglich
            this.position.y = Math.random() * 200; // andere mögliche Schreibweise mit literalem Schlüssel    
        }

        setRandomSize(): void {
            this.size = Math.random() * 1 + 2;
        }

        setRandomColor(): void {
            this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
        }

        setRandomSpeed(): void {
            // let i: number = 0;
            if (this.geschwindigkeit == true) {
                this.position.x += Math.random() * 5 - 3;
                this.position.y += Math.random() * 4 - 2;
            }
            else {
                this.position.x += Math.random() * 4 - 3;
                this.position.y += Math.random() * 4 - 2;
                //  let s: Bee = (alleBienen[i]);  
            }
        }




        start(): void {
            this.position.x = 950;
            this.position.y = 550;
        }

        overflow(): void {
            if (this.position.x >= 995)    //lässt Bienen bei Randüberschreitung wieder erscheinen
                this.position.x = -5;
            if (this.position.y <= 3)
                this.position.y = 597;
            if (this.position.x < -5)
                this.position.x = 995;
            if (this.position.y > 597)
                this.position.y = 3;
        }

        drawBiene(s: Bee): void {
            crc2.fillStyle = this.color;
            crc2.beginPath();
            crc2.arc(this.position.x, this.position.y, this.size, 0 * Math.PI, 2 * Math.PI); //oberste Kreis
            crc2.fill();
            crc2.closePath();
            crc2.strokeStyle = "black";
            crc2.moveTo(this.position.x + 2, this.position.y + 2);
            crc2.lineTo(this.position.x, this.position.y);
            crc2.stroke();
        } //drawBiene
        
       
} //classes
} //namespace