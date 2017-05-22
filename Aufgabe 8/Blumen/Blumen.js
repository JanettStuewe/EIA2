var Aufgabe8_Wiese;
(function (Aufgabe8_Wiese) {
    var Blume = (function () {
        function Blume() {
        }
        Blume.prototype.draw = function () { };
        ;
        Blume.prototype.setRandomFlower = function () {
            var sort = Math.round(Math.random() * 2);
            this.x = Math.floor(Math.random() * (700 - 300)) + 300;
            this.y = Math.floor(Math.random() * (600 - 550)) + 550;
            this.type = Aufgabe8_Wiese.sorts[sort];
            this.draw();
        }; //setRandomFlower
        return Blume;
    }());
    Aufgabe8_Wiese.Blume = Blume; //class
})(Aufgabe8_Wiese || (Aufgabe8_Wiese = {})); //namespace
//# sourceMappingURL=Blumen.js.map