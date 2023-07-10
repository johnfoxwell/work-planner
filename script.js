// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var currentHour = dayjs().hour()

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  $(".saveBtn").on("click", function(event) {
    event.preventDefault();

    var input = $(this).siblings(".description").val()
    var time = $(this).parent().attr("id")

    localStorage.setItem(input, time);
  });


  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  
  $(".time-block").each(function() {
    var getHour = parseInt($(this).attr("id").split("-")[1])

    if (getHour < currentHour) {
      $(this).addClass("past")
    } else if (getHour === currentHour) {
      $(this).addClass("present")
    } else {
      $(this).addClass("future")
    }
  })


  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

  $(".time-block").each(function() {
    var input = localStorage.getItem(time)
    var time = $(this).attr("id")

    if (input != null) {
      $(this).find("description").val(input)
    }
  })

  
  // TODO: Add code to display the current date in the header of the page.
  var today = dayjs();
  $('#currentDay').text(today.format("MMM D, YYYY"))
});
