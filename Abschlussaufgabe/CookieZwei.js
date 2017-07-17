var Abschlussaufgabe_Bild;
(function (Abschlussaufgabe_Bild) {
    var CookieZwei = (function () {
        function CookieZwei(_schokostueckchen) {
            this.schokostueckchen = _schokostueckchen;
            this.setRandomPosition();
        } //schlie�t constructor
        CookieZwei.prototype.setRandomPosition = function () {
            this.x = Math.random() * 190;
            this.y = Math.random() * 790;
        };
        CookieZwei.prototype.drawCookieZwei = function () {
            Abschlussaufgabe_Bild.inhaltZwei.beginPath();
            Abschlussaufgabe_Bild.inhaltZwei.arc(this.x, this.y, 50, 0 * Math.PI, 2 * Math.PI);
            Abschlussaufgabe_Bild.inhaltZwei.fillStyle = "brown";
            Abschlussaufgabe_Bild.inhaltZwei.strokeStyle = "black";
            Abschlussaufgabe_Bild.inhaltZwei.fill();
            Abschlussaufgabe_Bild.inhaltZwei.closePath();
            Abschlussaufgabe_Bild.inhaltZwei.stroke();
            Abschlussaufgabe_Bild.inhaltZwei.fill();
            Abschlussaufgabe_Bild.inhaltZwei.beginPath();
            Abschlussaufgabe_Bild.inhaltZwei.fillStyle = this.schokostueckchen;
            Abschlussaufgabe_Bild.inhaltZwei.arc(this.x + 15, this.y + 5, 10, 0 * Math.PI, 2 * Math.PI);
            Abschlussaufgabe_Bild.inhaltZwei.fill();
            Abschlussaufgabe_Bild.inhaltZwei.stroke();
            Abschlussaufgabe_Bild.inhaltZwei.closePath();
            Abschlussaufgabe_Bild.inhaltZwei.beginPath();
            Abschlussaufgabe_Bild.inhaltZwei.fillStyle = this.schokostueckchen;
            Abschlussaufgabe_Bild.inhaltZwei.arc(this.x - 10, this.y - 10, 10, 0 * Math.PI, 2 * Math.PI);
            Abschlussaufgabe_Bild.inhaltZwei.fill();
            Abschlussaufgabe_Bild.inhaltZwei.stroke();
            Abschlussaufgabe_Bild.inhaltZwei.closePath();
            Abschlussaufgabe_Bild.inhaltZwei.beginPath();
            Abschlussaufgabe_Bild.inhaltZwei.fillStyle = this.schokostueckchen;
            Abschlussaufgabe_Bild.inhaltZwei.arc(this.x - 20, this.y - 35, 10, 0 * Math.PI, 2 * Math.PI);
            Abschlussaufgabe_Bild.inhaltZwei.fill();
            Abschlussaufgabe_Bild.inhaltZwei.stroke();
            Abschlussaufgabe_Bild.inhaltZwei.closePath();
            Abschlussaufgabe_Bild.inhaltZwei.beginPath();
            Abschlussaufgabe_Bild.inhaltZwei.fillStyle = this.schokostueckchen;
            Abschlussaufgabe_Bild.inhaltZwei.arc(this.x - 43, this.y - 5, 10, 0 * Math.PI, 2 * Math.PI);
            Abschlussaufgabe_Bild.inhaltZwei.fill();
            Abschlussaufgabe_Bild.inhaltZwei.stroke();
            Abschlussaufgabe_Bild.inhaltZwei.closePath();
            Abschlussaufgabe_Bild.inhaltZwei.beginPath();
            Abschlussaufgabe_Bild.inhaltZwei.fillStyle = this.schokostueckchen;
            Abschlussaufgabe_Bild.inhaltZwei.arc(this.x + 20, this.y + 30, 10, 0 * Math.PI, 2 * Math.PI);
            Abschlussaufgabe_Bild.inhaltZwei.fill();
            Abschlussaufgabe_Bild.inhaltZwei.stroke();
            Abschlussaufgabe_Bild.inhaltZwei.closePath();
            Abschlussaufgabe_Bild.inhaltZwei.beginPath();
            Abschlussaufgabe_Bild.inhaltZwei.fillStyle = this.schokostueckchen;
            Abschlussaufgabe_Bild.inhaltZwei.arc(this.x + 40, this.y + 10, 10, 0 * Math.PI, 2 * Math.PI);
            Abschlussaufgabe_Bild.inhaltZwei.fill();
            Abschlussaufgabe_Bild.inhaltZwei.stroke();
            Abschlussaufgabe_Bild.inhaltZwei.closePath();
            Abschlussaufgabe_Bild.inhaltZwei.beginPath();
            Abschlussaufgabe_Bild.inhaltZwei.fillStyle = this.schokostueckchen;
            Abschlussaufgabe_Bild.inhaltZwei.arc(this.x + 30, this.y - 30, 10, 0 * Math.PI, 2 * Math.PI);
            Abschlussaufgabe_Bild.inhaltZwei.fill();
            Abschlussaufgabe_Bild.inhaltZwei.stroke();
            Abschlussaufgabe_Bild.inhaltZwei.closePath();
            Abschlussaufgabe_Bild.inhaltZwei.beginPath();
            Abschlussaufgabe_Bild.inhaltZwei.fillStyle = this.schokostueckchen;
            Abschlussaufgabe_Bild.inhaltZwei.arc(this.x - 20, this.y + 35, 10, 0 * Math.PI, 2 * Math.PI);
            Abschlussaufgabe_Bild.inhaltZwei.fill();
            Abschlussaufgabe_Bild.inhaltZwei.stroke();
            Abschlussaufgabe_Bild.inhaltZwei.closePath();
        }; //schlie�t function cookie
        return CookieZwei;
    }());
    Abschlussaufgabe_Bild.CookieZwei = CookieZwei; //schlie�t die Klasse
})(Abschlussaufgabe_Bild || (Abschlussaufgabe_Bild = {})); //schlie�t namespace
//# sourceMappingURL=CookieZwei.js.map