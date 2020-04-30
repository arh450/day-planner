$(document).ready(function () {

    // Variable to establish and display current date using moment.js
    var currentDate = moment().format("dddd, MMMM Do YYYY");
    $("#currentday").text(currentDate);
    // console.log(currentDate);

    // Set interval function to establish and display current time using moment.js (FORMATED IN REGULAR TIME)
    setInterval(function () {
        var currentTime = moment().format("h:mm:ss A");
        // console.log(currentTime);
        $("#currenttime").text(currentTime);
    }, 1000);

    // Array containing workday hours that match id's used for input boxes (FORMATTED IN MILITARY TIME)
    var workDayHours = ["9", "10", "11", "12", "13", "14", "15", "16", "17"]
    appointmentUpdater();

    // Function to update inputbox background-color by comparing workDayHours array items (hours in this case) to a variable called currentHour that uses moment.js (FORMATED IN MILITARY TIME)
    function appointmentUpdater() {
        var currentHour = moment().format("H");

        for (var i = 0; i < workDayHours.length; i++) {
            if (parseInt(workDayHours[i]) > currentHour) {
                $("#" + workDayHours[i]).attr("style", "background-color: #85aa9b");
            }
            else if (parseInt(workDayHours[i]) < currentHour) {
                $("#" + workDayHours[i]).attr("style", "background-color: #e4dae2");
            }
            else if (parseInt(workDayHours[i]) == currentHour) {
                $("#" + workDayHours[i]).attr("style", "background-color: #ff7d7d");
            }
        }



    }



    // On click event of save-button that sets hour ans user input to local storage

    $(".save-button").click(function (e) {
        var userInput = $(this).siblings(".user-input").val();
        var hour = $(this).siblings().attr("id");

        localStorage.setItem(hour, userInput);
    });








});