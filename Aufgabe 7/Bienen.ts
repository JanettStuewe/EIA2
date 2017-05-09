namespace Bienenschwarm_Classes {

    export class Square {
        x: number;
        y: number;
        size: number;
        color: string;
        geschwindigkeit: boolean;



        setRandom: void {
            setRandomPosiotin();
            setRandomSize();
            setRandomColor();
        }

        setRandomPosiotin: void {
            this.x = Math.random() * 200; // mögliche Schreibweise, hier sind variable Schlüssel möglich
            this.y = Math.random() * 200; // andere mögliche Schreibweise mit literalem Schlüssel    
        }

        setRandomSize: void {
            this.size = Math.random() * 1 + 2;    
        }

        setRandomColor: void {
            this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
        }




        speed(): void {
            if (i % 2 == 0) {
                this.geschwindigkeit = true;
            }
            else {
                this.geschwindigkeit = false;
            }
        }
        setRandomSpeed: void {
            if(this.geschwindigkeit == true) {
        this.x += Math.random() * 5 - 3;
        this.y += Math.random() * 4 - 2;
    }
            else {
        this.x += Math.random() * 4 - 3;
        this.y += Math.random() * 4 - 2;
        alleBienen[i] = s;
    }
}




start: void {
    this.x = 950;
    this.y = 550;    
}

overflow: void {
    if(this.x >= 995)    //lässt Bienen bei Randüberschreitung wieder erscheinen
    this.x = -5;
    if(this.y <= 3)
    this.y = 597;
    if(this.x < -5)
    this.x = 995;
    if(this.y > 597)
    this.y = 3;    
}



function drawBiene(s: Square = new Square()): void {
    crc2.fillStyle = this.color;
    crc2.beginPath();
    crc2.arc(this.x, this.y, this.size, 0 * Math.PI, 2 * Math.PI); //oberste Kreis
    crc2.fill();
    crc2.closePath();
    crc2.strokeStyle = "black";
    crc2.moveTo(this.x + 2, this.y + 2);
    crc2.lineTo(this.x, this.y);
    crc2.stroke();
}
}
}