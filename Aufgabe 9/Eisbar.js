//kugelanzahl: number
//eissorten: erdbeer, kiwi, melone, haselnus, giotto, zitrone,Sahne, Schokoso�e, Erbeerso�e, Streusel, Krokant - checkboxen
//Waffel:true oder Becher:false  - boolean - radiobutton
//lieferoptionen : boolean - radiobutton
//eigene adresse: string
//momentanen preis mit anzeigen
//Button zur Pr�fung der Bestellung - Information �ber fehlende oder invalide Daten
var Form;
(function (Form) {
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
    function init(_event) {
        var fieldsets = document.getElementsByTagName("fieldset");
        for (var i = 0; i < fieldsets.length; i++) {
            var fieldset = fieldsets[i];
            fieldset.addEventListener("change", handleChange);
        }
    }
    function handleChange(_event) {
        var target = _event.target;
        if (target.name == "Slider") {
            var progress = document.getElementsByTagName("progress")[0];
            progress.value = parseFloat(target.value);
        }
        if (target.name == "Stepper") {
            var progress = document.getElementsByTagName("meter")[0];
            progress.value = parseFloat(target.value);
        }
    }
})(Form || (Form = {}));
//# sourceMappingURL=Eisbar.js.map