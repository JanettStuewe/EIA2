window.onload = function(): void {
//hier deklariere ich variablen und gebe ihnen einen wert
    let brett: number = 63;         //es werden 64 schachbrettfelder
    let reihenmaximum: number = 8;  //es werden pro reihe max. 8 schachbrettfelder neben einander gelegt
    let k: number = 1;              //es beginnt mit einem reiskorn
    
    function Schachbrett(): void {  /* bildet das Schachbrett */
        for (let i: number = 0; i < reihenmaximum; i++) {   //durchläuft die reihen einzelnd

            if (i % 2 == 0) {   //wenn der restwert 0 ist von i und 2, dann:
                for (let z: number = 0; z < reihenmaximum; z++) { //wird diese reihe durchlaufen 
                    if (z % 2 == 0) { 
                        let elem: HTMLDivElement = document.createElement("div"); //hier wird eine variable elem deklariert und ihm wird gesagt das er ein neues div erstellt im dokument
                        document.body.appendChild(elem);    //hier wird das neue div in den body eingefügt
                        elem.className = "textMittig";
                        elem.className = "black";           //hier wird dem neuen div die cssKlasse zugewiesen "black" welches es schwarz macht
                        elem.textContent = (k + "");        //hier wird dem neuen div der Textinhalt(=Anzahl der Reiskörner auf dem Feld) gegeben
                        k = k * 2;                          //hier wird der Textinhalt berechnet, in dem vom vorheriegen schahbrettfeld die zahl genommen wird und verdoppelt wird
                    }
                    else {
                        let elem: HTMLDivElement = document.createElement("div"); //hier wird eine variable elem deklariert und ihm wird gesagt das er ein neues div erstellt im dokument
                        document.body.appendChild(elem);    //hier wird das neue div in den body eingefügt
                        elem.className = "textMittig";
                        elem.className = "white";           //hier wird dem neuen div die cssKlasse zugewiesen "white" welches es weiß macht
                        elem.textContent = (k + "");        //hier wi en div der Textinhalt(=Anzahl der Reiskörner auf dem Feld) gegeben
                        k = k * 2;                          //hier wird der Textinhalt berechnet, in dem vom vorheriegen schahbrettfeld die zahl genommen wird und verdoppelt wird
                    }
                }
            }

            else {      //ansonsten, wenn der restwert nicht 0 ist von i und 2, dann:
                for (let z: number = 0; z < reihenmaximum; z++) {
                    if (z % 2 == 0) {    
                        let elem: HTMLDivElement = document.createElement("div"); //hier wird eine variable elem deklariert und ihm wird gesagt das er ein neues div erstellt im dokument
                        document.body.appendChild(elem);    //hier wird das neue div in den body eingefügt
                        elem.className = "textMittig";
                        elem.className = "white";           //hier wird dem neuen div die cssKlasse zugewiesen "white" welches es weiß macht
                        elem.textContent = (k + "");        //hier wird dem neuen div der Textinhalt(=Anzahl der Reiskörner auf dem Feld) gegeben
                        k = k * 2;                          //hier wird der Textinhalt berechnet, in dem vom vorheriegen schahbrettfeld die zahl genommen wird und verdoppelt wird
                    }

                    else {
                        let elem: HTMLDivElement = document.createElement("div"); //hier wird eine variable elem deklariert und ihm wird gesagt das er ein neues div erstellt im dokument
                        document.body.appendChild(elem);    //hier wird das neue div in den body eingefügt
                        elem.className = "textMittig";
                        elem.className = "black";           //hier wird dem neuen div die cssKlasse zugewiesen "black" welches es schwarz macht
                        elem.textContent = (k + "");        //hier wird dem neuen div der Textinhalt(=Anzahl der Reiskörner auf dem Feld) gegeben
                        k = k * 2;                          //hier wird der Textinhalt berechnet, in dem vom vorheriegen schahbrettfeld die zahl genommen wird und verdoppelt wird
                    }
                }
            }
        }
    }
    Schachbrett();

let obereDivReihe: NodeListOf<HTMLElement> = document.getElementsByTagName("div");
    
// Gibt den Feldern in der ersten Reihe bei einem Klick die Klasse "farbe", wodurch sie rot werden
for (let i: number = 0; i < 9; i++) {                               //durchläuft die obere reihe der gesamtlänge nach
    obereDivReihe[i].addEventListener("click", function(): void {   //registriert welches div genau angeklickt worden ist von der oberen schachbrettreihe
        this.classList.toggle("farbe");                             //färbt genau dieses angeklickte div durch die cssKlasse farbe ein
        summeK();                                                    // hier wird der funktion summeK bei aktivierung gesagt welches div angeklickt worden ist
    });
}

    let roteDivs: NodeListOf<Element> = document.getElementsByClassName("farbe");
    let summe: number = 0; // wird die summe aller angeklickten divs nachher ergeben 
    let toolTip: HTMLElement = document.getElementById("tooltip"); // div im html mit id wo die summe der angeklickten divs nacher angezeigt wird
    
function summeK(): void { 

    if (roteDivs.length == 0) {  // wenn 0 divs angeklickt sind, 
        toolTip.style.display = "none"; //dann ist auch das tooltip.div nicht da 
    }
    else {
        toolTip.style.display = "inline-block"; //wenn nicht 0 divs angeklickt sind, dann wird das tooltip.div angezeigt
    }

    for (let i: number = 0; i < roteDivs.length; i++) {     // durchläuft alle angeklickten und somit roten divs und registriert somit dessen inhalt= die benötigten zahlen zum zusammen berechnen der summe 
        summe += Number(roteDivs[i].textContent);           //der nummerninhat der angeklickten divs summiert sich
        let hexa: string = summe.toString(16);              //berechnet die hexadezimalzahl aus der summe der reiskörner der angeklickten divs
        let dezi: string = summe.toString();                //berechnet die dezimalzahl aus der summe der reiskörner der angeklickten divs
        toolTip.textContent = "Summe vom Reis:" + summe + "\r\n" /* absatz */ + "Dezimal: " + dezi + "\r\n" + "Hexadezimal: " + hexa; //schreibt in das tooltip.div die benötigten zahlen
    }
}
    
    document.addEventListener("mousemove", function(Event) {
        document.getElementById("tooltip").style.left = (Event.clientX + 10) + "px";
        document.getElementById("tooltip").style.top = (Event.clientY + 10) + "px";
    }); 
};
