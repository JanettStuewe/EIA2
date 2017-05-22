namespace Aufgabe8_Wiese {

    export class Blume {
        x: number;
        y: number;
        type: string;


        draw(): void {};


        setRandomFlower(): void {
            let sort: number = Math.round(Math.random() * 2);
            this.x = Math.floor(Math.random() * (700 - 300)) + 300;
            this.y = Math.floor(Math.random() * (600 - 550)) + 550;
            this.type = sorts[sort];
            this.draw();
        }//setRandomFlower
    }//class
}//namespace