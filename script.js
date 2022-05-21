$(document).ready(function () {

    // Save button function and variables
    $('.saveBtn').on('click', function () {
      
      var value = $(this).siblings('.description').val();
      var time = $(this).parent().attr('id');
  
      // Save item to local storage
      localStorage.setItem(time, value);
  
    
    });
  
    function hourUpdater() {
      // Set variable for current hour
      var currentHour = moment().hours();
  
      // Loop though time-block class
      $('.time-block').each(function () {
        var blockHour = parseInt($(this).attr('id').split('-')[1]);
  
        //Change class based on hour
        if (blockHour < currentHour) {
          $(this).addClass('past');
        } else if (blockHour === currentHour) {
          $(this).removeClass('past');
          $(this).addClass('present');
        } else {
          $(this).removeClass('past');
          $(this).removeClass('present');
          $(this).addClass('future');
        }
      });
    }
  
    hourUpdater();
  
    // Set update interval for the hours 
    var interval = setInterval(hourUpdater, 1000);
  
    //Attatch front end to local storage
    $('#hour-9 .description').val(localStorage.getItem('hour-9'));
    $('#hour-10 .description').val(localStorage.getItem('hour-10'));
    $('#hour-11 .description').val(localStorage.getItem('hour-11'));
    $('#hour-12 .description').val(localStorage.getItem('hour-12'));
    $('#hour-13 .description').val(localStorage.getItem('hour-13'));
    $('#hour-14 .description').val(localStorage.getItem('hour-14'));
    $('#hour-15 .description').val(localStorage.getItem('hour-15'));
    $('#hour-16 .description').val(localStorage.getItem('hour-16'));
    $('#hour-17 .description').val(localStorage.getItem('hour-17'));
  
    // Show date
    $('#currentDay').text(moment().format('dddd, MMMM Do'));
  });
  