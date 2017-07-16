var Abschlussaufgabe_Bild;
(function (Abschlussaufgabe_Bild) {
    var Cookie = (function () {
        function Cookie(_schokostueckchen) {
            this.schokostueckchen = _schokostueckchen;
            this.setRandomPosition();
        } //schlie�t constructor
        Cookie.prototype.setRandomPosition = function () {
            this.x = Math.random() * 190;
            this.y = Math.random() * 790;
        };
        Cookie.prototype.drawCookie = function () {
            Abschlussaufgabe_Bild.crc2.beginPath();
            Abschlussaufgabe_Bild.crc2.arc(this.x, this.y, 50, 0 * Math.PI, 2 * Math.PI);
            Abschlussaufgabe_Bild.crc2.fillStyle = "brown";
            Abschlussaufgabe_Bild.crc2.strokeStyle = "black";
            Abschlussaufgabe_Bild.crc2.fill();
            Abschlussaufgabe_Bild.crc2.closePath();
            Abschlussaufgabe_Bild.crc2.stroke();
            Abschlussaufgabe_Bild.crc2.fill();
            Abschlussaufgabe_Bild.crc2.beginPath();
            Abschlussaufgabe_Bild.crc2.fillStyle = this.schokostueckchen;
            Abschlussaufgabe_Bild.crc2.arc(this.x + 15, this.y + 5, 10, 0 * Math.PI, 2 * Math.PI);
            Abschlussaufgabe_Bild.crc2.fill();
            Abschlussaufgabe_Bild.crc2.stroke();
            Abschlussaufgabe_Bild.crc2.closePath();
            Abschlussaufgabe_Bild.crc2.beginPath();
            Abschlussaufgabe_Bild.crc2.fillStyle = this.schokostueckchen;
            Abschlussaufgabe_Bild.crc2.arc(this.x - 10, this.y - 10, 10, 0 * Math.PI, 2 * Math.PI);
            Abschlussaufgabe_Bild.crc2.fill();
            Abschlussaufgabe_Bild.crc2.stroke();
            Abschlussaufgabe_Bild.crc2.closePath();
            Abschlussaufgabe_Bild.crc2.beginPath();
            Abschlussaufgabe_Bild.crc2.fillStyle = this.schokostueckchen;
            Abschlussaufgabe_Bild.crc2.arc(this.x - 20, this.y - 35, 10, 0 * Math.PI, 2 * Math.PI);
            Abschlussaufgabe_Bild.crc2.fill();
            Abschlussaufgabe_Bild.crc2.stroke();
            Abschlussaufgabe_Bild.crc2.closePath();
            Abschlussaufgabe_Bild.crc2.beginPath();
            Abschlussaufgabe_Bild.crc2.fillStyle = this.schokostueckchen;
            Abschlussaufgabe_Bild.crc2.arc(this.x - 43, this.y - 5, 10, 0 * Math.PI, 2 * Math.PI);
            Abschlussaufgabe_Bild.crc2.fill();
            Abschlussaufgabe_Bild.crc2.stroke();
            Abschlussaufgabe_Bild.crc2.closePath();
            Abschlussaufgabe_Bild.crc2.beginPath();
            Abschlussaufgabe_Bild.crc2.fillStyle = this.schokostueckchen;
            Abschlussaufgabe_Bild.crc2.arc(this.x + 20, this.y + 30, 10, 0 * Math.PI, 2 * Math.PI);
            Abschlussaufgabe_Bild.crc2.fill();
            Abschlussaufgabe_Bild.crc2.stroke();
            Abschlussaufgabe_Bild.crc2.closePath();
            Abschlussaufgabe_Bild.crc2.beginPath();
            Abschlussaufgabe_Bild.crc2.fillStyle = this.schokostueckchen;
            Abschlussaufgabe_Bild.crc2.arc(this.x + 40, this.y + 10, 10, 0 * Math.PI, 2 * Math.PI);
            Abschlussaufgabe_Bild.crc2.fill();
            Abschlussaufgabe_Bild.crc2.stroke();
            Abschlussaufgabe_Bild.crc2.closePath();
            Abschlussaufgabe_Bild.crc2.beginPath();
            Abschlussaufgabe_Bild.crc2.fillStyle = this.schokostueckchen;
            Abschlussaufgabe_Bild.crc2.arc(this.x + 30, this.y - 30, 10, 0 * Math.PI, 2 * Math.PI);
            Abschlussaufgabe_Bild.crc2.fill();
            Abschlussaufgabe_Bild.crc2.stroke();
            Abschlussaufgabe_Bild.crc2.closePath();
            Abschlussaufgabe_Bild.crc2.beginPath();
            Abschlussaufgabe_Bild.crc2.fillStyle = this.schokostueckchen;
            Abschlussaufgabe_Bild.crc2.arc(this.x - 20, this.y + 35, 10, 0 * Math.PI, 2 * Math.PI);
            Abschlussaufgabe_Bild.crc2.fill();
            Abschlussaufgabe_Bild.crc2.stroke();
            Abschlussaufgabe_Bild.crc2.closePath();
        }; //schlie�t function cookie
        return Cookie;
    }());
    Abschlussaufgabe_Bild.Cookie = Cookie; //schlie�t class Cookie
})(Abschlussaufgabe_Bild || (Abschlussaufgabe_Bild = {})); //schlie�t namespace
//# sourceMappingURL=Cookies.js.map