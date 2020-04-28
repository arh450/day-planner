// Variable to establish and display current date using moment.js
var currentDate = moment().format("dddd, MMMM Do YYYY");
$("#currentday").text(currentDate);
// console.log(currentDate);

// Set interval function to establish and display current time using moment.js
setInterval(function () {
    var currentTime = moment().format("h:mm:ss A");
    // console.log(currentTime);
    $("#currenttime").text(currentTime);
}, 1000);



