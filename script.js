function clearTxt(){
    document.getElementById('celcius1').value = '';
    document.getElementById('fahrenhait1').value = '';
    document.getElementById('formula').value = '';
    }

function convert() {
    const celsius = parseFloat(document.getElementById("celcius1").value);
    const fahrenheit = (celsius * 1.8) + 32;
    document.getElementById("fahrenhait1").innerHTML = fahrenheit;
}

function reverse() {
    var textarea1 = document.getElementById("celcius1");
    var textarea2 = document.getElementById("fahrenhait1");

        var temp = textarea1.value;

            textarea1.value = textarea2.value;
            textarea2.value = temp;
}