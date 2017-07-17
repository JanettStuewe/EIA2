namespace Abschlussaufgabe_Bild {

    export class CookieZwei { //Superklasse
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

        
        drawCookieZwei(): void {
            inhaltZwei.beginPath();
            inhaltZwei.arc(this.x, this.y, 50, 0 * Math.PI, 2 * Math.PI);
            inhaltZwei.fillStyle = "brown";
            inhaltZwei.strokeStyle = "black";
            inhaltZwei.fill();
            inhaltZwei.closePath();
            inhaltZwei.stroke();
            inhaltZwei.fill();
            inhaltZwei.beginPath();
            inhaltZwei.fillStyle = this.schokostueckchen;
            inhaltZwei.arc(this.x + 15, this.y + 5, 10, 0 * Math.PI, 2 * Math.PI);
            inhaltZwei.fill();
            inhaltZwei.stroke();
            inhaltZwei.closePath();
            inhaltZwei.beginPath();
            inhaltZwei.fillStyle = this.schokostueckchen;
            inhaltZwei.arc(this.x - 10, this.y - 10, 10, 0 * Math.PI, 2 * Math.PI);
            inhaltZwei.fill();
            inhaltZwei.stroke();
            inhaltZwei.closePath();
            inhaltZwei.beginPath();
            inhaltZwei.fillStyle = this.schokostueckchen;
            inhaltZwei.arc(this.x - 20, this.y - 35, 10, 0 * Math.PI, 2 * Math.PI);
            inhaltZwei.fill();
            inhaltZwei.stroke();
            inhaltZwei.closePath();
            inhaltZwei.beginPath();
            inhaltZwei.fillStyle = this.schokostueckchen;
            inhaltZwei.arc(this.x - 43, this.y - 5, 10, 0 * Math.PI, 2 * Math.PI);
            inhaltZwei.fill();
            inhaltZwei.stroke();
            inhaltZwei.closePath();
            inhaltZwei.beginPath();
            inhaltZwei.fillStyle = this.schokostueckchen;
            inhaltZwei.arc(this.x + 20, this.y + 30, 10, 0 * Math.PI, 2 * Math.PI);
            inhaltZwei.fill();
            inhaltZwei.stroke();
            inhaltZwei.closePath();
            inhaltZwei.beginPath();
            inhaltZwei.fillStyle = this.schokostueckchen;
            inhaltZwei.arc(this.x + 40, this.y + 10, 10, 0 * Math.PI, 2 * Math.PI);
            inhaltZwei.fill();
            inhaltZwei.stroke();
            inhaltZwei.closePath();
            inhaltZwei.beginPath();
            inhaltZwei.fillStyle = this.schokostueckchen;
            inhaltZwei.arc(this.x + 30, this.y - 30, 10, 0 * Math.PI, 2 * Math.PI);
            inhaltZwei.fill();
            inhaltZwei.stroke();
            inhaltZwei.closePath();
            inhaltZwei.beginPath();
            inhaltZwei.fillStyle = this.schokostueckchen;
            inhaltZwei.arc(this.x - 20, this.y + 35, 10, 0 * Math.PI, 2 * Math.PI);
            inhaltZwei.fill();
            inhaltZwei.stroke();
            inhaltZwei.closePath();
        }//schlieﬂt function cookie
        }//schlieﬂt die Klasse
}//schlieﬂt namespace