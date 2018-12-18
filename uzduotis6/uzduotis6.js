
function handleClick() {
    var zodis = document.getElementById("input").value;
    zodis.split(",").forEach(item => console.log(item))
}

//var zodis = document.getElementById('input').value.split(",").forEach(item =>console.log(item));

////Sukurti puslapį, kuris paprašytų vartotojo įvesti
// //  žodžius atskirtus kableliais.
// // Paspaudus submit, įvesti žodžiai turi būti atvaizduojami,
// // kiekvienas žodis naujoje eilutėje
// //Hint: "a,b".split(",") duoda ["a","b"]
//
//
// function handleClick() {
//     var zodziai = document.getElementById("input").value;
//     var masyvas = zodziai.split(",");
//     masyvas.forEach(
//         function (kaliosikas3) {
//             document.getElementById("output").innerHTML += kaliosikas3 + "<br>";
//         }
//     );
// }