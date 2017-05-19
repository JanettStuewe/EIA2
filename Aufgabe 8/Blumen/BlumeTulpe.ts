namespace Aufgabe8_Wiese {

    export class Blumen extends Blume {
        x: number;
        y: number;
        type: string;

        constructor(_x: number, _y: number, _type: string) {
            super (_x, _y, _type);
            this.x = _x;
            this.y = _y;
            this.type = _type;
        }
    }
}