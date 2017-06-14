var Aufgabe7_Wiese;
(function (Aufgabe7_Wiese) {
    var Blume = (function () {
        function Blume(_x, _y, _type) {
            this.x = _x;
            this.y = _y;
            this.type = _type;
        }
        Blume.prototype.draw = function () {
            var flowerField = Math.floor((Math.random() * 3) + 0);
            switch (flowerField) {
                case 0:
                    this.drawBlumeTulpe();
                    break;
                case 1:
                    this.drawBlumeBlue();
                    break;
                case 2:
                    this.drawBlume3();
                    break;
            }
        };
        ////////////////////////////////BLUMEN/////////////////////////////////////////
        Blume.prototype.drawBlumeTulpe = function () {
            //Stiel
            Aufgabe7_Wiese.crc2.beginPath();
            Aufgabe7_Wiese.crc2.strokeStyle = "#006400";
            Aufgabe7_Wiese.crc2.moveTo(this.x, this.y);
            Aufgabe7_Wiese.crc2.lineTo(this.x, this.y - 32);
            Aufgabe7_Wiese.crc2.stroke();
            Aufgabe7_Wiese.crc2.closePath();
            //Stielblatt1
            Aufgabe7_Wiese.crc2.beginPath();
            Aufgabe7_Wiese.crc2.strokeStyle = "#006400";
            Aufgabe7_Wiese.crc2.moveTo(this.x, this.y);
            Aufgabe7_Wiese.crc2.lineTo(this.x, this.y - 13); //obere Punkt
            Aufgabe7_Wiese.crc2.lineTo(this.x - 7, this.y - 26); //Blattspitze
            Aufgabe7_Wiese.crc2.lineTo(this.x, this.y - 5); //untere Punkt
            Aufgabe7_Wiese.crc2.stroke();
            Aufgabe7_Wiese.crc2.closePath();
            Aufgabe7_Wiese.crc2.fillStyle = "#006400";
            Aufgabe7_Wiese.crc2.fill();
            //Stielblatt2
            Aufgabe7_Wiese.crc2.beginPath();
            Aufgabe7_Wiese.crc2.strokeStyle = "#006400";
            Aufgabe7_Wiese.crc2.moveTo(this.x, this.y);
            Aufgabe7_Wiese.crc2.lineTo(this.x, this.y - 12); //obere Punkt
            Aufgabe7_Wiese.crc2.lineTo(this.x + 7, this.y - 20); //Blattspitze
            Aufgabe7_Wiese.crc2.lineTo(this.x, this.y - 5); //untere Punkt
            Aufgabe7_Wiese.crc2.stroke();
            Aufgabe7_Wiese.crc2.closePath();
            Aufgabe7_Wiese.crc2.fillStyle = "#006400";
            Aufgabe7_Wiese.crc2.fill();
            //TulpenBl�tenform
            Aufgabe7_Wiese.crc2.beginPath();
            Aufgabe7_Wiese.crc2.strokeStyle = "white"; //umrandet die Tulpe weiss
            Aufgabe7_Wiese.crc2.arc(this.x, this.y - 40, 9, 0 * Math.PI, 1 * Math.PI); //Rundung der Tulpe
            Aufgabe7_Wiese.crc2.lineTo(this.x - 10, this.y - 53); //links oben der Punkt
            Aufgabe7_Wiese.crc2.lineTo(this.x - 5, this.y - 45);
            Aufgabe7_Wiese.crc2.lineTo(this.x, this.y - 53); //Spitze in der Mitte
            Aufgabe7_Wiese.crc2.lineTo(this.x + 5, this.y - 45);
            Aufgabe7_Wiese.crc2.lineTo(this.x + 10, this.y - 53); //rechts der Punkt
            Aufgabe7_Wiese.crc2.closePath();
            Aufgabe7_Wiese.crc2.stroke();
            Aufgabe7_Wiese.crc2.fillStyle = "red";
            Aufgabe7_Wiese.crc2.fill();
        };
        Blume.prototype.drawBlumeBlue = function () {
            //Stiel
            Aufgabe7_Wiese.crc2.beginPath();
            Aufgabe7_Wiese.crc2.strokeStyle = "#006400";
            Aufgabe7_Wiese.crc2.moveTo(this.x, this.y);
            Aufgabe7_Wiese.crc2.lineTo(this.x, this.y + 50);
            Aufgabe7_Wiese.crc2.stroke();
            Aufgabe7_Wiese.crc2.closePath();
            //Stielblatt
            Aufgabe7_Wiese.crc2.beginPath();
            Aufgabe7_Wiese.crc2.strokeStyle = "#006400";
            Aufgabe7_Wiese.crc2.moveTo(this.x, this.y);
            Aufgabe7_Wiese.crc2.lineTo(this.x, this.y + 30); //obere Punkt
            Aufgabe7_Wiese.crc2.lineTo(this.x - 10, this.y + 25); //Blattspitze
            Aufgabe7_Wiese.crc2.lineTo(this.x, this.y + 43); //untere Punkt
            Aufgabe7_Wiese.crc2.stroke();
            Aufgabe7_Wiese.crc2.closePath();
            Aufgabe7_Wiese.crc2.fillStyle = "#006400";
            Aufgabe7_Wiese.crc2.fill();
            //Bl�te
            Aufgabe7_Wiese.crc2.beginPath();
            Aufgabe7_Wiese.crc2.fillStyle = "blue";
            Aufgabe7_Wiese.crc2.strokeStyle = "#66ccff";
            Aufgabe7_Wiese.crc2.arc(this.x, this.y, 10, 0 * Math.PI, 2 * Math.PI);
            Aufgabe7_Wiese.crc2.arc(this.x - 10, this.y, 7, 0 * Math.PI, 2 * Math.PI);
            Aufgabe7_Wiese.crc2.arc(this.x + 10, this.y, 7, 0 * Math.PI, 2 * Math.PI);
            Aufgabe7_Wiese.crc2.arc(this.x, this.y + 10, 7, 0 * Math.PI, 2 * Math.PI);
            Aufgabe7_Wiese.crc2.arc(this.x, this.y - 10, 7, 0 * Math.PI, 2 * Math.PI);
            Aufgabe7_Wiese.crc2.closePath();
            Aufgabe7_Wiese.crc2.fill();
            Aufgabe7_Wiese.crc2.beginPath();
            Aufgabe7_Wiese.crc2.fillStyle = "white";
            Aufgabe7_Wiese.crc2.arc(this.x, this.y, 5, 0 * Math.PI, 2 * Math.PI);
            Aufgabe7_Wiese.crc2.fill();
            Aufgabe7_Wiese.crc2.stroke();
            Aufgabe7_Wiese.crc2.closePath();
        };
        Blume.prototype.drawBlume3 = function () {
            //Stiel
            Aufgabe7_Wiese.crc2.beginPath();
            Aufgabe7_Wiese.crc2.strokeStyle = "#006400";
            Aufgabe7_Wiese.crc2.moveTo(this.x, this.y);
            Aufgabe7_Wiese.crc2.lineTo(this.x, this.y + 50);
            Aufgabe7_Wiese.crc2.stroke();
            Aufgabe7_Wiese.crc2.closePath();
            //Stielblatt1
            Aufgabe7_Wiese.crc2.beginPath();
            Aufgabe7_Wiese.crc2.strokeStyle = "#006400";
            Aufgabe7_Wiese.crc2.moveTo(this.x, this.y);
            Aufgabe7_Wiese.crc2.lineTo(this.x, this.y + 36); //obere Punkt
            Aufgabe7_Wiese.crc2.lineTo(this.x + 10, this.y + 27); //Blattspitze
            Aufgabe7_Wiese.crc2.lineTo(this.x, this.y + 43); //untere Punkt
            Aufgabe7_Wiese.crc2.stroke();
            Aufgabe7_Wiese.crc2.closePath();
            Aufgabe7_Wiese.crc2.fillStyle = "#006400";
            Aufgabe7_Wiese.crc2.fill();
            //Stielblatt2
            Aufgabe7_Wiese.crc2.beginPath();
            Aufgabe7_Wiese.crc2.strokeStyle = "#006400";
            Aufgabe7_Wiese.crc2.moveTo(this.x, this.y);
            Aufgabe7_Wiese.crc2.lineTo(this.x, this.y + 36); //obere Punkt
            Aufgabe7_Wiese.crc2.lineTo(this.x - 10, this.y + 25); //Blattspitze
            Aufgabe7_Wiese.crc2.lineTo(this.x, this.y + 43); //untere Punkt
            Aufgabe7_Wiese.crc2.stroke();
            Aufgabe7_Wiese.crc2.closePath();
            Aufgabe7_Wiese.crc2.fillStyle = "#006400";
            Aufgabe7_Wiese.crc2.fill();
            //Bl�te
            Aufgabe7_Wiese.crc2.beginPath();
            Aufgabe7_Wiese.crc2.fillStyle = "#DF7CF3";
            Aufgabe7_Wiese.crc2.strokeStyle = "white";
            Aufgabe7_Wiese.crc2.arc(this.x, this.y, 10, 0 * Math.PI, 2 * Math.PI);
            Aufgabe7_Wiese.crc2.arc(this.x - 10, this.y, 7, 0 * Math.PI, 2 * Math.PI);
            Aufgabe7_Wiese.crc2.arc(this.x + 10, this.y, 7, 0 * Math.PI, 2 * Math.PI);
            Aufgabe7_Wiese.crc2.arc(this.x, this.y + 10, 7, 0 * Math.PI, 2 * Math.PI);
            Aufgabe7_Wiese.crc2.arc(this.x, this.y - 10, 7, 0 * Math.PI, 2 * Math.PI);
            Aufgabe7_Wiese.crc2.closePath();
            Aufgabe7_Wiese.crc2.fill();
            Aufgabe7_Wiese.crc2.beginPath();
            Aufgabe7_Wiese.crc2.fillStyle = "#722F80";
            Aufgabe7_Wiese.crc2.arc(this.x, this.y, 5, 0 * Math.PI, 2 * Math.PI);
            Aufgabe7_Wiese.crc2.fill();
            Aufgabe7_Wiese.crc2.stroke();
            Aufgabe7_Wiese.crc2.closePath();
        };
        Blume.prototype.setRandomFlower = function () {
            var sort = Math.round(Math.random() * 2);
            this.x = Math.floor(Math.random() * (700 - 300)) + 300;
            this.y = Math.floor(Math.random() * (600 - 550)) + 550;
            this.type = Aufgabe7_Wiese.sorts[sort];
            this.draw();
        }; //setRandomFlower
        return Blume;
    }());
    Aufgabe7_Wiese.Blume = Blume; //class
})(Aufgabe7_Wiese || (Aufgabe7_Wiese = {})); //namespace
//# sourceMappingURL=Blumen.js.map