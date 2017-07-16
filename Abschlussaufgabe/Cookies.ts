namespace Abschlussaufgabe_Bild {

    export class Cookie { //Superklasse
        x: number;
        y: number;
        schokostueckchen: string;

        constructor(_schokostueckchen: string) {
            this.schokostueckchen = _schokostueckchen;
            this.setRandomPosition();
            
        } //schlieﬂt constructor

        setRandomPosition(): void {
            this.x = Math.random() * 190; 
            this.y = Math.random() * 790;  
        }

        drawCookie(): void {
            crc2.beginPath();
            crc2.arc(this.x, this.y, 50, 0 * Math.PI, 2 * Math.PI);
            crc2.fillStyle = "brown";
            crc2.strokeStyle = "black";
            crc2.fill();
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
            crc2.beginPath();
            crc2.fillStyle = this.schokostueckchen;
            crc2.arc(this.x + 15, this.y + 5, 10, 0 * Math.PI, 2 * Math.PI);
            crc2.fill();
            crc2.stroke();
            crc2.closePath();
            crc2.beginPath();
            crc2.fillStyle = this.schokostueckchen;
            crc2.arc(this.x - 10, this.y - 10, 10, 0 * Math.PI, 2 * Math.PI);
            crc2.fill();
            crc2.stroke();
            crc2.closePath();
            crc2.beginPath();
            crc2.fillStyle = this.schokostueckchen;
            crc2.arc(this.x - 20, this.y - 35, 10, 0 * Math.PI, 2 * Math.PI);
            crc2.fill();
            crc2.stroke();
            crc2.closePath();
            crc2.beginPath();
            crc2.fillStyle = this.schokostueckchen;
            crc2.arc(this.x - 43, this.y - 5, 10, 0 * Math.PI, 2 * Math.PI);
            crc2.fill();
            crc2.stroke();
            crc2.closePath();
            crc2.beginPath();
            crc2.fillStyle = this.schokostueckchen;
            crc2.arc(this.x + 20, this.y + 30, 10, 0 * Math.PI, 2 * Math.PI);
            crc2.fill();
            crc2.stroke();
            crc2.closePath();
            crc2.beginPath();
            crc2.fillStyle = this.schokostueckchen;
            crc2.arc(this.x + 40, this.y + 10, 10, 0 * Math.PI, 2 * Math.PI);
            crc2.fill();
            crc2.stroke();
            crc2.closePath();
            crc2.beginPath();
            crc2.fillStyle = this.schokostueckchen;
            crc2.arc(this.x + 30, this.y - 30, 10, 0 * Math.PI, 2 * Math.PI);
            crc2.fill();
            crc2.stroke();
            crc2.closePath();
            crc2.beginPath();
            crc2.fillStyle = this.schokostueckchen;
            crc2.arc(this.x - 20, this.y + 35, 10, 0 * Math.PI, 2 * Math.PI);
            crc2.fill();
            crc2.stroke();
            crc2.closePath();
        }//schlieﬂt function cookie

    } //schlieﬂt class Cookie
}//schlieﬂt namespace