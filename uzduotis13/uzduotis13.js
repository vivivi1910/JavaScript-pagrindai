//Parašyti metodą kurio parametras būtų sveikų skaičių masyvas. Metodas turi grąžinti
//maziausia masyvo skaičių.

function handleClick() {
    var masyvas = [1, 2, 3, 4, 7, 2];
    document.getElementById("output").innerHTML = "Maziausias yra: " + getMin(masyvas);
}


function getMin(array) {
    var result = array[0];
    array.forEach(function (item) {

        if (item < result) {
            result = item;
        }
    });
    return result;
}