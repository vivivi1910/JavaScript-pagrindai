//Sukurti puslapį, kuris prašo vartotojo įvesti skaičių n, tuomet leidžia pasirinkti ką
// suskaičiuoti, skaičių nuo 1 iki n sumą arba sandaugą. Jeigu įvestas skaičius mažesnis
// nei 1, puslapis turi informuoti apie blogą įvestį

function handleClickSum() {
    var n = document.getElementById("input").value;
    n = Number(n);

    if (n < 1) {
        document.getElementById("output").innerHTML = "Skaicius mazesnis uz 1";
    } else {
        var result = 0;
        for (var i = 1; i <= n; i++) {
            result += i;
        }
        document.getElementById("output").innerHTML = "Suma yra: " + result;
    }

}

function handleClickMultiplication() {
    var n = document.getElementById("input").value;
    n = Number(n);

    if (n < 1) {
        document.getElementById("output").innerHTML = "Skaicius mazesnis uz 1";
    } else {
        var result = 1;
        for (var i = 1; i <= n; i++) {
            result *= i;
        }
        document.getElementById("output").innerHTML = "Sandauga yra: " + result;
    }

}