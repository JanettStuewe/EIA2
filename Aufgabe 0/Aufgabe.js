document.addEventListener('DOMContentLoaded', function () {
    var getname;
    getname = prompt("Geben Sie hier ihren Namen ein.");
    var begruessung;
    begruessung = "Guten Tag ";
    document.body.innerHTML = begruessung + getname + " :D";
});
