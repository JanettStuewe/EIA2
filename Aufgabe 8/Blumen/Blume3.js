var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Aufgabe8_Wiese;
(function (Aufgabe8_Wiese) {
    var Blume3 = (function (_super) {
        __extends(Blume3, _super);
        function Blume3() {
            _super.call(this);
            this.drawBlume3();
        }
        Blume3.prototype.drawBlume3 = function () {
            //Stiel
            Aufgabe8_Wiese.crc2.beginPath();
            Aufgabe8_Wiese.crc2.strokeStyle = "#006400";
            Aufgabe8_Wiese.crc2.moveTo(this.x, this.y);
            Aufgabe8_Wiese.crc2.lineTo(this.x, this.y + 50);
            Aufgabe8_Wiese.crc2.stroke();
            Aufgabe8_Wiese.crc2.closePath();
            //Stielblatt1
            Aufgabe8_Wiese.crc2.beginPath();
            Aufgabe8_Wiese.crc2.strokeStyle = "#006400";
            Aufgabe8_Wiese.crc2.moveTo(this.x, this.y);
            Aufgabe8_Wiese.crc2.lineTo(this.x, this.y + 36); //obere Punkt
            Aufgabe8_Wiese.crc2.lineTo(this.x + 10, this.y + 27); //Blattspitze
            Aufgabe8_Wiese.crc2.lineTo(this.x, this.y + 43); //untere Punkt
            Aufgabe8_Wiese.crc2.stroke();
            Aufgabe8_Wiese.crc2.closePath();
            Aufgabe8_Wiese.crc2.fillStyle = "#006400";
            Aufgabe8_Wiese.crc2.fill();
            //Stielblatt2
            Aufgabe8_Wiese.crc2.beginPath();
            Aufgabe8_Wiese.crc2.strokeStyle = "#006400";
            Aufgabe8_Wiese.crc2.moveTo(this.x, this.y);
            Aufgabe8_Wiese.crc2.lineTo(this.x, this.y + 36); //obere Punkt
            Aufgabe8_Wiese.crc2.lineTo(this.x - 10, this.y + 25); //Blattspitze
            Aufgabe8_Wiese.crc2.lineTo(this.x, this.y + 43); //untere Punkt
            Aufgabe8_Wiese.crc2.stroke();
            Aufgabe8_Wiese.crc2.closePath();
            Aufgabe8_Wiese.crc2.fillStyle = "#006400";
            Aufgabe8_Wiese.crc2.fill();
            //Bl�te
            Aufgabe8_Wiese.crc2.beginPath();
            Aufgabe8_Wiese.crc2.fillStyle = "#DF7CF3";
            Aufgabe8_Wiese.crc2.strokeStyle = "white";
            Aufgabe8_Wiese.crc2.arc(this.x, this.y, 10, 0 * Math.PI, 2 * Math.PI);
            Aufgabe8_Wiese.crc2.arc(this.x - 10, this.y, 7, 0 * Math.PI, 2 * Math.PI);
            Aufgabe8_Wiese.crc2.arc(this.x + 10, this.y, 7, 0 * Math.PI, 2 * Math.PI);
            Aufgabe8_Wiese.crc2.arc(this.x, this.y + 10, 7, 0 * Math.PI, 2 * Math.PI);
            Aufgabe8_Wiese.crc2.arc(this.x, this.y - 10, 7, 0 * Math.PI, 2 * Math.PI);
            Aufgabe8_Wiese.crc2.closePath();
            Aufgabe8_Wiese.crc2.fill();
            Aufgabe8_Wiese.crc2.beginPath();
            Aufgabe8_Wiese.crc2.fillStyle = "#722F80";
            Aufgabe8_Wiese.crc2.arc(this.x, this.y, 5, 0 * Math.PI, 2 * Math.PI);
            Aufgabe8_Wiese.crc2.fill();
            Aufgabe8_Wiese.crc2.stroke();
            Aufgabe8_Wiese.crc2.closePath();
        };
        return Blume3;
    }(Aufgabe8_Wiese.Blume));
    Aufgabe8_Wiese.Blume3 = Blume3;
})(Aufgabe8_Wiese || (Aufgabe8_Wiese = {}));
//# sourceMappingURL=Blume3.js.map