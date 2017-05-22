namespace Aufgabe8_Wiese {

    export class HonigBiene extends Bee {
        target: Position;

        constructor(_x: number, _y: number, _geschwindigkeit: boolean, _targetX: number, _targetY: number) {
            super(_x, _y, _geschwindigkeit );
            this.target = {
                x: _targetX,
                y: _targetY
            };
}

        move(): void {
            let dx: number = this.target.x - this.position.x;
            let dy: number = this.target.y - this.position.y;
            let d: number = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));

            if (d >= 2) {
                this.position.x += signum(dx);
                this.position.y += signum(dy);
            }
        }
    }
}