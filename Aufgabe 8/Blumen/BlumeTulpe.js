var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Aufgabe8_Wiese;
(function (Aufgabe8_Wiese) {
    var Blumen = (function (_super) {
        __extends(Blumen, _super);
        function Blumen(_x, _y, _type) {
            _super.call(this, _x, _y, _type);
            this.x = _x;
            this.y = _y;
            this.type = _type;
        }
        return Blumen;
    }(Aufgabe8_Wiese.Blume));
    Aufgabe8_Wiese.Blumen = Blumen;
})(Aufgabe8_Wiese || (Aufgabe8_Wiese = {}));
//# sourceMappingURL=BlumeTulpe.js.map