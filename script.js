var CC = document.getElementById("century").value;
var YY = document.getElementById("year").value;
var MM = document.getElementById("month").value;
var DD = document.getElementById("day").value;
var male = document.getElementById("male");
var female = document.getElementById("female");

var Amale = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var Afemale = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

if (MM <= 0 || MM > 12) {

    alert("Please enter a valid month");

} else if (DD <= 0 || DD > 31) {

    alert("Please enter a valid day");

} else {
    var index = (((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7;

    var d = parseInt(index);
}

if (male.checked == true) {

    alert("Your Akan name is " + Amale[d]);

} else if (female.checked == true) {

    alert("Your Akan name is " + Afemale[d]);

} else {

    alert("Please select your gender");
}