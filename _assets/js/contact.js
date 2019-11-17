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

  var picker1 = datepicker(document.querySelector('#input-date-1'), {
    position: 'br',
    startDay: 1,
    minDate: new Date(),
    formatter: function(el, date, instance) {
      el.value = date.toLocaleDateString('fr-FR', options);
    },
    customMonths: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
    customDays: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
    overlayPlaceholder: 'Année',
    overlayButton: 'Go!'
  });

  var picker2 = datepicker(document.querySelector('#input-date-2'), {
    position: 'br',
    startDay: 1,
    minDate: new Date(),
    formatter: function(el, date, instance) {
      el.value = date.toLocaleDateString('fr-FR', options);
    },
    customMonths: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
    customDays: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
    overlayPlaceholder: 'Année',
    overlayButton: 'Go!'
  });

  var pickerStart = datepicker(document.querySelector('#input-date-start'), {
    position: 'br',
    startDay: 1,
    minDate: new Date(),
    formatter: function(el, date, instance) {
      el.value = date.toLocaleDateString('fr-FR', options);
    },
    customMonths: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
    customDays: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
    overlayPlaceholder: 'Année',
    overlayButton: 'Go!'
  });

  var pickerEnd = datepicker(document.querySelector('#input-date-end'), {
    position: 'br',
    startDay: 1,
    minDate: new Date(),
    formatter: function(el, date, instance) {
      el.value = date.toLocaleDateString('fr-FR', options);
    },
    customMonths: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
    customDays: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
    overlayPlaceholder: 'Année',
    overlayButton: 'Go!'
  });
}

$(document).ready(function(){

  $('#contact__private-block, #contact__pro-block').hide();

  $('.contact__tab--private').find('.contact__tab__button').click(function() {
    $('#contact__pro-block').hide();
    $('#contact__private-block').show();
    $('.contact__tab--pro').removeClass('active');
    $(this).parent('.contact__tab--private').addClass('active');
  });

  $('.contact__tab--pro').find('.contact__tab__button').click(function() {
    $('#contact__private-block').hide();
    $('#contact__pro-block').show();
    $('.contact__tab--private').removeClass('active');
    $(this).parent('.contact__tab--pro').addClass('active');
  });

  $(window).keydown(function(event){
    if(event.keyCode == 13) {
      event.preventDefault();
      return false;
    }
  });

  initDatePicker()

});
