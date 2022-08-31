var scheduledHours = [];
var availableHours = [];
var m = moment();
var newDay = moment().hour(0);
var currentTime = m.hour();

function clock() {
    var dateString = moment().format("MMMM Do YYYY, h:mm:ss a");
    $('#currentDay').html(dateString);
}

setInterval(clock, 1000);

for (var hour=9; hour < 18; hour++) {
    scheduledHours.push(moment({hour}).format('h  a'));
    $('.container').append(`<div class='row time-block' data-time='${hour}'>
             <div class='col-sm col-md-2 hour'>
               <p>${moment({hour}).format('h  a')}</p>
             </div>
             <div class='col-sm col-md-10 d-flex description'>
                <div class='input-group'>
                  <textarea class="form-control text-area"></textarea>
                  <div class='input-group-append'>
                    <button class='save-button d-flex justify-center align-center'>
                      <i class='far fa-save fa-2x save-icon'></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>`);  
}

$.each($('.time-block'), function(index, value) {
    let dateHour = $(value).attr('data-time');
    if (Number(dateHour) === m.hour()) {
      $(this).find('textarea').addClass('present');
    } else if (Number(dateHour) < m.hour()) {
      $(this).find('textarea').addClass('past').attr('disabled', 'disabled');
      $(this).find('.save-button').addClass('disabled').attr('disabled', true);
    } else {
      $(this).find('textarea').addClass('future');
    }
  });

  console.log(currentTime);
