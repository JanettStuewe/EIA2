namespace Bienenschwarm_Classes {

    export class Square {
        x: number;
        y: number;
        size: number;
        color: string;
        geschwindigkeit: boolean;

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
        if(i % 2 == 0) {
            this.geschwindigkeit = true;
        }
            else {
            this.geschwindigkeit = false;
        }
    }

}