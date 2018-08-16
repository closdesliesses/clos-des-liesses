// Contact.js
var picker;

function increment(elementId) {
  var input = document.getElementById(elementId);
  input.value = parseInt(input.value) + 1;
};

function decrement(elementId) {
  var input = document.getElementById(elementId);
  var min = input.getAttribute('min');
  if( input.value > min ) {
    console.log(input.value, min)
    input.value = parseInt(input.value) - 1;
  }
};

function initDatePicker() {
  var options = { year: 'numeric', month: 'numeric', day: 'numeric' };

  picker1 = datepicker(document.querySelector('#input-date-1'), {
    position: 'br',
    startDay: 1, // Calendar week starts on a Monday.
    minDate: new Date(),
    // dateSelected: new Date(2099, 0, 5), // Today is selected.
    formatter: function(el, date, instance) {
      // This will display the date as `1/1/2017`.
      el.value = date.toLocaleDateString('fr-FR', options);
    },
    customMonths: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
    customDays: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
    overlayPlaceholder: 'Année',
    overlayButton: 'Go!'
  });

  picker2 = datepicker(document.querySelector('#input-date-2'), {
    position: 'br',
    startDay: 1, // Calendar week starts on a Monday.
    minDate: new Date(),
    // dateSelected: new Date(2099, 0, 5), // Today is selected.
    formatter: function(el, date, instance) {
      // This will display the date as `1/1/2017`.
      el.value = date.toLocaleDateString('fr-FR', options);
    },
    customMonths: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
    customDays: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
    overlayPlaceholder: 'Année',
    overlayButton: 'Go!'
  });
}

$(document).ready(function(){

  $(window).keydown(function(event){
    if(event.keyCode == 13) {
      event.preventDefault();
      return false;
    }
  });

  initDatePicker()

});