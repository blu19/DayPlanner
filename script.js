var moment = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
$('#showTime').text(moment);
//document.getElementById("#headerText").innerHTML = moment;
//$('.city').html(`<h1>${response.name} Weather Details</h1>`);
console.log(moment);

//for loop for calender rows
for (var time = 9; time < 18; time++) {
    //console.log(time)
    var i = time - 9;
    console.log(i)
    //attribute color change if less than
}
//calender rows
$('#myContainerPlanner').append('<div id="nine" class="input-group mb-3 mx-auto row plannerRow hour-index" style="width: 700px;"></div>');
$('#nine').append("<div class='col-md-2'>");
$('#nine').append('<span class="timeContainer">');

//Showing hour and am or pm for each row
var displayHour = 0;
var ampm = "";

if (hour > 12) {
    displayHour = hour - 12;
    ampm = "pm";
} else {
    displayHour = hour;
    ampm = "am";
}
