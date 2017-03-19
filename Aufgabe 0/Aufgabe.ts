document.addEventListener('DOMContentLoaded', function () {
    
    var getname:string;
    getname = prompt("Geben Sie hier ihren Namen ein.");
    var begruessung:string; 
    begruessung = "Guten Tag ";
    document.body.innerHTML =begruessung + getname + " :D";
});