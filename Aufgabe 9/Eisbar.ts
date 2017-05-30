//kugelanzahl: number
//eissorten: erdbeer, kiwi, melone, haselnus, giotto, zitrone,Sahne, Schokosoße, Erbeersoße, Streusel, Krokant - checkboxen
//Waffel:true oder Becher:false  - boolean - radiobutton
//lieferoptionen : boolean - radiobutton
//eigene adresse: string
//momentanen preis mit anzeigen
//Button zur Prüfung der Bestellung - Information über fehlende oder invalide Daten

namespace Form {
    window.addEventListener("load", init);

    //RESET-Button
    //        document.getElementById("reset").addEventListener("click", function() 
    //        {
    //        clickCounter = 0;
    //        ausgabe = (organizations[clickCounter]);
    //        protokoll= "";
    //        document.getElementById("Ausgabe").innerHTML = ausgabe;
    //        document.getElementById("Protokoll").innerHTML = protok
//    });
    //});
    
    
    
//    let sorts: string[] = ["schoko", "Erdbeer", "Käse", "Schwarzwälderkirsch"];
//
//    function Input []: void {
//        createInputs();
//    }
//
//    function createInputs(): void {
//        for (let i: number = 0; i < sorts.lenght; i++) {
//            createInput(sorts[i]);
//        }
//    }







    function init(_event: Event): void {
        let fieldsets: NodeListOf<HTMLFieldSetElement> = document.getElementsByTagName("fieldset");

        for (let i: number = 0; i < fieldsets.length; i++) {
            let fieldset: HTMLFieldSetElement = fieldsets[i];
            fieldset.addEventListener("change", handleChange);
        }
    }

    function handleChange(_event: Event): void {
        let target: HTMLInputElement = <HTMLInputElement>_event.target;
        if (target.name == "Slider") {
            let progress: HTMLProgressElement = <HTMLProgressElement>document.getElementsByTagName("progress")[0];
            progress.value = parseFloat(target.value);
        }

        if (target.name == "Stepper") {
            let progress: HTMLProgressElement = <HTMLProgressElement>document.getElementsByTagName("meter")[0];
            progress.value = parseFloat(target.value);
        }

    }
}