var timeDisplayEl = $('#time-display');
var inputEl = $("Input");
var saveEl = $("saveButton");
var saved = localStorage.getItem("ToDo");




var skillsListEl = $('#skills-list');

var printSkills = function (name, date) {
  var listEl = $('<li>');
  var listDetail = name.concat(' on ', date);
  listEl.addClass('list-group-item').text(listDetail);
  listEl.appendTo(skillsListEl);
};


function checkTime(){
var El = $('<tr>');

if (data - time > theHour) {

  $('<td>').addClass('.past')
};
if (data - time < theHour) {

  $('<td>').addClass('.future')
};
}



function saveText(event){
event.preventDefault();
localStorage.setItem("ToDo:",inputEl.val() )
console.log(inputEl.val())}



var today = moment();
$("#time-display").text(today.format("dddd, MMMM Do YYYY,  a"));

var theHour = moment().hour()

// event.preventDefault();

