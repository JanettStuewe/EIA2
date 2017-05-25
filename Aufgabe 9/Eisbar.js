//kugelanzahl: number
//eissorten: erdbeer, kiwi, melone, haselnus, giotto, zitrone,Sahne, Schokoso�e, Erbeerso�e, Streusel, Krokant - checkboxen
//Waffel:true oder Becher:false  - boolean - radiobutton
//lieferoptionen : boolean - radiobutton
//eigene adresse: string
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
    //        document.getElementById("Protokoll").innerHTML = protokoll;
    //        });
    //});
    function init(_event) {
        console.log("Init");
        var fieldsets = document.getElementsByTagName("fieldset");
        for (var i = 0; i < fieldsets.length; i++) {
            var fieldset = fieldsets[i];
            fieldset.addEventListener("change", handleChange);
        }
    }
    function handleChange(_event) {
        //console.log(_event);
        //*/
        var target = _event.target;
        console.log("Changed " + target.name + " to " + target.value);
        //*/
        //*/ note: this == _event.currentTarget in an event-handler
        if (this.id == "checkbox")
            console.log("Changed " + target.name + " to " + target.checked);
        //*/
        //*/
        if (target.name == "Slider") {
            var progress = document.getElementsByTagName("progress")[0];
            progress.value = parseFloat(target.value);
        }
        //*/
        //*/
        if (target.name == "Stepper") {
            var progress = document.getElementsByTagName("meter")[0];
            progress.value = parseFloat(target.value);
        }
        //*/
    }
})(Form || (Form = {}));
//# sourceMappingURL=Eisbar.js.map