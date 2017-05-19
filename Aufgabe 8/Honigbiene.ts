namespace Aufgabe8_Wiese {

    export class HonigBiene extends Bee {
        xTarget: number;
        yTarget: number;
        sizeTarget: number;

        constructor(_x: number, _y: number, _geschwindigkeit: boolean) {
            super(_x, _y, _geschwindigkeit);
            this.xTarget = _x;
            this.yTarget = _y;
            this.setRandomSpeed();
            this.setRandomSize();
            this.setRandomColor();
        }
    }
}