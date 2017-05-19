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
            // X Position des Ziels minus eigene X Position ...
            let dx: number = this.target.x - this.position.x;
            // ... dasselbe mit Y ...
            let dy: number = this.target.y - this.position.y;
            // ... ergibt ein rechtwinkliges Dreieck dessen Hypotenuse die Distanz zum Ziel darstellt
            let d: number = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));

            if (d >= 2) {
                // Erklärung signum in main.ts ganz unten.
                // Ist dX positiv müssen wir uns in positive X Richtung bewegen um ins Ziel zu kommen
                // Umgekehrt ist dx negativ müssen wir in negative X Richtung wandern.
                this.position.x += signum(dx);
                // Selbes Spiel in Y Richtung
                this.position.y += signum(dy);
                // Malt euch am Besten auf kariertem Papier ein paar Beispiele auf und macht euch so die Geometrie
                // hinter der ganzen Sache verständlich
            }
        }
    }
}