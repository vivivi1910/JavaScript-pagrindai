//Sukurti puslapį, kuris leistų įvesti skaičius atskirtus kableliais. Paspaudus submit,
// atvaizduoti tik tuos skaičius kurie buvo didesni nei 100.

function handleClick() {
    var skaiciai = document.getElementById("input").value; //kintamasis - ivesta i langeli reiksme
    var masyvas = skaiciai.split(","); //kad atskirtu kableliais
    masyvas.forEach(function (item) {
            var skaicius = Number(item);

            if (Number(item) > 100) {

                document.getElementById("output").innerHTML += item + "<br>";
            }
        }
    );


}

