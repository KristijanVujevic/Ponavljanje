// Koristeći JavaScript dohvatite HTML element preko njegova ID-a "zaglavlje" te mu dodajte novi podelement tipa <h1> s tekstom "Naslov" (novi element biti će posljednji podelement svog roditelja).

var zagavlje = document.getElementById("zaglavlje");
var newh1 = document.createElement("h1");
newh1.textContent = "Naslov";
zagavlje.appendChild(newh1);
