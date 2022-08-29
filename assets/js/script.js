var scheduledHours = [];
var availableHours = [];
var m = moment();
var newDay = moment().hour(0);
var currentTime = m.hour();

function clock() {
    var dateString = moment().format("MMMM Do YYYY, h:mm:ss a");
    $('#currentDay').html(dateString);
}