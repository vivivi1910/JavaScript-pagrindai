//Parašyti metodą kuris per parametrus pasiimtų masyvą, o grąžintų apsuktą masyvą ([1,
// 2, 3, 4, 5] -> [5, 4, 3, 2, 1]). Užuomina: sukurti antrą tokio paties dydžio masyvą ir jam
// priskirti skaičius nuo galo.


function handleClick() {
    var masyvas = [1, 2, 3, 4, 7, 2];
    document.getElementById("output").innerHTML = "maziausias yra: " + apsukti(masyvas);
}

function apsukti(array) {
    return array.reverse();
}