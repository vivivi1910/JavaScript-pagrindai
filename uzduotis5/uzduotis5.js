// 1-> susikurti sumos kintamaji globalioje erdveje
// 2-> nuskaityti teksta is input lauko
// 2.1-> jeigu tekstas yra ne skaicius if(isNaN(zodis)==true), rodyti dokumente-> "ne skaicius"
// 3-> prieingu atveju paziureti ar tekstas yra lygus "0"
// 4-> jeigu tekstas yra lygus "0", turima atsakyma spausdinti i div
// 5-> jeigu tekstas nelygu "0", ivesta teksta paversti i skaiciu ir prideti prie atsakymo
var atsakymas = 0;

function handleClick() {
    var zodis = document.getElementById("input").value;
    if (isNaN(zodis)) {
        document.getElementById("output").innerHTML = "Ivestas ne skaicius";
    } else if (zodis == "0") {
        document.getElementById("output").innerHTML = atsakymas;
    } else {
        document.getElementById("output").innerHTML = "";
        atsakymas += Number(zodis);
    }
}
