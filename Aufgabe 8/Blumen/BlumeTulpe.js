var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Aufgabe8_Wiese;
(function (Aufgabe8_Wiese) {
    var BlumeTulpe = (function (_super) {
        __extends(BlumeTulpe, _super);
        function BlumeTulpe() {
            _super.call(this);
            this.drawBlumeTulpe();
        }
        BlumeTulpe.prototype.drawBlumeTulpe = function () {
            //Stiel
            Aufgabe8_Wiese.crc2.beginPath();
            Aufgabe8_Wiese.crc2.strokeStyle = "#006400";
            Aufgabe8_Wiese.crc2.moveTo(this.x, this.y);
            Aufgabe8_Wiese.crc2.lineTo(this.x, this.y - 32);
            Aufgabe8_Wiese.crc2.stroke();
            Aufgabe8_Wiese.crc2.closePath();
            //Stielblatt1
            Aufgabe8_Wiese.crc2.beginPath();
            Aufgabe8_Wiese.crc2.strokeStyle = "#006400";
            Aufgabe8_Wiese.crc2.moveTo(this.x, this.y);
            Aufgabe8_Wiese.crc2.lineTo(this.x, this.y - 13); //obere Punkt
            Aufgabe8_Wiese.crc2.lineTo(this.x - 7, this.y - 26); //Blattspitze
            Aufgabe8_Wiese.crc2.lineTo(this.x, this.y - 5); //untere Punkt
            Aufgabe8_Wiese.crc2.stroke();
            Aufgabe8_Wiese.crc2.closePath();
            Aufgabe8_Wiese.crc2.fillStyle = "#006400";
            Aufgabe8_Wiese.crc2.fill();
            //Stielblatt2
            Aufgabe8_Wiese.crc2.beginPath();
            Aufgabe8_Wiese.crc2.strokeStyle = "#006400";
            Aufgabe8_Wiese.crc2.moveTo(this.x, this.y);
            Aufgabe8_Wiese.crc2.lineTo(this.x, this.y - 12); //obere Punkt
            Aufgabe8_Wiese.crc2.lineTo(this.x + 7, this.y - 20); //Blattspitze
            Aufgabe8_Wiese.crc2.lineTo(this.x, this.y - 5); //untere Punkt
            Aufgabe8_Wiese.crc2.stroke();
            Aufgabe8_Wiese.crc2.closePath();
            Aufgabe8_Wiese.crc2.fillStyle = "#006400";
            Aufgabe8_Wiese.crc2.fill();
            //TulpenBl�tenform
            Aufgabe8_Wiese.crc2.beginPath();
            Aufgabe8_Wiese.crc2.strokeStyle = "white"; //umrandet die Tulpe weiss
            Aufgabe8_Wiese.crc2.arc(this.x, this.y - 40, 9, 0 * Math.PI, 1 * Math.PI); //Rundung der Tulpe
            Aufgabe8_Wiese.crc2.lineTo(this.x - 10, this.y - 53); //links oben der Punkt
            Aufgabe8_Wiese.crc2.lineTo(this.x - 5, this.y - 45);
            Aufgabe8_Wiese.crc2.lineTo(this.x, this.y - 53); //Spitze in der Mitte
            Aufgabe8_Wiese.crc2.lineTo(this.x + 5, this.y - 45);
            Aufgabe8_Wiese.crc2.lineTo(this.x + 10, this.y - 53); //rechts der Punkt
            Aufgabe8_Wiese.crc2.closePath();
            Aufgabe8_Wiese.crc2.stroke();
            Aufgabe8_Wiese.crc2.fillStyle = "red";
            Aufgabe8_Wiese.crc2.fill();
        };
        return BlumeTulpe;
    }(Aufgabe8_Wiese.Blume));
    Aufgabe8_Wiese.BlumeTulpe = BlumeTulpe;
})(Aufgabe8_Wiese || (Aufgabe8_Wiese = {}));
//# sourceMappingURL=BlumeTulpe.js.map