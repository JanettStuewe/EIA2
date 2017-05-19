var Aufgabe8_Wiese;
(function (Aufgabe8_Wiese) {
    var Bee = (function () {
        function Bee(_x, _y, _geschwindigkeit) {
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
            Aufgabe8_Wiese.crc2.fillStyle = this.color;
            Aufgabe8_Wiese.crc2.beginPath();
            Aufgabe8_Wiese.crc2.arc(this.x, this.y, this.size, 0 * Math.PI, 2 * Math.PI); //oberste Kreis
            Aufgabe8_Wiese.crc2.fill();
            Aufgabe8_Wiese.crc2.closePath();
            Aufgabe8_Wiese.crc2.strokeStyle = "black";
            Aufgabe8_Wiese.crc2.moveTo(this.x + 2, this.y + 2);
            Aufgabe8_Wiese.crc2.lineTo(this.x, this.y);
            Aufgabe8_Wiese.crc2.stroke();
        }; //drawBiene
        return Bee;
    }());
    Aufgabe8_Wiese.Bee = Bee; //classes
})(Aufgabe8_Wiese || (Aufgabe8_Wiese = {})); //namespace
//# sourceMappingURL=Bienen.js.map