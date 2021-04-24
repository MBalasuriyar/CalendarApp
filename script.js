var timeDisplayEl = $('#time-display');










// function printProjectData(name, type, hourlyRate, dueDate) {
//     var projectRowEl = $('<tr>');
  
//     var projectNameTdEl = $('<td>').addClass('p-2').text(name);
  
//     var projectTypeTdEl = $('<td>').addClass('p-2').text(type);
  




// // handle displaying the time
// function displayTime() {
//     var rightNow = moment().format('dddd, MMMM Do YYYY, h:mm:ss a');
//     timeDisplayEl.text(rightNow);
//   }
  
  // Use Moment.js to format the following variables:
// 1. What is today's date in the following format: Jan 1st, 1999?
var today = moment();
$("#time-display").text(today.format("dddd, MMMM Do YYYY, h:mm:ss a"));

// event.preventDefault();


// printProjectData(
