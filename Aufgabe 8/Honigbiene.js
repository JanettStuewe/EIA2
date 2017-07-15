var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Aufgabe8_Wiese;
(function (Aufgabe8_Wiese) {
    var HonigBiene = (function (_super) {
        __extends(HonigBiene, _super);
        function HonigBiene(_x, _y, _geschwindigkeit) {
            _super.call(this, _x, _y, _geschwindigkeit);
            this.speed = 0.02;
            this.start(); //greift auf superklasse zu
            this.setRandomFlowerTarget();
        }
        HonigBiene.prototype.setRandomFlowerTarget = function () {
            var flowertarget = Math.round(Math.random() * (Aufgabe8_Wiese.alleBlumen.length - 1));
            this.xtarget = Aufgabe8_Wiese.alleBlumen[flowertarget].x;
            this.ytarget = Aufgabe8_Wiese.alleBlumen[flowertarget].y;
            console.log(Aufgabe8_Wiese.alleBlumen[flowertarget].x);
        };
        HonigBiene.prototype.move = function () {
            var xDiff = this.xtarget - this.x - 5;
            var yDiff = this.ytarget - this.y - 15;
            if (Math.abs(xDiff) < 1 && Math.abs(yDiff) < 1) {
                this.setRandomFlowerTarget();
                console.log("Angeflogen");
            }
            else {
                this.x += xDiff * this.speed;
                this.y += yDiff * this.speed;
            }
        };
        HonigBiene.prototype.drawBiene = function (s) {
            Aufgabe8_Wiese.crc2.fillStyle = "white";
            Aufgabe8_Wiese.crc2.beginPath();
            Aufgabe8_Wiese.crc2.arc(this.x, this.y, 4, 0 * Math.PI, 2 * Math.PI); //oberste Kreis
            Aufgabe8_Wiese.crc2.fill();
            Aufgabe8_Wiese.crc2.closePath();
            Aufgabe8_Wiese.crc2.strokeStyle = "black";
            Aufgabe8_Wiese.crc2.moveTo(this.x + 2, this.y + 2);
            Aufgabe8_Wiese.crc2.lineTo(this.x, this.y);
            Aufgabe8_Wiese.crc2.stroke();
        }; //drawHonigBiene  
        return HonigBiene;
    }(Aufgabe8_Wiese.Bee));
    Aufgabe8_Wiese.HonigBiene = HonigBiene;
})(Aufgabe8_Wiese || (Aufgabe8_Wiese = {}));
//# sourceMappingURL=Honigbiene.js.map