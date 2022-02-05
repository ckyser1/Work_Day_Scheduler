//moment.js format
var today = moment().format("dddd [|] LL");

// call current day
$("#currentDay").append(today);

// get hours of day
var now = new Date().getHours();

var timeblocks = Array.from(document.getElementsByTagName('textarea'));
console.log(timeblocks);

function getData(){
    for (var j = 0; j < localStorage.length; j++) {
      var keyNumbers = localStorage.key(j);
      timeblocks.forEach(function(item) {
        if (item.dataset.number == keyNumbers) {
        item.value = localStorage.getItem(keyNumbers)
        }
      })   
    }
}

getData();

//saves text data
$(".saveBtn").on("click", function (event) {
    event.preventDefault();
    var notes = $(this).siblings("textarea").val();
    var rowHourActive = $(this).siblings("textarea").data("number");
    window.localStorage.setItem(rowHourActive, notes);
    
});




//sets presets for time
function statusTimeblock(){
    for (var i=0; i<timeblocks.length; i++) {
        var singleT = timeblocks[i];
        if (singleT.dataset.number == now) {
            singleT.classList.add("present");
        }
        if (singleT.dataset.number < now) {
            singleT.classList.add("past");
        }
        if (singleT.dataset.number > now) {
            singleT.classList.add("future");
        }  
    }  
}
statusTimeblock();