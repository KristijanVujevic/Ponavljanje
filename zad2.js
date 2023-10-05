//Deklarirajte varijable y i z te im dodijelite proizvoljne vrijednosti. Nakon toga razlomite ovu ternarnu operaciju na 3 različite operacije (upotrebom grananja). Ispišite dobivenu vrijednost varijable x.
var z = 6;
var y = 1;

var x = z === 2 ? y : 5;

if (z === 2) {
  x = y;
} else {
  x = 2;
}
console.log(x);
