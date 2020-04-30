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

    // Function to update inputbox background-color by comparing workDayHours array items (hours in this case) to a variable called currentHour that uses moment.js (FORMATED IN MILITARY TIME)
    function colorUpdater() {
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

    // Call of colorUpdater function
    colorUpdater();

    // On click event of save-button that sets hour and user input to local storage (found as siblings to save button) 
    $(".save-button").click(function (e) {
        var userInput = $(this).siblings(".user-input").val();
        var hour = $(this).siblings().attr("id");
        localStorage.setItem(hour, userInput);
    });

    // Setting each individual input to corresponding keyname (hour) from localstorage.
    // So when user refreshes page after saving appointment/event it will still appear in the input area.
    $("#9").val(localStorage.getItem("9AM"));
    $("#10").val(localStorage.getItem("10AM"));
    $("#11").val(localStorage.getItem("11AM"));
    $("#12").val(localStorage.getItem("12PM"));
    $("#13").val(localStorage.getItem("1PM"));
    $("#14").val(localStorage.getItem("2PM"));
    $("#15").val(localStorage.getItem("3PM"));
    $("#16").val(localStorage.getItem("4PM"));
    $("#17").val(localStorage.getItem("5PM"));

    // Clear Schedule buttons that clears local storage item and current value for the input area.
    // Gives user an easy way to delete/restart multiple appointments/events as opposed to having to mannually backspace text.
    $("#clear-schedule-button").click(function (e) {
        localStorage.clear();
        location.reload();
    });

});