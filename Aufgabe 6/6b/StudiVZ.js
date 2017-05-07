var StudiVZ;
(function (StudiVZ) {
    var students = [];
    var stop = false;
    while (!stop) {
        var action = prompt("Datensatz anlegen (n), abfragen(a) oder Programm beenden (s)\nn,a oder s eingeben");
        switch (action) {
            case "n":
            case "N":
                var input = prompt("Eingabe (jeweils mit Komma getrennt) von\nMatrikelnummer, Name, Vorname, Alter, Geschlecht (0 f�r Frau oder 1 f�r Mann) und Kommentar");
                alert(saveData(input));
                break;
            case "a":
            case "A":
                var matrikel = parseInt(prompt("Eingabe Matrikelnummer"));
                alert(queryData(matrikel));
                break;
            case "s":
            case "S":
                stop = true;
        }
    }
    function saveData(_input) {
        var inputArray = _input.split(",");
        if (inputArray.length < 5) {
            return "Eingabe nicht vollst�ndig";
        }
        if (isNaN(parseInt(inputArray[0]))) {
            return "Bitte geben Sie die Matrikelnummer als Zahl ein.";
        }
        if (isNaN(parseInt(inputArray[3]))) {
            return "Bitte geben Sie das Alter als Zahl ein.";
        }
        if (parseInt(inputArray[4]) != 0 && parseInt(inputArray[4]) != 1) {
            return "Bitte geben Sie ihr Geschlecht mit 0 oder 1 an. Beachten Sie dabei 0 steht f�r weiblich oder 1 f�r m�nnlich.";
        }
        var s = {
            Matrikelnummer: parseInt(inputArray[0]),
            Name: inputArray[1],
            Vorname: inputArray[2],
            Alter: parseInt(inputArray[3]),
            Geschlecht: parseInt(inputArray[4]) == 1,
            Kommentar: inputArray[5]
        };
        students.push(s);
        var geschlecht = s.Geschlecht ? "m" : "w";
        console.log(students);
        return "Folgende Daten wurden gespeichert: \nMatrikelnummer: " + s.Matrikelnummer + "\nName: " + s.Name + "\nVorname: " + s.Vorname + "\nAlter: " + s.Alter + "\nGeschlecht: " + geschlecht + "\nKommentar: " + s.Kommentar;
    }
    function queryData(_matrikel) {
        for (var i = 0; i < students.length; i++) {
            if (students[i].Matrikelnummer == _matrikel) {
                var geschlecht = students[i].Geschlecht ? "m" : "w";
                return "Folgende Daten sind unter der eingegebenen Matrikelnummer gespeichert: \nMatrikelnummer: " + students[i].Matrikelnummer + "\nName: " + students[i].Name + "\nVorname: " + students[i].Vorname + "\nAlter: " + students[i].Alter + "\nGeschlecht: " + geschlecht + "\nKommentar: " + students[i].Kommentar;
            }
        }
    }
})(StudiVZ || (StudiVZ = {}));
//# sourceMappingURL=StudiVZ.js.map