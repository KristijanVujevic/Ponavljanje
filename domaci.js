// Zada 1
// Napišite JavaScript funkciju koja prihvaća cjelobrojnu vrijednost kao argument te vraća poruku da li se radi o parnom ili neparnom broju.
// Pretpostavite da će argument uvijek biti cjelobrojna vrijednost.
var br = 2;
function provjeraParni(br) {
  if (br % 2 == 0) {
    console.log(`Broj ${br} je parni broj`);
  } else {
    console.log(`Broj ${br} je neparni broj`);
  }
}
// Zad2:
// Napišite JavaScript funkciju koja prihvaća zadani niz kao argument i pronalazi najdužu riječ unutar niza. Vratite tu riječ iz funkcije i spremite u varijablu čiju ćete vrijednost ispisati u konzoli.

var rijeci = [
  "quickest",
  "brown",
  "fox",
  "jumps",
  "over",
  "the",
  "lazy",
  "dog",
];
var longest = "";
for (let i = 0; i < rijeci.length; i++) {
  const rijec = rijeci[i];
  if (rijec.length > longest.length) {
    longest = rijec;
  } else {
    continue;
  }
}
console.log(longest);

// Zad3: isto kao 2 samo najkraću riječ
var shortest = "";
for (let i = 0; i < rijeci.length; i++) {
  const kratkaRijec = rijeci[i];
  if (kratkaRijec.length < longest.length) {
    shortest = kratkaRijec;
  } else {
    continue;
  }
}
console.log(shortest);
//Zad 4
// Koristeći JavaScript dohvatite HTML element preko njegova ID-a "zaglavlje" te mu dodajte novi podelement tipa <h1> s tekstom "Naslov" (novi element biti će posljednji podelement svog roditelja).

//ZAd 5:
// Koristeći JavaScript dohvatite HTML element preko njegova ID-a "zaglavlje" te ga uklonite iz HTML stabla.

//Zad6:
//Koristeći JavaScript dohvatite HTML element preko njegova ID-a "zaglavlje" te mu postavite sljedeću pozadinsku boju: "#ddd".
