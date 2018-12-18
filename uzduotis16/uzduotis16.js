//Parašyti metodą kuris patikrina ar per parametrus paduotame žodyje yra raidžių derinių
// “ab”. Prieš atliekant veiksmus patikrinti ar paduotas žodis yra tinkamas, jei ne, grąžinti 0.
// Užuomina: radus “a” raidę, tikrinti ar tai nėra paskutinė žodžio raidė, ir jeigu ne, tuomet
// tikrinti ar sekanti raidė (i + 1) yra “b”.
function handleClick() {
    var text = document.getElementById("input").value;
    if (!isNaN(text)) {
        document.getElementById("output").innerHTML = "Zodyje " + text + " ab poru surasta : " + 0;
        return;
    }

    var kiekis = 0;
    for (var i = 0; i < text.length - 1; i++) {
        if (text.charAt(i) == "a" && text.charAt(i + 1) == "b") kiekis++;
    }

    document.getElementById("output").innerHTML = "Zodyje " + text + " ab raidziu surasta : " + kiekis;
}
