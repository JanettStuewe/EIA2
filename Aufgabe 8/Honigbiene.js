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
            this.xTarget = _x;
            this.yTarget = _y;
            this.setRandomSpeed();
            this.setRandomSize();
            this.setRandomColor();
        }
        return HonigBiene;
    }(Aufgabe8_Wiese.Bee));
    Aufgabe8_Wiese.HonigBiene = HonigBiene;
})(Aufgabe8_Wiese || (Aufgabe8_Wiese = {}));
//# sourceMappingURL=Honigbiene.js.map