//kugelanzahl: number
//eissorten: erdbeer, kiwi, melone, haselnus, giotto, zitrone,Sahne, Schokoso�e, Erbeerso�e, Streusel, Krokant - checkboxen
//Waffel:true oder Becher:false  - boolean - radiobutton
//lieferoptionen : boolean - radiobutton
//eigene adresse: string
//momentanen preis mit anzeigen
//Button zur Pr�fung der Bestellung - Information �ber fehlende oder invalide Daten

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
    //}        
    //    let sorts: string[] = ["schoko", "Erdbeer", "K�se", "Schwarzw�lderkirsch"];
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

    // Array f�r alle Sorten, die in meiner Konditorei angeboten werden sollen
    let sorts: string[] = ["Schoko", "Erdbeer", "K�se", "Schwarzw�lder Kirsch", "Bienenstich"];
    // Das Fieldset in dem alle Inputs f�r die verschiedenen Kuchen angeordnet werden sollen.
    let fieldset: HTMLFieldSetElement;
    // Array in dem alle inputs f�r die Sorten untergebracht werden
    let inputs: HTMLInputElement[] = [];
    function createInputs(): void {
        // Erstelle pro Sorte Kuchen einen Input
        for (let i: number = 0; i < sorts.length; i++) {
            console.log(sorts[i]);
            createInput(sorts[i]);
        }
    }

    function createInput(_sort: string): void {
        // Ein Label ist ein Text den man anklicken kann um damit den Input auszul�sen
        let label: HTMLLabelElement = document.createElement("label");
        let input: HTMLInputElement = document.createElement("input");

        label.innerText = _sort;
        label.appendChild(input);
        // Die Art des Inputs wird �ber den Typ definiert
        input.type = "number";
        input.min = "0";
        input.value = "0";

        fieldset.appendChild(label);
        inputs.push(input);
    }

    function init(_event: Event): void {
        let fieldsets: NodeListOf<HTMLFieldSetElement> = document.getElementsByTagName("Bestelluebersicht");

        fieldset = document.getElementsByTagName("Bestelluebersicht")[0];

        createInputs();

        fieldset.addEventListener("change", change);
        for (let i: number = 0; i < fieldsets.length; i++) {
            let fieldset: HTMLFieldSetElement = fieldsets[i];
            fieldset.addEventListener("change", handleChange);
        }
    }

    function handleChange(_event: Event): void {
        let target: HTMLInputElement = <HTMLInputElement>_event.target;

        if (this.id == "checkbox")
            console.log("Changed " + target.name + " to " + target.checked);

        if (target.name == "Stepper") {
            let progress: HTMLProgressElement = <HTMLProgressElement>document.getElementsByTagName("meter")[0];
            progress.value = parseFloat(target.value);
        }

    }
}