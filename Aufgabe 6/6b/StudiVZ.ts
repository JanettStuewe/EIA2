namespace StudiVZ {
    interface StudentData {
        // hier ist noch die richtige Datenstruktur festzulegen
        Matrikelnummer: number;
        Name: string;
        Vorname: string;
        Alter: number;
        Geschlecht: boolean;
        Kommentar: string;
    }
    var students: StudentData[] = [];
    var stop: boolean = false;

    while (!stop) {
        var action: string = prompt("Datensatz anlegen (n), abfragen(a) oder Programm beenden (s)\nn,a oder s eingeben");

        switch (action) {
            case "n":
            case "N":
                var input: string = prompt("Eingabe (jeweils mit Komma getrennt) von\nMatrikelnummer, Name, Vorname, Alter, Geschlecht (0 für Frau oder 1 für Mann) und Kommentar");
                alert(saveData(input));
                break;
            case "a":
            case "A":
                var matrikel: number = parseInt(prompt("Eingabe Matrikelnummer"));
                alert(queryData(matrikel));
                break;
            case "s":
            case "S":
                stop = true;
        }
    }

    function saveData(_input: string): string {
        let inputArray: string[] = _input.split(",");
        if (inputArray.length < 5) {
            return "Eingabe nicht komplett";
        }
        if (isNaN(parseInt(inputArray[0]))) {
            return "Bitte geben Sie die Matrikelnummer als Zahl ein.";
        }
        if (isNaN(parseInt(inputArray[3]))) {
            return "Bitte geben Sie das Alter als Zahl ein.";
        }
        if (parseInt(inputArray[4]) != 0 && parseInt(inputArray[4]) != 1) {
            return "Bitte geben Sie ihr Geschlecht mit 0 oder 1 an. Beachten Sie dabei 0 steht für Frau oder 1 für Mann.";
        }
        let s: StudentData = {
            Matrikelnummer: parseInt(inputArray[0]),
            Name: inputArray[1],
            Vorname: inputArray[2],
            Alter: parseInt(inputArray[3]),
            Geschlecht: parseInt(inputArray[4]) == 1,
            Kommentar: inputArray[5]
        };
        students.push(s);
        let geschlecht: string = s.Geschlecht ? "m" : "w";
        console.log(students);
        return "Folgende Daten wurden gespeichert: \nMatrikelnummer: " + s.Matrikelnummer + "\nName: " + s.Name + "\nVorname: " + s.Vorname + "\nAlter: " + s.Alter + "\nGeschlecht: " + geschlecht + "\nKommentar: " + s.Kommentar;
    }
    function queryData(_matrikel: number): string {
        for (let i: number = 0; i < students.length; i++) {
            if (students[i].Matrikelnummer == _matrikel) {
                let geschlecht: string = students[i].Geschlecht ? "m" : "w";
                return "Folgende Daten sind unter der eingegebenen Matrikelnummer gespeichert: \nMatrikelnummer: " + students[i].Matrikelnummer + "\nName: " + students[i].Name + "\nVorname: " + students[i].Vorname + "\nAlter: " + students[i].Alter + "\nGeschlecht: " + geschlecht + "\nKommentar: " + students[i].Kommentar;
            }
        }
    }
}