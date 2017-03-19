document.addEventListener('DOMContentLoaded', function () {
	
    var getname = prompt("Geben Sie hier ihren Namen ein.");
    var begruessung = "Guten Tag ";
    document.body.innerHTML =begruessung + getname + " :D";
});