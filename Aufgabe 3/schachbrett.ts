window.onload = function(): void {

    let brett: number = 63;
    let zahl: number = 1;
    let reihenmaximum: number = 8;
    let k: number = 1;

    function Schachbrett(): void {
        for (let i: number = 0; i < reihenmaximum; i++) {

            if (i % 2 == 0) {
                for (let z: number = 0; z < reihenmaximum; z++) {
                    if (z % 2 == 0) {
                        let elem: HTMLDivElement = document.createElement("div");
                        document.body.appendChild(elem);
                        elem.className = "black";
                        elem.textContent = (k + "");
                        k = k * 2;
                    }
                    else {
                        let elem: HTMLDivElement = document.createElement("div");
                        document.body.appendChild(elem);
                        elem.className = "white";
                        elem.textContent = (k + "");
                        k = k * 2;
                    }
                }
            }

            else {
                for (let z: number = 0; z < reihenmaximum; z++) {
                    if (z % 2 == 0) {
                        let elem: HTMLDivElement = document.createElement("div");
                        document.body.appendChild(elem);
                        elem.className = "white";
                        elem.textContent = (k + "");
                        k = k * 2;
                    }

                    else {
                        let elem: HTMLDivElement = document.createElement("div");
                        document.body.appendChild(elem);
                        elem.className = "black";
                        elem.textContent = (k + "");
                        k = k * 2;
                    }
                }
            }
        }
    }
    Schachbrett();

let obereDivReihe: NodeListOf<HTMLElement> = document.getElementsByTagName("div");
for (let i: number = 0; i < 9; i++) {   /* Gibt den Feldern in der ersten Reihe bei einem Klick die Klasse "farbe", wodurch sie rot werden */
    obereDivReihe[i].addEventListener("click", function(): void {
        this.classList.toggle("farbe");
        summeK();
    });
}
    
    let farbeDivs: NodeListOf<Element> = document.getElementsByClassName("farbe");
    let summe: number = 0;
    let toolTip: HTMLElement = document.getElementById("tooltip");
    
function summeK(): void {

    if (farbeDivs.length == 0) {  /* Zeigt die Tooltip Box nur an, wenn Felder selektiert sind */
        toolTip.style.display = "none";
    }
    else {
        toolTip.style.display = "inline-block";
    }

    for (let i: number = 0; i < farbeDivs.length; i++) {  /* Schreibt die Summe der Körner auf den selektierten Feldern in die Tooltip Box */
        summe += Number(farbeDivs[i].textContent);
        toolTip.textContent = "Summe der selektierten Reiskörner:" + "\r\n" + "Dezimal: " + summe.toString() + "\r\n" + "Hexadezimal: " + summe.toString(16);
    }
}
    
document.getElementById("tooltip").addEventListener("mousemove", function (event: MouseEvent): void { /* Sorgt dafür, dass die Tooltip Box die Maus verfolgt */
    let x: number = event.clientX;
    let y: number = event.clientY;
    toolTip.style.left = (event.x + 10) + "px";
    toolTip.style.top = (event.y + 10) + "px";
});
    
};
