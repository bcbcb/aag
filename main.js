$(document).ready(function () {
  var MIN_MORTGAGE = 50000;
  var MAX_MORTGAGE = 950000;
  var MORTGAGE_INCREMENT = 50000;
  var MIN_AGE = 62;
  var MAX_AGE = 99;

  var form = $('form');
  var step1 = $('.step1');
  var step2 = $('.step2');
  var step3 = $('.step3');
  var button = $('.button');
  var homeValueSelect = $('[name=homeValue]');
  var mortgageSelect = $('[name=mortgage]');
  var zipInput = $('[name=zip]');
  var ageSelect = $('[name=age]');
  var nameInput = $('[name=name]');
  var addressInput = $('[name=address]');
  var phoneInput = $('[name=phone]');

  for (var i = MIN_MORTGAGE; i <= MAX_MORTGAGE; i = i + MORTGAGE_INCREMENT) {
    homeValueSelect
      .append($('<option></option>')
      .val(i)
      .html('$' + i/1000 + 'k'));
  };

  for (var i = MIN_MORTGAGE; i <= MAX_MORTGAGE; i = i + MORTGAGE_INCREMENT) {
    mortgageSelect
      .append($('<option></option>')
      .val(i)
      .html('$' + i/1000 + 'k'));
  };

  for (var i = MIN_AGE; i <= MAX_AGE; i++) {
    ageSelect
      .append($('<option></option>')
      .val(i)
      .html(i));
  };

  function validateRequired (element, message) {
    if (element.val()) {
      return true;
    } else {
      alert(message)
      element.focus();
      return false;
    }
  }

  function homeValueIsValid () {
    return validateRequired(homeValueSelect, 'Home value is required');
  }
  function mortgageIsValid () {
    return validateRequired(mortgageSelect, 'Mortgage balance is required');
  }
  function zipIsValid () {
    return validateRequired(zipInput, 'Property zip code is required');
  }
  function ageIsValid () {
    return validateRequired(ageSelect, 'Age is required');
  }
  function addressIsValid () {
    return validateRequired(addressInput, 'Street address is required');
  }
  function phoneIsValid () {
    return validateRequired(phoneInput, 'Phone number is required');
  }

  function nameIsValid () {
    var names = nameInput.val().trim().split(' ');
    if (names.length > 1) {
      return true;
    } else {
      alert('First name and last name is required');
      nameInput.focus();
      return false;
    };
  }

  function handleSubmit (e) {
    e.preventDefault();

    if (step1.css('display') !== 'none'
      && homeValueIsValid()
      && mortgageIsValid()
      && zipIsValid()
    ) {
      step1.hide();
      step2.show();
    }

    else if (step2.css('display') !== 'none'
      && ageIsValid()
      && nameIsValid()
      && addressIsValid()
    ) {
      step2.hide();
      button.html('Submit');
      step3.show();
    }

    else if (step3.css('display') !== 'none'
      && phoneIsValid()
    ) {
      console.log('success');
      console.log(form.serializeArray());
    };

  };


  button.click(handleSubmit)

});
