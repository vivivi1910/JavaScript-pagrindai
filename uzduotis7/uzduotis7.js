//Sukurti puslapį, kuris leistų įvesti skaičius atskirtus kableliais. Paspaudus submit, turi būti
// atvaizduojama įvestų skaičių suma ir visi įvesti skaičiai.

function handleClick() {
    var skaiciai = document.getElementById("input").value; //kintamasis - ivesta i langeli reiksme
    var masyvas = skaiciai.split(","); //kad atskirtu kableliais
    var suma = 0;                          //suma lygu 0

    masyvas.forEach(function (item) {
            var skaicius = Number(item);

            suma += skaicius;

            document.getElementById("output").innerHTML += item + "<br>";
        }
    );

    document.getElementById("output").innerHTML += suma;
}