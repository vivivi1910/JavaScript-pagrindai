//Realizuoti 8 užduotį naudojant metodą kurio parametras būtų vartotojo įvestų skaičių
// masyvas ir skaičių didesnių nei 100 atvaizdavimas vyktų pačiame metode.

function handleClick() {
    var skaiciai = document.getElementById("input").value;
    var masyvas = skaiciai.split(",");

    masyvas.forEach(atrinkimas);

}

function atrinkimas(item) {
    if (Number(item) > 100) {
        document.getElementById("output").innerHTML += item + "<br>";
    }
}