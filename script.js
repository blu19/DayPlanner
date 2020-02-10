// display current date and time
var moment = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
$('#showTime').text(moment);
console.log(moment);

$(document).ready(function () {

//var saveMe9 = document.getElementById("saves9");


// $('#saves9').click(function() {
    //     var savePlan = $('#inputNine').val();
    //     console.log(savePlan);
    //     localStorage.setItem('9am, savePlan');
    // });

//repeat line for each hour
$('.saves9').on('click', savePlan9);
$('.saves10').on('click', savePlan10);
$('.saves11').on('click', savePlan11);
$('.saves12').on('click', savePlan12);
$('.saves1').on('click', savePlan1);
$('.saves2').on('click', savePlan2);
$('.saves3').on('click', savePlan3);
$('.saves4').on('click', savePlan4);
$('.saves5').on('click', savePlan5);

//repeat whole function for each hour
function savePlan9() {
    var plans9 = $('.inputNine').val();
    console.log(plans9);
    localStorage.setItem('nine', plans9);
};

function savePlan10() {
    var plans10 = $('.inputTen').val();
    console.log(plans10);
    localStorage.setItem('ten', plans10);
};

function savePlan11() {
    var plans11 = $('.inputEleven').val();
    console.log(plans11);
    localStorage.setItem('eleven', plans11);
};

function savePlan12() {
    var plans12 = $('.inputTwelve').val();
    console.log(plans12);
    localStorage.setItem('twelve', plans12);
};

function savePlan1() {
    var plans1 = $('.inputOne').val();
    console.log(plans1);
    localStorage.setItem('one', plans1);
};
    
function savePlan2() {
    var plans2 = $('.inputTwo').val();
    console.log(plans2);
    localStorage.setItem('two', plans2);
};

function savePlan3() {
    var plans3 = $('.inputThree').val();
    console.log(plans3);
    localStorage.setItem('three', plans3);
};

function savePlan4() {
    var plans4 = $('.inputFour').val();
    console.log(plans4);
    localStorage.setItem('four', plans4);
};
    
function savePlan5() {
    var plans5 = $('.inputFive').val();
    console.log(plans5);
    localStorage.setItem('five', plans5);
};

function storedPlans() {
    //repeat following line for each hour
    $('.inputNine').val(localStorage.getItem('nine'));
    console.log(localStorage.getItem('nine'));
    $('.inputTen').val(localStorage.getItem('ten'));
    $('.inputEleven').val(localStorage.getItem('eleven'));
    $('.inputTwelve').val(localStorage.getItem('tweleve'));
    $('.inputOne').val(localStorage.getItem('one'));
    $('.inputTwo').val(localStorage.getItem('two'));
    $('.inputThree').val(localStorage.getItem('three'));
    $('.inputFour').val(localStorage.getItem('four'));
    $('.inputFive').val(localStorage.getItem('five'));

}

storedPlans();
});