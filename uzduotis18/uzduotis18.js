//Masyve surašyti žmonių vardai. Parašyti funkciją kuri juos atvaizduotų ekrane.

function handleClick() {
    var mas = ["Ona", "Bronius", "Daiva"];
    mas.forEach(function (item) {
        document.getElementById("output").innerHTML += item;
    });
}
