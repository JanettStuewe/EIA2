var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Aufgabe8_Wiese;
(function (Aufgabe8_Wiese) {
    var BlumeBlue = (function (_super) {
        __extends(BlumeBlue, _super);
        function BlumeBlue() {
            _super.call(this);
            this.drawBlumeBlue();
        }
        BlumeBlue.prototype.drawBlumeBlue = function () {
            //Stiel
            Aufgabe8_Wiese.crc2.beginPath();
            Aufgabe8_Wiese.crc2.strokeStyle = "#006400";
            Aufgabe8_Wiese.crc2.moveTo(this.x, this.y);
            Aufgabe8_Wiese.crc2.lineTo(this.x, this.y + 50);
            Aufgabe8_Wiese.crc2.stroke();
            Aufgabe8_Wiese.crc2.closePath();
            //Stielblatt
            Aufgabe8_Wiese.crc2.beginPath();
            Aufgabe8_Wiese.crc2.strokeStyle = "#006400";
            Aufgabe8_Wiese.crc2.moveTo(this.x, this.y);
            Aufgabe8_Wiese.crc2.lineTo(this.x, this.y + 30); //obere Punkt
            Aufgabe8_Wiese.crc2.lineTo(this.x - 10, this.y + 25); //Blattspitze
            Aufgabe8_Wiese.crc2.lineTo(this.x, this.y + 43); //untere Punkt
            Aufgabe8_Wiese.crc2.stroke();
            Aufgabe8_Wiese.crc2.closePath();
            Aufgabe8_Wiese.crc2.fillStyle = "#006400";
            Aufgabe8_Wiese.crc2.fill();
            //Bl�te
            Aufgabe8_Wiese.crc2.beginPath();
            Aufgabe8_Wiese.crc2.fillStyle = "blue";
            Aufgabe8_Wiese.crc2.strokeStyle = "#66ccff";
            Aufgabe8_Wiese.crc2.arc(this.x, this.y, 10, 0 * Math.PI, 2 * Math.PI);
            Aufgabe8_Wiese.crc2.arc(this.x - 10, this.y, 7, 0 * Math.PI, 2 * Math.PI);
            Aufgabe8_Wiese.crc2.arc(this.x + 10, this.y, 7, 0 * Math.PI, 2 * Math.PI);
            Aufgabe8_Wiese.crc2.arc(this.x, this.y + 10, 7, 0 * Math.PI, 2 * Math.PI);
            Aufgabe8_Wiese.crc2.arc(this.x, this.y - 10, 7, 0 * Math.PI, 2 * Math.PI);
            Aufgabe8_Wiese.crc2.closePath();
            Aufgabe8_Wiese.crc2.fill();
            Aufgabe8_Wiese.crc2.beginPath();
            Aufgabe8_Wiese.crc2.fillStyle = "white";
            Aufgabe8_Wiese.crc2.arc(this.x, this.y, 5, 0 * Math.PI, 2 * Math.PI);
            Aufgabe8_Wiese.crc2.fill();
            Aufgabe8_Wiese.crc2.stroke();
            Aufgabe8_Wiese.crc2.closePath();
        };
        return BlumeBlue;
    }(Aufgabe8_Wiese.Blume));
    Aufgabe8_Wiese.BlumeBlue = BlumeBlue;
})(Aufgabe8_Wiese || (Aufgabe8_Wiese = {}));
//# sourceMappingURL=BlumeBlue.js.map