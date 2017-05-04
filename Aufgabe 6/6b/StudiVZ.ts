namespace StudiVZ {
    interface StudentData {
        matricel: number;
        name: string;
        firstname: string;
        age: number;
        sex: boolean;
        comment: string;
        // hier ist noch die richtige Datenstruktur festzulegen
    }


    let students: StudentData[] = [];
    let stop: boolean = false;

    let str: string = "...";
    let strArr: string[] = str.split(",");
    console.log(strArr);

    let student: StundentData = {
        matricel:
        name :
        firstname:
        age:
        sex:
        comment:
    }

    while (!stop) {
        var action: string = prompt("Datensatz anlegen (n), abfragen(a) oder Programm beenden (s)\nn,a oder s eingeben");

        switch (action) {
            case "n":
            case "N":
                var input: string = prompt("Eingabe (jeweils mit Komma getrennt) von\nMatrikelnummer, Name, Vorname, Alter, Geschlecht (0 oder 1) und Kommentar");
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
        return "Hier fehlt noch der richtige Code...";
    }
    function queryData(_matrikel: number): string {
        return "Hier fehlt noch der richtige Code...";
    }
}