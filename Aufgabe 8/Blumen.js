var Bienenschwarm_Classes;
(function (Bienenschwarm_Classes) {
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
            Bienenschwarm_Classes.crc2.beginPath();
            Bienenschwarm_Classes.crc2.strokeStyle = "#006400";
            Bienenschwarm_Classes.crc2.moveTo(this.x, this.y);
            Bienenschwarm_Classes.crc2.lineTo(this.x, this.y - 32);
            Bienenschwarm_Classes.crc2.stroke();
            Bienenschwarm_Classes.crc2.closePath();
            //Stielblatt1
            Bienenschwarm_Classes.crc2.beginPath();
            Bienenschwarm_Classes.crc2.strokeStyle = "#006400";
            Bienenschwarm_Classes.crc2.moveTo(this.x, this.y);
            Bienenschwarm_Classes.crc2.lineTo(this.x, this.y - 13); //obere Punkt
            Bienenschwarm_Classes.crc2.lineTo(this.x - 7, this.y - 26); //Blattspitze
            Bienenschwarm_Classes.crc2.lineTo(this.x, this.y - 5); //untere Punkt
            Bienenschwarm_Classes.crc2.stroke();
            Bienenschwarm_Classes.crc2.closePath();
            Bienenschwarm_Classes.crc2.fillStyle = "#006400";
            Bienenschwarm_Classes.crc2.fill();
            //Stielblatt2
            Bienenschwarm_Classes.crc2.beginPath();
            Bienenschwarm_Classes.crc2.strokeStyle = "#006400";
            Bienenschwarm_Classes.crc2.moveTo(this.x, this.y);
            Bienenschwarm_Classes.crc2.lineTo(this.x, this.y - 12); //obere Punkt
            Bienenschwarm_Classes.crc2.lineTo(this.x + 7, this.y - 20); //Blattspitze
            Bienenschwarm_Classes.crc2.lineTo(this.x, this.y - 5); //untere Punkt
            Bienenschwarm_Classes.crc2.stroke();
            Bienenschwarm_Classes.crc2.closePath();
            Bienenschwarm_Classes.crc2.fillStyle = "#006400";
            Bienenschwarm_Classes.crc2.fill();
            //TulpenBl�tenform
            Bienenschwarm_Classes.crc2.beginPath();
            Bienenschwarm_Classes.crc2.strokeStyle = "white"; //umrandet die Tulpe weiss
            Bienenschwarm_Classes.crc2.arc(this.x, this.y - 40, 9, 0 * Math.PI, 1 * Math.PI); //Rundung der Tulpe
            Bienenschwarm_Classes.crc2.lineTo(this.x - 10, this.y - 53); //links oben der Punkt
            Bienenschwarm_Classes.crc2.lineTo(this.x - 5, this.y - 45);
            Bienenschwarm_Classes.crc2.lineTo(this.x, this.y - 53); //Spitze in der Mitte
            Bienenschwarm_Classes.crc2.lineTo(this.x + 5, this.y - 45);
            Bienenschwarm_Classes.crc2.lineTo(this.x + 10, this.y - 53); //rechts der Punkt
            Bienenschwarm_Classes.crc2.closePath();
            Bienenschwarm_Classes.crc2.stroke();
            Bienenschwarm_Classes.crc2.fillStyle = "red";
            Bienenschwarm_Classes.crc2.fill();
        };
        Blume.prototype.drawBlumeBlue = function () {
            //Stiel
            Bienenschwarm_Classes.crc2.beginPath();
            Bienenschwarm_Classes.crc2.strokeStyle = "#006400";
            Bienenschwarm_Classes.crc2.moveTo(this.x, this.y);
            Bienenschwarm_Classes.crc2.lineTo(this.x, this.y + 50);
            Bienenschwarm_Classes.crc2.stroke();
            Bienenschwarm_Classes.crc2.closePath();
            //Stielblatt
            Bienenschwarm_Classes.crc2.beginPath();
            Bienenschwarm_Classes.crc2.strokeStyle = "#006400";
            Bienenschwarm_Classes.crc2.moveTo(this.x, this.y);
            Bienenschwarm_Classes.crc2.lineTo(this.x, this.y + 30); //obere Punkt
            Bienenschwarm_Classes.crc2.lineTo(this.x - 10, this.y + 25); //Blattspitze
            Bienenschwarm_Classes.crc2.lineTo(this.x, this.y + 43); //untere Punkt
            Bienenschwarm_Classes.crc2.stroke();
            Bienenschwarm_Classes.crc2.closePath();
            Bienenschwarm_Classes.crc2.fillStyle = "#006400";
            Bienenschwarm_Classes.crc2.fill();
            //Bl�te
            Bienenschwarm_Classes.crc2.beginPath();
            Bienenschwarm_Classes.crc2.fillStyle = "blue";
            Bienenschwarm_Classes.crc2.strokeStyle = "#66ccff";
            Bienenschwarm_Classes.crc2.arc(this.x, this.y, 10, 0 * Math.PI, 2 * Math.PI);
            Bienenschwarm_Classes.crc2.arc(this.x - 10, this.y, 7, 0 * Math.PI, 2 * Math.PI);
            Bienenschwarm_Classes.crc2.arc(this.x + 10, this.y, 7, 0 * Math.PI, 2 * Math.PI);
            Bienenschwarm_Classes.crc2.arc(this.x, this.y + 10, 7, 0 * Math.PI, 2 * Math.PI);
            Bienenschwarm_Classes.crc2.arc(this.x, this.y - 10, 7, 0 * Math.PI, 2 * Math.PI);
            Bienenschwarm_Classes.crc2.closePath();
            Bienenschwarm_Classes.crc2.fill();
            Bienenschwarm_Classes.crc2.beginPath();
            Bienenschwarm_Classes.crc2.fillStyle = "white";
            Bienenschwarm_Classes.crc2.arc(this.x, this.y, 5, 0 * Math.PI, 2 * Math.PI);
            Bienenschwarm_Classes.crc2.fill();
            Bienenschwarm_Classes.crc2.stroke();
            Bienenschwarm_Classes.crc2.closePath();
        };
        Blume.prototype.drawBlume3 = function () {
            //Stiel
            Bienenschwarm_Classes.crc2.beginPath();
            Bienenschwarm_Classes.crc2.strokeStyle = "#006400";
            Bienenschwarm_Classes.crc2.moveTo(this.x, this.y);
            Bienenschwarm_Classes.crc2.lineTo(this.x, this.y + 50);
            Bienenschwarm_Classes.crc2.stroke();
            Bienenschwarm_Classes.crc2.closePath();
            //Stielblatt1
            Bienenschwarm_Classes.crc2.beginPath();
            Bienenschwarm_Classes.crc2.strokeStyle = "#006400";
            Bienenschwarm_Classes.crc2.moveTo(this.x, this.y);
            Bienenschwarm_Classes.crc2.lineTo(this.x, this.y + 36); //obere Punkt
            Bienenschwarm_Classes.crc2.lineTo(this.x + 10, this.y + 27); //Blattspitze
            Bienenschwarm_Classes.crc2.lineTo(this.x, this.y + 43); //untere Punkt
            Bienenschwarm_Classes.crc2.stroke();
            Bienenschwarm_Classes.crc2.closePath();
            Bienenschwarm_Classes.crc2.fillStyle = "#006400";
            Bienenschwarm_Classes.crc2.fill();
            //Stielblatt2
            Bienenschwarm_Classes.crc2.beginPath();
            Bienenschwarm_Classes.crc2.strokeStyle = "#006400";
            Bienenschwarm_Classes.crc2.moveTo(this.x, this.y);
            Bienenschwarm_Classes.crc2.lineTo(this.x, this.y + 36); //obere Punkt
            Bienenschwarm_Classes.crc2.lineTo(this.x - 10, this.y + 25); //Blattspitze
            Bienenschwarm_Classes.crc2.lineTo(this.x, this.y + 43); //untere Punkt
            Bienenschwarm_Classes.crc2.stroke();
            Bienenschwarm_Classes.crc2.closePath();
            Bienenschwarm_Classes.crc2.fillStyle = "#006400";
            Bienenschwarm_Classes.crc2.fill();
            //Bl�te
            Bienenschwarm_Classes.crc2.beginPath();
            Bienenschwarm_Classes.crc2.fillStyle = "#DF7CF3";
            Bienenschwarm_Classes.crc2.strokeStyle = "white";
            Bienenschwarm_Classes.crc2.arc(this.x, this.y, 10, 0 * Math.PI, 2 * Math.PI);
            Bienenschwarm_Classes.crc2.arc(this.x - 10, this.y, 7, 0 * Math.PI, 2 * Math.PI);
            Bienenschwarm_Classes.crc2.arc(this.x + 10, this.y, 7, 0 * Math.PI, 2 * Math.PI);
            Bienenschwarm_Classes.crc2.arc(this.x, this.y + 10, 7, 0 * Math.PI, 2 * Math.PI);
            Bienenschwarm_Classes.crc2.arc(this.x, this.y - 10, 7, 0 * Math.PI, 2 * Math.PI);
            Bienenschwarm_Classes.crc2.closePath();
            Bienenschwarm_Classes.crc2.fill();
            Bienenschwarm_Classes.crc2.beginPath();
            Bienenschwarm_Classes.crc2.fillStyle = "#722F80";
            Bienenschwarm_Classes.crc2.arc(this.x, this.y, 5, 0 * Math.PI, 2 * Math.PI);
            Bienenschwarm_Classes.crc2.fill();
            Bienenschwarm_Classes.crc2.stroke();
            Bienenschwarm_Classes.crc2.closePath();
        };
        Blume.prototype.setRandomFlower = function () {
            var sort = Math.round(Math.random() * 2);
            this.x = Math.floor(Math.random() * (700 - 300)) + 300;
            this.y = Math.floor(Math.random() * (600 - 550)) + 550;
            this.type = Bienenschwarm_Classes.sorts[sort];
            this.draw();
        }; //setRandomFlower
        return Blume;
    }());
    Bienenschwarm_Classes.Blume = Blume; //class
})(Bienenschwarm_Classes || (Bienenschwarm_Classes = {})); //namespace
//# sourceMappingURL=Blumen.js.map