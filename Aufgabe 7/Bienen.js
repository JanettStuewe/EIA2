var Bienenschwarm_Classes;
(function (Bienenschwarm_Classes) {
    var Bee = (function () {
        function Bee(_x, _y, _geschwindigkeit) {
            this.x = _x;
            this.y = _y;
            this.geschwindigkeit = _geschwindigkeit;
            this.setRandomSpeed();
            this.setRandomSize();
            this.setRandomColor();
        }
        Bee.prototype.setRandom = function () {
            this.setRandomPosition();
            this.setRandomSize();
            this.setRandomColor();
        };
        Bee.prototype.setRandomPosition = function () {
            this.x = Math.random() * 200; // m�gliche Schreibweise, hier sind variable Schl�ssel m�glich
            this.y = Math.random() * 200; // andere m�gliche Schreibweise mit literalem Schl�ssel    
        };
        Bee.prototype.setRandomSize = function () {
            this.size = Math.random() * 1 + 2;
        };
        Bee.prototype.setRandomColor = function () {
            this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
        };
        Bee.prototype.setRandomSpeed = function () {
            // let i: number = 0;
            if (this.geschwindigkeit == true) {
                this.x += Math.random() * 5 - 3;
                this.y += Math.random() * 4 - 2;
            }
            else {
                this.x += Math.random() * 4 - 3;
                this.y += Math.random() * 4 - 2;
            }
        };
        Bee.prototype.start = function () {
            this.x = 950;
            this.y = 550;
        };
        Bee.prototype.overflow = function () {
            if (this.x >= 995)
                this.x = -5;
            if (this.y <= 3)
                this.y = 597;
            if (this.x < -5)
                this.x = 995;
            if (this.y > 597)
                this.y = 3;
        };
        Bee.prototype.drawBiene = function (s) {
            Bienenschwarm_Classes.crc2.fillStyle = this.color;
            Bienenschwarm_Classes.crc2.beginPath();
            Bienenschwarm_Classes.crc2.arc(this.x, this.y, this.size, 0 * Math.PI, 2 * Math.PI); //oberste Kreis
            Bienenschwarm_Classes.crc2.fill();
            Bienenschwarm_Classes.crc2.closePath();
            Bienenschwarm_Classes.crc2.strokeStyle = "black";
            Bienenschwarm_Classes.crc2.moveTo(this.x + 2, this.y + 2);
            Bienenschwarm_Classes.crc2.lineTo(this.x, this.y);
            Bienenschwarm_Classes.crc2.stroke();
        }; //drawBiene
        return Bee;
    }());
    Bienenschwarm_Classes.Bee = Bee; //classes
})(Bienenschwarm_Classes || (Bienenschwarm_Classes = {})); //namespace
//# sourceMappingURL=Bienen.js.map