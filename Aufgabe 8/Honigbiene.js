var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Aufgabe8_Wiese;
(function (Aufgabe8_Wiese) {
    var HonigBiene = (function (_super) {
        __extends(HonigBiene, _super);
        function HonigBiene(_x, _y, _geschwindigkeit, _targetX, _targetY) {
            _super.call(this, _x, _y, _geschwindigkeit);
            this.target = {
                x: _targetX,
                y: _targetY
            };
        }
        HonigBiene.prototype.move = function () {
            var dx = this.target.x - this.position.x;
            var dy = this.target.y - this.position.y;
            var d = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
            if (d >= 2) {
                this.position.x += Aufgabe8_Wiese.signum(dx);
                this.position.y += Aufgabe8_Wiese.signum(dy);
            }
        };
        return HonigBiene;
    }(Aufgabe8_Wiese.Bee));
    Aufgabe8_Wiese.HonigBiene = HonigBiene;
})(Aufgabe8_Wiese || (Aufgabe8_Wiese = {}));
//# sourceMappingURL=Honigbiene.js.map