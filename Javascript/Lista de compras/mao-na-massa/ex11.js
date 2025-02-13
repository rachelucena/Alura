
var label = document.querySelector('.checkbox-label');

label.addEventListener('click', function(event) {

 var checkboxInput = document.querySelector('.input-checkbox');

  var customCheckbox = document.querySelector('.custom-checkbox');

 if (checkboxInput.checked) {

  customCheckbox.classList.add('checked');

  } else {

  customCheckbox.classList.remove('checked');

  }

  });