//display current date and time
var moment = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
$('#showTime').text(moment);
//document.getElementById("#headerText").innerHTML = moment;
//$('.city').html(`<h1>${response.name} Weather Details</h1>`);
console.log(moment);

//$('.btn').on('click', savePlan);

$('#saves9').click(function() {
    var savePlan = $('#inputNine').val();
    console.log(savePlan);
    localStorage.setItem('9am, savePlan');
});

// function savePlan() {
//     var plans = $('#inputNine').val();
//     localStorage.setItem('nine', JSON.stringify(plans));
// };

// function storedPlans() {
//     $('#inputNine').val(localStorage.getItem('nine'));
//     console.log(localStorage.getItem('nine');
// }


// storedPlans();