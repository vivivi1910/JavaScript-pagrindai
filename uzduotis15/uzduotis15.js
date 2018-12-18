//Parašyti metodą kuris suskaičiuoja kiek per parametrus paduotame žodyje yra raidžių
// “a”. Prieš atliekant veiksmus patikrinti ar paduotas žodis yra skaičius, jei skaičius,
// grąžinti 0.

function handleClick() {
    var text = document.getElementById("input").value;
    if (!isNaN(text)) {
        document.getElementById("output").innerHTML = "Zodyje " + text + " a raidziu surasta : " + 0;
        return;
    }
    var mas = text.split("");
    var kiekis = 0;
    mas.forEach(
        function (t) {
            if (t == "a") kiekis++;
        });

    document.getElementById("output").innerHTML = "Zodyje " + text + " a raidziu surasta : " + kiekis;
}
