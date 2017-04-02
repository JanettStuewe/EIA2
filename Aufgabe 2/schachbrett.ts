document.addEventListener('DOMContentLoaded', function () {
    
    let brett: number = 63;
    let zahl: number = 1;
    let reihenmaximum: number = 8;
    let k: number = 1;    

    function Legende() {
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
    Legende();
});
